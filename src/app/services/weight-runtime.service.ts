import { eOrigins, eClasses, iSynergy } from 'src/app/interface/interfaces';
import { Differences, iChampion, iComposition } from './../interface/interfaces';
import { Injectable } from '@angular/core';
import { ChampionsCollectionService } from './champions-collection.service';
import { BehaviorSubject } from 'rxjs';
import { SAME_SYNERGY_WEIGHTS, SYNERGY_WEIGHTS } from '../interface/weights';
import { COMP_TIERLIST, iCompositionTierList } from '../interface/compos';

@Injectable({
  providedIn: 'root'
})
export class WeightRuntimeService {

  public pool$: BehaviorSubject<iChampion[]> = new BehaviorSubject<iChampion[]>(this.initPool());
  public get pool(): iChampion[] {
    return this.pool$.getValue();
  }
  public set pool(value:iChampion[]) {
    this.pool$.next(value);
  }

  constructor() { }

  public initPool(): iChampion[] {
    return Array.from(ChampionsCollectionService.championPool.values());
  }

  public sortPool() {
    this.pool.sort((a, b) => {
      if(a.totalWeight > b.totalWeight) return -1;
      if(a.totalWeight < b.totalWeight) return 1;
      return 0;
    });
  }

  public resetPoolWeights() {
    this.pool.forEach(c => {
      c.totalWeight = c.baseWeight
      c.sameSynergyWeight = 0
      c.newSynergyWeight = 0
      c.potentialSynergyPoints = 0
    });
  }

  public getSuggestedCompositions(composition: iComposition):iCompositionTierList[] {
    let weighedComps = COMP_TIERLIST;

    weighedComps.forEach(tierListComposition => {
      tierListComposition.points = 0;
      tierListComposition.champions.forEach(championOfTierList => {
        const champion = this.getChampionFromPool(championOfTierList);
        if(composition.champions.includes(champion)) {
          tierListComposition.points += tierListComposition.weight * champion.baseWeight;
        }
      });
    });

    weighedComps.sort((a,b) => {
      if(a.points > b.points) return -1;
      if(a.points < b.points) return 1;
      return 0;
    });

    return weighedComps;
  }

  public getChampionFromPool(name: string): iChampion {
    let champion = this.pool.find(c => c.name === name)
    if(champion !== undefined) {
      return champion;
    } else{
      throw new Error('Champion non trouvé dans le pool: ' + name);
    }
  }

  public refreshPool(composition: iComposition, level: number) {
    this.resetPoolWeights();

    composition.champions.forEach(champion => {
      COMP_TIERLIST.forEach(tierlist => {

        // Si le champion existe dans une composition
        if(tierlist.champions.includes(champion.name)) {

          // On parcours les champions de la composition
          tierlist.champions.forEach(name => {

            // On récupère le champion du pool
            const poolChampion = this.getChampionFromPool(name);

            // Si pas dans la compo
            if(!composition.champions.includes(poolChampion)) {
              let bonusPoints = tierlist.weight / 50;

              // Si c'est le carry, on ajoute des points
              if(tierlist.carry === poolChampion.name) {
                bonusPoints *= 2;
              }              
              // Si c'est le tank, on ajoute des points
              if(tierlist.tank === poolChampion.name) {
                bonusPoints *= 1.5;
              }             
              // Si c'est le hard carry, on ajoute des points
              if(tierlist.carryLate === poolChampion.name) {
                bonusPoints *= 3;
              }        
              // Si c'est l'option lvl 9, on ajoute des points
              if(tierlist.carryLate === poolChampion.name) {
                bonusPoints *= 1.3;
              }

              // On ajoute le poids de la compo dans les points
              poolChampion.totalWeight += poolChampion.baseWeight * bonusPoints;
              poolChampion.tierlistPoints = bonusPoints;
            }
          });
        }
      });
    });

    this.pool.forEach(champion => {
      

  
      // Calculation without compositions
      let differences = this.getSynergyDifferences(champion, composition);   
      let potentialSynergyPoints = 0;
      
      // Check si le champion existe déjà dans la compo
      if(!composition.champions.includes(champion)) {
        potentialSynergyPoints = this.getPotentialSynergyPoints(this.getInactiveSynergies(composition), champion);
      } 
      // Check if a dragon is in comp
      if(composition.hasDragon() && champion.classes.includes(eClasses.DRAGON)) {
      } else {
        champion.totalWeight += (potentialSynergyPoints + this.getNewSynergyPoints(differences, champion) + this.getCurrentSynergiesPoints(composition, champion)) * this.getRarityPoints(champion);
      }


    });

    this.sortPool();
  }

  public getPotentialSynergyPoints(inactiveSynergies: iSynergy[], champion: iChampion):number {
    let potentialSynergyPoints = 0;
    inactiveSynergies.forEach((synergy) => {
      if(champion.origin.includes((<any>eOrigins)[synergy.name]) || champion.classes.includes((<any>eClasses)[synergy.name])) {
        const diffKey = synergy.name+'_'+synergy.nextThreshold;
        // On va chercher le coeff différentiel
        const coeff =  Math.log(SYNERGY_WEIGHTS.get(diffKey)!) / Math.log(10000);

        if(coeff !== undefined) {
          potentialSynergyPoints += coeff * champion.baseWeight;
          champion.potentialSynergyPoints += coeff * champion.baseWeight; 
        }
      }
    });
    return potentialSynergyPoints;
  }

  public getRarityPoints(champion: iChampion): number {
    return champion.rarity* 1/50 + 1;
  }

  public getCurrentSynergiesPoints(composition: iComposition, champion: iChampion, checkComp: boolean = true): number {
    // Check si le champion existe déjà dans la compo
    if(composition.champions.includes(champion) && checkComp) {
      return 0;
    } 

    let pointsForHavingSynergy = 0;

    composition.synergies.filter(s => s.activated).forEach((synergy) => {
      if(champion.origin.includes((<any>eOrigins)[synergy.name]) || champion.classes.includes((<any>eClasses)[synergy.name])) {
        // On build la key pour chercher le coeff
        const diffKey = synergy.name+'_'+synergy.currentThreshold;
        // On va chercher le coeff différentiel
        const coeff =  Math.log(SYNERGY_WEIGHTS.get(diffKey)!) / Math.log(1000);

        if(coeff !== undefined) {
          pointsForHavingSynergy += coeff * champion.baseWeight;
          champion.sameSynergyWeight += coeff * champion.baseWeight; 
        }
      }
    });

    return pointsForHavingSynergy;
  }

  public getNewSynergyPoints(differences: Differences, champion: iChampion): number {
    
    let pointsForAddingSynergy = 0;
    if(differences.length > 0) {
      differences.forEach(difference => {
        // On build la key pour chercher le coeff
        const diffKey = difference.name+'_'+difference.currentThreshold;
        // On va chercher le coeff différentiel
        const coeff =  Math.log(SYNERGY_WEIGHTS.get(diffKey)!) / Math.log(1000);

        if(coeff !== undefined) {
          pointsForAddingSynergy += coeff * champion.baseWeight;
          champion.newSynergyWeight += coeff * champion.baseWeight; 
        }
      });
    }    

    return pointsForAddingSynergy;
  } 

  public getInactiveSynergies(composition: iComposition): iSynergy[] {
    return composition.synergies.filter(s => !s.activated);
  }
  
  public getSynergyDifferences(champion: iChampion, composition: iComposition): Differences {

    // Check si le champion existe déjà dans la compo
    if(composition.champions.includes(champion)) {
      return [];
    } 

    // On créé une compo de comparaison
    let tempComposition: iComposition = cloneable.deepCopy(composition);
    
    // On ajoute le champion dans la compo temporaire
    tempComposition.addChampion(champion);     

    // On calcule ici les différences de synergies
    const differences = tempComposition.synergies.filter((newSynergy) =>  {
        // Si la synergy existait avant
        const oldSynergy = composition.synergies.find((syn)=> syn.name === newSynergy.name);
        if(oldSynergy !== undefined) {
          // on vérifie que le threshold a changé
          if(oldSynergy.nextThreshold !== newSynergy.nextThreshold) {
            return true;
          }
        // Sinon
        } else {
          // On vérifie que la nouvelle synergy est activé
          if(newSynergy.activated) {
            return true;
          }
        }
        return false;
    })
    // On vire toutes les synergies inactives
    .filter((diff) => { return diff.activated });

    return differences;
  }

}



export class cloneable {
  public static deepCopy<T>(source: T): T {
    return Array.isArray(source)
    ? source.map(item => this.deepCopy(item))
    : source instanceof Date
    ? new Date(source.getTime())
    : source && typeof source === 'object'
          ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
             Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(source, prop)!);
             o[prop] = this.deepCopy((source as { [key: string]: any })[prop]);
             return o;
          }, Object.create(Object.getPrototypeOf(source)))
    : source as T;
  }
}

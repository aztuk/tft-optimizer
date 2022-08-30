import { eOrigins, eClasses } from 'src/app/interface/interfaces';
import { Differences, iChampion, iComposition } from './../interface/interfaces';
import { Injectable } from '@angular/core';
import { ChampionsCollectionService } from './champions-collection.service';
import { BehaviorSubject } from 'rxjs';
import { SYNERGY_WEIGHTS } from '../interface/weights';

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
    this.pool.forEach(c => c.totalWeight = 0);
  }

  // Sets the value for champions inside the comp
  public setCompositionValue(composition: iComposition) {
    composition.champions.forEach(champion => {
        champion.totalWeight = champion.baseWeight + this.getCurrentSynergiesPoints(composition, champion, false);
    });
  }

  public refreshPool(composition: iComposition, level: number) {
    this.resetPoolWeights();

    this.pool.forEach(champion => {
      let differences = this.getSynergyDifferences(champion, composition);  
      // Check if a dragon is in comp
      if(composition.hasDragon() && champion.classes.includes(eClasses.DRAGON)) {
        champion.totalWeight = champion.baseWeight;
      } else {
        champion.totalWeight = champion.baseWeight + this.getNewSynergyPoints(differences, champion) + this.getCurrentSynergiesPoints(composition, champion);
      }

    });

    this.sortPool();
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
        const coeff = SYNERGY_WEIGHTS.get(diffKey)!;

        if(coeff !== undefined) {
          pointsForHavingSynergy += coeff * champion.baseWeight / 3;
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
        const coeff = SYNERGY_WEIGHTS.get(diffKey)!;

        if(coeff !== undefined) {
          pointsForAddingSynergy += coeff * champion.baseWeight;
        }
      });
    }    

    return pointsForAddingSynergy;
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

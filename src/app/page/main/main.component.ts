import { eClasses, eOrigins } from 'src/app/interface/interfaces';
import { Composition } from './../../classes/composition';
import { SynergyCollectionService } from './../../services/synergy-collection.service';
import { iChampion, iComposition, iEmblem, eRarity } from './../../interface/interfaces';
import { WeightRuntimeService } from './../../services/weight-runtime.service';
import { ChampionsCollectionService } from './../../services/champions-collection.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'por-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public champions!:iChampion[]; 
  public emblemsPool: iEmblem[] = SynergyCollectionService.getAllSynergies();
  public composition:iComposition = new Composition();
  public currentLevel: number = 10;
  public poolFilter: eRarity[] = [eRarity.POOR, eRarity.COMMON];
  public poolSynergyFilter: (eClasses|eOrigins|undefined);

  constructor(private weight: WeightRuntimeService) {
    this.weight.pool$.subscribe((v) => {
      this.champions = v;
    });
   }

  ngOnInit(): void {
    this.weight.refreshPool(this.composition, this.currentLevel);
  }

  applyPoolFilter(nb: eRarity) {
    if(this.poolFilter.includes(nb)) {
      this.poolFilter.splice(this.poolFilter.indexOf(nb), 1);
    } else {
      this.poolFilter.push(nb);
    }
  }

  applySynergyFilter(filter: eClasses|eOrigins) {
    if(this.poolSynergyFilter === filter) {
      this.poolSynergyFilter = undefined;
    } else {
      this.poolSynergyFilter = filter;
    }
  }

  hasFilter(nb: eRarity):boolean {
    return this.poolFilter.includes(nb);
  }

  getFilteredChampions():iChampion[] {
    return this.champions.filter((c) => this.poolFilter.includes(c.rarity)).filter((c) => this.poolSynergyFilter === undefined || (c.classes.includes(this.poolSynergyFilter as eClasses) || c.origin.includes(this.poolSynergyFilter as eOrigins)));
  }

  getCompValue():number {
    return this.composition.champions.reduce((prev, curr) => { return prev + curr.totalWeight }, 0);
  }
 
  // Should implement limite base on level
  addChampion(champion: iChampion) {
    this.composition.addChampion(champion);
    this.weight.refreshPool(this.composition, this.currentLevel);
    this.weight.setCompositionValue(this.composition);
  }

  // Should implement limite base on level
  removeChampion(index: number) {
    this.composition.removeChampion(index);
    this.weight.refreshPool(this.composition, this.currentLevel);
    this.weight.setCompositionValue(this.composition);
  }

  getEmblems(synergy: iEmblem): iEmblem[] {
    return this.composition.emblems.filter(e => e === synergy);
  }

  addEmblem(emblem: iEmblem) {
    this.composition.addEmblem(emblem);
    this.weight.refreshPool(this.composition, this.currentLevel);
    this.weight.setCompositionValue(this.composition);
  }

  removeEmblem(emblem: iEmblem) {
    this.composition.removeEmblem(this.composition.emblems.indexOf(emblem));
    this.weight.refreshPool(this.composition, this.currentLevel);
    this.weight.setCompositionValue(this.composition);
  }

  numberOfEmblem(emblem: string) {
    return new Array(this.composition.emblems.filter(e => e === emblem).length)
  }

  activeSynergies() {
    return this.composition.synergies.filter(s => s.activated);
  }

  inactiveSynergies() {
    return this.composition.synergies.filter(s => !s.activated);
  }

  articialArray(nb: number) {
    return new Array(nb);
  }

  levelChange(change: number) {
    this.currentLevel += change;

    if(this.currentLevel <= 1) {
      this.currentLevel = 1;
    } else if(this.currentLevel > 10) {
      this.currentLevel = 10;
    }
    
    this.weight.refreshPool(this.composition, this.currentLevel);
  }

}

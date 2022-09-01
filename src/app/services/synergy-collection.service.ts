import { Injectable } from '@angular/core';
import { eOrigins,eClasses } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SynergyCollectionService {

  static synergies = new Map<eOrigins|eClasses, number[]>([
    // ORIGINS 
    [eOrigins.ASTRAL, [3,6,9]],
    [eOrigins.GUILD, [1,2,3,4,5,6,7]],
    [eOrigins.JADE, [3,6,9,12]],
    [eOrigins.MIRAGE, [2,4,6,8]],
    [eOrigins.RAGEWING, [3,6,9]],
    [eOrigins.REVEL, [2,3,4,5]],
    [eOrigins.SCALESCORN, [2,4,6]],
    [eOrigins.SHIMMERSCALE, [3,5,7,9]],
    [eOrigins.TEMPEST, [2,4,6,8]],
    [eOrigins.TRAINER, [2,3]],
    [eOrigins.WHISPERS, [2,4,6,8]],
    // CLASSES 
    [eClasses.ASSASSIN, [2,4,6]],
    [eClasses.BARD, [1]],
    [eClasses.BRUISER, [2,4,6,8]],
    [eClasses.CANNONEER, [2,3,4,5]],
    [eClasses.CAVALIER, [2,3,4,5]],
    [eClasses.DRAGONMANCER, [3,6,9]],
    [eClasses.DRAGON, [1]],
    [eClasses.EVOKER, [2,4,6]],
    [eClasses.GUARDIAN, [2,4,6]],
    [eClasses.LEGEND, [3]],
    [eClasses.MAGE, [3,5,7,9]],
    [eClasses.MYSTIC, [2,3,4,5]],
    [eClasses.SHAPESHIFTER, [2,4,6]],
    [eClasses.SWIFTSHOT, [2,4,6]],
    [eClasses.WARRIOR, [2,4,6]],
  ])

  constructor() {
  }

  static getAllSynergies():any[] {
    const origins = Object.values(eOrigins).filter(value => isNaN(Number(value)));
    const classes = Object.values(eClasses).filter(value => isNaN(Number(value)));

    return [...origins, ...classes];
  }
}

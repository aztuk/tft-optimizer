import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChampionMap, eClasses, eOrigins, eRarity } from '../interface/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ChampionsCollectionService {
  
  static championPool$: BehaviorSubject<ChampionMap> = new BehaviorSubject(ChampionsCollectionService.initializePlayerDeck() as ChampionMap);
  static get championPool():ChampionMap {
    return this.championPool$.getValue();
  }
  static set championPool(value: ChampionMap) {
    this.championPool$.next(value);
  }

  constructor() { }

  static initializePlayerDeck():ChampionMap {
    let champions = new Map();

    champions.set('Aatrox', {
      name: 'Aatrox',
      image: 'https://rerollcdn.com/characters/Skin/7/Aatrox.png',
      baseWeight: 0.43,
      totalWeight: 0,
      origin: [eOrigins.SHIMMERSCALE],
      classes: [eClasses.WARRIOR],
      rarity: eRarity.POOR
    });

    champions.set('Anivia', {
      name: 'Anivia',
      image: 'https://rerollcdn.com/characters/Skin/7/Anivia.png',
      baseWeight: 1.96,
      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.EVOKER,eClasses.LEGEND],
      rarity: eRarity.RARE
    });

    champions.set('Ao Shin', {
      name: 'Ao Shin',
      image: 'https://rerollcdn.com/characters/Skin/7/AoShin.png',
      baseWeight: 6.17,
      totalWeight: 0,
      origin: [eOrigins.TEMPEST, eOrigins.TEMPEST, eOrigins.TEMPEST],
      classes: [eClasses.DRAGON],
      rarity: eRarity.DRAGON_LEGENDARY
    });

    champions.set('Ashe', {
      name: 'Ashe',
      image: 'https://rerollcdn.com/characters/Skin/7/Ashe.png',
      baseWeight: 1.11,
      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.DRAGONMANCER, eClasses.SWIFTSHOT],
      rarity: eRarity.COMMON
    });

    champions.set('Aurelion Sol', {
      name: 'Aurelion Sol',
      image: 'https://rerollcdn.com/characters/Skin/7/AurelionSol.png',
      baseWeight: 6.54,
      totalWeight: 0,
      origin: [eOrigins.ASTRAL, eOrigins.ASTRAL, eOrigins.ASTRAL],
      classes: [eClasses.EVOKER,eClasses.DRAGON],
      rarity: eRarity.DRAGON_LEGENDARY
    });

    champions.set('Bard', {
      name: 'Bard',
      image: 'https://rerollcdn.com/characters/Skin/7/Bard.png',
      baseWeight: 5.41,
      totalWeight: 0,
      origin: [eOrigins.GUILD],
      classes: [eClasses.MYSTIC, eClasses.BARD],
      rarity: eRarity.LEGENDARY
    });

    champions.set('Braum', {
      name: 'Braum',
      image: 'https://rerollcdn.com/characters/Skin/7/Braum.png',
      baseWeight: 1.31,
      totalWeight: 0,
      origin: [eOrigins.SCALESCORN],
      classes: [eClasses.GUARDIAN],
      rarity: eRarity.COMMON
    });

    champions.set('Corki', {
      name: 'Corki',
      image: 'https://rerollcdn.com/characters/Skin/7/Corki.png',
      baseWeight: 2.77,
      totalWeight: 0,
      origin: [eOrigins.REVEL],
      classes: [eClasses.CANNONEER],
      rarity: eRarity.EPIC
    });

    champions.set('Daeja', {
      name: 'Daeja',
      image: 'https://rerollcdn.com/characters/Skin/7/Daeja.png',
      baseWeight: 4.2,
      totalWeight: 0,
      origin: [eOrigins.MIRAGE, eOrigins.MIRAGE, eOrigins.MIRAGE],
      classes: [eClasses.DRAGON],
      rarity: eRarity.DRAGON_EPIC
    });

    champions.set('Diana', {
      name: 'Diana',
      image: 'https://rerollcdn.com/characters/Skin/7/Diana.png',
      baseWeight: 1.65,
      totalWeight: 0,
      origin: [eOrigins.SCALESCORN],
      classes: [eClasses.ASSASSIN],
      rarity: eRarity.RARE
    });

    champions.set('Elise', {
      name: 'Elise',
      image: 'https://rerollcdn.com/characters/Skin/7/Elise.png',
      baseWeight: 1.78,
      totalWeight: 0,
      origin: [eOrigins.WHISPERS],
      classes: [eClasses.SHAPESHIFTER],
      rarity: eRarity.RARE
    });

    champions.set('Ezreal', {
      name: 'Ezreal',
      image: 'https://rerollcdn.com/characters/Skin/7/Ezreal.png',
      baseWeight: 0.49,
      totalWeight: 0,
      origin: [eOrigins.TEMPEST],
      classes: [eClasses.SWIFTSHOT],
      rarity: eRarity.POOR
    });

    champions.set('Gnar', {
      name: 'Gnar',
      image: 'https://rerollcdn.com/characters/Skin/7/Gnar.png',
      baseWeight: 1.37,
      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.SHAPESHIFTER],
      rarity: eRarity.COMMON
    });

    champions.set('Hecarim', {
      name: 'Hecarim',
      image: 'https://rerollcdn.com/characters/Skin/7/Hecarim.png',
      baseWeight: 2.85,
      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.CAVALIER],
      rarity: eRarity.EPIC
    });

    champions.set('Heimerdinger', {
      name: 'Heimerdinger',
      image: 'https://rerollcdn.com/characters/Skin/7/Heimerdinger.png',
      baseWeight: 0.37,
      totalWeight: 0,
      origin: [eOrigins.TRAINER],
      classes: [eClasses.MAGE],
      rarity: eRarity.POOR
    });

    champions.set('Idas', {
      name: 'Idas',
      image: 'https://rerollcdn.com/characters/Skin/7/Idas.png',
      baseWeight: 4.17,
      totalWeight: 0,
      origin: [eOrigins.SHIMMERSCALE, eOrigins.SHIMMERSCALE, eOrigins.SHIMMERSCALE],
      classes: [eClasses.GUARDIAN, eClasses.DRAGON],
      rarity: eRarity.DRAGON_EPIC
    });

    champions.set('Illaoi', {
      name: 'Illaoi',
      image: 'https://rerollcdn.com/characters/Skin/7/Illaoi.png',
      baseWeight: 2.13,
      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.BRUISER],
      rarity: eRarity.RARE
    });

    champions.set('Jinx', {
      name: 'Jinx',
      image: 'https://rerollcdn.com/characters/Skin/7/Jinx.png',
      baseWeight: 1.05,
      totalWeight: 0,
      origin: [eOrigins.REVEL],
      classes: [eClasses.CANNONEER],
      rarity: eRarity.COMMON
    });

    champions.set('Karma', {
      name: 'Karma',
      image: 'https://rerollcdn.com/characters/Skin/7/Karma.png',
      baseWeight: .5,
      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.DRAGONMANCER],
      rarity: eRarity.POOR
    });

    champions.set('Kayn', {
      name: 'Kayn',
      image: 'https://rerollcdn.com/characters/Skin/7/Kayn.png',
      baseWeight: 1.05,
      totalWeight: 0,
      origin: [eOrigins.SHIMMERSCALE],
      classes: [eClasses.ASSASSIN],
      rarity: eRarity.COMMON
    });

    champions.set('Lee Sin', {
      name: 'Lee Sin',
      image: 'https://rerollcdn.com/characters/Skin/7/LeeSin.png',
      baseWeight: 2.05,
      totalWeight: 0,
      origin: [eOrigins.TEMPEST],
      classes: [eClasses.DRAGONMANCER],
      rarity: eRarity.RARE
    });

    champions.set('Leona', {
      name: 'Leona',
      image: 'https://rerollcdn.com/characters/Skin/7/Leona.png',
      baseWeight: 0.47,
      totalWeight: 0,
      origin: [eOrigins.MIRAGE],
      classes: [eClasses.GUARDIAN],
      rarity: eRarity.POOR
    });


    champions.set('Lillia', {
      name: 'Lillia',
      image: 'https://rerollcdn.com/characters/Skin/7/Lillia.png',
      baseWeight: 1.1,
      totalWeight: 0,
      origin: [eOrigins.SCALESCORN],
      classes: [eClasses.CAVALIER, eClasses.MAGE],
      rarity: eRarity.COMMON
    });

    champions.set('Lulu', {
      name: 'Lulu',
      image: 'https://rerollcdn.com/characters/Skin/7/Lulu.png',
      baseWeight: 1.9,
      totalWeight: 0,
      origin: [eOrigins.TRAINER],
      classes: [eClasses.MYSTIC, eClasses.EVOKER],
      rarity: eRarity.RARE
    });

    champions.set('Nami', {
      name: 'Nami',
      image: 'https://rerollcdn.com/characters/Skin/7/Nami.png',
      baseWeight: 1.1,
      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.MYSTIC, eClasses.MAGE],
      rarity: eRarity.COMMON
    });

    champions.set('Neeko', {
      name: 'Neeko',
      image: 'https://rerollcdn.com/characters/Skin/7/Neeko.png',
      baseWeight: 3.45,
      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.SHAPESHIFTER],
      rarity: eRarity.EPIC
    });

    champions.set('Nidalee', {
      name: 'Nidalee',
      image: 'https://rerollcdn.com/characters/Skin/7/Nidalee.png',
      baseWeight: 0.46,
      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.SHAPESHIFTER],
      rarity: eRarity.POOR
    });
    
    champions.set('Nunu', {
      name: 'Nunu',
      image: 'https://rerollcdn.com/characters/Skin/7/Nunu.png',
      baseWeight: 2,
      totalWeight: 0,
      origin: [eOrigins.MIRAGE],
      classes: [eClasses.CAVALIER],
      rarity: eRarity.RARE
    });

    champions.set('Olaf', {
      name: 'Olaf',
      image: 'https://rerollcdn.com/characters/Skin/7/Olaf.png',
      baseWeight: 1.63,
      totalWeight: 0,
      origin: [eOrigins.SCALESCORN],
      classes: [eClasses.BRUISER, eClasses.WARRIOR],
      rarity: eRarity.RARE
    });

    champions.set('Ornn', {
      name: 'Ornn',
      image: 'https://rerollcdn.com/characters/Skin/7/Ornn.png',
      baseWeight: 3.24,
      totalWeight: 0,
      origin: [eOrigins.TEMPEST],
      classes: [eClasses.BRUISER, eClasses.LEGEND],
      rarity: eRarity.EPIC
    });

    champions.set('Pyke', {
      name: 'Pyke',
      image: 'https://rerollcdn.com/characters/Skin/7/Pyke.png',
      baseWeight: 4.21,
      totalWeight: 0,
      origin: [eOrigins.WHISPERS],
      classes: [eClasses.ASSASSIN],
      rarity: eRarity.LEGENDARY
    });

    champions.set('Qiyana', {
      name: 'Qiyana',
      image: 'https://rerollcdn.com/characters/Skin/7/Qiyana.png',
      baseWeight: 1,
      totalWeight: 0,
      origin: [eOrigins.TEMPEST],
      classes: [eClasses.ASSASSIN],
      rarity: eRarity.COMMON
    });

    champions.set('Ryze', {
      name: 'Ryze',
      image: 'https://rerollcdn.com/characters/Skin/7/Ryze.png',
      baseWeight: 1.78,
      totalWeight: 0,
      origin: [eOrigins.GUILD],
      classes: [eClasses.MAGE],
      rarity: eRarity.RARE
    });

    champions.set('Sejuani', {
      name: 'Sejuani',
      image: 'https://rerollcdn.com/characters/Skin/7/Sejuani.png',
      baseWeight: 0.44,
      totalWeight: 0,
      origin: [eOrigins.GUILD],
      classes: [eClasses.CAVALIER],
      rarity: eRarity.POOR
    });

    champions.set('Senna', {
      name: 'Senna',
      image: 'https://rerollcdn.com/characters/Skin/7/Senna.png',
      baseWeight: 0.48,
      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.CANNONEER],
      rarity: eRarity.POOR
    });

    champions.set('Sett', {
      name: 'Sett',
      image: 'https://rerollcdn.com/characters/Skin/7/Sett.png',
      baseWeight: .49,
      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.DRAGONMANCER],
      rarity: eRarity.POOR
    });

    champions.set('Shen', {
      name: 'Shen',
      image: 'https://rerollcdn.com/characters/Skin/7/Shen.png',
      baseWeight: 1.2,
      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.BRUISER, eClasses.WARRIOR],
      rarity: eRarity.COMMON
    });

    champions.set('Shi Oh Yu', {
      name: 'Shi Oh Yu',
      image: 'https://rerollcdn.com/characters/Skin/7/ShiOhYu.png',
      baseWeight: 4.36,
      totalWeight: 0,
      origin: [eOrigins.JADE, eOrigins.JADE, eOrigins.JADE],
      classes: [eClasses.MYSTIC, eClasses.DRAGON],
      rarity: eRarity.DRAGON_EPIC
    });

    champions.set('Shyvana', {
      name: 'Shyvana',
      image: 'https://rerollcdn.com/characters/Skin/7/Shyvana.png',
      baseWeight: 6.94,
      totalWeight: 0,
      origin: [eOrigins.RAGEWING, eOrigins.RAGEWING, eOrigins.RAGEWING],
      classes: [eClasses.SHAPESHIFTER, eClasses.DRAGON],
      rarity: eRarity.DRAGON_LEGENDARY
    });

    champions.set('Skarner', {
      name: 'Skarner',
      image: 'https://rerollcdn.com/characters/Skin/7/Skarner.png',
      baseWeight: 0.47,
      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.BRUISER],
      rarity: eRarity.POOR
    });

    champions.set('Sona', {
      name: 'Sona',
      image: 'https://rerollcdn.com/characters/Skin/7/Sona.png',
      baseWeight: 3,
      totalWeight: 0,
      origin: [eOrigins.REVEL],
      classes: [eClasses.EVOKER],
      rarity: eRarity.EPIC
    });


    champions.set('Soraka', {
      name: 'Soraka',
      image: 'https://rerollcdn.com/characters/Skin/7/Soraka.png',
      baseWeight: 4.63,
      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.STARCALLER],
      rarity: eRarity.LEGENDARY
    });

    champions.set('Swain', {
      name: 'Swain',
      image: 'https://rerollcdn.com/characters/Skin/7/Swain.png',
      baseWeight: 1.62,
      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.DRAGONMANCER,eClasses.SHAPESHIFTER],
      rarity: eRarity.RARE
    });

    champions.set('Syfen', {
      name: 'Syfen',
      image: 'https://rerollcdn.com/characters/Skin/7/Syfen.png',
      baseWeight: 4.63,
      totalWeight: 0,
      origin: [eOrigins.WHISPERS,eOrigins.WHISPERS,eOrigins.WHISPERS],
      classes: [eClasses.BRUISER,eClasses.DRAGON],
      rarity: eRarity.DRAGON_EPIC
    });

    champions.set('Sylas', {
      name: 'Sylas',
      image: 'https://rerollcdn.com/characters/Skin/7/Sylas.png',
      baseWeight: 1.97,
      totalWeight: 0,
      origin: [eOrigins.WHISPERS],
      classes: [eClasses.BRUISER,eClasses.MAGE],
      rarity: eRarity.RARE
    });

    champions.set('Tahm Kench', {
      name: 'Tahm Kench',
      image: 'https://rerollcdn.com/characters/Skin/7/TahmKench.png',
      baseWeight: 0.46,
      totalWeight: 0,
      origin: [eOrigins.REVEL],
      classes: [eClasses.BRUISER],
      rarity: eRarity.POOR
    });

    champions.set('Talon', {
      name: 'Talon',
      image: 'https://rerollcdn.com/characters/Skin/7/Talon.png',
      baseWeight: 2.98,
      totalWeight: 0,
      origin: [eOrigins.GUILD],
      classes: [eClasses.ASSASSIN],
      rarity: eRarity.EPIC
    });

    champions.set('Taric', {
      name: 'Taric',
      image: 'https://rerollcdn.com/characters/Skin/7/Taric.png',
      baseWeight: .47,
      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.GUARDIAN],
      rarity: eRarity.POOR
    });

    champions.set('Thresh', {
      name: 'Thresh',
      image: 'https://rerollcdn.com/characters/Skin/7/Thresh.png',
      baseWeight: 1.2,
      totalWeight: 0,
      origin: [eOrigins.WHISPERS],
      classes: [eClasses.GUARDIAN],
      rarity: eRarity.COMMON
    });

    champions.set('Tristana', {
      name: 'Tristana',
      image: 'https://rerollcdn.com/characters/Skin/7/Tristana.png',
      baseWeight: 1.3,
      totalWeight: 0,
      origin: [eOrigins.TRAINER],
      classes: [eClasses.CANNONEER],
      rarity: eRarity.COMMON
    });

    champions.set('Twitch', {
      name: 'Twitch',
      image: 'https://rerollcdn.com/characters/Skin/7/Twitch.png',
      baseWeight: 1.2,
      totalWeight: 0,
      origin: [eOrigins.GUILD],
      classes: [eClasses.SWIFTSHOT],
      rarity: eRarity.COMMON
    });

    champions.set('Varus', {
      name: 'Varus',
      image: 'https://rerollcdn.com/characters/Skin/7/Varus.png',
      baseWeight: 1.75,
      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.SWIFTSHOT],
      rarity: eRarity.RARE
    });

    champions.set('Vladimir', {
      name: 'Vladimir',
      image: 'https://rerollcdn.com/characters/Skin/7/Vladimir.png',
      baseWeight: .42,
      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.MAGE],
      rarity: eRarity.POOR
    });

    champions.set('Volibear', {
      name: 'Volibear',
      image: 'https://rerollcdn.com/characters/Skin/7/Volibear.png',
      baseWeight: 2.05,
      totalWeight: 0,
      origin: [eOrigins.SHIMMERSCALE],
      classes: [eClasses.DRAGONMANCER, eClasses.LEGEND],
      rarity: eRarity.RARE
    });

    champions.set('Xayah', {
      name: 'Xayah',
      image: 'https://rerollcdn.com/characters/Skin/7/Xayah.png',
      baseWeight: 2.62,
      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.SWIFTSHOT],
      rarity: eRarity.EPIC
    });

    champions.set('Yasuo', {
      name: 'Yasuo',
      image: 'https://rerollcdn.com/characters/Skin/7/Yasuo.png',
      baseWeight: 5.34,
      totalWeight: 0,
      origin: [eOrigins.MIRAGE],
      classes: [eClasses.DRAGONMANCER,eClasses.WARRIOR],
      rarity: eRarity.LEGENDARY
    });
    champions.set('Yone', {
      name: 'Yone',
      image: 'https://rerollcdn.com/characters/Skin/7/Yone.png',
      baseWeight: 1.44,
      totalWeight: 0,
      origin: [eOrigins.MIRAGE],
      classes: [eClasses.WARRIOR],
      rarity: eRarity.COMMON
    });
    champions.set('Zoe', {
      name: 'Zoe',
      image: 'https://rerollcdn.com/characters/Skin/7/Zoe.png',
      baseWeight: 4.55,
      totalWeight: 0,
      origin: [eOrigins.SHIMMERSCALE],
      classes: [eClasses.MAGE, eClasses.SPELLTHIEF],
      rarity: eRarity.LEGENDARY
    });

    return champions;
  }
}

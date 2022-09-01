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
      baseWeight: 1,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.SHIMMERSCALE],
      classes: [eClasses.WARRIOR],
      rarity: eRarity.POOR
    });
    champions.set('Vladimir', {
      name: 'Vladimir',
      image: 'https://rerollcdn.com/characters/Skin/7/Vladimir.png',
      baseWeight: 1.16,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.MAGE],
      rarity: eRarity.POOR
    });
    champions.set('Taric', {
      name: 'Taric',
      image: 'https://rerollcdn.com/characters/Skin/7/Taric.png',
      baseWeight: 1.28,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.GUARDIAN],
      rarity: eRarity.POOR
    });
    champions.set('Tahm Kench', {
      name: 'Tahm Kench',
      image: 'https://rerollcdn.com/characters/Skin/7/TahmKench.png',
      baseWeight: 1.36,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.REVEL],
      classes: [eClasses.BRUISER],
      rarity: eRarity.POOR
    });
    champions.set('Skarner', {
      name: 'Skarner',
      image: 'https://rerollcdn.com/characters/Skin/7/Skarner.png',
      baseWeight: 1.12,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.BRUISER],
      rarity: eRarity.POOR
    });
    champions.set('Sejuani', {
      name: 'Sejuani',
      image: 'https://rerollcdn.com/characters/Skin/7/Sejuani.png',
      baseWeight: 1.58,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.GUILD],
      classes: [eClasses.CAVALIER],
      rarity: eRarity.POOR
    });
    champions.set('Nidalee', {
      name: 'Nidalee',
      image: 'https://rerollcdn.com/characters/Skin/7/Nidalee.png',
      baseWeight: 1.1,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.SHAPESHIFTER],
      rarity: eRarity.POOR
    });
    champions.set('Leona', {
      name: 'Leona',
      image: 'https://rerollcdn.com/characters/Skin/7/Leona.png',
      baseWeight: 1.14,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.MIRAGE],
      classes: [eClasses.GUARDIAN],
      rarity: eRarity.POOR
    });
    champions.set('Karma', {
      name: 'Karma',
      image: 'https://rerollcdn.com/characters/Skin/7/Karma.png',
      baseWeight: 1.3,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.DRAGONMANCER],
      rarity: eRarity.POOR
    });
    champions.set('Heimerdinger', {
      name: 'Heimerdinger',
      image: 'https://rerollcdn.com/characters/Skin/7/Heimerdinger.png',
      baseWeight: 1.72,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.TRAINER],
      classes: [eClasses.MAGE],
      rarity: eRarity.POOR
    });
    champions.set('Ezreal', {
      name: 'Ezreal',
      image: 'https://rerollcdn.com/characters/Skin/7/Ezreal.png',
      baseWeight: 1.22,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.TEMPEST],
      classes: [eClasses.SWIFTSHOT],
      rarity: eRarity.POOR
    });

    champions.set('Senna', {
      name: 'Senna',
      image: 'https://rerollcdn.com/characters/Skin/7/Senna.png',
      baseWeight: 1.02,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.CANNONEER],
      rarity: eRarity.POOR
    });

    champions.set('Sett', {
      name: 'Sett',
      image: 'https://rerollcdn.com/characters/Skin/7/Sett.png',
      baseWeight: 1.04,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.DRAGONMANCER],
      rarity: eRarity.POOR
    });
    champions.set('Qiyana', {
      name: 'Qiyana',
      image: 'https://rerollcdn.com/characters/Skin/7/Qiyana.png',
      baseWeight: 1.6,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.TEMPEST],
      classes: [eClasses.ASSASSIN],
      rarity: eRarity.COMMON
    });
    champions.set('Jinx', {
      name: 'Jinx',
      image: 'https://rerollcdn.com/characters/Skin/7/Jinx.png',
      baseWeight: 1.66,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.REVEL],
      classes: [eClasses.CANNONEER],
      rarity: eRarity.COMMON
    });

    champions.set('Kayn', {
      name: 'Kayn',
      image: 'https://rerollcdn.com/characters/Skin/7/Kayn.png',
      baseWeight: 1.08,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.SHIMMERSCALE],
      classes: [eClasses.ASSASSIN],
      rarity: eRarity.COMMON
    });


    champions.set('Nami', {
      name: 'Nami',
      image: 'https://rerollcdn.com/characters/Skin/7/Nami.png',
      baseWeight: 1.54,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.MYSTIC, eClasses.MAGE],
      rarity: eRarity.COMMON
    });
    champions.set('Lillia', {
      name: 'Lillia',
      image: 'https://rerollcdn.com/characters/Skin/7/Lillia.png',
      baseWeight: 1.36,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.SCALESCORN],
      classes: [eClasses.CAVALIER, eClasses.MAGE],
      rarity: eRarity.COMMON
    });

    champions.set('Ashe', {
      name: 'Ashe',
      image: 'https://rerollcdn.com/characters/Skin/7/Ashe.png',
      baseWeight: 1.42,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.DRAGONMANCER, eClasses.SWIFTSHOT],
      rarity: eRarity.COMMON
    });

    champions.set('Thresh', {
      name: 'Thresh',
      image: 'https://rerollcdn.com/characters/Skin/7/Thresh.png',
      baseWeight: 1.5,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.WHISPERS],
      classes: [eClasses.GUARDIAN],
      rarity: eRarity.COMMON
    });

    champions.set('Twitch', {
      name: 'Twitch',
      image: 'https://rerollcdn.com/characters/Skin/7/Twitch.png',
      baseWeight: 1.7,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.GUILD],
      classes: [eClasses.SWIFTSHOT],
      rarity: eRarity.COMMON
    });
    champions.set('Shen', {
      name: 'Shen',
      image: 'https://rerollcdn.com/characters/Skin/7/Shen.png',
      baseWeight: 1.32,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.BRUISER, eClasses.WARRIOR],
      rarity: eRarity.COMMON
    });
    champions.set('Tristana', {
      name: 'Tristana',
      image: 'https://rerollcdn.com/characters/Skin/7/Tristana.png',
      baseWeight: 1.8,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.TRAINER],
      classes: [eClasses.CANNONEER],
      rarity: eRarity.COMMON
    });

    champions.set('Braum', {
      name: 'Braum',
      image: 'https://rerollcdn.com/characters/Skin/7/Braum.png',
      baseWeight: 1.42,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.SCALESCORN],
      classes: [eClasses.GUARDIAN],
      rarity: eRarity.COMMON
    });
    champions.set('Gnar', {
      name: 'Gnar',
      image: 'https://rerollcdn.com/characters/Skin/7/Gnar.png',
      baseWeight: 1.64,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.SHAPESHIFTER],
      rarity: eRarity.COMMON
    });
    champions.set('Yone', {
      name: 'Yone',
      image: 'https://rerollcdn.com/characters/Skin/7/Yone.png',
      baseWeight: 1.38,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.MIRAGE],
      classes: [eClasses.WARRIOR],
      rarity: eRarity.COMMON
    });



    champions.set('Swain', {
      name: 'Swain',
      image: 'https://rerollcdn.com/characters/Skin/7/Swain.png',
      baseWeight: 1.2,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.DRAGONMANCER,eClasses.SHAPESHIFTER],
      rarity: eRarity.RARE
    });

    champions.set('Olaf', {
      name: 'Olaf',
      image: 'https://rerollcdn.com/characters/Skin/7/Olaf.png',
      baseWeight: 1.52,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.SCALESCORN],
      classes: [eClasses.BRUISER, eClasses.WARRIOR],
      rarity: eRarity.RARE
    });

    champions.set('Diana', {
      name: 'Diana',
      image: 'https://rerollcdn.com/characters/Skin/7/Diana.png',
      baseWeight: 1.64,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.SCALESCORN],
      classes: [eClasses.ASSASSIN],
      rarity: eRarity.RARE
    });

    champions.set('Varus', {
      name: 'Varus',
      image: 'https://rerollcdn.com/characters/Skin/7/Varus.png',
      baseWeight: 1.44,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.SWIFTSHOT],
      rarity: eRarity.RARE
    });

    champions.set('Elise', {
      name: 'Elise',
      image: 'https://rerollcdn.com/characters/Skin/7/Elise.png',
      baseWeight: 1.34,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.WHISPERS],
      classes: [eClasses.SHAPESHIFTER],
      rarity: eRarity.RARE
    });
    champions.set('Ryze', {
      name: 'Ryze',
      image: 'https://rerollcdn.com/characters/Skin/7/Ryze.png',
      baseWeight: 1.26,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.GUILD],
      classes: [eClasses.MAGE],
      rarity: eRarity.RARE
    });

    champions.set('Lulu', {
      name: 'Lulu',
      image: 'https://rerollcdn.com/characters/Skin/7/Lulu.png',
      baseWeight: 1.84,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.TRAINER],
      classes: [eClasses.MYSTIC, eClasses.EVOKER],
      rarity: eRarity.RARE
    });

    champions.set('Anivia', {
      name: 'Anivia',
      image: 'https://rerollcdn.com/characters/Skin/7/Anivia.png',
      baseWeight: 1.68,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.EVOKER,eClasses.LEGEND],
      rarity: eRarity.RARE
    });
    champions.set('Sylas', {
      name: 'Sylas',
      image: 'https://rerollcdn.com/characters/Skin/7/Sylas.png',
      baseWeight: 1.62,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.WHISPERS],
      classes: [eClasses.BRUISER,eClasses.MAGE],
      rarity: eRarity.RARE
    });
    
    champions.set('Nunu', {
      name: 'Nunu',
      image: 'https://rerollcdn.com/characters/Skin/7/Nunu.png',
      baseWeight: 1.4,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.MIRAGE],
      classes: [eClasses.CAVALIER],
      rarity: eRarity.RARE
    });
    champions.set('Lee Sin', {
      name: 'Lee Sin',
      image: 'https://rerollcdn.com/characters/Skin/7/LeeSin.png',
      baseWeight: 1.18,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.TEMPEST],
      classes: [eClasses.DRAGONMANCER],
      rarity: eRarity.RARE
    });

    champions.set('Volibear', {
      name: 'Volibear',
      image: 'https://rerollcdn.com/characters/Skin/7/Volibear.png',
      baseWeight: 1.06,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.SHIMMERSCALE],
      classes: [eClasses.DRAGONMANCER, eClasses.LEGEND],
      rarity: eRarity.RARE
    });

    champions.set('Illaoi', {
      name: 'Illaoi',
      image: 'https://rerollcdn.com/characters/Skin/7/Illaoi.png',
      baseWeight: 1.46,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.ASTRAL],
      classes: [eClasses.BRUISER],
      rarity: eRarity.RARE
    });




    champions.set('Xayah', {
      name: 'Xayah',
      image: 'https://rerollcdn.com/characters/Skin/7/Xayah.png',
      baseWeight: 1.56,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.SWIFTSHOT],
      rarity: eRarity.EPIC
    });


    champions.set('Corki', {
      name: 'Corki',
      image: 'https://rerollcdn.com/characters/Skin/7/Corki.png',
      baseWeight: 1.7,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.REVEL],
      classes: [eClasses.CANNONEER],
      rarity: eRarity.EPIC
    });



    champions.set('Hecarim', {
      name: 'Hecarim',
      image: 'https://rerollcdn.com/characters/Skin/7/Hecarim.png',
      baseWeight: 1.62,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.RAGEWING],
      classes: [eClasses.CAVALIER],
      rarity: eRarity.EPIC
    });



    champions.set('Talon', {
      name: 'Talon',
      image: 'https://rerollcdn.com/characters/Skin/7/Talon.png',
      baseWeight: 1.82,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.GUILD],
      classes: [eClasses.ASSASSIN],
      rarity: eRarity.EPIC
    });



    champions.set('Sona', {
      name: 'Sona',
      image: 'https://rerollcdn.com/characters/Skin/7/Sona.png',
      baseWeight: 1.86,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.REVEL],
      classes: [eClasses.EVOKER],
      rarity: eRarity.EPIC
    });

    champions.set('Ornn', {
      name: 'Ornn',
      image: 'https://rerollcdn.com/characters/Skin/7/Ornn.png',
      baseWeight: 1.66,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.TEMPEST],
      classes: [eClasses.BRUISER, eClasses.LEGEND],
      rarity: eRarity.EPIC
    });


    champions.set('Neeko', {
      name: 'Neeko',
      image: 'https://rerollcdn.com/characters/Skin/7/Neeko.png',
      baseWeight: 1.76,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [eClasses.SHAPESHIFTER],
      rarity: eRarity.EPIC
    });







    champions.set('Idas', {
      name: 'Idas',
      image: 'https://rerollcdn.com/characters/Skin/7/Idas.png',
      baseWeight: 1.24,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.SHIMMERSCALE, eOrigins.SHIMMERSCALE, eOrigins.SHIMMERSCALE],
      classes: [eClasses.GUARDIAN, eClasses.DRAGON],
      rarity: eRarity.DRAGON_EPIC
    });

    champions.set('Daeja', {
      name: 'Daeja',
      image: 'https://rerollcdn.com/characters/Skin/7/Daeja.png',
      baseWeight: 1.48,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.MIRAGE, eOrigins.MIRAGE, eOrigins.MIRAGE],
      classes: [eClasses.DRAGON],
      rarity: eRarity.DRAGON_EPIC
    });

    champions.set('Shi Oh Yu', {
      name: 'Shi Oh Yu',
      image: 'https://rerollcdn.com/characters/Skin/7/ShiOhYu.png',
      baseWeight: 1.74,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.JADE, eOrigins.JADE, eOrigins.JADE],
      classes: [eClasses.MYSTIC, eClasses.DRAGON],
      rarity: eRarity.DRAGON_EPIC
    });

    champions.set('Syfen', {
      name: 'Syfen',
      image: 'https://rerollcdn.com/characters/Skin/7/Syfen.png',
      baseWeight: 1.78,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.WHISPERS,eOrigins.WHISPERS,eOrigins.WHISPERS],
      classes: [eClasses.BRUISER,eClasses.DRAGON],
      rarity: eRarity.DRAGON_EPIC
    });


    champions.set('Pyke', {
      name: 'Pyke',
      image: 'https://rerollcdn.com/characters/Skin/7/Pyke.png',
      baseWeight: 2,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.WHISPERS],
      classes: [eClasses.ASSASSIN],
      rarity: eRarity.LEGENDARY
    });

    champions.set('Zoe', {
      name: 'Zoe',
      image: 'https://rerollcdn.com/characters/Skin/7/Zoe.png',
      baseWeight: 1.96,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.SHIMMERSCALE],
      classes: [eClasses.MAGE],
      rarity: eRarity.LEGENDARY
    });
    champions.set('Soraka', {
      name: 'Soraka',
      image: 'https://rerollcdn.com/characters/Skin/7/Soraka.png',
      baseWeight: 2.02,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.JADE],
      classes: [],
      rarity: eRarity.LEGENDARY
    });
    champions.set('Yasuo', {
      name: 'Yasuo',
      image: 'https://rerollcdn.com/characters/Skin/7/Yasuo.png',
      baseWeight: 1.94,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.MIRAGE],
      classes: [eClasses.DRAGONMANCER,eClasses.WARRIOR],
      rarity: eRarity.LEGENDARY
    });

    champions.set('Bard', {
      name: 'Bard',
      image: 'https://rerollcdn.com/characters/Skin/7/Bard.png',
      baseWeight: 2.04,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.GUILD],
      classes: [eClasses.MYSTIC, eClasses.BARD],
      rarity: eRarity.LEGENDARY
    });


    champions.set('Ao Shin', {
      name: 'Ao Shin',
      image: 'https://rerollcdn.com/characters/Skin/7/AoShin.png',
      baseWeight: 1.92,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.TEMPEST, eOrigins.TEMPEST, eOrigins.TEMPEST],
      classes: [eClasses.DRAGON],
      rarity: eRarity.DRAGON_LEGENDARY
    });


    champions.set('Aurelion Sol', {
      name: 'Aurelion Sol',
      image: 'https://rerollcdn.com/characters/Skin/7/AurelionSol.png',
      baseWeight: 1.9,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.ASTRAL, eOrigins.ASTRAL, eOrigins.ASTRAL],
      classes: [eClasses.EVOKER,eClasses.DRAGON],
      rarity: eRarity.DRAGON_LEGENDARY
    });


    champions.set('Shyvana', {
      name: 'Shyvana',
      image: 'https://rerollcdn.com/characters/Skin/7/Shyvana.png',
      baseWeight: 1.98,
      newSynergyWeight: 0,
      sameSynergyWeight: 0,
potentialSynergyPoints: 0,
tierlistPoints:0,

      totalWeight: 0,
      origin: [eOrigins.RAGEWING, eOrigins.RAGEWING, eOrigins.RAGEWING],
      classes: [eClasses.SHAPESHIFTER, eClasses.DRAGON],
      rarity: eRarity.DRAGON_LEGENDARY
    });


    return champions;
  }
}

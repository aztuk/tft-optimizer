import { iEmblem } from './interfaces';
import { iChampion } from 'src/app/interface/interfaces';
import { ChampionsCollectionService } from '../services/champions-collection.service';

export interface iCompositionTierList {
    name: string
    weight: number
    champions: string[],
    carry: string,
    carryLate: string,
    tank: string,
    levelUpOption: string,
    emblemPriority: iEmblem[],
    points: number
}

/*
    COSMIC 9
    MIRAGE CAVALIER
    DRAGONMANCER
    WHISPERs
    Guild Cavalier
    Ragewing Shapeshifter
    Mirage
    Guardian warrior
    Scalescorn Cavalier
    Mage
    Scalescorn Guild
    Swiftshot
    Astral Evoker
    Bruiser swifshot
    Guild mystic
    Guild Legend
    Dragonmancer Legend
    Bruiser revel
*/

export const COMP_TIERLIST: iCompositionTierList[] = [
    // GOD TIER
    {
        name: 'Cosmique 9', 
        champions: [
            'Nidalee',
            'Vladimir',
            'Skarner',
            'Varus',
            'Illaoi',
            'Nami',
            'Aurelion Sol',
            'Bard',
        ],
        carry: 'Varus',
        carryLate: 'Aurelion Sol',
        tank: 'Illaoi',
        levelUpOption: 'Bard',
        weight: 97.74,
       
        emblemPriority: [],
        points: 0
        },
    {
        name: 'Mirage Cavalier',
        champions: [
            'Sejuani',
            'Lillia',
            'Yone',
            'Nunu',
            'Daeja',
            'Hecarim',
            'Yasuo',
            'Bard',
        ],
        carry: 'Daeja',
        carryLate: 'Hecarim',
        tank: 'Yasuo',
        levelUpOption: 'Bard',
        weight: 70.98,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Dragonmancer',
        champions: [
            'Karma',
            'Sett',
            'Ashe',
            'Lee Sin',
            'Swain',
            'Neeko',
            'Xayah',
            'Yasuo',
            'Ornn',
        ],
        carry: 'Xayah',
        carryLate: 'Yasuo',
        tank: 'Neeko',
        levelUpOption: 'Ornn',
        weight: 64.14,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Whispers',
        champions: [
            'Taric',
            'Thresh',
            'Elise',
            'Sylas',
            'Neeko',
            'Syfen',
            'Soraka',
            'Bard',
        ],
        carry: 'Elise',
        carryLate: 'Syfen',
        tank: 'Sylas',
        levelUpOption: 'Bard',
        weight: 57.34,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Ragewing Shapeshifter',
        champions: [
            'Sett',
            'Ashe',
            'Gnar',
            'Swain',
            'Neeko',
            'Xayah',
            'Shyvana',
            'Yasuo',
        ],
        carry: 'Xayah',
        carryLate: 'Shyvana',
        tank: 'Neeko',
        levelUpOption: 'Yasuo',
        weight: 56.31,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Guild Cavalier',
        champions: [
            'Sejuani',
            'Lillia',
            'Twitch',
            'Nunu',
            'Ryze',
            'Hecarim',
            'Talon',
            'Bard',
            'Zoe',
        ],
        carry: 'Ryze',
        carryLate: 'Nunu',
        tank: 'Hecarim',
        levelUpOption: 'Zoe',
        weight: 55.96,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Mirage',
        champions: [
            'Leona',
            'Braum',
            'Yone',
            'Nunu',
            'Daeja',
            'Hecarim',
            'Yasuo',
            'Bard',
        ],
        carry: 'Daeja',
        carryLate: 'Yasuo',
        tank: 'Nunu',
        levelUpOption: 'Bard',
        weight: 54.22,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Bruiser swifshot',
        champions: [
            'Ezreal',
            'Skarner',
            'Shen',
            'Twitch',
            'Illaoi',
            'Varus',
            'Ornn',
            'Xayah',
            'Hecarim',
        ],
        carry: 'Varus',
        carryLate: 'Varus',
        tank: 'Illaoi',
        levelUpOption: 'Hecarim',
        weight: 56.07,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Astral Evoker',
        champions: [
            'Skarner',
            'Nami',
            'Anivia',
            'Illaoi',
            'Lulu',
            'Sona',
            'Aurelion Sol',
            'Varus',
        ],
        carry: 'Anivia',
        carryLate: 'Sona',
        tank: 'Illaoi',
        levelUpOption: 'Varus',
        weight: 53.8,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Swiftshot',
        champions: [
            'Ezreal',
            'Nami',
            'Twitch',
            'Illaoi',
            'Varus',
            'Ornn',
            'Xayah',
            'Hecarim',
        ],
        carry: 'Varus',
        carryLate: 'Xayah',
        tank: 'Ornn',
        levelUpOption: 'Varus',
        weight: 53.17,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Scalescorn Guild',
        champions: [
            'Sejuani',
            'Braum',
            'Lillia',
            'Shen',
            'Twitch',
            'Diana',
            'Olaf',
            'Talon',
            'Bard',
        ],
        carry: 'Olaf',
        carryLate: 'Talon',
        tank: 'Shen',
        levelUpOption: 'Bard',
        weight: 52.92,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Scalescorn Cavalier',
        champions: [
            'Sejuani',
            'Braum',
            'Lillia',
            'Shen',
            'Nunu',
            'Diana',
            'Olaf',
            'Hecarim',
            'Ryze',
        ],
        carry: 'Olaf',
        carryLate: 'Hecarim',
        tank: 'Nunu',
        levelUpOption: 'Ryze',
        weight: 52.74,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Mage',
        champions: [
            'Heimerdinger',
            'Vladimir',
            'Lillia',
            'Nami',
            'Illaoi',
            'Ryze',
            'Sylas',
            'Zoe',
            'Daeja',
        ],
        carry: 'Nami',
        carryLate: 'Zoe',
        tank: 'Illaoi',
        levelUpOption: 'Daeja',
        weight: 52.57,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Guardian warrior',
        champions: [
            'Leona',
            'Taric',
            'Braum',
            'Shen',
            'Thresh',
            'Yone',
            'Olaf',
            'Yasuo',
            'Bard',
        ],
        carry: 'Yone',
        carryLate: 'Olaf',
        tank: 'Shen',
        levelUpOption: 'Daeja',
        weight: 52.53,
       
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Guild Mystic',
        champions: [
            'Sejuani',
            'Lillia',
            'Nami',
            'Twitch',
            'Lulu',
            'Ryze',
            'Talon',
            'Bard',
            'Zoe',
        ],
        carry: 'Nami',
        carryLate: 'Ryze',
        tank: 'Sejuani',
        levelUpOption: 'Zoe',
        weight: 52.20,
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Guild Legend',
        champions: [
            'Sejuani',
            'Twitch',
            'Anivia',
            'Ryze',
            'Volibear',
            'Ornn',
            'Talon',
            'Bard',
            'Sona',
        ],
        carry: 'Anivia',
        carryLate: 'Ryze',
        tank: 'Ornn',
        levelUpOption: 'Sona',
        weight: 54.20,
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Dragonmancer Legend',
        champions: [
            'Karma',
            'Sett',
            'Ashe',
            'Anivia',
            'Lee Sin',
            'Swain',
            'Volibear',
            'Ornn',
            'Xayah',
        ],
        carry: 'Anivia',
        carryLate: 'Volibear',
        tank: 'Ornn',
        levelUpOption: 'Xayah',
        weight: 54.26,
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Bruiser revel',
        champions: [
            'Tahm Kench',
            'Jinx',
            'Shen',
            'Olaf',
            'Corki',
            'Sona',
            'Syfen',
            'Sylas',
        ],
        carry: 'Corki',
        carryLate: 'Syfen',
        tank: 'Shen',
        levelUpOption: 'Sylas',
        weight: 51.26,
        emblemPriority: [],
        points: 0
    },
    {
        name: 'Bruiser Canonneer revel',
        champions: [
            'Tahm Kench',
            'Jinx',
            'Shen',
            'Tristana',
            'Olaf',
            'Ornn',
            'Corki',
            'Sona',
            'Sylas',
        ],
        carry: 'Corki',
        carryLate: 'Sona',
        tank: 'Ornn',
        levelUpOption: 'Sylas',
        weight: 51.26,
        emblemPriority: [],
        points: 0
    },
]
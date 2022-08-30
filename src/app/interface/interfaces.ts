
export enum eOrigins {
    ASTRAL = "ASTRAL",
    GUILD = "GUILD",
    JADE = "JADE",
    MIRAGE = "MIRAGE",
    RAGEWING = "RAGEWING",
    REVEL = "REVEL",
    TEMPEST = "TEMPEST",
    TRAINER = "TRAINER",
    SCALESCORN = "SCALESCORN",
    SHIMMERSCALE = "SHIMMERSCALE",
    WHISPERS = "WHISPERS",
  
  }
  
  export enum eClasses {
    ASSASSIN = "ASSASSIN",
    BARD = "BARD",
    BRUISER = "BRUISER",
    CANNONEER = "CANNONEER",
    CAVALIER = "CAVALIER",
    DRAGONMANCER = "DRAGONMANCER",
    DRAGON = "DRAGON",
    EVOKER = "EVOKER",
    GUARDIAN = "GUARDIAN",
    LEGEND = "LEGEND",
    MAGE = "MAGE",
    MYSTIC = "MYSTIC",
    SHAPESHIFTER = "SHAPESHIFTER",
    SWIFTSHOT = "SWIFTSHOT",
    WARRIOR = "WARRIOR",
    SPELLTHIEF = "SPELLTHIEF",
    STARCALLER = "STARCALLER"
    
  }
  
  export enum eRarity {
    POOR,
    COMMON,
    RARE,
    EPIC,
    LEGENDARY,
    DRAGON_EPIC,
    DRAGON_LEGENDARY
  }
  
  export interface iChampion {
    name: string
    image: string
    baseWeight: number
    totalWeight: number
    origin: eOrigins[]
    classes: eClasses[]
    cost: number
    rarity: eRarity
  }
  

  export interface iComposition {
    champions: iChampion[]
    synergies: iSynergy[]
    emblems: iEmblem[]
    addChampion: (arg: iChampion) => void
    removeChampion: (arg: number) => void
    addEmblem: (arg: iEmblem) => void
    removeEmblem: (arg: number) => void
    hasDragon: () => boolean
  }
  export interface iSynergy {
    name: eClasses|eOrigins
    number: number
    activated: boolean
    nextThreshold: number
    currentThreshold: number
  }

  export type iEmblem = eClasses|eOrigins
  
  
export type Differences = iSynergy[];
export type ChampionMap = Map<string, iChampion>;
export type Synergies = Map<eClasses|eOrigins, iSynergy>;
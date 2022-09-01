/*
    ASTRAL = "ASTRAL",
    GUILD = "GUILD",
    JADE = "JADE",
    MIRAGE = "MIRAGE",
    RAGEWING = "RAGEWING",
    REVEL = "REVEL",
    TEMPEST = "TEMPEST",
    TRAINER = "TRAINER",
    SCALESCORN = "SCALESCORN",
    SHIMERSCALE = "SHIMERSCALE",
    WHISPERS = "WHISPERS",*/

    export const SYNERGY_WEIGHTS = new Map([
        // ASTRAL
        ['ASTRAL_3', 10],
        ['ASTRAL_6', 3],
        ['ASTRAL_9', 73],
    
        // GUILD
        ['GUILD_1', 1],
        ['GUILD_2', 52],
        ['GUILD_3', 36],
        ['GUILD_4', 45],
        ['GUILD_5', 66],
        ['GUILD_6', 66],
        ['GUILD_7', 82],
    
        // JADE
        ['JADE_3', 17],
        ['JADE_6', 26],
        ['JADE_9', 71],
        ['JADE_12', 83],
    
        // MIRAGE
        ['MIRAGE_2', 15],
        ['MIRAGE_4', 4],
        ['MIRAGE_6', 13],
        ['MIRAGE_8', 58],
    
        // RAGEWING
        ['RAGEWING_3', 5],
        ['RAGEWING_6', 28],
        ['RAGEWING_9', 75],
    
        // REVEL
        ['REVEL_2', 34],
        ['REVEL_3', 5],
        ['REVEL_4', 48],
        ['REVEL_5', 64],
        
        // TEMPEST
        ['TEMPEST_2', 23],
        ['TEMPEST_4', 63],
        ['TEMPEST_6', 60],
        ['TEMPEST_8', 77],
    
        // TRAINER
        ['TRAINER_2', 31],
        ['TRAINER_3', 54],
    
        // SCALESCORN
        ['SCALESCORN_2', 18],
        ['SCALESCORN_4', 40],
        ['SCALESCORN_6', 81],
    
        // SHIMERSCALE
        ['SHIMMERSCALE_3', 8],
        ['SHIMMERSCALE_5', 2],
        ['SHIMMERSCALE_7', 1],
        ['SHIMMERSCALE_9', 74],
    
        // WHISPERS
        ['WHISPERS_2', 44],
        ['WHISPERS_4', 51],
        ['WHISPERS_6', 41],
        ['WHISPERS_8', 65],
    
        
        //ASSASSIN = "ASSASSIN",
        ['ASSASSIN_2', 43],
        ['ASSASSIN_4', 37],
        ['ASSASSIN_6', 70],
    
        //BARD = "BARD",
        ['BARD_1', 1],
    
        //    BRUISER = "BRUISER",
        ['BRUISER_2', 33],
        ['BRUISER_4', 27],
        ['BRUISER_6', 22],
        ['BRUISER_8', 69],
    
        //   CANNONEER = "CANNONEER",
        ['CANNONEER_2', 29],
        ['CANNONEER_3', 38],
        ['CANNONEER_4', 47],
        ['CANNONEER_5', 57],
    
        //  CAVALIER = "CAVALIER",
        ['CAVALIER_2', 12],
        ['CAVALIER_3', 6],
        ['CAVALIER_4', 14],
        ['CAVALIER_5', 59],
    
        //DRACOMANCER = "DRACOMANCER",
        ['DRAGONMANCER_3', 7],
        ['DRAGONMANCER_6', 9],
        ['DRAGONMANCER_9', 80],
    
        //    DRAGON = "DRAGON",
        ['DRAGON_1', 19],
    
        //  EVOKER = "EVOKER",
        ['EVOKER_2', 56],
        ['EVOKER_4', 55],
        ['EVOKER_6', 68],
    
        //GUARDIAN = "GUARDIAN",
        ['GUARDIAN_2', 20],
        ['GUARDIAN_4', 25],
        ['GUARDIAN_6', 32],
    
        //        LEGEND = "LEGEND",
        ['LEGEND_3', 11],
    
        //      MAGE = "MAGE",
        ['MAGE_3', 46],
        ['MAGE_5', 24],
        ['MAGE_7', 42],
        ['MAGE_9', 79],
    
        //    MYSTIC = "MYSTIC",
        ['MYSTIC_2', 61],
        ['MYSTIC_3', 72],
        ['MYSTIC_4', 76],
        ['MYSTIC_5', 78],
    
        //  SHAPESHIFTER = "SHAPESHIFTER",
        ['SHAPESHIFTER_2', 39],
        ['SHAPESHIFTER_4', 62],
        ['SHAPESHIFTER_6', 67],
        
        //SWIFTSHOT = "SWIFTSHOT",
        ['SWIFTSHOT_2', 21],
        ['SWIFTSHOT_4', 30],
        ['SWIFTSHOT_6', 49],
    
        //       WARRIOR = "WARRIOR",
        ['WARRIOR_2', 35],
        ['WARRIOR_4', 16],
        ['WARRIOR_6', 53],

    ]);

    export const SAME_SYNERGY_WEIGHTS = new Map([
        // ASTRAL
        ['ASTRAL_3', 1],
        ['ASTRAL_6', 2],
        ['ASTRAL_9', 5],
    
        // GUILD
        ['GUILD_1', .5],
        ['GUILD_2', .8],
        ['GUILD_3', 1.1],
        ['GUILD_4', 1.4],
        ['GUILD_5', 1.7],
        ['GUILD_6', 1.7],
        ['GUILD_7', 3],
    
        // JADE
        ['JADE_3', 2],
        ['JADE_6', 3],
        ['JADE_9', 4],
        ['JADE_12', 5],
    
        // MIRAGE
        ['MIRAGE_2', 2],
        ['MIRAGE_4', 3],
        ['MIRAGE_6', 4],
        ['MIRAGE_8', 5],
    
        // RAGEWING
        ['RAGEWING_3', 2],
        ['RAGEWING_6', 3],
        ['RAGEWING_9', 4],
    
        // REVEL
        ['REVEL_2', 2.5],
        ['REVEL_3', 2.5],
        ['REVEL_4', 2.5],
        ['REVEL_5', 2.5],
        
        // TEMPEST
        ['TEMPEST_2', 2.5],
        ['TEMPEST_4', 3],
        ['TEMPEST_6', 3.5],
        ['TEMPEST_8', 4],
    
        // TRAINER
        ['TRAINER_2', 2.5],
        ['TRAINER_3', 1],
    
        // SCALESCORN
        ['SCALESCORN_2', 2],
        ['SCALESCORN_4', 2.5],
        ['SCALESCORN_6', 3],
    
        // SHIMERSCALE
        ['SHIMMERSCALE_3', 2.5],
        ['SHIMMERSCALE_5', 2.5],
        ['SHIMMERSCALE_7', 2.5],
        ['SHIMMERSCALE_9', 2.5],
    
        // WHISPERS
        ['WHISPERS_2', 2],
        ['WHISPERS_4', 2.5],
        ['WHISPERS_6', 3],
        ['WHISPERS_8', 3.5],
    
        
        //ASSASSIN = "ASSASSIN",
        ['ASSASSIN_2', 1],
        ['ASSASSIN_4', 2],
        ['ASSASSIN_6', 3],
    
        //BARD = "BARD",
        ['BARD_1', 1],
    
        //    BRUISER = "BRUISER",
        ['BRUISER_2', 1],
        ['BRUISER_4', 1.5],
        ['BRUISER_6', 2],
        ['BRUISER_8', 2.5],
    
        //   CANNONEER = "CANNONEER",
        ['CANNONEER_2', 2.5],
        ['CANNONEER_3', 2.5],
        ['CANNONEER_4', 2.5],
        ['CANNONEER_5', 2.5],
    
        //  CAVALIER = "CAVALIER",
        ['CAVALIER_2', 2.5],
        ['CAVALIER_3', 2.5],
        ['CAVALIER_4', 2.5],
        ['CAVALIER_5', 2.5],
    
        //DRACOMANCER = "DRACOMANCER",
        ['DRAGONMANCER_3', 1.5],
        ['DRAGONMANCER_6', 1.5],
        ['DRAGONMANCER_9', 1.5],
    
        //    DRAGON = "DRAGON",
        ['DRAGON_1', 1],
    
        //  EVOKER = "EVOKER",
        ['EVOKER_2', 2.5],
        ['EVOKER_4', 3],
        ['EVOKER_6', 3.5],
    
        //GUARDIAN = "GUARDIAN",
        ['GUARDIAN_2', 2],
        ['GUARDIAN_4', 2.5],
        ['GUARDIAN_6', 3],
    
        //        LEGEND = "LEGEND",
        ['LEGEND_3', 1],
    
        //      MAGE = "MAGE",
        ['MAGE_3', 2.5],
        ['MAGE_5', 3],
        ['MAGE_7', 3.5],
        ['MAGE_9', 4],
    
        //    MYSTIC = "MYSTIC",
        ['MYSTIC_2', .1],
        ['MYSTIC_3', .1],
        ['MYSTIC_4', .1],
        ['MYSTIC_5', .1],
    
        //  SHAPESHIFTER = "SHAPESHIFTER",
        ['SHAPESHIFTER_2', 2.5],
        ['SHAPESHIFTER_4', 3],
        ['SHAPESHIFTER_6', 3.5],
        
        //SWIFTSHOT = "SWIFTSHOT",
        ['SWIFTSHOT_2', 2],
        ['SWIFTSHOT_4', 2.5],
        ['SWIFTSHOT_6', 3],
    
        //       WARRIOR = "WARRIOR",
        ['WARRIOR_2', 1.5],
        ['WARRIOR_4', 2],
        ['WARRIOR_6', 2.5],
    
    ]);
        
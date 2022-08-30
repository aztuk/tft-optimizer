import { eClasses, eOrigins, iChampion, iComposition, iEmblem, iSynergy } from '../interface/interfaces';
import { SynergyCollectionService } from '../services/synergy-collection.service';

export class Composition  implements iComposition{

    public champions: iChampion[] = [];
    public synergies: iSynergy[] = [];
    public emblems: iEmblem[] = [];

    constructor() {
        
    }

    public addChampion(champion: iChampion) {
        this.champions.push(champion);
        this.refreshSynergies();
    };
    public removeChampion(index: number)  {
        this.champions.splice(index, 1);
        this.refreshSynergies();
    }

    public addEmblem(emblem: iEmblem) {
        this.emblems.push(emblem);
        this.refreshSynergies();
        
    }
    public removeEmblem(index: number) {
        this.emblems.splice(index, 1);
        this.refreshSynergies();
    }

    public hasDragon():boolean {
       return this.champions.some(champ => champ.classes.includes(eClasses.DRAGON))
    }

    private uniqBy(a:any, key:any) {
        var seen:any = {};
        return a.filter(function(item: any) {
            var k = key(item);
            return seen.hasOwnProperty(k) ? false : (seen[k] = true);
        })
    }

    private refreshSynergies(){
        let allOriginsAndClasses:(eOrigins|eClasses)[] = [];
    
        this.uniqBy(this.champions, JSON.stringify).forEach((champ:any) => {
          allOriginsAndClasses = allOriginsAndClasses.concat(champ.origin);
          allOriginsAndClasses = allOriginsAndClasses.concat(champ.classes);
        });
        allOriginsAndClasses = allOriginsAndClasses.concat(this.emblems);

    
        const count:Map<eClasses|eOrigins, number> = new Map();
    
        for (const element of  allOriginsAndClasses) {
          if (count.get(element)) {
            let currentValue = count.get(element)!;
            let newValue = currentValue + 1
            count.set(element, newValue)
          } else {
            count.set(element, 1)
          }
        }
    
        this.applySynergies(count);
      }
    
      private applySynergies(count:any) {
        let synergies:iSynergy[] = [];
        
        count.forEach((number: number, name: eClasses|eOrigins) => {
          let thresholds = SynergyCollectionService.synergies.get(name)!;
          let currentThreshold = -1;

          if(thresholds.length > 1) {
            currentThreshold = thresholds.filter(v => number >= v)[thresholds.filter(v => number >= v).length - 1]
          } else if(thresholds.length === 1 && thresholds[0] === 1) {
            currentThreshold = thresholds[0]
          }

          const synergy:iSynergy = {
            name: name,
            number: number,
            nextThreshold: (thresholds.length > 1) ? thresholds.filter(v => number < v)[0] : thresholds[0],
            activated: number >= thresholds[0],
            currentThreshold: currentThreshold
          }; 
      
          synergies.push(synergy);
        });
    
        this.synergies = synergies;
        this.synergies.sort((a,b) => {
          if(a.activated > b.activated) return -1;
          if(a.activated < b.activated) return 1;
          return 0
        });
      }
}

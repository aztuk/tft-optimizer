import { iComposition } from './../../interface/interfaces';
import { MainComponent } from './../../page/main/main.component';
import { WeightRuntimeService } from './../../services/weight-runtime.service';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { iChampion } from 'src/app/interface/interfaces';

@Component({
  selector: 'por-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent implements OnInit {


  @Input() champion!: iChampion;
  @Input() composition!: iComposition;

  
  constructor() { }
  
  ngOnInit(): void {
  }


}

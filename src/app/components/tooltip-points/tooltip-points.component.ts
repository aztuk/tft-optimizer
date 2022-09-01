import { iChampion } from 'src/app/interface/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { WeightRuntimeService } from 'src/app/services/weight-runtime.service';

@Component({
  selector: 'por-tooltip-points',
  templateUrl: './tooltip-points.component.html',
  styleUrls: ['./tooltip-points.component.scss']
})
export class TooltipPointsComponent implements OnInit {

  @Input() entity!: iChampion;
  rarityValuePoints: number = 0;

  constructor(private weight: WeightRuntimeService) { }

  ngOnInit(): void {
    this.rarityValuePoints = (this.weight.getRarityPoints(this.entity) * this.entity.totalWeight) - this.entity.totalWeight;
  }

}

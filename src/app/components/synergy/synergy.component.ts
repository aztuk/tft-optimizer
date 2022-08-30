import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { eClasses, eOrigins, iSynergy } from 'src/app/interface/interfaces';
import { SynergyCollectionService } from 'src/app/services/synergy-collection.service';

@Component({
  selector: 'por-synergy',
  templateUrl: './synergy.component.html',
  styleUrls: ['./synergy.component.scss']
})
export class SynergyComponent implements OnInit {

  @Input() synergy!: iSynergy
  @Input() emblemNumber!: any

  @Output() remove = new EventEmitter();

  public thresholds: any;


  constructor() { }

  ngOnInit(): void {
    this.thresholds = SynergyCollectionService.synergies.get(this.synergy.name);
  }

  getCurrentThresholdLevel(): number {
    return this.thresholds.indexOf(this.synergy.currentThreshold);
  }

  removeEmblem() {
    this.remove.emit(true);
  }

}

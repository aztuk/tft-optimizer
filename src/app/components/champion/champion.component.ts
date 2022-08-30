import { Component, Input, OnInit } from '@angular/core';
import { iChampion } from 'src/app/interface/interfaces';

@Component({
  selector: 'por-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent implements OnInit {


  @Input() champion!: iChampion;
  
  constructor() { }

  ngOnInit(): void {
  }

}

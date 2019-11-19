import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  animations:[
    trigger('slideToPageFromLeft',[
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s')
      ])
    ]),
    trigger('slideToPageFromRight',[
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s')
      ])
    ])
  ],

})



export class HomeComponent implements OnInit {

  private intervaloCarrusel: Number;

  constructor() { 
    this.intervaloCarrusel = 4000;
  }

  ngOnInit() {
  }

}

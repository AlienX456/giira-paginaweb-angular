import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-giira',
  templateUrl: './giira.component.html',
  styleUrls: ['./giira.component.scss'],

  animations:[
    trigger('burningRocket',[
      state('one',style({
        transform: 'translate(-5px,-5px)'
      })),
      state('two',style({
        transform: 'translate(5px,5px)'
      })),
      transition('* <=> *', [
        animate('0.5s')
      ])
    ]),
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
export class GiiraComponent implements OnInit {

  constructor() { }
  onStateOne : Boolean

  ngOnInit() {
    this.onStateOne = false;
  }

  onDone($event){
    if (this.onStateOne) {
      this.onStateOne = false;
    }else{
      this.onStateOne = true;
    }

  }

}

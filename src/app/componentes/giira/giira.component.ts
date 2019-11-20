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


    trigger('rotateIdea',[
      state('one',style({
        transform: 'rotate(-5deg)'
      })),
      state('two',style({
        transform: 'rotate(5deg)'
      })),
      transition('* <=> *', [
        animate('0.5s')
      ])
    ]),

    trigger('rotateObjetives',[
      state('one',style({
        transform: 'rotate(-20deg)'
      })),
      state('two',style({
        transform: 'rotate(20deg)'
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
  onStateOneRocket : Boolean;
  onStateOneIdea : Boolean;
  onStateOneObjetivesOne : Boolean;
  onStateOneObjetivesTwo : Boolean;

  ngOnInit() {
    this.onStateOneRocket = false;
    this.onStateOneIdea = false;
    this.onStateOneObjetivesOne = false;
    this.onStateOneObjetivesTwo = true;
  }

  onDoneRocket($event){
    this.onStateOneRocket = !this.onStateOneRocket;
  }

  onDoneIdea($event){
    this.onStateOneIdea = !this.onStateOneIdea;
  }

  onDoneObjetivesOne($event){
    this.onStateOneObjetivesOne = !this.onStateOneObjetivesOne;
  }

  onDoneObjetivesTwo($event){
    this.onStateOneObjetivesTwo = !this.onStateOneObjetivesTwo;
  }
}

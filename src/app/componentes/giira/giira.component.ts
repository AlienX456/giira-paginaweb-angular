import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
} from '@angular/animations';

import { HttpClient } from '@angular/common/http';

//INTERFACES

import {Articulo} from 'src/app/interfaces/articulo'
import { Observable } from 'rxjs';

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

    trigger('lines',[
      state('one',style({
        transform: 'rotate(360deg) scale(0.2)'
      })),
      state('two',style({
        transform: 'rotate(0deg) scale(1)'
      })),
      transition('one => two', [
          animate('0.5s')
      ]),
      transition('two => one', [
        animate('0.5s 500ms')
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
        transform: 'translateY(5px)'
      })),
      state('two',style({
        transform: 'translateY(-5px)'
      })),
      transition('* <=> *', [
        animate('0.3s')
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

  constructor(private http: HttpClient) { }
  onStateOneRocket : Boolean;
  onStateOneIdea : Boolean;
  onStateOneObjetivesOne : Boolean;
  onStateOneObjetivesTwo : Boolean;
  onStateLines:Boolean;

  ngOnInit() {
    this.onStateOneRocket = false;
    this.onStateOneIdea = false;
    this.onStateOneObjetivesOne = false;
    this.onStateOneObjetivesTwo = true;
    this.onStateLines = true;

    console.log(this.getLocalJson().subscribe(data=>{console.log(data)},error=>{console.error(error)}))
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

  onDoneLines($event){
    this.onStateLines = !this.onStateLines;
  }

  getLocalJson(): Observable<Articulo[]>{
    return this.http.get<Articulo[]>("assets/json/articulos.json");
  }
}

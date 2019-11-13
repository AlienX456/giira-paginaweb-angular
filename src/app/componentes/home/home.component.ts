import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private intervaloCarrusel: Number;

  constructor() { 
    this.intervaloCarrusel = 4000;
  }

  ngOnInit() {
  }

}

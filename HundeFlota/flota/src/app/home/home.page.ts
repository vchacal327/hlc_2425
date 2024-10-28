import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  coord: string = "A0";
  barco: string = = this.numAleatorio(1, 10);

  constructor() {}

  coordAleatoria(a: string, b: number) {
    return Math.round(Math.random()*(b-a)+a);
  }

  compruebaCasilla() {
    if (this.coord) {
      
  }
}

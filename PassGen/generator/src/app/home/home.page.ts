import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  long: number = 0;
  clave: string = '';

  constructor() {
    console.log("Su clave es: " + this.clave);
  }

  stringAleatorio() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{}[]:;\'<>,./?';
    let resultado = '';
    for (let i=0; i < this.long; i++) {
      resultado += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    this.clave = "Su clave es: ";
    this.clave += resultado;
  }
}

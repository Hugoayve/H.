import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PorcentajePage } from '../porcentaje/porcentaje';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private costo: number;
  private propina: number;
  private totalPropina: number;
  private totalGlobal: number;
  public preferencias: Storage;
  total: number;
  netoPropina: number;
  neto: any;
  n: any;
  constructor(public navCtrl: NavController, _preferencias: Storage) {
    this.propina = 0;
    this.totalPropina = 0;
    this.totalGlobal = 0;
    this.preferencias = _preferencias;
    this.total = 0;
  }
  pPag() {
    this.navCtrl.push(PorcentajePage);
  }

  CalcularPropina() { 
    this.totalPropina = this.costo * this.propina / 100;
    this.totalGlobal = this.costo * 1 + this.totalPropina * 1;
  }

  CalcularTotal() {
    this.total = this.total + this.costo * 1;
  }
  CalcularTotalPropina(){
    this.netoPropina = this.netoPropina * 1 + this.totalPropina * 1;
  }
  CalcularNeto(){
    this.neto = this.total - this.netoPropina;
  }
  Neto(){
    this.n = this.n + this.neto;
  }

  
  

  ionViewDidEnter() {
    this.preferencias.get('propina').then((valor) => {
      console.log(valor);
      if (valor != null) {
        this.propina = valor;
      }
    });
  }


}
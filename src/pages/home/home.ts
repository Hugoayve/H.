import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductosPage } from '../productos/productos';
import { Storage } from '@ionic/storage';
import { PorcentajePage } from '../porcentaje/porcentaje';
//import { reservacionesPage } from '../reservaciones/reservaciones';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  private nombrecito: string;
  
  constructor(public navCtrl: NavController, _preferencias: Storage) {
    
  }
  pPag() {
    
  }

  

}


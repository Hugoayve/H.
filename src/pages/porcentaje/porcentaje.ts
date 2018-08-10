import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PorcentajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-porcentaje',
  templateUrl: 'porcentaje.html',
})
export class PorcentajePage {

  private propina: number;
  private preferencias: Storage;
  constructor(public navCtrl: NavController, _preferencias: Storage) {
    this.preferencias = _preferencias;
    this.preferencias.get('propina').then((valor) => {
      console.log(valor);
      if (valor != null) {
        this.propina = valor;
      }
      else {
        this.propina = 10;
      }
    });
  } 

  Guardar() {
    this.preferencias.set('propina', this.propina);
  }

}

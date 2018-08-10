import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

import { FavoritesPage } from '../favorites/favorites';
import { FavoritosPage } from '../favoritos/favoritos';
//import { reservacionesPage } from '../reservaciones/reservaciones';
//import { reservacionesPage } from '../reservaciones/reservaciones';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabPrincipal = FavoritesPage;
  tabConfiguracion = AboutPage;
  tabFavoritos = FavoritosPage;

  constructor() {

  }
}

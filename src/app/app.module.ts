import { FavoritesService } from './../pages/favorites/favorites.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritesPage } from '../pages/favorites/favorites';
import { FavoritesModalPage } from '../pages/favorites/favorites-modal/favorites-modal';


import { Config } from '../config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { PorcentajePage } from '../pages/porcentaje/porcentaje';
import { FavoritosPage } from '../pages/favoritos/favoritos';

export const config = {
  apiKey: "AIzaSyBoWKc3ohOmey61VJsDYEzL6ayegQSzpv0",
  authDomain: "restaurantpropina.firebaseapp.com",
  databaseURL: "https://restaurantpropina.firebaseio.com",
  projectId: "restaurantpropina",
  storageBucket: "restaurantpropina.appspot.com",
  messagingSenderId: "14205626439"
};





@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    FavoritesPage,
    FavoritesModalPage,
    PorcentajePage,
    FavoritosPage,
  
    
 
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Config.firebase),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    HttpModule,
    AngularFireDatabaseModule,
  
    
   
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    FavoritesPage,
    FavoritesModalPage,
    PorcentajePage,
    FavoritosPage,
    
    
    

   
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    FavoritesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

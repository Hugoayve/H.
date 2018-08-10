import { Favorite } from './models/favorite';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FavoritesModalPage } from './favorites-modal/favorites-modal';
import { FavoritesService } from './favorites.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FavoritesModalDosPage } from './favorites-modal-dos/favorites-modal-dos';
import { Favoritedos } from './models/favoritedos';
import { Favoritetres } from './models/favoritetres';


/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  private favoritesService: FavoritesService;
  private favorites: Favorite[];
  favoritesList$: Observable<Favorite[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, _favoritesService:FavoritesService) {
    this.favoritesService = _favoritesService;
    this.favoritesList$ = this.favoritesService
    .GetAllFavoritesAF()
    .snapshotChanges()
    .map(
      changes =>{
        return changes.map(c=>({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    );
    console.log(this.favorites);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
    
  }
  OnNew(){
    let newRestaurant: Favorite = { cantidad: '', nombre: '', precio: '', cantidaddos: '', nombredos: '', preciodos: ''}
    let modal = this.modalCtrl.create(FavoritesModalPage, {restaurant: newRestaurant});
    console.log(modal);
    modal.present();
  }
  OnNewDos() {
    let newRestaurant: Favorite = { cantidad: '', nombre: '', precio: '', cantidaddos: '', nombredos: '', preciodos: ''}
    let modal = this.modalCtrl.create(FavoritesModalDosPage, { restaurant: newRestaurant });
    console.log(modal);
    modal.present();
  }
  OnNewTres() {
    let newRestaurant: Favoritetres = { cantidadtres: '', nombretres: '', preciotres: '' }
    let modal = this.modalCtrl.create(FavoritesModalPage, { restaurant: newRestaurant });
    console.log(modal);
    modal.present();
  }

  
  OnDelete(restaurant: Favorite) {
    console.log(restaurant.key);
    this.favoritesService.DeleteFavoriteAF(restaurant.key);
  }

  

  OnUpdate(restaurant:Favorite){
    let modal = this.modalCtrl.create(FavoritesModalPage,{restaurant: restaurant});
    modal.present();
  }

  OnUpdateDos(restaurant: Favorite) {
    let modal = this.modalCtrl.create(FavoritesModalDosPage, { restaurant: restaurant });
    modal.present();
  }
}

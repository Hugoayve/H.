import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ViewController } from 'ionic-angular';
import { FavoritesService } from '../favorites.service';
import { Favorite } from '../models/favorite';

/**
 * Generated class for the FavoritesModalDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favorites-modal-dos',
  templateUrl: 'favorites-modal-dos.html',
})
export class FavoritesModalDosPage {
  private viewCtrl: ViewController;
  private favoritesService: FavoritesService;
  private restaurant: Favorite;

  constructor(public navCtrl: NavController, public navParams: NavParams, _viewCtrl: ViewController, private _favoritesService: FavoritesService) {
    this.viewCtrl = _viewCtrl;
    this.favoritesService = _favoritesService;
    this.restaurant = navParams.get('restaurant');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesModalDosPage');
  }
  OnSave(restaurant: Favorite) {
    console.log(restaurant);
    if (typeof (restaurant.key) === 'undefined') {
      this.favoritesService.AddFavoritesAF(restaurant).then(ref => {
        console.log(ref.key);
        this.viewCtrl.dismiss();
      });
    }
    else {
      this.favoritesService.UpdateFavoriteAF(restaurant.key, restaurant).then(ref => {
        this.viewCtrl.dismiss();
      });
    }
  }
  OnClose() {
    this.viewCtrl.dismiss();
  }
}

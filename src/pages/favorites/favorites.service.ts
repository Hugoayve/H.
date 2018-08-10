import { Favorite } from './models/favorite';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { FAVORITES } from './data/data-favorites';
import { AngularFireDatabase,AngularFireList }from 'angularfire2/database';
import { FavoritesModalDosPage } from './favorites-modal-dos/favorites-modal-dos';

@Injectable()
export class FavoritesService {
    private http: Http;
    private result: any;
    private restaurantListRef = this.db.list<Favorite>('restaurants');
    private restaurantListDosRef = this.db.list<Favorite>('restaurantsdos');
    

    constructor(http:Http, private db:AngularFireDatabase){
        
    }
    GetAllFavoritesAF(){
        return this.restaurantListRef;
    }
    GetAllFavoritesDosAF() {
        return this.restaurantListDosRef;
    }
   
    AddFavoritesAF(restaurant:Favorite){
        return this.restaurantListRef.push(restaurant);
    }
    AddFavoritesDosAF(restaurant: Favorite) {
        return this.restaurantListDosRef.push(restaurant);
    }
    DeleteFavoriteAF(key: string) {
        return this.restaurantListRef.remove(key);
        
    }
    DeleteFavoriteDosAF(key: string) {
        return this.restaurantListDosRef.remove(key);

    }
    UpdateFavoriteAF(key: string, restaurant:Favorite){
        return this.restaurantListRef.update(key, restaurant)
    }
    UpdateFavoriteDosAF(key: string, restaurant: Favorite) {
        return this.restaurantListDosRef.update(key, restaurant)
    }
}
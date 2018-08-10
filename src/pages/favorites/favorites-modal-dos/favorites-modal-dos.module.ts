import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesModalDosPage } from './favorites-modal-dos';

@NgModule({
  declarations: [
    FavoritesModalDosPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesModalDosPage),
  ],
})
export class FavoritesModalPageModule {}

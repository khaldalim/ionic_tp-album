import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAlbumPageRoutingModule } from './view-album-routing.module';

import { ViewAlbumPage } from './view-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAlbumPageRoutingModule
  ],
  declarations: [ViewAlbumPage]
})
export class ViewAlbumPageModule {}

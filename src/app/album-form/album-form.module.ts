import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumFormPageRoutingModule } from './album-form-routing.module';

import { AlbumFormPage } from './album-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumFormPageRoutingModule
  ],
  declarations: [AlbumFormPage]
})
export class AlbumFormPageModule {}

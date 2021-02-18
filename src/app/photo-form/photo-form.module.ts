import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoFormPageRoutingModule } from './photo-form-routing.module';

import { PhotoFormPage } from './photo-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoFormPageRoutingModule
  ],
  declarations: [PhotoFormPage]
})
export class PhotoFormPageModule {}

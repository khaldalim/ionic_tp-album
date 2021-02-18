import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormPage } from './photo-form.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoFormPageRoutingModule {}

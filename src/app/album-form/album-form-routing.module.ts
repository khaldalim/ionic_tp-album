import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumFormPage } from './album-form.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumFormPageRoutingModule {}

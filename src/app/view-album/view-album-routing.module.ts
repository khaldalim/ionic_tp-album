import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAlbumPage } from './view-album.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAlbumPageRoutingModule {}

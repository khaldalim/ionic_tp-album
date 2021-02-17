import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'view-album/:id',
    loadChildren: () => import('./view-album/view-album.module').then( m => m.ViewAlbumPageModule)
  },
  {
    path: 'view-photo/:id',
    loadChildren: () => import('./view-photo/view-photo.module').then( m => m.ViewPhotoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

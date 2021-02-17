import { Component } from '@angular/core';
import {Album} from '../modeles/album';
import {AlbumService} from '../services/album.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listAlbum: Album[];

  constructor(private albumService: AlbumService, private route: Router) {
    this.listAlbum = [];
  }


  ionViewWillEnter(){
    this.loadAlbums();
  }


  loadAlbums(){
    // pour ecouter les observable => subscribe
    this.albumService.getAll().subscribe(data => this.listAlbum = data);
  }

  afficherAlbum(id: number) {
    this.route.navigateByUrl('/view-album/' + id);
  }
}

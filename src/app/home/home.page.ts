import {Component, ViewChild} from '@angular/core';
import {Album} from '../modeles/album';
import {AlbumService} from '../services/album.service';
import {Router} from '@angular/router';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  listAlbum: Album[];
  numTimesLeft = 10;

  constructor(private albumService: AlbumService, private route: Router) {

  }


  ionViewWillEnter() {
    this.loadAlbums();
  }


  loadAlbums() {
    // pour ecouter les observable => subscribe
    this.albumService.getAll().subscribe(data => this.listAlbum = data);
  }

  afficherAlbum(id: number) {
    this.route.navigateByUrl('/view-album/' + id);
  }

  ajouterAlbum() {
    this.route.navigateByUrl('/add-album');
  }


  doRefresh(event) {
    setTimeout(() => {
      this.loadAlbums();
      event.target.complete();
    }, 500);
  }


  loadData($event: any) {
    
  }
}

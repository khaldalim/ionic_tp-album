import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumService} from '../services/album.service';
import {Album} from '../modeles/album';
import {PhotoService} from '../services/photo.service';
import {Photo} from '../modeles/photo';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.page.html',
  styleUrls: ['./view-album.page.scss'],
})
export class ViewAlbumPage implements OnInit {

  album: Album;
  listPhotos: Photo[];
 idAlbum = this.acR.snapshot.params.id;
  constructor(private acR: ActivatedRoute, private AlbumStorage: AlbumService, private route: Router, private photoService: PhotoService) {
  }

  ngOnInit() {
    this.album = new Album();
    this.loadAlbumData();
  }

  ionViewWillEnter() {
    this.loadAlbumData();
    this.loadPhotos();
  }

  afficherPhoto(id: number) {
    this.route.navigateByUrl('/view-photo/' + id);
  }

  loadAlbumData() {
    this.AlbumStorage.getOne(this.idAlbum).subscribe(data => this.album = data);

  }

  loadPhotos() {
    this.photoService.getAllByAlbumId(this.idAlbum).subscribe(dataPhoto => this.listPhotos = dataPhoto);
    console.log(this.listPhotos);
  }
}

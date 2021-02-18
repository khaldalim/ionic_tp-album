import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumService} from '../services/album.service';
import {Album} from '../modeles/album';
import {PhotoService} from '../services/photo.service';
import {Photo} from '../modeles/photo';
import {User} from '../modeles/user';


@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.page.html',
  styleUrls: ['./view-album.page.scss'],
})
export class ViewAlbumPage implements OnInit {

  album: Album;
  auteur: User;
  listPhotos: Photo[];
  idAlbum = this.acR.snapshot.params.id;

  constructor(private acR: ActivatedRoute, private AlbumStorage: AlbumService, private route: Router, private photoService: PhotoService) {
  }

  ngOnInit() {
    this.album = new Album();
    this.auteur = new User();
  }

  ionViewWillEnter() {
    this.loadAlbumData();
  }

  afficherPhoto(id: number) {
    this.route.navigateByUrl('/view-photo/' + id);
  }

  loadAlbumData() {
    this.AlbumStorage.getOne(this.idAlbum).subscribe(data => {
      this.album = data;
      this.loadAuteurData(this.album.userId);
    });
    this.loadPhotos();
  }

  loadAuteurData(auteurId: number) {
    this.AlbumStorage.GetAuteur(auteurId).subscribe(auteurData => {
      this.auteur = auteurData;
        });
  }

  loadPhotos() {
    this.photoService.getAllPhotosByAlbumId(this.idAlbum).subscribe(dataPhoto => this.listPhotos = dataPhoto);
  }

  UpdateAlbumForm(album: Album) {
    this.route.navigate(['/update-album/' + album.id]);
  }

  delete(album: Album) {
    this.AlbumStorage.delete(album);
    this.route.navigate(['/home']);
  }
}

import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../services/album.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Album} from '../modeles/album';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.page.html',
  styleUrls: ['./album-form.page.scss'],
})
export class AlbumFormPage implements OnInit {

  album: Album;

  constructor(private albumService: AlbumService, private acR: ActivatedRoute, private route: Router) {
  }

  ngOnInit() {
    // user vide
    this.album = new Album();
    // si update => le remplir grace à l'objet user récupé avec "selectOne" avec comme parametre l'ID
    if (this.acR.snapshot.params.id != null) {
      this.albumService.getOne(this.acR.snapshot.params.id).subscribe(data => {
        this.album.userId = data.userId;
        this.album.id = data.id;
        this.album.title = data.title;
      });
    }
  }

  saveAlbum() {
    if (this.acR.snapshot.params.id != null) {
      this.albumService.update(this.album);
    } else {
      this.albumService.create(this.album);
    }

    this.route.navigate(['/home']);
  }

}

import {Component, OnInit} from '@angular/core';
import {Photo} from '../modeles/photo';
import {ActivatedRoute, Router} from '@angular/router';
import {PhotoService} from '../services/photo.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.page.html',
  styleUrls: ['./photo-form.page.scss'],
})
export class PhotoFormPage implements OnInit {

  photo: Photo;

  constructor(private acR: ActivatedRoute, private photoService: PhotoService, private route: Router, private navCtrl: NavController) {
  }

  ngOnInit() {
    // user vide
    this.photo = new Photo();
    // si update => le remplir grace à l'objet user récupé avec "selectOne" avec comme parametre l'ID
    this.photoService.getOne(this.acR.snapshot.params.id).subscribe(data => {
      this.photo.albumId = data.albumId;
      this.photo.id = data.id;
      this.photo.title = data.title;
      this.photo.url = data.url;
      this.photo.thumbnailUrl = data.thumbnailUrl;
    });
  }

  savePhoto() {
    this.photoService.update(this.photo);
    this.navCtrl.back();
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import {PhotoService} from '../services/photo.service';
import {Photo} from '../modeles/photo';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.page.html',
  styleUrls: ['./view-photo.page.scss'],
})
export class ViewPhotoPage implements OnInit {

  photo: Photo;
  idPhoto = this.acR.snapshot.params.id;


  constructor(private acR: ActivatedRoute, private route: Router, private photoService: PhotoService, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.photo = new Photo();
    this.loadPhotoData();
  }

  ionViewWillEnter() {
    this.loadPhotoData();
  }

  loadPhotoData() {
   this.photoService.getOne(this.idPhoto).subscribe(data => this.photo = data);
  }


  delete(photo: Photo) {
    this.photoService.delete(photo);
    this.navCtrl.back();
  }

  updatePhoto(photo: Photo) {
    this.route.navigate(['/update-photo/' + photo.id]);

  }
}

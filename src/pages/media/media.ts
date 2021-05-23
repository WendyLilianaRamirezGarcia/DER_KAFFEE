import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {

	 private _dataCards:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._dataCards = [
       {title: "Video 1", video: "buenosdias.mp4",     descripcion: "Video cafe 1", portada: "poster.jpg"},
       {title: "Video 2", video: "cafespot.mp4",       descripcion: "Video cafe 2", portada: "cafe1.jpg"},
       {title: "Video 3", video: "coffee.mp4",         descripcion: "Video cafe 3", portada: "cafe2.jpg"},
       {title: "Video 4", video: "Cafesito.mp4",  descripcion: "Video cafe 4", portada: "cafe3.jpg"},
       {title: "Video 5", video: "humocafe.mp4",  descripcion: "Video cafe 5", portada: "cafe4.jpg"},

    ];



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }

}

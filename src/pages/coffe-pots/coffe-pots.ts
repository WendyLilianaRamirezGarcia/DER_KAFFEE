import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-coffe-pots',
  templateUrl: 'coffe-pots.html',
})
export class CoffePotsPage {

	private _dataCards5:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
   this._dataCards5 = [
    {title: "Mapa 1", image: "mapa.jpg",         },
    {title: "Mapa 2", image: "mapa1.jpg",         },
  
    ];
  } 


  ionViewDidLoad() {
    console.log('ionViewDidLoad CoffePotsPage');
  }

}

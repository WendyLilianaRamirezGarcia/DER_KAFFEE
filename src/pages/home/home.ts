import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailshomePage} from '../detailshome/detailshome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	private _dataCards: any;
	private _detailshome: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
this._detailshome = DetailshomePage; 

this._dataCards =  [

{title:"Imagen 1", image:"adult-attractive.png",            descripcion: "Descripcion 1"},
{title:"Imagen 2", image:"aroma-art-beverage.png",          descripcion: "Descripcion 2"},
{title:"Imagen 3", image:"art-blur-cappuccino.png",         descripcion: "Descripcion 3"},
{title:"Imagen 4", image:"attractive-bar-barista.png",      descripcion: "Descripcion 4"},
{title:"Imagen 5", image:"beverage-coffee-computer.png",    descripcion: "Descripcion 5"},

];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  loadDetails(currentInfo){
this.navCtrl.push(this._detailshome,{ details: currentInfo} );

  }

}

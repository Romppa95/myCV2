import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Band } from '../../models/band.model';
import { SongsService } from '../../services/songs.service';



@IonicPage()
@Component({
  selector: 'page-add-band',
  templateUrl: 'add-band.html',
})
export class AddBandPage {

  band: Band = {
    name: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private regBand: SongsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBandPage');
  }

  addBand(band: Band) {
    this.regBand.addBand(band).then(ref => {
      this.navCtrl.setRoot("SongsPage", {key: ref.key});
    });
  }

}
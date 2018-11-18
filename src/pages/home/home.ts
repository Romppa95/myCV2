import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SongsService } from '../../services/songs.service'
import {Observable } from 'rxjs/Observable';
import { AboutPage } from '../../pages/about/about';
import { SongsPage } from '../../pages/songs/songs';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  gotoAbout(){
    this.navCtrl.push(AboutPage);
  }

  gotoSongs(){
    this.navCtrl.push(SongsPage);

}
}
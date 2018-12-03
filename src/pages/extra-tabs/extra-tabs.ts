import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-extra-tabs',
  templateUrl: 'extra-tabs.html',
})
export class ExtraTabsPage {

  tab1 = 'CurriculumPage';
  tab2 = 'ContactPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtraTabsPage');
  }

}

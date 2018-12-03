import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-skills-tabs',
  templateUrl: 'skills-tabs.html',
})
export class SkillsTabsPage {
  tab1 = 'SoftPage';
  tab2 = 'TechPage';

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsTabsPage');
  }

  
}

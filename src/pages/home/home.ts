import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable } from 'rxjs/Observable';
import { AboutPage } from '../../pages/about/about';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any, openTab? : any}>;
  rootPage = 'ProfileTabsPage';
  constructor(public navCtrl: NavController, ) {
  // navigation 
   this.pages = [
      { title: 'Home', component: 'ProfileTabsPage' },
      { title: 'My skills', component: 'SkillsTabsPage' },

      { title: 'Projects', component: 'ProjectTabsPage' },
      {title: 'Extra & contact', component: 'ExtraTabsPage'},
      {title: 'Log out', component: 'LoginPage'}
      
      
    ];
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  
  }

  openPage(page) {
    this.nav.setRoot(page.component, { openTab: page.openTab });
  }


}

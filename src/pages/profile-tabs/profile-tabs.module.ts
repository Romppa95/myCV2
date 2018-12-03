import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileTabsPage } from './profile-tabs';

@NgModule({
  declarations: [
    ProfileTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileTabsPage),
  ],
})
export class ProfileTabsPageModule {}

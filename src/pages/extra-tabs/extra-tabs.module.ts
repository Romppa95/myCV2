import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExtraTabsPage } from './extra-tabs';

@NgModule({
  declarations: [
    ExtraTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExtraTabsPage),
  ],
})
export class ExtraTabsPageModule {}

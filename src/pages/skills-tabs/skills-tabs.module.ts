import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillsTabsPage } from './skills-tabs';

@NgModule({
  declarations: [
    SkillsTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SkillsTabsPage),
  ],
})
export class SkillsTabsPageModule {}

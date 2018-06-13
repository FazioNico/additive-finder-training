import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs.routing';
import { TabsPageComponent } from './containers';
import { IonicModule } from '@ionic/angular';

const CONTAINERS = [
  TabsPageComponent
];
const COMPONENTS = [
];

@NgModule({
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule
  ],
  declarations: [
    ...CONTAINERS,
    ...COMPONENTS
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsModule { }

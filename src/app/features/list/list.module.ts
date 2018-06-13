import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list.routing';
import { IonicModule } from '@ionic/angular';
import { ListPageComponent } from './containers';

const CONTAINERS = [
  ListPageComponent
];
const COMPONENTS = [

];

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    IonicModule
  ],
  declarations: [
    ...CONTAINERS,
    ...COMPONENTS
  ]
})
export class ListModule { }

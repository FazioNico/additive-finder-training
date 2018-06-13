import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search.routing';
import { SearchPageComponent } from './containers';
import { IonicModule } from '@ionic/angular';

const CONTAINERS = [
  SearchPageComponent
];
const COMPONENTS = [
];

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    IonicModule
  ],
  declarations: [
    ...CONTAINERS,
    ...COMPONENTS
  ]
})
export class SearchModule { }

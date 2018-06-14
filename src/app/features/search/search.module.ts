import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search.routing';
import { SearchPageComponent } from './containers';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

const CONTAINERS = [
  SearchPageComponent
];
const COMPONENTS = [
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    IonicModule
  ],
  declarations: [
    ...CONTAINERS,
    ...COMPONENTS
  ]
})
export class SearchModule { }

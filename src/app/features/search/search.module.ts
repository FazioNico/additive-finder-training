import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search.routing';
import { SearchPageComponent } from './containers';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

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
    SharedModule,
    IonicModule
  ],
  declarations: [
    ...CONTAINERS,
    ...COMPONENTS
  ]
})
export class SearchModule { }

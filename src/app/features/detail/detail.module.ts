import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail.routing';
import { DetailPageComponent } from './containers/detail-page/detail-page.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';

const CONTAINERS = [
  DetailPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    DetailRoutingModule
  ],
  declarations: [
    ...CONTAINERS
  ]
})
export class DetailModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericHttpService } from './services/http/generic-http.service';
import { HttpClientModule } from '@angular/common/http';
import { AdditiveService } from './services/additive/additive.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    GenericHttpService,
    AdditiveService
  ],
  exports: [CommonModule]
})
export class SharedModule { }

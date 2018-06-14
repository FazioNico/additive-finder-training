import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericHttpService } from './services/http/generic-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [GenericHttpService],
  exports: [CommonModule]
})
export class SharedModule { }

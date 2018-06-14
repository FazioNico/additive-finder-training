import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'detail',
    loadChildren: './features/detail/detail.module#DetailModule'
  },
  {
    path: '',
    loadChildren: './features/tabs/tabs.module#TabsModule'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

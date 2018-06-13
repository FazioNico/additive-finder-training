import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPageComponent } from './containers';

const routes: Routes = [
  {
    path: 'index',
    component: TabsPageComponent,
    children: [
      {
        path: 'search',
        outlet: 'search',
        loadChildren: '../search/search.module#SearchModule'
      },
      {
        path: 'list',
        outlet: 'list',
        loadChildren: '../list/list.module#ListModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/index/(search:search)'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }

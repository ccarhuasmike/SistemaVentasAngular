import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "../app/view/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: '../app/view/home/home.module#HomeModule'
  },
  // {
  //   path: 'about',
  //   loadChildren: '../app/view/about/about.module#AboutModule'
  // },
  // {
  //   path: 'DashboardAnuncion',
  //   loadChildren: '../app/view/dashboardAnuncio/dashboardanucion.module#DashboadAnuncioModule'
  // },
  {
    path: 'not-found',
    component: NotFoundComponent
  },

  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

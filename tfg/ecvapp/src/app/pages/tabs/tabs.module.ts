import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {path: 'principal', loadChildren: '../principal/principal.module#PrincipalPageModule'},
      {path: 'medicacion', loadChildren: '../medicacion/medicacion.module#MedicacionPageModule'},
      {path: 'recomendaciones', loadChildren: '../recomendaciones/recomendaciones.module#RecomendacionesPageModule'},
      {path: 'vincular', loadChildren: '../vincular/vincular.module#VincularPageModule'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

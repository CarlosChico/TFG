import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

import { IonicModule } from '@ionic/angular';

import { RecomendacionesPage } from './recomendaciones.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendacionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [RecomendacionesPage]
})
export class RecomendacionesPageModule {}

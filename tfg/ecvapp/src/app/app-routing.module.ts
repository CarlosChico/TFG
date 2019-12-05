import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'principal', loadChildren: './pages/principal/principal.module#PrincipalPageModule' },
  { path: 'medicacion', loadChildren: './pages/medicacion/medicacion.module#MedicacionPageModule' },
  { path: 'recomendaciones', loadChildren: './pages/recomendaciones/recomendaciones.module#RecomendacionesPageModule' },
  { path: 'vincular', loadChildren: './pages/vincular/vincular.module#VincularPageModule' },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  { path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

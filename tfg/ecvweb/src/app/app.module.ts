import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';

import { DatosService } from './datos.service';
import { AboutComponent } from './about/about.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PacientesInfoComponent } from './components/pacientes-info/pacientes-info.component';
import { EnfermedadPadecidaComponent } from './components/enfermedad-padecida/enfermedad-padecida.component';
import { RitmosComponent } from './components/ritmos/ritmos.component';
import { EnfermedadesComponent } from './components/enfermedades/enfermedades.component';
import { MedicacionComponent } from './components/medicacion/medicacion.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';
import { NuevaMedicacionComponent } from './components/nueva-medicacion/nueva-medicacion.component';
import { ModificarMedicacionComponent } from './components/modificar-medicacion/modificar-medicacion.component';
import { NuevaEnfermedadComponent } from './components/nueva-enfermedad/nueva-enfermedad.component';
import { NuevaRecomendacionComponent } from './components/nueva-recomendacion/nueva-recomendacion.component';
import { ModificarRecomendacionComponent } from './components/modificar-recomendacion/modificar-recomendacion.component';

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'pacientes_info', component: PacientesInfoComponent},
  {path: 'medicaciones', component: MedicacionComponent},
  {path: 'nueva_medicacion', component: NuevaMedicacionComponent},
  {path: 'modificar_medicacion', component: ModificarMedicacionComponent},
  {path: 'enfermedades', component: EnfermedadesComponent},
  {path: 'nueva_enfermedad', component: NuevaEnfermedadComponent},
  {path: 'recomendaciones', component: RecomendacionesComponent},
  {path: 'nueva_recomendacion', component: NuevaRecomendacionComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    CabeceraComponent,
    MenuComponent,
    PacientesComponent,
    LoginComponent,
    RegistroComponent,
    PacientesInfoComponent,
    EnfermedadPadecidaComponent,
    RitmosComponent,
    EnfermedadesComponent,
    MedicacionComponent,
    RecomendacionesComponent,
    NuevaMedicacionComponent,
    ModificarMedicacionComponent,
    NuevaEnfermedadComponent,
    NuevaRecomendacionComponent,
    ModificarRecomendacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

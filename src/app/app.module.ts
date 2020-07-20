import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotifikacijeComponent } from './notifikacije/notifikacije.component';
import { NotifikacijeItemComponent } from './notifikacije/notifikacije-item/notifikacije-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Routes , RouterModule } from '@angular/router';
import { NotfikacijeService } from './notifikacije/notifikacije.service';
import { NotifikacijeDetaljiComponent } from './notifikacije/notifikacije-detalji/notifikacije-detalji.component';
import { NotifikacijeStartComponent } from './notifikacije/notifikacije-start/notifikacije-start.component';
import { FooterComponent } from './footer/footer.component';
import { LinijeComponent } from './linije/linije.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { QRCodeModule } from 'angularx-qrcode';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LinijeDetaljiComponent } from './linije/linije-detalji/linije-detalji.component';
import { SjedistaComponent } from './linije/linije-detalji/sjedista/sjedista.component';
import { OcjeneComponent } from './ocjene/ocjene.component';
import { OcjenaItemComponent } from './ocjene/ocjena-item/ocjena-item.component';
import { OcjeneFinalComponent } from './ocjene/ocjene-final/ocjene-final.component';
import { AuthComponent } from './auth/auth.component';
import { BasicAuthInterceptor, ErrorInterceptor, AuthGuard } from './auth/_helper';
import { RezervacijeComponent } from './rezervacije/rezervacije.component';
import { RezervacijeItemComponent } from './rezervacije/rezervacije-item/rezervacije-item.component';
import { RezervacijeDetaljiComponent } from './rezervacije/rezervacije-detalji/rezervacije-detalji.component';
import { ProfilComponent } from './profil/profil.component';
import { RezervacijeStartComponent } from './rezervacije/rezervacije-start/rezervacije-start.component';

const appRoutes : Routes = [
  {path:'', redirectTo: '/notifikacije',pathMatch :'full'},
  {path:'notifikacije', component : NotifikacijeComponent, children : [
    {path:'',component: NotifikacijeStartComponent},
    {path:':id',component: NotifikacijeDetaljiComponent}
  ]},
  {path:'linije',component:LinijeComponent,children:[
    {path:':id',component:LinijeDetaljiComponent}
  ]},
  {path:'ocjene', component:OcjeneComponent, canActivate : [AuthGuard]},
  {path:'auth', component : AuthComponent}, 
  {path:'rezervacije', component : RezervacijeComponent, canActivate : [AuthGuard],children : [
    {path:'', component : RezervacijeStartComponent},
    {path :':id',component : RezervacijeDetaljiComponent},
    
  ]
},
{path:'profil', component : ProfilComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotifikacijeComponent,
    NotifikacijeItemComponent,
    NotifikacijeDetaljiComponent,
    NotifikacijeStartComponent,
    FooterComponent,
    LinijeComponent,
    LinijeDetaljiComponent,
    SjedistaComponent,
    OcjeneComponent,
    OcjenaItemComponent,
    OcjeneFinalComponent,
    AuthComponent,
    RezervacijeComponent,
    RezervacijeItemComponent,
    RezervacijeDetaljiComponent,
    ProfilComponent,
    RezervacijeStartComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSliderModule,
    MatProgressBarModule,
    QRCodeModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [NotfikacijeService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }

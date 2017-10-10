import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { LoginComponent } from './content/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { CalendarComponent } from './content/calendar/calendar.component';
import { AuthGuard } from './series/guards/auth.guard';
import { UsersComponent } from './content/users/users.component';
import { UsersService } from './series/services/users.service';
import { AddUserComponent } from './content/users/add-user/add-user.component';
import { NotfoundComponent } from './content/notfound/notfound.component';
import { RoleformatPipe } from './series/pipes/roleformat.pipe';
import { EditorGuard } from './series/guards/editor.guard';
import { AuthService } from './series/services/auth.service';

import { AdminGuard } from './series/guards/admin.guard';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { Componente5Component } from './componente5/componente5.component';
import { Componente6Component } from './componente6/componente6.component';
import { Componente7Component } from './componente7/componente7.component';
import { Componente8Component } from './componente8/componente8.component';
import { Componente9Component } from './componente9/componente9.component';
import { PipeExamenPipe } from './series/pipes/pipe-examen.pipe';
import { AgmCoreModule } from '@agm/core';
import {ServicioMapaService} from './series/services/servicio-mapa.service';

const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAwh5xWgPTdBxjWvalxGbftTzl3KiJc8WM',
    authDomain: 'application-cap.firebaseapp.com',
    databaseURL: 'https://application-cap.firebaseio.com',
    projectId: 'application-cap',
    storageBucket: 'application-cap.appspot.com',
    messagingSenderId: '983418984510'
  }
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CalendarComponent,
    UsersComponent,
    AddUserComponent,
    NotfoundComponent,
    RoleformatPipe,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component,
    Componente6Component,
    Componente7Component,
    Componente8Component,
    Componente9Component,
    PipeExamenPipe
       
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9GyPfCfXNwSB0A10zlbhCtVfqFZFIov0'
    })
  ],
  providers: [AuthGuard, UsersService, EditorGuard, AuthService, AdminGuard,ServicioMapaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

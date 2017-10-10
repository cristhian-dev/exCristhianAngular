import { AdminGuard } from './series/guards/admin.guard';
import { EditorGuard } from './series/guards/editor.guard';
import { NotfoundComponent } from './content/notfound/notfound.component';
import { AddUserComponent } from './content/users/add-user/add-user.component';
import { UsersComponent } from './content/users/users.component';
import { AuthGuard } from './series/guards/auth.guard';
import { CalendarComponent } from './content/calendar/calendar.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { LoginComponent } from './content/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Componente9Component} from './componente9/componente9.component';
import {Componente6Component} from './componente6/componente6.component';
import {Componente3Component} from './componente3/componente3.component';
import { Componente7Component } from './componente7/componente7.component';



const routes: Routes = [
  {
    path: '',
    component :Componente6Component, 
  },
  {
    path: 'componente9',
    component: Componente9Component,
    },
    {
      path: 'componente3',
      component: Componente3Component,
      },
    {
        path: 'componente7',
        component: Componente7Component,
    },
    {
      path: 'componente6',
      component: Componente6Component,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'calendar',
    component: CalendarComponent,
    canActivate : [AuthGuard]
  },
 
  {
    path: 'users',
    component : UsersComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'users/add',
    component : AddUserComponent,
    canActivate : [AuthGuard]
  },
  {
    path : '**',
    component: NotfoundComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
//modulos
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//mis componentes creados
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListSalasComponent } from './components/list-salas/list-salas.component';
import { AddEditSalaComponent } from './components/add-edit-sala/add-edit-sala.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { timeout } from 'rxjs';
import { ReservaSalaComponent } from './components/reserva-sala/reserva-sala.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListSalasComponent,
    AddEditSalaComponent,
    ProgressBarComponent,
    ReservaSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom.right',
      preventDuplicates: true,
    }

    ),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

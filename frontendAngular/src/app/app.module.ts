import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListSalasComponent } from './components/list-salas/list-salas.component';
import { AddEditSalaComponent } from './components/add-edit-sala/add-edit-sala.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListSalasComponent,
    AddEditSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

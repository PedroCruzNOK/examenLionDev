import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditSalaComponent } from './components/add-edit-sala/add-edit-sala.component';
//importamos nuestro componente de listas de salas
import { ListSalasComponent } from './components/list-salas/list-salas.component';

const routes: Routes = [
  //agregamos la ruta para el listado de salas
  {path: '', component: ListSalasComponent},
  //agregamos la ruta para agregar una sala
  {path: 'agregar', component: AddEditSalaComponent},
  {path: 'editar/:id', component: AddEditSalaComponent },
  {path: '**', redirectTo: '', pathMatch:'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

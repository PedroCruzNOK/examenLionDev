import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/interfaces/sala';

@Component({
  selector: 'app-list-salas',
  templateUrl: './list-salas.component.html',
  styleUrls: ['./list-salas.component.css']
})
export class ListSalasComponent {
  listSalas: Sala[] = [
    {
      sala: 'sala',
      descripcion: 'hola',
      ubicacion: 'ubicacion',
      capacidad: 25,
      identificador: 'identi5',
      estado: 'Disponible',
      fechainicial: '2022/12/12 10:20:50',
      fechafinal: '2022/12/12 10:20:50',
      solicitante: 'juan'

    },
    {
      sala: 'sala dos',
      descripcion: 'hola',
      ubicacion: 'ubicacion',
      capacidad: 25,
      identificador: 'identi5',
      estado: 'Disponible',
      fechainicial: '2022/12/12 10:20:50',
      fechafinal: '2022/12/12 10:20:50',
      solicitante: 'juan'

    }
  ]




}

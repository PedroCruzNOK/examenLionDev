import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Sala } from 'src/app/interfaces/sala';

@Component({
  selector: 'app-add-edit-sala',
  templateUrl: './add-edit-sala.component.html',
  styleUrls: ['./add-edit-sala.component.css']
})
export class AddEditSalaComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      sala: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(8)]],
      ubicacion: ['', Validators.required],
      capacidad: ['', Validators.required],
      identificador: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }
  agregarSala(){
    const sala: Sala = {
      sala: this.form.value.sala,
      descripcion: this.form.value.descripcion,
      ubicacion: this.form.value.ubicacion,
      capacidad: this.form.value.capacidad,
      identificador: this.form.value.identificador,
      estado: 'null',
      fechainicial: 'null',
      fechafinal: 'null',
      solicitante: 'null'
    }
    console.log(sala);
  }


}

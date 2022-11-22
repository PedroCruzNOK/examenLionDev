import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivateRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sala } from 'src/app/interfaces/sala';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-add-edit-sala',
  templateUrl: './add-edit-sala.component.html',
  styleUrls: ['./add-edit-sala.component.css']
})
export class AddEditSalaComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  constructor(private fb: FormBuilder,
    private _salaService: SalaService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivateRoute
    ){

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
      estado: 'DESOCUPADO',
      fechainicial: "2020/12/01 10:28:00",
      fechafinal: "2020/12/01 10:28:00",
      solicitante: "null"
    }
    this.loading = true;
    this._salaService.guardarSala(sala).subscribe(()=>{
      this.loading = false;
      this.toastr.success(`La Sala ${sala.sala} fue guardada de forma correcta`, 'sala creada')
      this.router.navigate(['/']);
    })
  }


}

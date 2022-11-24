import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
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
  id: number;
  operacion: string = 'AGREGAR ';

  constructor(private fb: FormBuilder,
    private _salaService: SalaService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
    ){

    this.form = this.fb.group({
      sala: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(8)]],
      ubicacion: ['', Validators.required],
      capacidad: ['', Validators.required],
      identificador: ['', Validators.required]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
    if(this.id != 0){
      this.operacion = 'EDITAR ';
      this.getOneSala(this.id);


    }

  }
  getOneSala(id: number){
    this.loading = true;
    this._salaService.getOneSala(id).subscribe((data: Sala) =>{
      this.loading = false;
      this.form.patchValue({
        sala: data.sala,
        descripcion: data.descripcion,
        ubicacion: data.ubicacion,
        capacidad: data.capacidad,
        identificador: data.identificador

      })
    } )
  }

  agregarSala(){
    const sala: any = {

      sala: this.form.value.sala,
      descripcion: this.form.value.descripcion,
      ubicacion: this.form.value.ubicacion,
      capacidad: this.form.value.capacidad,
      identificador: this.form.value.identificador,
      estado: 'DESOCUPADO',
      fechainicial: '2025/12/12 12:00:00',
      fechafinal: "2025/12/12 12:00:00",
      solicitante: 'null'

    }

    this.loading = true;
    if(this.id !==0){

      sala.id = this.id
      this._salaService.updateSala(this.id, sala).subscribe(()=>{
        this.toastr.info(`La Sala ${sala.sala} fue actualizada de forma correcta`, 'sala actualizada')
      });
      this.loading = false;
      this.router.navigate(['/']);
    }else{

      this._salaService.guardarSala(sala).subscribe(()=>{
        this.toastr.success(`La Sala ${sala.sala} fue guardada de forma correcta`, 'sala creada');
        this.loading = false;
        this.router.navigate(['/']);
      })
      }


  }


}

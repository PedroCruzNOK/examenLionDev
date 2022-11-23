import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sala } from 'src/app/interfaces/sala';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-reserva-sala',
  templateUrl: './reserva-sala.component.html',
  styleUrls: ['./reserva-sala.component.css'],
})
export class ReservaSalaComponent implements OnInit {
  form1: FormGroup;
  loading: boolean = false;
  id: number;

  constructor(
    private fb: FormBuilder,
    private _salaService: SalaService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.form1 = this.fb.group({
      sala: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(8)]],
      ubicacion: ['', Validators.required],
      capacidad: ['', Validators.required],
      identificador: ['', Validators.required],
      fechainicial: ['', Validators.required],
      fechafinal: ['', Validators.required],
      solicitante: ['', Validators.required],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.getOne1Sala(this.id);
    }
  }
  getOne1Sala(id: number) {
    this.loading = true;
    this._salaService.getOne1Sala(id).subscribe((data: Sala) => {
      this.loading = false;
      this.form1.patchValue({
        sala: data.sala,
        descripcion: data.descripcion,
        ubicacion: data.ubicacion,
        capacidad: data.capacidad,
        identificador: data.identificador,
      });
    });
  }

  agregar1Sala() {
    const sala: any = {
      sala: this.form1.value.sala,
      estado: 'OCUPADO',
      fechainicial: this.form1.value.fechainicial,
      fechafinal: this.form1.value.fechafinal,
      solicitante: this.form1.value.solicitante,
    };

    this.loading = true;
    sala.id = this.id;

    const initHour = new Date(sala.fechainicial).getHours() + 2;
    const finalHour = new Date(sala.fechafinal).getHours();

    const initMin = new Date(sala.fechainicial).getMinutes();
    const finalMin = new Date(sala.fechafinal).getMinutes();

    const iniDay = new Date(sala.fechainicial).getDay();
    const finalDay = new Date(sala.fechainicial).getDay();


    if (sala.fechafinal < sala.fechainicial) {
      this.toastr.warning(`El dia Final no puede ser menor que el inicial`, 'Eror en fecha Final');
    } else if (finalHour > initHour || (finalHour == initHour && finalMin >  initMin) || finalDay > iniDay) {
      this.toastr.warning(`La Sala ${sala.sala} no se pudo reservar ya que la fecha final no debe de exceder las dos horas`, 'sala no se pudo reservar');
    } else {
      this._salaService.update1Sala(this.id, sala).subscribe(() => {
        this.toastr.success(
          `La Sala ${sala.sala} fue reservada de forma correcta`,
          'sala Reservada'
        );
        this._salaService.getSalas();
        this.router.navigate(['/']);
      });
    }

    this.loading = false;
  }
}

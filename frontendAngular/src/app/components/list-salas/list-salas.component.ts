import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Sala } from 'src/app/interfaces/sala';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-list-salas',
  templateUrl: './list-salas.component.html',
  styleUrls: ['./list-salas.component.css']
})
export class ListSalasComponent implements OnInit{
  listSalas: Sala[] = []
  loading: boolean = false;

  constructor(private _salaService: SalaService, private toastr: ToastrService){

  }
  ngOnInit(): void {
    this.getSalas();
  }
  getSalas(){
    this.loading = true;
      this._salaService.getSalas().subscribe((data: Sala [])=>{
        this.listSalas=data;
        this.loading = false;
      })
  }
  borrarSala(id: number){
    this.loading = true;
    this._salaService.borrarSala(id).subscribe(() =>{
      this.getSalas();
      this.toastr.warning('La sala fue eliminada con exito', 'Sala eliminada')
    })
  }
}

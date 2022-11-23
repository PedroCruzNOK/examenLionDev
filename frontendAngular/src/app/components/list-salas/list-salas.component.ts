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
        data.forEach(item => {

          const hoy = new Date();
          const fecha = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
          const hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
          const tiempo = fecha+' '+hora;



          if(item.fechafinal > tiempo){
            console.log(tiempo);
            console.log(item.fechafinal)
          }
        });

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
  liberarSala(id: number){
    this.loading = true;
    const sala: any = {
      estado: 'DESOCUPADO'
    }
    this._salaService.liberarSala(id, sala).subscribe(() =>{
      this.getSalas();
      this.toastr.info('La sala fue liberada', 'Sala liberada')
    })

  }
}

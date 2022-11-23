import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sala } from '../interfaces/sala';

@Injectable({
  providedIn: 'root'
})
  export class SalaService {
    private myAppUrl: string;
    private myApiUrl: string;
  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'salas/';
  }
  getSalas(): Observable<Sala[]>{
    return this.http.get<Sala[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  borrarSala(id:number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }
  liberarSala(id:number, sala:Sala): Observable<void>{
    return this.http.patch<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, sala)
  }
  guardarSala(sala: Sala): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,sala)
  }
  getOneSala(id: number): Observable<Sala>{
    return this.http.get<Sala>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
  updateSala(id: number, sala: Sala): Observable<void>{
    return  this.http.patch<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, sala);
  }
}

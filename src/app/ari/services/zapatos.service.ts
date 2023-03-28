import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zapateria } from '../interfaces/modelos.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZapatosService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }
  getModelos(): Observable<Zapateria[]>{
    return this.http.get<Zapateria[]>(`http://localhost:3000/zapatos`);
  }
  getModeloPorId(id: string):Observable<Zapateria> {
    return this.http.get<Zapateria>(`http://localhost:3000/zapatos/${id}`);
  }
  getSugerencias( termino: string ): Observable<Zapateria[]> {
    return this.http.get<Zapateria[]>(`http://localhost:3000/zapatos?q=${ termino }&_limit=6`);
  }
  agregarModelo( zapato: Zapateria ): Observable<Zapateria> {
    return this.http.post<Zapateria>(`${ this.baseUrl }/zapatos`, zapato );
  }

  actualizarModelo( zapato: Zapateria ): Observable<Zapateria> {
    return this.http.put<Zapateria>(`${ this.baseUrl }/zapatos/${ zapato.id }`, zapato );
  }

  borrarModelo( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/zapatos/${ id }`);
  }

}

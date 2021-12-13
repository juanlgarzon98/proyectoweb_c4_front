import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloUsuarios } from '../modelos/usuarios';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url="http://localhost:3000";
  token: string="";
  constructor(private http: HttpClient,
    private seguridadServicio: SeguridadService
    
    ) {this.token=this.seguridadServicio.ObtenerToken();}


ObtenerRegistros(): Observable<ModeloUsuarios[]>{
  return this.http.get<ModeloUsuarios[]>(this.url+"/usuarios",{
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })});
} 

CrearUsuario(usuario: ModeloUsuarios): Observable<ModeloUsuarios>{
  return this.http.post<ModeloUsuarios>(this.url+"/usuarios",usuario);

}

ActualizarUsuario(id: string,usuario: ModeloUsuarios): Observable<ModeloUsuarios>{
  return this.http.put<ModeloUsuarios>(this.url+"/usuarios/"+id,usuario,{
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })});

}

EliminarUsuario(id: string): Observable<any>{
  return this.http.delete(this.url+"/usuarios/"+id,{
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })});

}

ConsultarUsuarioId(id:string): Observable<ModeloUsuarios>{
  return this.http.get<ModeloUsuarios>(this.url+"/usuarios/"+id);
}

}

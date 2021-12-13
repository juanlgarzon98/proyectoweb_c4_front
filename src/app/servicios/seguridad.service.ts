import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url="http://localhost:3000";

  datosUsuarioEnSesion= new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());
  constructor(private http: HttpClient) {
    this.VerificarSesionActual();
  }
 

  RestaurarPass(correo: string): Observable<any> {
      return this.http.post<any>(this.url+"/restaurarContrasena", {'correo':correo});
}


VerificarSesionActual(){
  let datos=this.ObtenerInformacionSesion();
  if (datos) {
    this.RefescarDatosSesion(datos);
  } 
}

RefescarDatosSesion(datos: ModeloIdentificar){
  this.datosUsuarioEnSesion.next(datos);
}


Identificar(correo: string,clave: string): Observable<ModeloIdentificar> {
  return this.http.post<ModeloIdentificar>(this.url+"/identificarUsuarios", {
    "usuario" :correo,
    "clave": clave
  },{
    headers: new HttpHeaders({})
  }
  
  
  );
}

AlmacenarSesion(datos: ModeloIdentificar){
  datos.estaIdentificado=true;
let stringDatos=JSON.stringify(datos);
localStorage.setItem("datosSesion",stringDatos);
this.RefescarDatosSesion(datos);
}

ObtenerInformacionSesion(){
  let datosString=localStorage.getItem("datosSesion");
  if (datosString) {
    let datos=JSON.parse(datosString);
    return datos;
  } else {
    return null;
  }
  }


  EliminarSesion(){
    localStorage.removeItem("datosSesion");
    this.RefescarDatosSesion(new ModeloIdentificar());
  }

SeHaIniciadoSesion(){
  let datosString=localStorage.getItem("datosSesion");
  return datosString;
}

ObtenerRolSesion(){
  let datosString=localStorage.getItem("datosSesion");
  if (datosString) {
    let datos=JSON.parse(datosString);
    return datos.datos.rol;
  } else {
    return '';
  }
  
}

ObtenerDatosUsuariosEnSesion(){
  return this.datosUsuarioEnSesion.asObservable();
}

ObtenerToken(){
  let datosString=localStorage.getItem("datosSesion");
  if (datosString) {
    let datos=JSON.parse(datosString);
    return datos.tk;
  } else {
    return '';
  }
}
}
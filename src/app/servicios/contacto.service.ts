import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url="http://localhost:3000";
  constructor(private http: HttpClient) {


   }
   
EnviarContacto(nombres: string,mensaje: string,remitente: string): Observable<any> {
  let formData: FormData = new FormData(); 
    formData.append('nombres', nombres);
    formData.append('mensaje', mensaje);
    formData.append('remitente', remitente);
    return this.http.post<any>(this.url+"/contacto", {
      'nombres': nombres,
      'mensaje': mensaje,
      'remitente': remitente
    });
   
   /* return this.http.post(this.url+"/contacto", formData)
        .map((response: Response) => {
            return response;
        }).catch(this.handleError); 
  */
  //return this.http.get<ModelContacto[]>(`${url}/contacto`);
}

}

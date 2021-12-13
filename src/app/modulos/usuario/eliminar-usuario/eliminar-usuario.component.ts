import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {
  id: string='';
  constructor(private router:Router,
    private route:ActivatedRoute,
    private servicioUsuario: UsuariosService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.EliminarUsuario();
  }

  EliminarUsuario(){
    this.servicioUsuario.EliminarUsuario(this.id).subscribe((datos:any) =>{
      alert("Usuario eliminado correctamente");
      this.router.navigate(['usuario/listar-usuarios']);
        },(error:any) =>{
          alert("Error registrando un usuario");
        });

  }

}

import { Component, OnInit } from '@angular/core';
import { ModeloUsuarios } from 'src/app/modelos/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {


  listadoRegistros: ModeloUsuarios[]=[];
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.ListarUsuarios();
  }

ListarUsuarios(){
this.usuarioService.ObtenerRegistros().subscribe((datos:ModeloUsuarios[]) => {
  this.listadoRegistros=datos;

});
}


}

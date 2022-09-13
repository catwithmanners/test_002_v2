import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //variable:
  usuarios: any[] = [
    {
      rut: '11.222.333-4',
      nombre: 'Lalo',
      ap_paterno: 'Cura',
      fecha_nac: '2000-12-24',
      correo: 'administrador@duoc.cl',
      clave: 'administrador',
      tipo_usuario: 'administrador'
    },{
      rut: '18.999.000-1',
      nombre: 'Elvis',
      ap_paterno: 'Tek',
      fecha_nac: '1990-06-10',
      correo: 'alumno@duocuc.cl',
      clave: 'alumno',
      tipo_usuario: 'alumno'
    }
  ];

  constructor() { }

  //métodos:
  addUsuario(usuario) {
    if (this.getUsuario(usuario.rut) == undefined) {
      this.usuarios.push(usuario);
      return true;
    }
    return false;
  }

  getUsuario(rut) {
    return this.usuarios.find(usu => usu.rut == rut);
  }

  getUsuarios() {
    return this.usuarios;
  }

  updateUsuario(usuario) {
    let index = this.usuarios.findIndex(usu => usu.rut == usuario.rut);
    this.usuarios[index] = usuario;
  }

  deleteUsuario(rut) {
    this.usuarios.forEach((usu, index) => {
      if (usu.rut == rut) {
        this.usuarios.splice(index, 1);
      }
    });
  }


  //métodos customer:
  loginUsuario(correo, clave) {
    return this.usuarios.find(usu => usu.correo == correo && usu.clave == clave);
  }
  validarCorreo(correo){
    return this.usuarios.find(usu => usu.correo == correo);
  }
}

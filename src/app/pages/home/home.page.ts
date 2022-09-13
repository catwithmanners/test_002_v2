import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  //Vamos a crear una variable que reciba los datos del usuario desde login:
  usuario: any;

  constructor(private router: Router) {}

  ngOnInit(){
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
    
  }

}

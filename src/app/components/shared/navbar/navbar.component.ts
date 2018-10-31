import { Component, OnInit } from '@angular/core';
import { HeoresService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heoresService:HeoresService, private router:Router) { }

  ngOnInit() {
  }
  
  buscarHeroe(termino){
    this.router.navigate(['/busqueda',termino]);
  }

}

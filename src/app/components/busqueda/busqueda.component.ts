import { Component, OnInit } from '@angular/core';
import { HeoresService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
  heroes: Heroe[] = [];
  termino = "";
  constructor( private _heroesService:HeoresService,
               private router:Router,
               private activatedRoute:ActivatedRoute
            ) { 

   }

  ngOnInit() {
    this.buscarHeroe();
  }
  
  buscarHeroe(){
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(i){
    this.router.navigate(['/heroe',i]);
  }

}




  


  


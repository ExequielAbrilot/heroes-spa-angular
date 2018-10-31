import { Component, OnInit } from '@angular/core';
import { HeoresService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor( private _heroesService:HeoresService, private router:Router) { 

   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeores();
  }

  verHeroe(i){
    this.router.navigate(['/heroe',i]);
  }

}

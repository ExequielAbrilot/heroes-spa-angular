import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeoresService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor(private activatedRoute:ActivatedRoute, private _heoresService:HeoresService, 
    private router:Router) {

    this.activatedRoute.params.subscribe( params =>{
      this.heroe = this._heoresService.getHeore(params['id']);
    } )

  }

  ngOnInit() {
  }

  regresar(lugar){
    this.router.navigate([`/${lugar}`]);
  }

}

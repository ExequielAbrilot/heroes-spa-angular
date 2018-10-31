import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeoresService } from './services/heroes.service';


//Rutas
import { APP_ROUTING } from './app.routes';


//Servicios

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

// Pipe
import { TodoMayuscula } from './pipe/todoMayuscula.pipe';

@NgModule({
  // Componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaComponent,
    HeroeTarjetaComponent,
    TodoMayuscula
  ],
  // Modulos
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  // Servicios
  providers: [ HeoresService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

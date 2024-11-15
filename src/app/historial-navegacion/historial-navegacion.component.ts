import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-historial-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './historial-navegacion.component.html',
  styleUrl: './historial-navegacion.component.css'
})
export class HistorialNavegacionComponent {
  puedeIrAtras: boolean = false;
  puedeIrAlante: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.actualizarEstadoNavedagor();
    });


    this.actualizarEstadoNavedagor();
  }

  irAtras() {
    if (this.puedeIrAtras) {
      window.history.back();
    }
  }

  irAlante() {
    if (this.puedeIrAlante) {
      window.history.forward();
    }
  }

  private actualizarEstadoNavedagor() {

    this.puedeIrAtras = window.history.length > 1;

    this.puedeIrAlante = window.history.length > 1;
  }
}



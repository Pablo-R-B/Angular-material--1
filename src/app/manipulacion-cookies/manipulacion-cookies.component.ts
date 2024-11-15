import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-manipulacion-cookies',
  standalone: true,
  imports: [],
  templateUrl: './manipulacion-cookies.component.html',
  styleUrl: './manipulacion-cookies.component.css'
})
export class ManipulacionCookiesComponent {
  usuario: string | null = null;
  saludo: string = '';

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {

    this.usuario = this.cookieService.get('nombreUsuario');

    if (this.usuario) {
      this.saludo = `¡Bienvenido, ${this.usuario}!`;
    } else {

      this.solicitarNombre();
    }
  }

  solicitarNombre(): void {
    const nombre = prompt("Indica tu nombre");
    if (nombre) {
      this.usuario = nombre;
      this.saludo = `¡Bienvenido, ${this.usuario}!`;
      this.cookieService.set('nombreUsuario', this.usuario, 1);
    }
  }

}

import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-nueva-ventana-redimensionable',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './nueva-ventana-redimensionable.component.html',
  styleUrl: './nueva-ventana-redimensionable.component.css'
})
export class NuevaVentanaRedimensionableComponent {
  nuevaVentana: Window | null = null;
  ancho: number = 0;
  alto: number = 0;

  abrirVentana(): void {
    this.nuevaVentana = window.open('', 'nuevaVentana', 'width=400,height=400,resizable=yes');

    if (this.nuevaVentana) {
      setInterval(() => {
        this.actualozarVentana();
      }, 500);
    }
  }

  actualozarVentana(): void {
    if (this.nuevaVentana) {
      this.ancho = this.nuevaVentana.innerWidth;
      this.alto = this.nuevaVentana.innerHeight;
    }
  }

}

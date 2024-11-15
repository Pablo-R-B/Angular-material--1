import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-nueva-ventana-desplazable',
  standalone: true,
  imports: [
  ],
  templateUrl: './nueva-ventana-desplazable.component.html',
  styleUrl: './nueva-ventana-desplazable.component.css'
})
export class NuevaVentanaDesplazableComponent {
  nuevaVentana: Window | null = null;
  ejeX: number = 100;
  ejeY: number = 100; // Initial Y position
  tamanyo: number = 400; // Size of the window

  abrir(): void {
    this.nuevaVentana = window.open('', 'movableWindow', `width=${this.tamanyo},height=${this.tamanyo},top=${this.ejeY},left=${this.ejeX},resizable=yes`);

    if (this.nuevaVentana) {
      this.nuevaVentana.document.write(`
        <html>
          <head>
            <style>
              body { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
              button { margin: 5px; }
            </style>
          </head>
          <body>
            <h1>Ventana</h1>
            <button onclick="window.opener.moveWindow('arriba')">arriba</button>
            <button onclick="window.opener.moveWindow('abajo')">abajo</button>
            <button onclick="window.opener.moveWindow('izquierda')">izquierda</button>
            <button onclick="window.opener.moveWindow('derecha')">derecha</button>
          </body>
        </html>
      `);
      this.nuevaVentana.document.close();
    }
  }

  moveWindow(direccion: string): void {
    if (this.nuevaVentana) {
      switch (direccion) {
        case 'arriba':
          this.ejeY -= 100;
          break;
        case 'abajo':
          this.ejeY += 100;
          break;
        case 'izquierda':
          this.ejeX -= 100;
          break;
        case 'derecha':
          this.ejeX += 100;
          break;
      }
      this.nuevaVentana.moveTo(this.ejeX, this.ejeY); // Move the window to the new position
    }
  }
}

import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-numero-aleatorio',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './numero-aleatorio.component.html',
  styleUrl: './numero-aleatorio.component.css'
})
export class NumeroAleatorioComponent {
  numeroAleatorio: number | null =null;

  generarAleatorio(): void {
    this.numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  }

}

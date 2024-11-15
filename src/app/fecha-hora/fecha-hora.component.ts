import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha-hora',
  standalone: true,
  imports: [],
  templateUrl: './fecha-hora.component.html',
  styleUrl: './fecha-hora.component.css'
})
export class FechaHoraComponent implements OnInit{
  fechaYhora: string;
  constructor() {
    this.fechaYhora = this.formatearFecha(new Date());
  }

  ngOnInit() {
    setInterval(() => {
      this.fechaYhora = this.formatearFecha(new Date());
    }, 1000);
  }

  formatearFecha(fecha: Date): string {
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anyo = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');

    return `${dia}-${mes}-${anyo} ${horas}:${minutos}:${segundos}`;
  }


}

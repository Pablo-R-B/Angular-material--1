import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";

import {FechaHoraComponent} from './fecha-hora/fecha-hora.component';
import {NumeroAleatorioComponent} from './numero-aleatorio/numero-aleatorio.component';
import {HistorialNavegacionComponent} from './historial-navegacion/historial-navegacion.component';
import {NuevaVentanaRedimensionableComponent} from './nueva-ventana-redimensionable/nueva-ventana-redimensionable.component';
import {NuevaVentanaDesplazableComponent} from './nueva-ventana-desplazable/nueva-ventana-desplazable.component';
import {ManipulacionCookiesComponent} from './manipulacion-cookies/manipulacion-cookies.component';


export const AppModule = [
  FormsModule,
  CommonModule,
]


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FechaHoraComponent, NumeroAleatorioComponent, HistorialNavegacionComponent,
    NuevaVentanaRedimensionableComponent, NuevaVentanaDesplazableComponent, ManipulacionCookiesComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UT3-Ejercicios';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-piloto-detalle',
  imports: [],
  templateUrl: './piloto-detalle.component.html',
  styleUrl: './piloto-detalle.component.css'
})
export class PilotoDetalleComponent {
  pilotos = [
  {
    slug: 'albon',
    nombre: 'Alexander Albon',
    numero: 23,
    color: '#64c4ff', // para el estilo del número o bandera
    equipo: 'Williams',
    pais: 'Thailand',
    escudo: 'assets/images/drivers-page/logos/williams.jpg',
    imagen: 'assets/images/drivers-page/albon.avif',
    estadisticas: {
      podios: 2,
      puntos: 260,
      gps: 109,
      campeonatos: 0
    }
  },
  {
    slug: 'verstappen',
    nombre: 'Max Verstappen',
    numero: 1,
    color: '#e30118',
    equipo: 'Red Bull',
    pais: 'Netherlands',
    escudo: 'assets/images/drivers-page/logos/redbull.jpg',
    imagen: 'assets/images/drivers-page/verstappen.avif',
    estadisticas: {
      podios: 100,
      puntos: 3000,
      gps: 180,
      campeonatos: 3
    }
  }
  
]


}

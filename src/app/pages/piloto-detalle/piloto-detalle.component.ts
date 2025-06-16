import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { pilotos } from '../../data/pilotos'; // Ajusta el path si es necesario


@Component({
  selector: 'app-piloto-detalle',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './piloto-detalle.component.html',
  styleUrl: './piloto-detalle.component.css'
})
export class PilotoDetalleComponent {
  piloto: any;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.piloto = pilotos.find(p => p.slug === slug);
      window.scrollTo({ top: 0 }); // Opcional: hace scroll al top
    });
  }

}

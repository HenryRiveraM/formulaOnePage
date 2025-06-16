import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pilotos } from '../../data/pilotos';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
  pilotos = pilotos;
}

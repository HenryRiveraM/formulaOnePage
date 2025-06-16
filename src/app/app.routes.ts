import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { PilotoDetalleComponent } from './pages/piloto-detalle/piloto-detalle.component'; // Asegurate de importar esto

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'drivers/:slug', component: PilotoDetalleComponent } // 🔥 ruta dinámica
];

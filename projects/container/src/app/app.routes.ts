import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { NotFoundComponent } from './routes/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'microapp-a',
    loadComponent: () => loadRemoteModule('microapp-a', './Component').then((m) => m.AppComponent)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

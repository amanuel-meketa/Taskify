import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'user', loadComponent: () => import('./component/user/user.component').then(m=> m.UserComponent)}
];

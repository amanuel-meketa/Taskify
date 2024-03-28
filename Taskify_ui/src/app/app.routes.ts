import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'user', component:UserComponent}
];

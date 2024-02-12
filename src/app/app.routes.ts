import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component'),
// because we used the default export, we don't have to specify more on which component we want
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];

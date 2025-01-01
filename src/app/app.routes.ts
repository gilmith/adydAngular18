import { Routes } from '@angular/router';
import { loginGuardGuard } from './shared/guards/login-guard.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'main',
        loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
        canActivate: [loginGuardGuard],
        canMatch: [loginGuardGuard]
    }
];

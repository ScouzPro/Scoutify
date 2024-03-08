import { Routes } from '@angular/router';
import { PlayersComponent } from './pages/players/players.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HeroLandingComponent } from './components/hero-landing/hero-landing.component';


export const routes: Routes = [
    {
        path:'home',
        component: HeroLandingComponent
    },
    { 
        path: 'login', 
        component: AuthComponent //autentificaciondel login
    },
    { 
        path: 'register', 
        component: RegisterFormComponent
    },
    {   path:'players',
        component:PlayersComponent
    },
    {
        path:'reports',
        component:ReportsComponent
    },
    
];

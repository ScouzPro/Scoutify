import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PlayersComponent } from './pages/players/players.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
    {
        path:'landing',
        component: LandingComponent
    },
    {   path:'players',
        component:PlayersComponent
    },
    {
        path:'reports',
        component:ReportsComponent
    },
    {   path:'detail',
        component:DetailComponent
    },
    
];

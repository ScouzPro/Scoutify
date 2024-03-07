import { Routes } from '@angular/router';
import { PlayersComponent } from './pages/players/players.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { LandingComponent } from './pages/landing/landing.component';


export const routes: Routes = [
    {
        path:'home',
        component: LandingComponent
    },
    {   path:'players',
        component:PlayersComponent
    },
    {
        path:'reports',
        component:ReportsComponent
    },
   
    
];

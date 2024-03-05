import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayersComponent } from './pages/players/players.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { PlayerComponent } from './pages/player/player.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {   path:'players',
        component:PlayersComponent
    },
    {
        path:'reports',
        component:ReportsComponent
    },
    {   path:'player',
        component:PlayerComponent
    },
    
];

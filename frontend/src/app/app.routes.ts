import { Routes } from '@angular/router';
import { PlayersComponent } from './pages/players/players.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HeroLandingComponent } from './components/hero-landing/hero-landing.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthRegComponent } from './pages/auth-reg/auth-reg.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NewReportComponent } from './pages/new-report/new-report.component';
import { MetricsGraphicsComponent } from './components/metrics-graphics/metrics-graphics.component';



export const routes: Routes = [
    {
        path: '',
        component: HeroLandingComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: AuthComponent //autentificacion del login
    },
    {
        path: 'register',
        component: AuthRegComponent //auth registro
    },
    {
        path: 'players',
        component: PlayersComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: 'player/:id',
        component: DetailComponent
    },
    {
    path: 'players/:id',
    component: NewReportComponent
    },
    {
        path:'metricGraph',
        component: MetricsGraphicsComponent
    }


];


import { Routes } from '@angular/router';

// Importa los componentes standalone
import { LoadingComponent } from './components/intro/loading/loading.component';
import { FrasesComponent } from './components/intro/frases/frases.component';
import { FeaturesComponent } from './components/features/features.component';
import { LoginComponent } from './components/auth/login/login.component';
import { InformationComponent } from './components/data/information/information.component';
import { AvatarComponent } from './components/data/avatar/avatar.component';
import { RetosComponent } from './components/data/retos/retos.component';
import { LogrosComponent } from './components/data/logros/logros.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Define las rutas
export const AppRoutes: Routes = [
    { path: '', component: LoadingComponent, pathMatch: 'full' },

    { path: 'intro/frases', component: FrasesComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'auth/login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    { path: 'data/informacion', component: InformationComponent },
    { path: 'data/avatar', component: AvatarComponent },
    { path: 'data/retos', component: RetosComponent },
    { path: 'data/logros', component: LogrosComponent },
    { path: 'dashboard', component: DashboardComponent },
    // Otras rutas aquí...
];



export const routes: Routes = [];
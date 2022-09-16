import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

export const uiRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'home', loadChildren: () => import('./users/users.module').then( m => m.usersModule)},
            {path:'', component:LoginComponent}
        ]
    }
]
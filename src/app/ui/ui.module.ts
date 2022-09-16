import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { uiRoutes } from "./ui.routing";
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [HomeComponent, LoginComponent],
    imports: [RouterModule.forChild(uiRoutes)]
})
export class UiModule { }
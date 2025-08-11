import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page/home-page.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PageComponent} from "./page.component";
import {PagesRoutes} from "./pages.routes";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    PageComponent,
    HomePageComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes)
  ]
})
export class PagesModule {}

import {Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {path: 'home', component: HomePageComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
];

// app.routes.ts
import { Routes } from '@angular/router';

import {LandingPageComponent} from "./views/shared/landing-page/landing-page.component";
import { UserElectionComponent } from './views/shared/user-election/user-election.component';
import {AuthPageComponent} from "./views/shared/auth-page/auth-page.component";
import { PromotionsDetailComponent } from './components/client/promotions-detail/promotions-detail.component';
import {PaymentComponent} from "./components/client/payment/payment/payment.component";
import {DashboardComponent} from "./layouts/dashboard/dashboard.component";
import {FilmsComponent} from "./components/client/films/films.component";
import {ProfileComponent} from "./components/client/films/components/profile/profile.component";
import {
  BookingStepperComponent
} from "./components/client/films/components/stepper/booking-stepper/booking-stepper.component";
import {MainComponent} from "./components/client/explore/main/main.component";
import {HomeComponent} from "./components/client/cineclubs/home/home.component";
import {CineclubProfileComponent} from "./components/client/cineclubs/cineclub-profile/cineclub-profile.component";
import {EditCineclubComponent} from "./components/client/cineclubs/edit-cineclub/edit-cineclub.component";
import {NewGroupComponent} from "./components/client/groups/new-group/new-group.component";
import {MyGroupComponent} from "./components/client/groups/my-group/my-group.component";
import {ViewComponent} from "./components/client/profile-user/view/view.component";
import {PromotionsComponent} from "./components/client/promotions/promotions.component";

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'user-election', component: UserElectionComponent },
  { path: 'authPage', component: AuthPageComponent },
  { path: 'authPage/register/:owner', component: AuthPageComponent },
  { path: 'authPage/register/:cinephile', component: AuthPageComponent },
  { path: 'promociones/detail/:id', component: PromotionsDetailComponent },
  { path: 'payment', component: PaymentComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: FilmsComponent },
      { path: 'peliculas', component: FilmsComponent },
      { path: 'peliculas/pelicula/:filmId', component: ProfileComponent },
      { path: 'peliculas/pelicula/:filmId/:availableFilmId?', component: ProfileComponent },
      { path: 'peliculas/steps/:id/booking', component: BookingStepperComponent},
      { path: 'explorar', component: MainComponent },
      { path: 'cineclubs', component: HomeComponent },
      { path: 'cineclubs/cineclub/:id', component: CineclubProfileComponent },
      { path: 'perfil-cineclub', component: CineclubProfileComponent },
      { path: 'edit-cineclub', component: EditCineclubComponent },
      { path: 'crear-grupo', component: NewGroupComponent },
      { path: 'mis-grupos', component: MyGroupComponent },
      { path: 'perfil', component: ViewComponent },
      { path: 'promociones', component: PromotionsComponent },
      { path: 'promociones/detail/:id', component: PromotionsDetailComponent },
      { path: 'payment', component: PaymentComponent },
    ],
  },
  // Any other routes
];

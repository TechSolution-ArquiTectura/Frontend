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
  {
    path: '', // Default route
    redirectTo: '/landingPage', // Redirect to the landing page
    pathMatch: 'full'
  },
  {
    path: 'landingPage',
    loadComponent: () => import('./views/shared/landing-page/landing-page.component').then(m=>m.LandingPageComponent)
  },
  {
    path: 'user-election',
    loadComponent: () => import('./views/shared/user-election/user-election.component').then(m=>m.UserElectionComponent)
  },
  {
    path: 'authPage',
    loadComponent: () => import('./views/shared/auth-page/auth-page.component').then(m=>m.AuthPageComponent),
  },
  {
    path: 'authPage/register/:owner',
    loadComponent: () => import('./views/shared/auth-page/auth-page.component').then(m=>m.AuthPageComponent)
  },
  {
    path: 'authPage/register/:cinephile',
    loadComponent: () => import('./views/shared/auth-page/auth-page.component').then(m=>m.AuthPageComponent)
  },
  {
    path: 'promociones/detail/:id',
    loadComponent: () => import('./components/client/promotions-detail/promotions-detail.component').then(m=>m.PromotionsDetailComponent)
  },
  {
    path: 'payment',
    loadComponent: ()=> import('./components/client/payment/payment/payment.component').then(m=>m.PaymentComponent)
  },
  {
    path: 'dashboard',
    loadComponent:()=>import('./layouts/dashboard/dashboard.component').then(m=>m.DashboardComponent),
    children: [
      {
        path:'',
        loadComponent: ()=>import('./components/client/films/films.component').then(m=>m.FilmsComponent),
      },
      {
        path: 'peliculas',
        loadComponent: ()=> import('./components/client/films/films.component').then(m=>m.FilmsComponent)
      },
      {
        path:'peliculas/pelicula/:filmId',
        loadComponent: ()=> import('./components/client/films/components/profile/profile.component').then(m=>m.ProfileComponent)
      },
      {
        path:'peliculas/pelicula/:filmId/:availableFilmId?',
        loadComponent: ()=> import('./components/client/films/components/profile/profile.component').then(m=>m.ProfileComponent)
      },
      {
        path:'peliculas/steps/:id/booking',
        loadComponent: ()=> import('./components/client/films/components/stepper/booking-stepper/booking-stepper.component').then(m=>m.BookingStepperComponent)
      },
      {
        path:'explorar',
        loadComponent: ()=> import('./components/client/explore/main/main.component').then(m=>m.MainComponent)
      },
      {
        path: 'cineclubs',
        loadComponent: ()=> import('./components/client/cineclubs/home/home.component').then(m=>m.HomeComponent)
      },
      {
        path: 'cineclubs/cineclub/:id',
        loadComponent: ()=> import('./components/client/cineclubs/cineclub-profile/cineclub-profile.component').then(m=>m.CineclubProfileComponent)
      },
      {
        path: 'perfil-cineclub',
        loadComponent: ()=> import('./components/client/cineclubs/cineclub-profile/cineclub-profile.component').then(m=>m.CineclubProfileComponent)
      },
      {
        path: 'edit-cineclub',
        loadComponent: ()=> import('./components/client/cineclubs/edit-cineclub/edit-cineclub.component').then(m=>m.EditCineclubComponent)
      },
      {
        path: 'crear-grupo',
        loadComponent: ()=> import('./components/client/groups/new-group/new-group.component').then(m=>m.NewGroupComponent)
      },
      {
        path: 'mis-grupos',
        loadComponent: ()=> import('./components/client/groups/my-group/my-group.component').then(m=>m.MyGroupComponent)
      },
      {
        path: 'perfil',
        loadComponent: ()=> import('./components/client/profile-user/view/view.component').then(m=>m.ViewComponent)
      },
      {
        path: 'promociones',
        loadComponent: ()=> import('./components/client/promotions/promotions.component').then(m=>m.PromotionsComponent)
      },
      {
        path: 'promociones/detail/:id',
        loadComponent: ()=> import('./components/client/promotions-detail/promotions-detail.component').then(m=>m.PromotionsDetailComponent)
      },
      {
        path: 'payment',
        loadComponent: ()=> import('./components/client/payment/payment/payment.component').then(m=>m.PaymentComponent)
      }
      // ... your existing dashboard children routes
    ]
  },
];

/*export const routes:Routes=[
  {
    path:'',
    loadComponent: ()=>import('./layouts/dashboard/dashboard.component').then(m=>m.DashboardComponent)
  }
]*/

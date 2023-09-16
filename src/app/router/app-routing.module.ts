import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../views/shared/landing-page/landing-page.component';
import { AuthPageComponent } from '../views/shared/auth-page/auth-page.component';
import { UserElectionComponent } from '../views/shared/user-election/user-election.component';
import { PromotionsDetailComponent } from '../components/client/promotions-detail/promotions-detail.component';
import { PaymentComponent } from '../components/client/payment/payment/payment.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'user-election', component: UserElectionComponent },
  { path: 'authPage', component: AuthPageComponent },
  { path: 'authPage/register/:owner', component: AuthPageComponent },
  { path: 'authPage/register/:cinephile', component: AuthPageComponent },
  { path: 'promociones/detail/:id', component: PromotionsDetailComponent },
  { path: 'payment', component: PaymentComponent },
  //{ path: 'perfil', component: ProfileUserComponent },
  // Add the following route for the profile
  //{ path: 'perfil/:id', component: ProfileUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

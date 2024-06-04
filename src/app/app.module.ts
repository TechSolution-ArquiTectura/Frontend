import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FilmsComponent } from './components/client/films/films.component';
import { SearchBarComponent } from './components/client/films/components/search-bar/search-bar.component';
import { MoviePosterComponent } from './components/client/films/components/movie-poster/movie-poster.component';
import { ProfileComponent } from './components/client/films/components/profile/profile.component';
import { FilterBarComponent } from './components/client/films/components/filter-bar/filter-bar.component';
import { WeeklyFilmComponent } from './components/client/films/components/weekly-film/weekly-film.component';
import { PopularNowComponent } from './components/client/explore/popular-now/popular-now.component';
import { PopularPostComponent } from './components/client/explore/popular-post/popular-post.component';
import { MainComponent } from './components/client/explore/main/main.component';
import { NearEventsComponent } from './components/client/explore/near-events/near-events.component';
import { GoogleMapComponent } from './components/client/explore/google-map/google-map.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CineclubProfileComponent } from './components/client/cineclubs/cineclub-profile/cineclub-profile.component';
import { CineclubDetailsComponent } from './components/client/cineclubs/cineclub-details/cineclub-details.component';
import { MoviesAvailableComponent } from './components/client/cineclubs/movies-available/movies-available.component';
import { MyGroupComponent } from './components/client/groups/my-group/my-group.component';
import { NewGroupComponent } from './components/client/groups/new-group/new-group.component';

import { AppRoutingModule } from './router/app-routing.module';
import { DashboardRoutingModule } from './router/dashboard-routing.module';
import { SearchBarCineclubsComponent } from './components/client/cineclubs/search-bar-cineclubs/search-bar-cineclubs.component';
import { HomeComponent } from './components/client/cineclubs/home/home.component';
import { ListCineclubsComponent } from './components/client/cineclubs/list-cineclubs/list-cineclubs.component';
import { CardComponent } from './components/client/cineclubs/card/card.component';
import { LandingPageComponent } from './views/shared/landing-page/landing-page.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UserElectionComponent } from './views/shared/user-election/user-election.component';
import { AuthPageComponent } from './views/shared/auth-page/auth-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfileUserComponent } from './components/client/profile-user/profile-user.component';
import { LoginComponent } from './components/client/auth/login/login.component';
import { RegisterComponent } from './components/client/auth/register/cinephile/register.component';
import { RegisterOwnerComponent } from './components/client/auth/register/owner/register-owner.component';
import { ViewComponent } from './components/client/profile-user/view/view.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BookTicketComponent } from './components/client/films/components/book-ticket/book-ticket.component';
import { PaymentComponent } from './components/client/payment/payment/payment.component';
import { InformationComponent } from './components/client/payment/Components/information/information.component';
import { PaymentFormComponent } from './components/client/payment/Components/payment-form/payment-form.component';

import { PromotionsComponent } from './components/client/promotions/promotions.component';
import { PromotionsDetailComponent } from './components/client/promotions-detail/promotions-detail.component';
import { ReviewComponent } from './components/client/review/review.component';
import { PromotionCardComponent } from './components/client/promotions/promotion-card/promotion-card.component';
import { DeletePromotionDialogComponent } from './components/client/promotions/delete-promotion-dialog/delete-promotion-dialog.component';
import { NewPromotionDialogComponent } from './components/client/promotions/new-promotion-dialog/new-promotion-dialog.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { ShowtimesTableComponent } from './components/client/films/components/showtime-table/showtimes-table/showtimes-table.component';
import { BookingStepperComponent } from './components/client/films/components/stepper/booking-stepper/booking-stepper.component';
import { EditProfileModalComponent } from './components/client/profile-user/edit-profile-modal/edit-profile-modal.component';
import { CommonModule } from '@angular/common';
import { EditCineclubComponent } from './components/client/cineclubs/edit-cineclub/edit-cineclub.component';
import { NewMovieComponent } from './components/client/cineclubs/movies-available/new-movie/new-movie/new-movie.component';
import { BottomSheetComponent } from './components/client/films/components/bottom-sheet/bottom-sheet/bottom-sheet.component';
import { FilmProfileComponent } from './components/client/films/components/stepper/film-profile/film-profile.component';
import { BookingSuccessComponent } from './components/client/films/components/stepper/booking-success/booking-success.component';

import { AdminScheduleFilmsComponent } from './components/client/films/components/admin-schedule-films/admin-schedule-films.component';
import { NewShowtimeDialogComponent } from './components/client/films/components/admin-schedule-films/new-showtime-dialog/new-showtime-dialog.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CineclubProfileComponent,
    CineclubDetailsComponent,
    MoviesAvailableComponent,
    FilmsComponent,
    SearchBarComponent,
    MoviePosterComponent,
    WeeklyFilmComponent,
    FilterBarComponent,
    ProfileComponent,
    PopularNowComponent,
    PopularPostComponent,
    MainComponent,
    NearEventsComponent,
    GoogleMapComponent,
    SearchBarCineclubsComponent,
    HomeComponent,
    ListCineclubsComponent,
    CardComponent,
    NewGroupComponent,
    DashboardComponent,
    UserElectionComponent,
    AuthPageComponent,
    ProfileUserComponent,
    LoginComponent,
    RegisterComponent,
    RegisterOwnerComponent,
    ViewComponent,
    LandingPageComponent,
    MyGroupComponent,
    BookTicketComponent,
    PaymentComponent,
    InformationComponent,
    PaymentFormComponent,
    PromotionsComponent,
    PromotionsDetailComponent,
    ReviewComponent,
    PromotionCardComponent,
    DeletePromotionDialogComponent,
    NewPromotionDialogComponent,
    NotFoundComponent,
    ShowtimesTableComponent,
    BookingStepperComponent,
    ProfileUserComponent,
    EditProfileModalComponent,
    EditCineclubComponent,
    NewMovieComponent,
    BottomSheetComponent,
    FilmProfileComponent,
    BookingSuccessComponent,
    AdminScheduleFilmsComponent,
    NewShowtimeDialogComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardRoutingModule,
    BrowserModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatDialogModule,
    CommonModule,
    MatDialogModule,
    MatRadioModule,
  ],
  //entryComponents: [EditProfileModalComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

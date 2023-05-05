import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ConfirmationMessageComponent } from './components/ui/confirmation-message/confirmation-message.component';
import { FilmsComponent } from './components/films/films.component';
import { SearchBarComponent } from './components/films/components/search-bar/search-bar.component';
import { MoviePosterComponent } from './components/films/components/movie-poster/movie-poster.component';
import { ProfileComponent } from './components/movies/profile/profile.component';
import { FilterBarComponent } from './components/films/components/filter-bar/filter-bar.component';
import { WeeklyFilmComponent } from './components/films/components/weekly-film/weekly-film.component';
import { PopularNowComponent } from './components/explore/popular-now/popular-now.component';
import { PopularPostComponent } from './components/explore/popular-post/popular-post.component';
import { MainComponent } from './components/explore/main/main.component';
import { NearEventsComponent } from './components/explore/near-events/near-events.component';
import { GoogleMapComponent } from './components/explore/google-map/google-map.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { SearchBarCineclubsComponent } from './components/cineclubs/search-bar-cineclubs/search-bar-cineclubs.component';
import { HomeComponent } from './components/cineclubs/home/home.component';
import { ListCineclubsComponent } from './components/cineclubs/list-cineclubs/list-cineclubs.component';
import { ProfilecrudComponent } from './components/movies/profilecrud/profilecrud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmationMessageComponent,
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
    ProfilecrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo73cODrVrhwYpmhegeL8ptJUmO_I-M04',
      libraries : ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

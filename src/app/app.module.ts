import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    UserRegistrationFormComponent,
    UserProfileComponent,
    UserLoginFormComponent,
    TopBarComponent,
    NavigationComponent,
    MovieInfoComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

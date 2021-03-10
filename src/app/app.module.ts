import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './utility/app.init';
import { AuthGuard } from './utility/app.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FavoriteComponent,
    SearchComponent,
    ProfileComponent,
    HeroDetailsComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '' , component: HomeComponent},
      {path: 'favorite' , component: FavoriteComponent , canActivate: [AuthGuard]},
      {path: 'search' , component: SearchComponent , canActivate: [AuthGuard]},
      {path: 'profile/:id' , component: ProfileComponent , canActivate: [AuthGuard]},
      {path: '**', component: HomeComponent}
    ]),
    KeycloakAngularModule
  ],
  providers: [
    {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgsRevealModule } from 'ngx-scrollreveal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpotifyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   BrowserAnimationsModule,
   

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

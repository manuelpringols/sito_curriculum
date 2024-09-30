import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { SpotifyService } from './servizi/spotify.service';
import { isPlatformBrowser } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgsRevealModule } from 'ngx-scrollreveal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(40px)' })),
      transition('hidden => visible', animate('1600ms ease-out')),
      transition('visible => hidden', animate('1600ms ease-out')),
    ])
  ]
})
export class AppComponent {
isPlaying: boolean= false;
state: string = 'hidden';
constructor(private spotifyService: SpotifyService, @Inject(PLATFORM_ID) private platformId: Object,private el: ElementRef, private renderer: Renderer2) {}


  title = 'sito_curriculum';
minHeight: any;
trackId = '7H7NyZ3G075GqPx2evsfeb';





  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  

  ngAfterViewInit(){
    if (isPlatformBrowser(this.platformId)) {
      // Assicurati che `document` e `window` siano disponibili solo nel browser
      this.spotifyService.createSpotifyPlayer('embed-iframe', 'spotify:playlist:37i9dQZF1DXcBWIGoYBM5M');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    // Se la sezione è visibile nello schermo, attiva l'animazione
    if (scrollPosition >= componentPosition + 50) {
      this.state = 'visible';
    } else {
      this.state = 'hidden';
    }
  }
}



  

  

  


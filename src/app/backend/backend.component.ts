import { Component } from '@angular/core';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.css'
})
export class BackendComponent {
showLoginInfo: boolean = false;
showRegisterInfo: boolean= false

  showCode = false; // Stato per mostrare o nascondere il codice
registerEmail: any;
registerPassword: any;
loginEmail: any;
loginPassword: any;

  toggleCode() {
    this.showCode = !this.showCode; // Cambia lo stato di visibilità
  }

  onRegister() {
    // Logica per la registrazione
    this.showRegisterInfo = true;
  }

  onLogin() {
    // Logica per il login
    this.showLoginInfo = true;
  }
}

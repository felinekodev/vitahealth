import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) { }

  onLogin(): void {
    if (this.username === this.password) {
      console.log('Inicio de sesión exitoso');
      // Redirigir al usuario a la página del dashboard o inicio
      this.router.navigate(['/features']);
    } else {
      console.log('Inicio de sesión fallido');
      // Manejar el error de inicio de sesión
    }
  }
}

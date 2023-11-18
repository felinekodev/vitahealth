import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  currentStep = 1;
  progress = 25; // El progreso inicial para el primer paso
  userInformation = {
    altura: null,
    peso: null,
    edad: null,
    genero: null
  };

  constructor(private router: Router) { }

  onSubmit(): void {
    if (this.currentStep < 4) {
      this.currentStep++;
      this.progress += 25; // Incrementa el progreso en cada paso
    } else {
      localStorage.setItem('userInformation', JSON.stringify(this.userInformation));
      this.router.navigate(['data/avatar']); // Redirige a la página de Avatar
    }
  }
}

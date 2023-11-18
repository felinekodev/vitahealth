import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent implements OnInit {
  userInformation: any;
  imc: number | null = null;
  healthMessage: string = '';
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.getUserInformation();
  }

  getUserInformation(): void {
    const info = localStorage.getItem('userInformation');
    if (info) {
      this.userInformation = JSON.parse(info);
      this.calculateIMC(); // Llama a calculateIMC aquí
    }
  }
  calculateIMC(): void {
    if (this.userInformation && this.userInformation.peso && this.userInformation.altura) {
      const alturaEnMetros = this.userInformation.altura / 100;
      this.imc = this.userInformation.peso / (alturaEnMetros * alturaEnMetros);

      // Determinar el mensaje y el color del alerta
      let backgroundColor = '';
      if (this.imc < 18.5) {
        this.healthMessage = 'Cuida tu salud, tu IMC es bajo.';
        backgroundColor = 'rgba(255, 57, 92, 0.9)'; // Rojo
      } else if (this.imc >= 18.5 && this.imc <= 24.9) {
        this.healthMessage = '¡Felicidades, estás bien de salud!';
        backgroundColor = 'rgba(234, 202, 69, 0.9)'; // Amarillo
      } else {
        this.healthMessage = 'Cuida tu salud, tu IMC es alto.';
        backgroundColor = 'rgba(255, 57, 92, 0.9)'; // Rojo
      }

      // Crear y mostrar el alerta
      this.createAlert(this.healthMessage, backgroundColor);
    }
  }

  createAlert(message: string, backgroundColor: string): void {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.style.backgroundColor = backgroundColor;
    alert.style.borderRadius = '25px';
    alert.style.position = 'fixed';
    alert.style.top = '50%';
    alert.style.left = '50%';
    alert.style.transform = 'translate(-50%, -50%)';
    alert.style.minWidth = '300px'; // Establece un ancho mínimo
    alert.style.padding = '20px';
    alert.style.color = '#000';
    alert.style.fontSize = '1.5rem';
    alert.style.textAlign = 'center'; // Alinea el texto al centro
    alert.style.zIndex = '1000'; // Asegura que el alerta esté en la parte superior
    alert.textContent = message;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.border = 'none';
    closeButton.style.background = 'none';
    closeButton.style.fontSize = '1.5rem';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
      alert.remove();
    });

    alert.appendChild(closeButton);
    document.body.appendChild(alert);
  }
  // Método para navegar a la vista de logros
  navigateToLogros(): void {
    this.router.navigate(['/data/retos']);
  }
  }
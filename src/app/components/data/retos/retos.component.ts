import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-retos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './retos.component.html',
  styleUrl: './retos.component.scss'
})
export class RetosComponent {
  retos = [
    { categoria: 'Dormir', descripcion: 'DORMIR 8 HORAS', completado: false },
    { categoria: 'Dormir', descripcion: 'TOMAR SIESTA 2 HORAS', completado: false },
    { categoria: 'Nutrición', descripcion: 'BEBER 2 LITROS DE AGUA', completado: false },
    { categoria: 'Nutrición', descripcion: 'COMER UNA MANZANA', completado: false },
    { categoria: 'Running', descripcion: 'CORRER RÁPIDO 30 MIN', completado: false },
    { categoria: 'Running', descripcion: 'CAMINAR 4 KMTS', completado: false },
  ];

  constructor(private router: Router) { }

  completarReto(index: number): void {
    this.retos[index].completado = true;
    this.router.navigate(['data/logros']); 
  }
}

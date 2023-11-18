import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
 
    setTimeout(() => {
     
      this.router.navigate(['/auth/login']); 
    }, 1000); // 3000 milisegundos = 3 segundos
  }
}

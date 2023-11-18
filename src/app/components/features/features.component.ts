import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  constructor(private router: Router) { }
  progress = 0;
  displayText = 'Bienvenido a Vita Health';
  imageToShow = false; // Controla si la imagen se muestra
  private clickCount = 0;
  private texts = [
    'Conéctate y crece con la comunidad y el Chatbot con IA: Únete a la comunidad de Vita Health y encuentra apoyo, motivación y amistad mientras alcanzas tus metas de bienestar juntos. Alcanza tus objetivos de bienestar con nuestra plataforma impulsada por IA, adaptada a tus necesidades únicas.',
    'Monitorea Tu Éxito, Paso a Paso: Con Vita Health, cada paso cuenta. Sigue tu progreso en tiempo real y celebra cada victoria en tu viaje hacia un estilo de vida activo y saludable.',
    'Nutre Tu Cuerpo,Nutre Tu Vida: Aprende a amar la comida que te ama. Obtén planes de alimentación personalizados y recetas saludables que te ayudarán a sentirte bien por dentro y por fuera.',
    'Comienza una Vida Saludable: Descubre un camino personalizado hacia una vida más saludable. Regístrate hoy y deja que Vita Health te guíe hacia tus metas de bienestar con consejos y desafíos diarios diseñados sólo para ti.'
  ];

  onButtonClick(): void {
    if (this.clickCount < this.texts.length) {
      this.displayText = this.texts[this.clickCount].replace(/(?:\r\n|\r|\n)/g, '<br>'); // Reemplaza saltos de línea por etiquetas <br>
      this.clickCount++;
      this.progress = (this.clickCount / this.texts.length) * 100;

      if (this.clickCount === this.texts.length) {
        this.imageToShow = true; // Muestra la imagen al final
        this.router.navigate(['data/informacion']);
      }
    }
  }
}


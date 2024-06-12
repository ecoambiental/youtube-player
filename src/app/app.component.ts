import { Component } from '@angular/core';
import { VideoComponent } from './components/video/video.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'player-youtube';
}

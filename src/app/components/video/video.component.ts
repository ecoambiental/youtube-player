import { Component, HostListener, Input, inject } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
})
export class VideoComponent {
  @Input({ required: true }) id!: string;

  apiLoaded = inject(YoutubeService).apiLoaded;

  width = 0;
  height = 0;

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      this.width = screenWidth * 0.7;
    } else {
      this.width = screenWidth;
    }
    this.height = this.width * (9 / 16);
  }
}

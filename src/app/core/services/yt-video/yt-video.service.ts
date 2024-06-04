import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YtVideoService {
  private apiKey = 'AIzaSyCbY-HPCV7OpgCycIkEb2R0y8TkQhoBYt8'

  constructor(private http: HttpClient) {}

  getVideoDetails(videoUrl: string) {
    const videoId = this.getVideoId(videoUrl);
    if (!videoId) {
      console.error('Invalid video URL');
      return;
    }
    console.log(videoId);
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${this.apiKey}&part=snippet`;
    return this.http.get(apiUrl);
  }

  private getVideoId(videoUrl: string): string | null {
    if (videoUrl.includes('v=')) {
      const videoId = videoUrl.split('v=')[1];
      return videoId.split('&')[0];
    } else if (videoUrl.includes('youtu.be/')) {
      const videoId = videoUrl.split('youtu.be/')[1];
      return videoId.split('?')[0];
    } else {
      return null;
    }
  }
}

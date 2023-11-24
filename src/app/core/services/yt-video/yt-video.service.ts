import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YtVideoService {
  private apiKey = 'AIzaSyBLVloqE-Po0wDa2390tgoH6ut4M-ZYzdk'

  constructor(private http: HttpClient) {}

  getVideoDetails(videoUrl: string) {
    const videoId = this.getVideoId(videoUrl);
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${this.apiKey}&part=snippet`;

    return this.http.get(apiUrl);
  }

  private getVideoId(videoUrl: string): string {
    const videoId = videoUrl.split('v=')[1];
    return videoId.split('&')[0];
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  muppetImage = 'images/muppet.avif';
  
  links: { title: string; url: string }[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<{ title: string; url: string }[]>('links.json').subscribe({
      next: (data) => (this.links = data),
      error: (err) => console.error('Failed to load links:', err)
    });
  }
}

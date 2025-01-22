import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  muskyImage = 'https://media.licdn.com/dms/image/v2/D4D12AQHji9WB6ImiGg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1704609884366?e=1743033600&v=beta&t=C11H693Da1kjcxtE8rqGI8aqGjMGGjzSuaT7UFfEPL0';
  links: { title: string; url: string }[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<{ title: string; url: string }[]>('links.json').subscribe({
      next: (data) => (this.links = data),
      error: (err) => console.error('Failed to load links:', err)
    });
  }
}

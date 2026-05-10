import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Host App');

  constructor(private router: Router) {}

  public loadRemote() {
    this.router.navigateByUrl('/remote').catch(err => console.error('Navigation error:', err));
  }

  public unloadRemote() {
    this.router.navigateByUrl('/').catch(err => console.error('Navigation error:', err));
  }
}

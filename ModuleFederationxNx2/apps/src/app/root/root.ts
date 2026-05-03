import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './root.html',
  styleUrl: './root.scss',
})
export class Root {
  protected title = 'host';
}

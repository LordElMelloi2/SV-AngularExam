import { Component } from '@angular/core';

@Component({
  selector: 'svl-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  now = new Date().toLocaleDateString() ?? 'Undefined';
}

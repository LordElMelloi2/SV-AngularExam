import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
// Test Pourpuses
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'svl-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainContainerComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Pokedex';
}

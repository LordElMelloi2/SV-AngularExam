import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'svl-main-container',
  standalone: true,
  imports: [],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {
  #pokemonService = inject(PokemonService);
  pokemonList: any; 

  constructor() {
    this.#pokemonService.getPokemonFromTo(0, 20).subscribe(
      (data) => {
        this.pokemonList = data;
        console.log(this.pokemonList);
      }
    );
    
    console.log(this.pokemonList);
  }
}

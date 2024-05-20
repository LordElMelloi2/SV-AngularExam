import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { url } from 'inspector';
import { stat } from 'fs';

@Component({
  selector: 'svl-main-container',
  standalone: true,
  imports: [PokemonCardComponent, CommonModule],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent implements OnInit, OnChanges{
  #pokemonService = inject(PokemonService);

  pokemonList: any[] = []; 
  pokemonShowList: Pokemon[] = [];

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnChanges() { 
    this.cdr.detectChanges();
  }

  identify(index: any, item: any){
    return item.nombre; 
  }

  fetchData() {
    this.#pokemonService.getPokemonFromTo(0, 20).subscribe(
      (data) => {
        console.log(data);
        this.pokemonList = (data as any).results;
        this.pokemonList = this.pokemonList.map((e) => {
          let pokemon: Pokemon = {
            url: e.url,
            nombre: e.name,
            img: '',
            tipo: [],
            hp: 0,
            atk: 0,
            def: 0,
            atkEsp: 0,
            defEsp: 0,
            vel: 0,        
          };
          return pokemon;
        });
        //Gettin general information
        this.pokemonList.map((e) => {
          this.#pokemonService.getEndPoint(e.url).subscribe(
            (data) => {
              // console.log("\n==="+e.nombre+"===\n");
              // console.log(data);

              //Getting img of form
              let forms: any[] = (data as any).forms;
              e.img = forms[0].url;

              //Getting types of pokemon
              let types: any[] = (data as any).types;
              types.map((t) => {
                e.tipo.push(t.type.name);
              });

              //Getting stats of pokemon
              let stats: any[] = (data as any).stats;
              e.hp = stats[0].base_stat;
              e.atk = stats[1].base_stat;
              e.def = stats[2].base_stat;
              e.atkEsp = stats[3].base_stat;
              e.defEsp = stats[4].base_stat;
              e.vel = stats[5].base_stat;

              return e;
            }
          );
        })
      }
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  #endPoint : string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  getPokemonFromTo(from: number, to: number){
    return this.http.get(`${this.#endPoint}?offset=${from}&limit=${to}`);
  }
}

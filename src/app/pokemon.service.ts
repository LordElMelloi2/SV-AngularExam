import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  #endPoint : string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  getEndPoint(endpoint: string){
    return this.http.get(endpoint);
  }

  getPokemonFromTo(from: number, to: number){
    return this.http.get(`${this.#endPoint}?offset=${from}&limit=${to}`);
  }

  getPokemonById(id: number) {
    return this.http.get(`${this.#endPoint}/${id}`);
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'svl-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemonInformation!: any;

  constructor(private modalService: NgbModal){}

  openModalFunction(content:any){
    this.modalService.open(content);
  }
  
  closeModalFunction(){
    this.modalService.dismissAll();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pokemon-root',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
 
  readonly navBarTitle = 'Pokemon';
  readonly listPokemonMenuTitle = 'Lista de Pokemons';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/pokemon/list']);
  }

  openListPage() {
    this.router.navigate(['/pokemon/list']);
  }

}

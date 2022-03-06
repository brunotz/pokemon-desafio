
import { Component, OnInit, ViewChild } from '@angular/core';

import { PokemonService } from 'src/shared/services/pokemon.service';
import { IPokemon } from './../../../shared/model/pokemon.model';

@Component({
  selector: 'pokemon-list-root',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  title = 'Lista de Pokemons';
  page = 0;
  pageSize = 15;
  collectionSize: number;

  searchPokemon: string;
  tablePokemons: Array<IPokemon> = new Array<IPokemon>();
 
  constructor( private service: PokemonService) { }

  ngOnInit(): void {
    this.setupPokemonList();
  }
  
  /* buscando lista de pokemons */
  async setupPokemonList() {
    await this.getPokemonData().then(() => {
      this.getPokemonDetail();
    });
  }

  private getPokemonData() {
    return new Promise((resolve,reject) => {
        this.service.query(this.page, this.pageSize).subscribe((resPokemonList: any) =>{
            this.tablePokemons = resPokemonList.results;
            this.collectionSize = resPokemonList.count;

            resolve('OK');
        },
        err =>{
            reject('NOK')
        });
    });
  }

  private getPokemonDetail() {
    this.tablePokemons.map(pokeRow => {
      this.service.getPokemonDetail(pokeRow.name).subscribe((resPokemonDetail) =>{
          pokeRow.detail = resPokemonDetail;
          pokeRow.favorite = this.isFavorite(pokeRow);  
      });
    });
  }

  quickSearch() {
    /* caso o campo de busca simples esteja preenchido procura pelo pokemon, senao busca a lista completa (caso ele tenha pesquisado e apagado) */
    if (this.searchPokemon){
      this.collectionSize = 0;

      this.service.getPokemonDetail(this.searchPokemon).subscribe((response: any) => {
        this.tablePokemons = [response];
        this.tablePokemons[0].detail = response;
      });
    }
    else {
      this.setupPokemonList();
    }
  }

  /* favoritar pokemon */
  isFavorite(pokemon: any){
    return localStorage.getItem(pokemon.name) === "1";
  };

  setPokeFavorite(pokemon:any ){
      localStorage.setItem(pokemon.name, '1');
      this.tablePokemons.map(x => {
        if (x.name === pokemon.name){
           x.favorite = this.isFavorite(x);
        }
      });
  };

  deletePokeFavorite(pokemon: any){
      localStorage.removeItem(pokemon.name);
      this.tablePokemons.map(x => {
        if (x.name === pokemon.name){
           x.favorite = this.isFavorite(x);
        }
      });
  };
}

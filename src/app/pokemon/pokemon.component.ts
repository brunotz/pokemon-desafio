import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pokemon-root',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
 
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListComponent } from './list/pokemon-list.component';
import { PokemonComponent } from './pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
    children: [{
        path: 'list',
        component: PokemonListComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule { }

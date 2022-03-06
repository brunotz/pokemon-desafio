import { PokemonListComponent } from './list/pokemon-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { PokemonComponent } from './pokemon.component';
import { PokemonService } from 'src/shared/services/pokemon.service';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [ PokemonComponent, PokemonListComponent ],
  imports: [ CommonModule, FormsModule, NgbModule, PokemonRoutingModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule],
  providers: [ PokemonService ],
  exports: [ PokemonComponent, PokemonListComponent ],
  bootstrap: [ PokemonComponent ]
})
export class PokemonModule { }

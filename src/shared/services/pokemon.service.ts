import { Pokemon, IPokemon } from './../model/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class PokemonService {

    private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(
        private http: HttpClient) { }
 
    query(page = 0, pageSize = 15): Observable<any> {
        let offSet = page !== 0?(page-1)*pageSize:page;

        let url = `${this.apiUrl}?limit=${pageSize}&offset=${offSet}`;

        return this.http.get<any>(url);
    }

    getPokemonDetail(name: string): Observable<any> {
        let url = `${this.apiUrl + name }`;
        return this.http.get<any>(url);
    }

}

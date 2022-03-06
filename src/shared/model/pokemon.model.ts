import { IPokemonDetail } from './pokemon-detail.model';

export interface IPokemon {
    id: number;
    name: string;
    url: string;
    detail: IPokemonDetail;
    expanded: boolean; 
    favorite: boolean;
}

export class Pokemon implements IPokemon {
    id: number;
    name: string;
    url: string;
    detail: IPokemonDetail;
    expanded: boolean; 
    favorite: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
    static getInternalId(param: IPokemon): number | string {
        return param.name;
    }

    static of(json: any = {}) {
        return new Pokemon(json);
    }

    static empty() {
        return new Pokemon();
    }

    static fromJson(json: Array<any> = []) {

        const items: Array<IPokemon> = [];

        for (const values of json) {
            items.push(new Pokemon(values));
        }

        return items;
    }
}
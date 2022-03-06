
export interface IPokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: any;
    base_experience: number;
    stats:any;
}

export class PokemonDetail implements IPokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: any;
    base_experience: number;
    stats:any;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    
    static getInternalId(param: IPokemonDetail): number | string {
        return param.id;
    }

    static of(json: any = {}) {
        return new PokemonDetail(json);
    }

    static empty() {
        return new PokemonDetail();
    }

    static fromJson(json: Array<any> = []) {

        const items: Array<IPokemonDetail> = [];

        for (const values of json) {
            items.push(new PokemonDetail(values));
        }

        return items;
    }
}
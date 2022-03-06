
export interface IPokemonAbility {
    name: string;
}

export interface IPokemonAbilities {
    slot: number;
    ability: IPokemonAbility;
}

export interface IPokemonStat {
    name: string;
}

export interface IPokemonStats {
    base_stat: number;
    stat: IPokemonStat;
}

export interface IPokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: Array<IPokemonAbilities>;
    base_experience: number;
    stats:any;
}

export class PokemonDetail implements IPokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    abilities: Array<IPokemonAbilities>;
    stats: Array<IPokemonStats>;

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
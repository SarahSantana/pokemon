export interface Pokemon {
    forms: PokemonBasicData[]
    sprites: Sprites
}

export interface PokemonBasicData {
    name: string
}

export interface Sprites {
    front_default: string
}

export interface PokemonNameAndMainImage {
    name: string
    imgUrl: string
}
import { Pokemon, PokemonNameAndMainImage } from "../modules/Pokemon"

export const getPokemonName = async (number: number): Promise<string | undefined> => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)

        if (!response.ok) throw new Error(`Erro na chamada da API: ${response.status}`)
      
        const data = await response.json() as Pokemon

        if (!data.forms || !data.forms[0] || !data.forms[0].name) {
            throw new Error('Dados do Pokémon inválidos.')
        }
        return data.forms[0].name
    } catch (error) {
        console.error('Erro:', error)
        return undefined
    }
} 

export const getPokemonNameAndMainImage = async (number: number): Promise<PokemonNameAndMainImage | undefined> => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)

        if (!response.ok) throw new Error(`Erro na chamada da API: ${response.status}`)
      
        const data = await response.json() as Pokemon

        if (!data.forms || !data.forms[0] || !data.forms[0].name || !data.sprites.front_default) {
            throw new Error('Dados do Pokémon inválidos.')
        }
        return {
            name: data.forms[0].name,
            imgUrl: data.sprites.front_default
        }
    } catch (error) {
        console.error('Erro:', error)
        return undefined
    }
} 
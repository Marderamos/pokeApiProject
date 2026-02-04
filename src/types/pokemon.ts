// ============================================
// INTERFAZ PRINCIPAL: Pokemon
// ============================================
/**
 * Esta interfaz define la estructura de un Pokémon
 * tal como la devuelve la PokeAPI
 * 
 * NOTA: La API devuelve MUCHOS más campos, pero solo
 * definimos los que vamos a usar. Esto es una práctica común.
 */

export interface Pokemon {
    id: number;
    name: string;
    heiht: number;
    weight: number;
    base_experience: number;
    sprites: PokemonSprites;
    stats: PokemonStat[];
    types: PokemonType[];
    abilities: PokemonAbility[];
    
}
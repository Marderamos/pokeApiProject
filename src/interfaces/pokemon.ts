export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  stats: PokemonStat[];
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  other: {
    'official-artwork': {
      front_default: string;
      front_shiny: string;
    };
  };
}

// Tipo simplificado para las cards
export interface PokemonCardData {
  id: number;
  name: string;
  types: string[];
  image: string;
  stats?: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
}

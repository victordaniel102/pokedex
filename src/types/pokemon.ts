type PokemonType = {
  name: string;
};

type PokemonStats = {
  name: string;
  base: string;
};

type PokemonResponseType = {
  slot: number;
  type: { name: string };
};

export type PokemonSingle = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  id: number;
  name: string;
  description: string;
  types: PokemonResponseType[];
};

export type Pokemon = {
  id?: number;
  name: string;
  image?: string;
  description?: string;
  types?: PokemonType[];
  stats?: PokemonStats[];
  url?: string;
};

type PokemonDetailTypeResponse = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type PokemonDetailStatResponse = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonDetailResponse = {
  id?: number;
  name: string;
  stats?: PokemonDetailStatResponse[];
  types?: PokemonDetailTypeResponse[];
};

type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  results: PokemonListItem[];
  previous?: string | null;
  next?: string | null;
  count: number;
};

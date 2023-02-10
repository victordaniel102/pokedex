import { Pokemon } from "../../../types/pokemon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonDetailResponse } from "../../../types/responses";

interface IPokemonsSlice {
  pokemons: Pokemon[];
  error: boolean;
  loading: boolean;
  previous?: string | null;
  next?: string | null;
  count: number;
}

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: <Pokemon[]>[],
    error: false,
    loading: false,
    previous: null,
    next: null,
    count: 0,
  } as IPokemonsSlice,
  reducers: {
    setConfigs: (state, action) => {
      state.count = action.payload.count;
      state.previous = action.payload.previous;
      state.next = action.payload.next;
    },
    addOrUpdatePokemon: (
      state,
      action: PayloadAction<PokemonDetailResponse>
    ) => {
      let pokemon = state.pokemons.find((p) => p.name === action.payload.name);

      if (pokemon) {
        pokemon = {
          ...pokemon,
          image: `https://res.cloudinary.com/dxsogozve/image/upload/v1675933500/pokemons/${
            action.payload!.id
          }.png`,
          types: action.payload.types
            ? action.payload.types.map((type) =>
                Object({ name: type.type.name })
              )
            : [],
        };
      } else {
        state.pokemons.push(
          Object({
            id: action.payload.id,
            name: action.payload.name,
            image: `https://res.cloudinary.com/dxsogozve/image/upload/v1675933500/pokemons/${
              action.payload!.id
            }.png`,
            types: action.payload.types
              ? action.payload.types.map((type) =>
                  Object({ name: type.type.name })
                )
              : [],
            stats: action.payload.stats
              ? action.payload.stats.map((stat) =>
                  Object({ name: stat.stat.name, base: stat.base_stat })
                )
              : [],
          })
        );
      }
    },
    addOrUpdatePokemons: (
      state,
      action: PayloadAction<PokemonDetailResponse[]>
    ) => {
      action.payload.forEach((pokemon) => {
        let temp = state.pokemons.find((p) => p.name === pokemon.name);

        if (temp) {
          temp!.id = pokemon!.id;
          temp!.image = pokemon!.id
            ? `https://res.cloudinary.com/dxsogozve/image/upload/v1675933500/pokemons/${
                pokemon!.id
              }.png`
            : undefined;
          temp!.types = pokemon!.types
            ? pokemon!.types.map((type) => Object({ name: type.type.name }))
            : [];
          temp!.stats = pokemon!.stats
            ? pokemon!.stats.map((stat) =>
                Object({ name: stat.stat.name, base: stat.base_stat })
              )
            : [];
        } else {
          state.pokemons.push(
            Object({
              id: pokemon.id,
              name: pokemon.name,
              image: pokemon!.id
                ? `https://res.cloudinary.com/dxsogozve/image/upload/v1675933500/pokemons/${
                    pokemon!.id
                  }.png`
                : undefined,
              types: pokemon.types,
              stats: pokemon.stats,
            })
          );
        }
      });
    },
    updatePokemonDescription: (state, action: PayloadAction<any>) => {
      let pokemon = state.pokemons.find((p) => p.name === action.payload.name);

      pokemon!.description = action.payload.description;
    },
  },
});

export const {
  setConfigs,
  addOrUpdatePokemon,
  addOrUpdatePokemons,
  updatePokemonDescription,
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;

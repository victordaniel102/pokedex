import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Pokemon,
  PokemonResponse,
  PokemonSingle,
} from "../../../types/pokemon";

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
    setPokemons: (state, action: PayloadAction<PokemonSingle[]>) => {
      action.payload.forEach((pokemon) =>
        state.pokemons.push(
          Object({
            name: pokemon.name,
          })
        )
      );
    },
    addPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemons.push(action.payload);
    },
    updatePokemon: (
      state,
      action: PayloadAction<{ name: string; updatedPokemon: PokemonResponse }>
    ) => {
      let pokemon = state.pokemons.find(
        (pokemon) => pokemon.name === action.payload.name
      );

      pokemon!.id = action.payload.updatedPokemon!.id;
      pokemon!.description = action.payload.updatedPokemon!.description;
      pokemon!.image = `https://res.cloudinary.com/dxsogozve/image/upload/v1675933500/pokemons/${
        pokemon!.id
      }.png`;
      pokemon!.types = action.payload.updatedPokemon!.types.map((type) =>
        Object({ name: type.type.name })
      );
    },
  },
});

export const { setPokemons, addPokemon, updatePokemon } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;

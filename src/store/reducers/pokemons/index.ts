import { Pokemon } from "../../../types/pokemon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    addOrUpdatePokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemons.push(action.payload);
    },
    addOrUpdatePokemons: (state, action: PayloadAction<Pokemon[]>) => {
      action.payload.forEach((pokemon) => {
        let temp = state.pokemons.find((p) => p.name == pokemon.name);

        if (temp) {
          temp!.id = pokemon!.id;
          temp!.description = pokemon!.description;
          temp!.image = pokemon!.id
            ? `https://res.cloudinary.com/dxsogozve/image/upload/v1675933500/pokemons/${
                pokemon!.id
              }.png`
            : undefined;
          temp!.types = pokemon!.types
            ? pokemon!.types.map((type) => Object({ name: type.name }))
            : [];
        } else {
          state.pokemons.push(
            Object({
              id: pokemon.id,
              name: pokemon.name,
              description: pokemon.description,
              image: pokemon.image,
              types: pokemon.types,
            })
          );
        }
      });
    },
  },
});

export const { setConfigs, addOrUpdatePokemon, addOrUpdatePokemons } =
  pokemonsSlice.actions;

export default pokemonsSlice.reducer;

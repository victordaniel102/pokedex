import { Pokemon, PokemonResponse, PokemonSingle } from "../../types/pokemon";
import httpService from "../http.service";

type PokemonApiResponse = {
  results: Pokemon[];
  previous?: string | null;
  next?: string | null;
  count: number;
};

type PokemonSingleResponse = {
  results: PokemonSingle[];
};

type PokemonListResponse = Omit<PokemonApiResponse, "results"> &
  PokemonSingleResponse;

class PokemonService {
  getPokemon = async (name: string): Promise<PokemonApiResponse> => {
    try {
      const { data } = await httpService.get(`/pokemon/${name}`, {});

      return data;
    } catch (error) {
      throw error;
    }
  };

  getPokemonByUrl = async (url: string): Promise<PokemonResponse> => {
    try {
      const { data } = await httpService.request({
        baseURL: url,
        method: "GET",
      });

      return data;
    } catch (error) {
      throw error;
    }
  };

  getPokemons = async (): Promise<PokemonListResponse> => {
    try {
      const { data } = await httpService.get(`/pokemon`, { data: {} });

      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default new PokemonService();

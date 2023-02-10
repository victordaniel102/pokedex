import { Pokemon } from "../../types/pokemon";
import httpService from "../http.service";

type PokemonApiResponse = {
  results: Pokemon[];
  previous?: string | null;
  next?: string | null;
  count: number;
};

class PokemonService {
  getPokemonDetail = async (name: string): Promise<Pokemon> => {
    try {
      const { data } = await httpService.get(`/pokemon/${name}`, {});

      return data;
    } catch (error) {
      throw error;
    }
  };

  getPokemonDetailByUrl = async (url: string): Promise<Pokemon> => {
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

  getPokemonList = async (): Promise<PokemonApiResponse> => {
    try {
      const { data } = await httpService.get(`/pokemon`, { data: {} });

      return data;
    } catch (error) {
      throw error;
    }
  };

  getPokemonListByUrl = async (url: string): Promise<PokemonApiResponse> => {
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
}

export default new PokemonService();

import {
  PokemonDetailResponse,
  PokemonListResponse,
} from "../../types/responses";
import httpService from "../http.service";

class PokemonService {
  getPokemonDetail = async (name: string): Promise<PokemonDetailResponse> => {
    try {
      const { data } = await httpService.get(`/pokemon/${name}`, {});

      return data;
    } catch (error) {
      throw error;
    }
  };

  getPokemonDetailByUrl = async (
    url: string
  ): Promise<PokemonDetailResponse> => {
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

  getPokemonList = async (): Promise<PokemonListResponse> => {
    try {
      const { data } = await httpService.get(`/pokemon`);

      return data;
    } catch (error) {
      throw error;
    }
  };

  getPokemonListByUrl = async (url: string): Promise<PokemonListResponse> => {
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

  getPokemonOtherInfo = async (id: string): Promise<any> => {
    try {
      const { data } = await httpService.request({
        baseURL: `https://pokeapi.glitch.me/v1/pokemon/${id}`,
        method: "GET",
        headers: {
          "User-Agent": "Pokedex (https://pokedex.dclsistemas.com.br, 1.1)",
        },
      });

      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default new PokemonService();

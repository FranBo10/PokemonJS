import React from "react";
import { useState, useEffect } from "react";
import pokeball from "../images/pokeball.png";
import "./PokeTopBar.css";
import Searchbar from "./Searchbar";
import { SearchPokemon, getPokemons, getPokemonData } from "./Api";
import Pokedex from "./Pokedex";
import PokeNotFound from "./PokeNotFound";

const PokeTopBar = () => {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await SearchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
    }
    setLoading(false);
  };
  
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div class="flex align-center justify-between fixed w-full bg-gradient-to-r from-primary to-white">
      <div class="flex">
        <img alt="pokeapi-logo" src={logoImg} class="w-40 mr-6 ml-5" />
        <div class="xs:hidden md:flex items-center ml-3 pt-4 pr-3 pb-4 pl-5">
          <img src={pokeball} alt="pokeball" class="w-7 mr-4" />
          <p class="text-lg font-semibold">458</p>
        </div>
        <div class="flex items-center ml-3 pt-4 pr-3 pb-4 pl-5">
          <img src={pokeball} alt="pokeball" class="w-7 mr-4" />
          <p class="text-lg font-semibold">659</p>
        </div>
      </div>
      <div class="flex mr-4">
        <Searchbar onSearch={onSearchHandler}  />
      </div>
    </div>
  );
};

export default PokeTopBar;

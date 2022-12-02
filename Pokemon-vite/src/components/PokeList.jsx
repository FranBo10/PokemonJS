import React from "react";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./PokeList.css";
import PokeTopBar from "./PokeTopBar";

const PokeList = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
    );
    const data = await res.json();

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <PokeTopBar />
      <div className="app-container">
        <div className="all-container">
          {allPokemons.map((pokemonStats) => (
            <PokemonCard
              key={pokemonStats.id}
              id={pokemonStats.id.toString().padStart(3, "0")}
              image={
                pokemonStats.sprites.other["official-artwork"].front_default
              }
              name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
              type={pokemonStats.types[0].type.name}
              weight={pokemonStats.weight}
              height={pokemonStats.height}
              stats={pokemonStats.stats
                .map((stat) => stat.base_stat)
                .slice(0, 3)}
              statsName={pokemonStats.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokeList;

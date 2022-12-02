import React from "react";
import { useEffect, useState } from "react";
import { GetPokemons } from "../funciones/funciones";

export const PokeImg = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    GetPokemons(setPokemons);
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <h1>{pokemon.sprites.front_default}</h1>
        </div>
      ))}
    </div>
  );
};
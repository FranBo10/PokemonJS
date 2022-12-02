import axios from "axios";

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

const GetPokemons = async (state) => {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`)

    state(data.data.results);    
    }

const renderPokemonData = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;
}


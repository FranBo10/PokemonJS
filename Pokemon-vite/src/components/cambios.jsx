const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const searchPokemon = async () => {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`)

      console.log(data.data.results);    
      
       data.data.results.forEach(async(pokemon) =>{
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name.toLowerCase()}`)

        setPokemons((p) => [...p, poke.data])
      } )  
    }    
       searchPokemon();
  
  }, []);

  console.log(pokemons)

  
  data.data.results.forEach(async (pokeName) => {
    const poke = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeName.name.toLowerCase()}`
    );

    setPokenames((p) => [...p, poke.data]);        

    data.data.results.forEach(async (pokeType) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeType.type.toLowerCase()}`
      );

      setPoketypes((p) => [...p, poke.data]);
      
    
    }
    const getAllPokemons = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      );
      const results = res.data.results;

      results.forEach(async (pokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });

      /*Bellessa <POkemon className="js"></POkemon>import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
    return (
        <div className="poke-card">
          <div>
            <p>{pokemon.name}</p>
          </div>
          <div>
            <img className="img-container" src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>N°: {pokemon.id}</p>
            <div className="poke-types">
              <div>
                <p>{pokemon.type}</p>
              </div>
            </div>
          </div>
          <div className="poke-stats">
            <div className="poke-stats-name">
              <p>Height:</p>
              <p>Weight:</p>
              {pokemon.stats.map((stats, index) => (
                <p className="stats">{stats.stat.base_stat}</p>
              ))}
            </div>
          </div>
          <div>
            <div className="poke-stats-amount">
              <p>{pokemon.height}0 cm</p>
              <p>{pokemon.weight} lbs</p>
              {pokemon.stats.map((stats, index) => (
                <p className="stats">{stats.stat.name}</p>
              ))}
            </div>
          </div>
        </div>
      );
};

export default Pokemon;


      /*Bellessa*/
      import React, {useState} from "react";
import SearchPokemon from'./SearchPokemon';

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = () => async (pokemon) => {
        const result = await SearchPokemon(pokemon)
        console.log(result)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler} >Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nombre: {pokemon.nombre}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            ) : null}
            </div>
        )
    }


export default Searchbar;
      
    
// const InputForm = () => {

//     const [pokemons, setPokemons] = useState([]);

//     useEffect(() => {
//         const getAllPokemons = async () => {
//           const res = await axios.get(
//             "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
//           );
//           const results = res.data.results;
    
//           results.forEach(async (pokemon) => {
//             const poke = await axios.get(
//               `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
//             );
//             setPokemons((p) => [...p, poke.data]);
//           });
          
//         };

//     const renderPokemonData = () => {
//         {pokemons.map((pokemon) => (
//             <PokeCards
//               key={pokemon.id}
//               id={pokemon.id.toString().padStart(3, "0")}
//               image={pokemon.sprites.other["official-artwork"].front_default}
//               name={pokemon.name.replace(/^./, (str) => str.toUpperCase())}
//               type={pokemon.types[0].type.name}
//               weight={pokemon.weight}
//               height={pokemon.height}
//               stats={pokemon.stats.map((stat) => stat.base_stat).slice(0, 3)}
//               statsName={pokemon.stats.map((stat) => stat.stat.name).slice(0, 3)}
//             />
//           ))}
        
//     }

//     },[])

//     return(
//     <form>
//         <form>
//       <input type="text" name="pokemon" autoComplete='off'/>
//     </form>
//     </form>
// )}

// export default InputForm;

  
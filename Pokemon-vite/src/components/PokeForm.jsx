import { useEffect } from 'react';

const PokeForm = () => {

  useEffect(() => {
    const searchPokemon = async () => {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`)

      console.log(data.data.results);     
        
    }    
  
  }, []);
  
  return (
    <form action="" onSubmit={searchPokemon()}>
       <input type="text" name="pokemon" autocomplete="off"/>
    </form>
  )
}

export default {
  PokeForm
};
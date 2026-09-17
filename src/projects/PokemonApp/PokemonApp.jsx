import "./Pokemon.css";
import { useState, useEffect } from "react";
import { PokemonCards } from "./PokemonCards";

export const PokemonApp =() => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon =async () => {
    try {
        const res = await fetch(API);
        const data = await res.json();
        //console.log(data);

        const detailedPokemonData  = data.result.map(async(curPokemon) => {
            const res = await fetch(curPokemon.url);
            const data = await res.json();
            return data;
        });
          //console.log(detailedPokemonData);

          const detailedResponses = await Promise.all(detailedPokemonData);
          console.log(detailedResponses);
          setPokemon(detailedResponses);
          setLoading(false);
        }catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
        }
   };

   useEffect(() => {
    fetchPokemon();
   }, []);

   //Loading 
   if (loading) {
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
   }

   //error 
   if (error) {
    return (
        <div>
            <h1>{error.message}</h1>
        </div>
    );
   }

    return ();
};

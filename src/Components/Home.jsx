import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";



export default function Home() {
const [pokemon, setPokemon] = useState(null)
function rand () {
    function randomNumber() {
        return Math.floor(Math.random() * 100) + 1}
        const URL =`https://pokeapi.co/api/v2/pokemon/${randomNumber()} `;
        axios(URL).then((res) => {
            // console.log(res.data)
            setPokemon(res.data)
            
        })

}
useEffect(() => {
  rand();
   
},[])
console.log(pokemon)

    return (
        <>{
            pokemon?
            <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.height}</p>
            <p>{pokemon.weight}</p>
            <p>{pokemon.type}</p>
            <button className="btn btn-primary" onClick={rand}>Cliquez</button>
            </div>
       
           :null
        }
        
        </>
    )
}
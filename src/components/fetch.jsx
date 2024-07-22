// PokemonComponent.js
import React, { useState, useEffect, useCallback } from 'react';
import PokemonGame from './Pokemongame';
import '../styles/card.css';

const PokemonComponent = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPokemons = useCallback(async () => {
        try {
            setLoading(true);
            
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
            if (!response.ok) throw new Error('Failed to fetch Pokémon list');
            
            const data = await response.json();
            const allPokemons = data.results;

            const randomPokemons = [];
            while (randomPokemons.length < 10) {
                const randomIndex = Math.floor(Math.random() * allPokemons.length);
                if (!randomPokemons.includes(allPokemons[randomIndex])) {
                    randomPokemons.push(allPokemons[randomIndex]);
                }
            }

            const detailedPokemonsPromises = randomPokemons.map(pokemon => 
                fetch(pokemon.url).then(res => {
                    if (!res.ok) throw new Error('Failed to fetch Pokémon details');
                    return res.json();
                })
            );

            const detailedPokemons = await Promise.all(detailedPokemonsPromises);

            setPokemons(detailedPokemons);
            setError(null);
        } catch (error) {
            setError('Failed to fetch Pokémon data.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPokemons();
    }, [fetchPokemons]);

    return (
        <div className="pokemon-component">
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <PokemonGame pokemons={pokemons} onNewGame={fetchPokemons} />
            )}
        </div>
    );
};

export default PokemonComponent;
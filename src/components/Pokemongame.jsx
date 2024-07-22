import React, { useState, useEffect } from 'react';
import '../styles/card.css';
import Count from './count'; 
import GameOverModal from './GameOverModal';
import WinModal from './win';

const shuffleArray = (array) => {
    let shuffledArray = array.slice(); 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; 
    }
    return shuffledArray;
};

const PokemonGame = ({ pokemons, onNewGame }) => {
    const [clickedPokemons, setClickedPokemons] = useState([]);
    const [shuffledPokemons, setShuffledPokemons] = useState(pokemons);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isWin, setIsWin] = useState(false);

    const WIN_CONDITION = 10;

    useEffect(() => {
        setShuffledPokemons(shuffleArray(pokemons));
    }, [pokemons]);

    const handleCardClick = (pokemon) => {
        if (clickedPokemons.some(p => p.id === pokemon.id)) {
            if (score > bestScore) {
                setBestScore(score);
            }
            setIsGameOver(true);
        } else {
            const newScore = score + 1;
            setScore(newScore);
            if (newScore > bestScore) {
                setBestScore(newScore);
            }
            setClickedPokemons([...clickedPokemons, pokemon]);
            setShuffledPokemons(shuffleArray(shuffledPokemons));

            if (newScore === WIN_CONDITION) {
                setIsWin(true);
            }
        }
    };

    const handleCloseModal = () => {
        setIsGameOver(false);
        setIsWin(false);
        setScore(0);
        setClickedPokemons([]);
        onNewGame(); // Fetch new Pokémon
    };

    return (
        <div className="pokemon-game">
            <Count score={score} bestScore={bestScore} />
            <div className="pokemon-list">
                {shuffledPokemons.map(pokemon => (
                    <div 
                        key={pokemon.id} 
                        className="pokemon-card" 
                        onClick={() => handleCardClick(pokemon)}
                    >
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <h2>{pokemon.name}</h2>
                    </div>
                ))}
            </div>
            {isGameOver && (
                <GameOverModal 
                    score={score} 
                    bestScore={bestScore} 
                    onClose={handleCloseModal} 
                />
            )}
            {isWin && (
                <WinModal 
                    score={score} 
                    bestScore={bestScore} 
                    onClose={handleCloseModal} 
                />
            )}
        </div>
    );
};

export default PokemonGame;
// On importe React
import React from 'react';

/*  
    On importe deux composants
    - MovieList qui est une liste de films
    - MovieCounter qui compte le nombre de films disponibles
*/
import MoviesList from './components/MoviesList';
import MovieCounter from './components/MovieCounter';

// On importe le composant MovieProvider depuis notre fichier MovieContext
import {MovieProvider} from './contexts/MovieContext';


export default function App() {
    // On emballe les composants avec le MovieProvider pour leur donner accès au contexte
    return (
        <MovieProvider>
            <MoviesList />
            <MovieCounter />
        </MovieProvider>
    )
}

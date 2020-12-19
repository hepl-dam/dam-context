// On importe React et useContext
import React, {useContext} from 'react';

// On importe le contexte
import {MovieContext} from '../contexts/MovieContext';

export default function MovieCounter() {
    // on stock le contenu de contexte dans une variable
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <section>
            <h2>
                 Nombre de films : <span>{movies.length}</span>
            </h2>
        </section>
    )
}

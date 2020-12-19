import React, {useContext} from 'react'
import {MovieContext} from '../contexts/MovieContext'

export default function MoviesList() {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <ul>
            {movies.map(movie => 
                <li>
                    {movie.name}
                </li>
            )}
        </ul>
    )
}

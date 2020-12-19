/*
    Le Contexte est conçu pour partager des données qui peuvent être considérées comme « globales » pour une arborescence de composants React, comme l’utilisateur actuellement authentifié, le thème, ou la préférence de langue.
*/

// On importe de la bibliothèque React, useState et createContext
import React, {useState, createContext} from 'react';

// On crée une constante dans laquelle on stock la fonction createContext()
export const MovieContext = createContext();

// on crée une seconde constante dans laquelle on stock les éléments du state à partager entre les différents composants
export const MovieProvider = props =>{ 
    const [movies, setMovies] = useState([
        {
            name : 'The Neon Demon',
            director : 'Nicolas Winding Refn',
            yearOfRelease : 2015
        },
        {
            name : 'Vertigo',
            director : 'Alfred Hitchcock',
            yearOfRelease : 1958
        },
        {
            name : 'Toute une nuit',
            director : 'Chantal Akerman',
            yearOfRelease : 1982
        },
    ]);

    /*
        Dans cette fonction on retourne le contexte créé plus haut avec la syntaxe suivante
        Il accepte une prop value à transmettre aux composants consommateurs descendants de ce Provider. 

        - Le contenu peut être directement des composants ou on peut passer le state en props pour une utilisation dans les fichiers concernés
        - Le Provider sert à englober l'application ou une partie et donc le props.children sert à rendre le contenu sans savoir ce qu'il y aura à l'avance.
        - Le provider embale des 
        - https://fr.reactjs.org/docs/composition-vs-inheritance.html
        - https://www.youtube.com/watch?v=Mjrb8eZqBkA
        - https://www.youtube.com/watch?v=Sq0FoUPxj_c
        - https://www.youtube.com/watch?v=XLJN4JfniH4

    */
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}



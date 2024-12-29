function MoviesList ({movies}) {
    return (
        <ul className='movies'>
            {
                movies.map(movie => (
                <li className='movie' key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                    {movie.poster === 'N/A'? 'No poster for this movie' : <img src={movie.poster} alt={movie.title}/>}
                </li>
                ))
            }
        </ul>
    )
}

function NoMoviesFound () {
    return (
        <p>Currently no movies found</p>
    )
}


export default function Movies ({movies}) {

    const hasMovies = movies?.length > 0
    return (
        hasMovies
        ? <MoviesList movies={movies} />
        : <NoMoviesFound />
    )
}
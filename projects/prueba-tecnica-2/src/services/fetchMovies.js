const API_KEY = 'da72af6d'

export const fetchMovies = async ({search}) =>{
    if(search === '') return null
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const data = await response.json()
        
        const movies = data.Search

        return movies?.map(movie => ({
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            id: movie.imdbID
          }))
            
    } catch (e) {
        throw new Error('Error fetching movies')
    }
}

// fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
//             .then(res => res.json())
//             .then(data => {
//               setFetchedMovies(data)
//             })
//           } else {
//             setFetchedMovies(noResult)
//           }
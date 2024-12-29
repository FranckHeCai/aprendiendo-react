import { useState } from 'react'
import { fetchMovies } from '../services/fetchMovies'


export function useMovies ({search}){
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
      const fetchedMovies = await fetchMovies({search})
      setMovies(fetchedMovies)
    }

  
    return {movies, getMovies }
  }

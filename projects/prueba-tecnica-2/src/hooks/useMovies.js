import { useState, useRef, useMemo, useCallback } from 'react'
import { fetchMovies } from '../services/fetchMovies'

export function useMovies ({search, sort}){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const lastSearch = useRef(search)

    const getMovies = useCallback(async ({ search }) => {
      if(search === lastSearch.current) return
      try {
        setLoading(true)
        lastSearch.current = search
        const fetchedMovies = await fetchMovies({search})
        setMovies(fetchedMovies)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }, []) 

    const sortedMovies = useMemo(() => {
      return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
    }, [sort, movies])

    return {movies : sortedMovies, getMovies, loading }
  }

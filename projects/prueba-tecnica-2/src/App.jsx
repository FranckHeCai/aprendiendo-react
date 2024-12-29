import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
//import { useSearch } from './hooks/useSearch'
import { useState, useEffect, useRef } from "react"



function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(()=>{

    if(isFirstInput.current){
        isFirstInput.current = search === ''
        return
    }
    if(search === ''){
      setError('Cannot search for empty string')
      return
    }

    if(search.match(/^\d+$/)){
      setError('Cannot search for numbers')
      return
    }
    setError(null)
  },[search])

  
  return {search, updateSearch, error}
}

function App () {
 
  const {search, updateSearch, error} = useSearch()
  const {movies, getMovies} = useMovies({search})

  const handleSubmit = (e) =>{
    e.preventDefault()
    getMovies()
  }

  const handleChange = (e) =>{
    updateSearch(e.target.value)
  }

  return (
    <div className='page'>
      <h1>Movie Search</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
        <label>
          <input value={search} onChange={handleChange} name='movie-input' type="text" placeholder="Avengers, Spiderman, Thor..." />
          <button type='submit'>Search</button>
        </label>
        </form>
        {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>}
      </header>
    
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App

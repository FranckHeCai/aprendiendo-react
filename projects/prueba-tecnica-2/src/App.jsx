import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
//import { useSearch } from './hooks/useSearch'
import { useState, useEffect, useRef, useCallback } from "react"
import debounce from 'just-debounce-it'


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
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error} = useSearch()
  const {movies, getMovies, loading} = useMovies({ search, sort })
  
  const debouncedMovies = useCallback(
    debounce(search => {
    getMovies({search})
    }, 500)
  ,[getMovies])  

  const handleSubmit = (e) =>{
    e.preventDefault()
    getMovies({search})
  }

  const handleChange = (e) =>{
    const newSearch = e.target.value
    updateSearch(newSearch)
    debouncedMovies(newSearch)
  }

  const handleSort = () =>{
    setSort(!sort)
  }

  return (
    <div className='page'>
      <h1>Movie Search</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
        <label>
          <input value={search} onChange={handleChange} name='movie-input' type="text" placeholder="Avengers, Spiderman, Thor..." />
          <label style={{display: 'block'}} >Sort Movies by title 
            <input  type='checkbox' onChange={handleSort}/>
          </label>
          <button type='submit'>Search</button>
        </label>
        </form>
        {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>}
      </header>
    
      <main>
        {
          loading 
          ? <p>Loading...</p> 
          : <Movies movies={movies} />
        }
        
      </main>
    </div>
  )
}

export default App

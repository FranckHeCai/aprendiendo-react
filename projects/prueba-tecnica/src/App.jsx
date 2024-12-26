import { useState, useEffect} from "react"
export default function App() {
    const [fact, setFact] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        fetchFact()
      }, [])

      useEffect(() => {
        const firstWord = fact.split(' ', 1)
          fetchImage(firstWord)
      }, [fact])

    const fetchFact = async () => {
        try {
          const response = await fetch('https://catfact.ninja/fact')
          const data = await response.json()
          setFact(data.fact)
          
        } catch (error) {
            console.error(error)
        }
      }

    const fetchImage = async (firstWord) => {
        try {
            const response = await fetch(`https://cataas.com/cat/says/${firstWord}`)
            setImage(response.url)
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Cat Facts</h1>
            {fact && <p>FACT: {fact}</p>}
            {image && <img style={{objectFit : 'contain'}} width={400} src={image} alt="Image extrated from the 3 first words of the cat api" />}
            <button onClick={fetchFact}>Get another fact</button>
        </main>
        
    );
}
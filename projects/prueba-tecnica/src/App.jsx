import { useState, useEffect} from "react"
import { useCatImage } from "./Hooks/useCatImage"
import { useCatFact } from "./Hooks/useCatFact"

export default function App() {
    const {fact, refreshRandomFact} = useCatFact()
    const {image} = useCatImage({fact})
    
    
    const handleClick = async() => {
        refreshRandomFact()
    }

    return (
        <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Cat Facts</h1>
            {fact && <p>FACT: {fact}</p>}
            {image && <img style={{objectFit : 'contain'}} width={400} src={image} alt="Image extrated from the 3 first words of the cat api" />}
            <button onClick={handleClick}>Get another fact</button>
        </main>
        
    );
}
import { useEffect, useState } from "react";

const api_url ='https://zenquotes.io/api/quotes/';

export default function QuoteMachine(){
    const [quote, setQuote] = useState('initial quote')

    // const fetchQuote = () =>{
        
    //     fetch(api_url, { mode: 'no-cors' })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data) 
    //     })
    //     .catch((error) => {
    //         alert(`Error: ${error}`)
    //     });
    //     }

    return(
        <>
            <h1>Random Quote Machine</h1>
            <h2>Quote: {quote}</h2>
        </>
    )
}
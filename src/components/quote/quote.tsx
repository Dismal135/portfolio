'use client'

import { useEffect, useState } from "react"
import { Button } from "@nextui-org/button"

type quote = {
    quote: string,
    author: string
}

export default function Quote () {
    const [quotes, setQuotes] = useState<null | quote[]>(null)
    const [quote, setQuote] = useState<'loading' | quote>('loading');

    useEffect(()=>{
        const getQuotes = async () => {
            const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            const data = await response.json();
            setQuotes(data.quotes)
            const randomQuote =data.quotes[Math.floor(Math.random() * data.quotes.length)]
            setQuote(randomQuote)
        }
        getQuotes();
    },[])

    const changeQuote = () => {
        if(quotes) {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)])
        }
    }

    if (quote === 'loading') {
        return 
    }

    return (
        <div className="z-50 absolute font-bold text-xl left-[30%] top-[10%] flex flex-col text-white">
            {quote.quote}
            <Button variant="shadow" onClick={changeQuote} className="w-fit fixed top-1 ml-4" size="md">Get Quote</Button>
        </div>
    )
}
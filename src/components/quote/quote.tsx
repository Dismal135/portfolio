import { useEffect, useState } from "react"
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

    if(quote === 'loading') {
        return
    }

    const changeQuote = () => {
        if(quotes) {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)])
        }
    }

    return (
        <div className="z-50 absolute left-[30%] top-[10%] flex flex-col">
            {quote.quote}
            <button onClick={changeQuote}>Change Quote</button>
        </div>
    )
}
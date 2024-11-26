'use client'

import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/button"

interface Quote {
  quote: string;
  author: string;
}

interface QuotesData {
  quotes: Quote[];
}

export default function Quote() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchQuotes()
  }, [])

  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      if (!response.ok) {
        throw new Error('Failed to fetch quotes')
      }
      const data: QuotesData = await response.json()
      setQuotes(data.quotes)
      getRandomQuote(data.quotes)
      setIsLoading(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setIsLoading(false)
    }
  }

  const getRandomQuote = (quotesArray: Quote[] = quotes) => {
    if (quotesArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotesArray.length)
      setCurrentQuote(quotesArray[randomIndex])
    }
  }

  if (isLoading) return <div className="z-50 absolute font-bold text-xl left-[30%] top-[10%] flex flex-col text-white">Loading...</div>
  if (error) return <div className="z-50 absolute font-bold text-xl left-[30%] top-[10%] flex flex-col text-white">{error}</div>

  return (
    <div className="z-50 absolute font-bold text-xl left-[30%] top-[10%] flex flex-col text-white">
      {currentQuote && (
        <>
          <p className="mb-4">"{currentQuote.quote}"</p>
          <p className="mb-6"><span className='bg-black p-1'>Author</span> - {currentQuote.author}</p>
        </>
      )}
      <Button 
        variant='shadow' 
        onClick={() => getRandomQuote()}
        className="w-fit fixed top-1 ml-4" size="md"
      >
        New Quote
      </Button>
    </div>
  )
}


import React from 'react'

export default function Quote({quote}) {
   
  return (
    <div className= "animate-fade-in">
        <p>{quote.text}</p>
        <p>{quote.author}</p>
    </div>
  )
}

import React from 'react'

export default function Quote({quote}) {
   
  return (
    <div className= "animate-fade-in w-2/3 rounded p-5 my-10 font-medium bg-gray-300 opacity-60">
        <p className= "text-xl">{quote.text}</p>
        {quote.author? <p className="text-m italic">- {quote.author}</p> : <p className= "text-m italic">- Someone Wise</p>}
    </div>
  )
}

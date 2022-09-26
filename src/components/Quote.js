import React from 'react'

export default function Quote({quote}) {
   
  return (
    <div className= "animate-fade-in w-2/3 rounded-lg p-5 my-10 font-medium bg-grey-rgba shadow-equal">
        <p className= "text-xl mb-1">{quote.text}</p>
        {quote.author? <p className="text-m italic">- {quote.author}</p> : <p className= "text-m italic">- Someone Wise</p>}
    </div>
  )
}

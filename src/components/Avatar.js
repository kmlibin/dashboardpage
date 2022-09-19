import React from 'react'

export default function Avatar({ src, theName }) {
    return (
        <div>
            <img className= "w-10 h-10" src={src} alt = "user photo" /> 
        </div>
  )
}

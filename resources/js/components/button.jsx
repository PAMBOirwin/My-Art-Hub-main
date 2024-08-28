import React from 'react'

export default function
({text, route }) {
  return (
    <div>
          <a href={route} className=" text-white opacity-90  hover:opacity-100 px-4 py-2 rounded transition-colors duration-300 bg-orange-900 font-bold">
            {text}
          </a>
    </div>
  )
}


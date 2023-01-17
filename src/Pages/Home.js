import React from 'react'
import Raffles from '../Components/Raffles'


export default function Home({raffles}) {
  return (
    <div>
        <Raffles raffles={raffles} />
    </div>
  )
}

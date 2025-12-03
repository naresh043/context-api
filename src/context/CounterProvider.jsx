import React, { useState } from 'react'
import { CounterContext } from './counterContext'
function CounterProvider({children}) {
    const [count,setCount]=useState(0)
    const value={count,setCount}
  return (
    <CounterContext.Provider value={value}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
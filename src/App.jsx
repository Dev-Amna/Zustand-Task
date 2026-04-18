import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import CounterValue from './components/CounterValue'
import PostData from './components/PostData'

function App() {


  return (
    <>
      <Counter />
      <PostData />
    </>
  )
}

export default App

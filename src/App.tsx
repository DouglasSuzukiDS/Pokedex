import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { CardContainer } from './components/CardContainer/CardContainer'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='flex flex-col justify-between items-center'>
        <Header />
        <CardContainer />
        <Footer />
      </main>
    </>
  )
}

export default App

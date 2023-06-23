import { CardContainer } from './components/CardContainer/CardContainer'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

import './App.css'
import { Register } from './components/Register/Register'

function App() {

  return (
    <>
      <main className='flex flex-col justify-between items-center'>
        {/* <Header /> */}
        {/* <CardContainer /> */}
        <Register />
        <Footer />
     </main>
    </>
  )
}

export default App

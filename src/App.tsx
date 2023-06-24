import { useState } from 'react'
import { CardContainer } from './components/CardContainer/CardContainer'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

import './App.css'
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login'


function App() {
  const [register, setRegister] = useState(true)
  const [login, setLogin] = useState(false)

  const handleShowRegisterModal = () => {
    setRegister(!register)

    setLogin(false)
  }

  const handleShowLoginModal = () => {
    setLogin(!login)

    setRegister(false)
  }

  return (
    <>
      <main className='flex flex-col justify-between items-center'>
        {/* <Header /> */}
        {/* <CardContainer /> */}

        { register &&
          <Register close={ handleShowLoginModal } />
        }

        { login &&
          <Login close={ handleShowRegisterModal } />
        }

        <Footer />
     </main>
    </>
  )
}

export default App

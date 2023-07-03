import { useState, useEffect } from 'react'
import { CardContainer } from './components/CardContainer/CardContainer'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

import './App.css'
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login'


function App() {
  const [registerModal, setRegisterModal] = useState(true)
  const [loginModal, setLoginModal] = useState(false)
  const [cardContainerArea, setCardContainerArea] = useState(false)

  useEffect(() => {
    const lc = localStorage.getItem('user')

    if(lc !== undefined && lc !== null) {
      setLoginModal(false)
      setRegisterModal(false)

      setCardContainerArea(true)
    } else {
      handleCloseSystem()
    }
  }, [])

  const handleShowRegisterModal = () => {
    setRegisterModal(!registerModal)

    setLoginModal(false)
  }

  const handleShowLoginModal = () => {
    setLoginModal(!loginModal)

    setRegisterModal(false)
  }

  const handleShowCardContainer = () => {
    setLoginModal(!loginModal)

    setCardContainerArea(!cardContainerArea)
  }

  const handleCloseSystem = () => {
    setLoginModal(true)
    setRegisterModal(false)
    setCardContainerArea(false)
  }

  // useEffect(() => {
   
  // })

  return (
    <>
      <main className='flex flex-col justify-between items-center'>
        <Header />

        { registerModal &&
          <Register close={ handleShowLoginModal } />
        }

        { loginModal &&
          <Login close={ handleShowRegisterModal } showCardContainer={ handleShowCardContainer } />
        }

        { cardContainerArea &&
          <CardContainer />
        }

        <Footer close={ handleCloseSystem } />
     </main>
    </>
  )
}

export default App

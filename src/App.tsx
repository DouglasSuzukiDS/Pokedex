import './App.css'
import { CardContainer } from './components/CardContainer/CardContainer'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {
  
  return (
    
    <>
     <main className='flex flex-col justify-between items-center border'>
        {/* <Header /> */}
        <CardContainer />
        
     </main>
    </>
  )
}

export default App

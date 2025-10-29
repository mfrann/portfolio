import './App.css'
import { Header } from './components/header'
import { Presentation } from './components/presentation'
import { About } from './components/about'
import { Portfolio } from './components/portfolio'
import { Footer } from './components/footer'
import { Habilidades } from './components/habilidades'
function App() {
  return (
    <div className='main' style={{overflowX: "hidden"}}>
      <Header/>
      <Presentation />
      <About />
      <Habilidades />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App

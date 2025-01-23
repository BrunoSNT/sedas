import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App

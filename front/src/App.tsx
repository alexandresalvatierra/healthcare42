import Footer from './components/Footer'
import Header from './components/Header'
import Overlap from './components/Overlap'
import Questions from './components/Questions'
import Shifts from './components/Shifts'

function App() {
  return (
    <>
      <Header />
      <main className='w-full p-4'>
        <Overlap />
        <Shifts />
        <Questions />
      </main>
      <Footer />
    </>
  )
}

export default App

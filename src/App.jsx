import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
      <div>
        <header className='border-b-1 border-gray-50 py-5'>
          <nav className='container flex'>
            <div className='ml-25 mt-10'>
              <img src="src/Digu.png" alt="immagine" />
            </div>
           <div className='mt-12 ml-35 m-2 space-x-4'>
              <a className='text-sm' href="">Home</a>
              <a className='text-sm' href="">About</a>
              <a className='text-sm' href="">Profile</a>
            </div>
            <div className='ml-5 mt-12 space-x-4'>
              <button className='btn bg-white border rounded-3xl text-black border-black text-sm cursor-pointer'>ACCEDI</button>
              <button className='btn bg-black text-white rounded-3xl text-sm cursor-pointer'>ISCRIVITI</button>
            </div>
          </nav>
        </header>
        <section>
          <div className='container mx-auto px-4 mt-40' id="slider-container">
            <h3 className='digu'>Digital Menù</h3>
            <h2 className='Digu mt-15 font-bold'>Scopri nuovi ristoranti <br />
              e nuovi piatti nella tua città </h2>
            <p className='digu mt-10'>Cosa vorresti assaggiare oggi ?</p>
            <label htmlFor="Inserire"></label>
            <input className="digu mt-10 cursor-pointer bg-transparent p-2 w-2/6 border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-gray peer" placeholder='Inserisci le parole chiave' />
            <button class="bg-yellow-400 font-bold text-white py-4 px-8 rounded-full margin cursor-pointer"><img src="src/Livello_1.png" alt="img" /></button>
          </div>
        </section>
      </div>
    </>
  )
}

export default App

/*<Routes>
<Route path='/' element={About} />
<Route path='/Home' element={Home} />
<Route path='/Profile' element={Profile} />
</Routes>*/
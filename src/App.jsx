import './App.css'

import Header from './components/Header'
import MainContent from './components/MainContent'


const App = () => {

  return (
    <>
      <div>
        <Header/>
        <MainContent/>
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
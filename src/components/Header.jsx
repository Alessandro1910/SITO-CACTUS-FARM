import Navbar from "./Navbar"
import Button from "./Button"

const Header = () => {

    return (
      <>
        <header className='border-b-1 border-gray-50 py-5'>
          <nav className='container flex'>
            <div className='ml-25 mt-10'>
              <img src="src/Digu.png" alt="immagine" />
            </div>
            <Navbar />
            <Button />
          </nav>
        </header>
      </>
    )
  }
  
  export default Header
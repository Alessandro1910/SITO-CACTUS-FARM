import { Link } from "react-router-dom"

const Navbar = () => {

    return (
      <>
        <div className='flex mt-12 ml-26 space-x-4'>
            <Link className='text-sm mx-6' to='/'>Home</Link>
            <Link className='text-sm mx-6' to='/About'>About</Link>
            <Link className='text-sm mx-6' to='/Profile'>Profile</Link>
        </div>
      </>
    )
  }
  
  export default Navbar
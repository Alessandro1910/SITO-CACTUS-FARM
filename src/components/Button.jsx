import { Link } from "react-router-dom"

const Button = () => {

    return (
      <>
       <div className='ml-5 mt-12 space-x-4'>
        <Link className='btn bg-white border rounded-3xl text-black border-black text-sm cursor-pointer' to='/Accedi'>ACCEDI</Link>
        <Link className='btn bg-black text-white rounded-3xl text-sm cursor-pointer' to='/Iscriviti'>ISCRIVITI</Link>
        </div>
      </>
    )
  }
  
  export default Button
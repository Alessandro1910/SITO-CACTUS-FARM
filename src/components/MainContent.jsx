import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Profile from "../pages/Profile"
import Accedi from "../pages/Accedi"
import Iscriviti from "../pages/Iscriviti"


const MainContent = () => {

    return (
        <>
            <section id="main-content">
                <section>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Profile' element={<Profile />} />
                        <Route path='/Accedi' element={<Accedi/>} />
                        <Route path='/Iscriviti' element={<Iscriviti/>} />
                    </Routes>
                </section>
            </section>
        </>
    )
}

export default MainContent
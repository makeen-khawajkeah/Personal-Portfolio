import { Route, Routes} from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Home from "./pages/Home"
import OpenProject from "./pages/OpenProject"
import Footer from "./components/Footer/Footer"
const App = () => {
  return (
    <main className="dark:bg-darkmodebg dark:text-white modecontroler duration-500 relative z-50 overflow-x-hidden">
    <Nav/>
    <Routes>   
      <Route path="/" element={<Home/>}/>
      <Route path="/project/:id" element={<OpenProject/>}/>
    </Routes>
    <Footer/>
    </main>
  )
}

export default App
import { useEffect, useState } from "react";
import { NavLinks } from "../../data"
import Logo from "../Logo/Logo"
import NavItems from "./NavItems"
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import MobileNav from "./MobileNav";
const Nav = () => {
    const [navToggle,setnavToggle] = useState(false)
    const [darkToggle,setdarkToggle]=useState(false)
    const bo = document.querySelector("html")
    const dark = ()=>{
        setdarkToggle(!darkToggle)
        localStorage.setItem("status","dark")
        localStorage.setItem("toggle", "true")
    }
    const light = ()=>{
        setdarkToggle(!darkToggle)
        localStorage.setItem("status","light")
        localStorage.setItem("toggle", "false")
    }
    const state = localStorage.getItem("status")
    if(state == "dark"){
        bo.classList.add("dark")
    }
    else{
        bo.classList.remove("dark")
    }
return (
    <nav>
        <div className="w-screen max-w-screen flex justify-between pt-10 pb-5 items-center fixed left-2/4 -translate-x-2/4 px-4 lg:px-20  bg-white z-50 dark:bg-darkmodebg duration-500">
        <Logo name={["M","A","K"]}/>
        <NavItems links = {NavLinks}/>
        <FaMoon 
            fontSize={30}
            fontWeight={700}
            color="rgba(29, 33, 48, 1)"
            className={`hidden cursor-pointer ${JSON.parse (localStorage.getItem("toggle")) ? "hidden":"sm:block"}`}
            onClick={()=>dark()}
        />
        <IoSunny 
            fontSize={30}
            fontWeight={700}
            color="white"
            className={`hidden  cursor-pointer ${JSON.parse (localStorage.getItem("toggle")) ? "sm:block":"hidden"}`}
            onClick={()=>light()}
        />
        <IoMenu
            fontSize={30}
            fontWeight={700}
            className="sm:hidden cursor-pointer dark:text-white"
            onClick={()=> setnavToggle(true)}
        />
        </div>
        {navToggle && <MobileNav setnavToggle={setnavToggle} setdarkToggle={setdarkToggle} darkToggle= {darkToggle}/>}
    </nav>
)
}

export default Nav

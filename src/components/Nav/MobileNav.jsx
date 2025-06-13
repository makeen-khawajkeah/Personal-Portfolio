import { NavLinks } from "../../data"
import Logo from "../Logo/Logo"
import { IoClose } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
const MobileNav = ({setnavToggle,setdarkToggle,darkToggle}) => {
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
    <div className="mobile nav flex flex-col bg-white fixed w-full mt-10 sm:hidden px-4 z-50 dark:bg-darkmodebg duration-500">
        <div className="icon flex justify-between">
            <Logo name={["M","A","K"]}/>
            <IoClose
                fontSize={30}
                fontWeight={700}
                className="cursor-pointer dark:text-white"
                onClick={()=>setnavToggle(false)}
            />
        </div>
        <ul className="text-center">
        {
            NavLinks.map((link,index)=>{
                return(
                    <li key={index} className="text-base py-10 border-b-2 cursar-pointer" >
                        <a href= {`${link.path}`}>{link.title}</a>
                    </li>
                )
            })
        }
            <FaMoon 
                fontSize={30}
                fontWeight={700}
                color="rgba(29, 33, 48, 1)"
                className= {`mx-auto my-10 cursor-pointer ${JSON.parse (localStorage.getItem("toggle")) ? "hidden":"block"}`}
                onClick={()=>dark()}
            />
            <IoSunny 
                fontSize={30}
                fontWeight={700}
                className={`mx-auto my-10 cursor-pointer ${JSON.parse (localStorage.getItem("toggle")) ? "block":"hidden"} text-white`}
                onClick={()=>light()}
            />
        </ul>
    </div>
)
}

export default MobileNav
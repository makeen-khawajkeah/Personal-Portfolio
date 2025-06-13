import { useState } from "react"
import { FaArrowUpLong } from "react-icons/fa6";
const ScrollButton = () => {
    const [isVisible,setisVisible]=useState(false)
    window.addEventListener('scroll', scrollFunction);
    function scrollFunction() {
        if (document.documentElement.scrollTop > 1700) {
            setisVisible(true)
        }
        else{
            setisVisible(false)
        }
    }
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
        })
    }
    return (
    <button 
    className={`bg-blue text-white p-3 md:p-4 rounded-[6px] fixed  bottom-5 duration-500 ${isVisible? "opacity-100 right-5":"opacity-0 -right-10 "} hover:bg-purpple`}
    onClick={()=>scrollTop()}>
        <FaArrowUpLong />
    </button>
)
}

export default ScrollButton
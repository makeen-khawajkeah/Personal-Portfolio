import { FaArrowRight } from "react-icons/fa6";
const TryMe = () => {
return (
    <div className="container mt-[165px] mx-auto">
        <div className="try-me bg-purpple flex items-center justify-between lg:px-[136px] lg:py-[120px] px-[20px] py-[50px] rounded-[32px]
        flex-col lg:flex-row mx-2 relative after:content-[''] after:w-full after:h-full after:absolute after:bg-blue after:left-0 after:top-0 after:rounded-[32px] after:-z-10 after:rotate-[-2.34deg]">
            <img src="/src/assets/image/LInes.png" alt="" className="absolute w-full left-0 h-full top-0" />
            <div className="info text-white lg:text-left text-center relative z-30">
                <h3 className="lg:text-[48px] text-[38px] font-semibold mb-[10px]">Try me out, risk free!</h3>
                <p className="text-[20px]">If you’re not happy with the design after the first draft,<br /> I’ll refund your deposit,
                    <span className="font-semibold"> no questions asked</span>
                </p>
            </div>
            <a href="#5" className="bg-blue text-white py-[14px] px-[40px] rounded-[6px] mt-10 flex items-center gap-x-3 cursor-pointer relative z-10">Contact
            <FaArrowRight />
            </a>
        </div>
    </div>
)
}

export default TryMe
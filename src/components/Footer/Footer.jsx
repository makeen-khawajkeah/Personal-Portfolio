import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
return (
    <div className="footer pt-[94px]">
        <div className="container mx-auto flex justify-between pt-[32px] pb-[40px] border-t-[1px] border-border flex-col md:flex-row items-center">
            <p className="mt-3 md:m-0">@ 2025. All Rights Reserved</p>
            <p className="mt-3 md:m-0 ">Develpoment by <span className="text-blue font-semibold animate-color">Makeen</span></p>
            <ul className="flex gap-x-[16px] items-center mt-3 md:m-0">
                <Link to="https://www.facebook.com/makeen.kh.96" className="bg-blue p-[6px] rounded-[50%] text-white hover:bg-purpple duration-500"><FaFacebookF/></Link>
                <Link className="bg-blue p-[6px] rounded-[50%] text-white hover:bg-purpple duration-500"><FaLinkedinIn /></Link>
                <Link className="bg-blue p-[6px] rounded-[50%] text-white hover:bg-purpple duration-500"><FaTelegramPlane /></Link>
                <Link className="bg-blue p-[6px] rounded-[50%] text-white hover:bg-purpple duration-500"><FaInstagram /></Link>
            </ul>
        </div>
    </div>
)
}

export default Footer
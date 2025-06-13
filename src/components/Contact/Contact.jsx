import Communication from "../Communication/Communication"
import Title from "../Title/Title"
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import ContactInputs from "../ContactInputs/ContactInputs";
const Contact = ({id}) => {
return (
    <div className="contact pt-[94px] section p-1 " id={id}>
        <div className="container m-auto">
        <Title sectionName = "Contact"title={["Let’s Discuss Your","Project"]}/>
        <div className="content flex mt-[56px] gap-x-[212px] flex-col lg:flex-row">
            <Communication icons={[<HiOutlinePhone className="hover:animate-ringing"/>,<MdOutlineEmail className="hover:animate-email"/>, <GrLocation className="hover:animate-location"/>]}/>
            <div className="inputs basis-[100%]">
                <ContactInputs/>
                <button href="" className="bg-blue text-white rounded-[8px] px-[50px] py-[15px] hover:bg-purpple duration-500">Send Message</button>
            </div>
        </div>
        </div>
    </div>
)
}

export default Contact
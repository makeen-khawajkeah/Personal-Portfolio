import Rate from "../Rate/Rate"
import { FaMessage } from "react-icons/fa6";
const AboutMe = ({id}) => {
return (
    <div className="about-me section pt-[60px]" id ={id}>
        <div className="container flex justify-center gap-x-[120px] mx-auto flex-col-reverse lg:flex-row">
            <img src="/src/assets/image/About me.png" alt="" />
            <div className="mt-[50px] flex-1 lg:max-w-[600px] mx-5 md:mx-0">
                <h2 className="text-[40px] font-semibold text-center lg:text-left">About Me</h2>
                <p className="mb-[40px] text-lg text-center lg:text-left text-liblack font-normal dark:text-white">
                My name is Makeen Khawajkeah, I am 20 years old, currently pursuing Computer Engineering and Automation at Damascus University. I work as a front-end developer, focusing on crafting engaging web interfaces. With a year of hands-on experience in front-end development
                </p>
                <Rate/>
            </div>
        </div>
    </div>
)
}

export default AboutMe
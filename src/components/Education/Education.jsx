import { educationleft, educationRight } from "../../data"
import Skills from "../Skills/Skills"

const Education = ({id}) => {
return (
    <div className="education lg:pt-[125px] section pt-[60px] relative" id={id}>
        <img src="/image/education-squers.png" alt="" className="absolute top-0 right-0 -z-10" />
        <div className="title text-center mb-[88px]" >
            <p className="text-blue md:text-[20px] text-[18px]">Education & Experience</p>
            <h2 className="md:text-[40px] text-[32px] font-semibold">Education & Experience</h2>
        </div>
        <div className="container mx-auto">
            <div className="skills flex gap-x-[90px] flex-col lg:flex-row">
                <Skills skill= {educationleft}/> 
                <Skills skill={educationRight}/>
            </div>
        </div>
        <img src="/public/image/education-squers-2.png" alt="" className="absolute -bottom-[160px] left-0 -z-10"/>
    </div>
)
}

export default Education
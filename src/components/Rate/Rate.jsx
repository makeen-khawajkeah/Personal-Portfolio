import { skillsRate } from "../../data"
import { FaMessage } from "react-icons/fa6";
const Rate = () => {
return (
    <ul className="rate ">
        {
            skillsRate.map((skillRate,index)=>{
                return(
                    <li key={index} className="mb-[19px]">
                        <h3 className="mb-2 text-2xl font-semibold">{skillRate.skill}</h3>
                        <div className="bg-slate-400 w-full h-3 flex relative rounded-[6px]">
                            <div 
                                className={`bg-blue h-3 rounded-[6px]`}
                                style={{ width: `${skillRate.rate}%`}}>
                            </div>
                            <div
                                className={`w-6 h-6 rounded-full bg-white absolute -top-[6px] border-[3px] border-blue`}                          
                                style={{ left: `${skillRate.rate -1}%`}}>
                            </div>
                            <div className="absolute -top-8"style={{ left: `${skillRate.rate }%`}}>
                            <FaMessage 
                                fontSize={24} 
                                className="text-blue absolute"
                            />
                            <span className="text-white text-[10px] absolute left-[3px]  top-[2px]">{skillRate.rate}%</span>
                            </div>
                        </div>
                    </li>
                )
            })
        }
    </ul>
)
}

export default Rate
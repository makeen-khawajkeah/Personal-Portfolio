import { communication } from "../../data"
const Communication = ({icons}) => {
return (
    <div className="Communication">
        <ul>
            {
                communication.map((element,index)=>{
                    return(
                        <li key={index} className="flex gap-x-[20px] mb-[72px]">
                            <div className=" text-[30px] bg-blue w-fit p-[14px] text-white rounded-[8px] ">{icons[index]}</div>
                            <div className="info">
                                <p className="text-gray">{element.title}</p>
                                <p className="font-semibold">{element.info}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
)
}

export default Communication
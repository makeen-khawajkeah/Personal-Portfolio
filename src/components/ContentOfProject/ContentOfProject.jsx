import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { projects } from "../../data";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useState } from "react";
import { useParams } from "react-router-dom";
const ContentOfProject = () => {
    const {id} = useParams();
    const [full,setfull] = useState(false)
return (
    <div className="content-of-project pt-[170px] px-3 pb-[80px] border-b-2 border-black dark:border-white border-dashed relative section">
    {
        projects.map((element,index)=>{
            if(id==element.id){
                return(
                    <div key={index}>
                        <div className="container mx-auto flex justify-between flex-col lg:flex-row gap-10 items-center">
                            <div className="image basis-[50%] max-w-[600px] relative">
                                <img src={element.image} alt="" className={`image ${full? "w-[100vw] h-[100vh] fixed top-0 left-0 z-[100]":""}`} onClick={()=>setfull(false)}/>
                                <div className=" flex items-center justify-center w-[100%] h-full absolute bg-black top-0 left-0 opacity-0 hover:opacity-50 duration-500">
                                    <ul className="text-white flex items-center gap-10 text-[40px]">
                                        <li><a href={element.pageUrl}><LuCircleArrowOutUpRight className='text-[40px] cursor-pointer hover:text-purpple duration-500'/></a></li>
                                        <li><BsArrowsFullscreen className="cursor-pointer text-[40px] hover:text-purpple duration-500" onClick={()=>setfull(true)}/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="info basis-[50%] flex flex-col justify-between max-w-[600px]">
                                <h2 className='flex items-center justify-between text-[28px] font-semibold  mb-5'>{element.name} <a href={element.pageUrl}><LuCircleArrowOutUpRight className='text-blue text-[35px] cursor-pointer hover:text-purpple duration-500'/></a></h2>
                                <p className='text-liblack mb-5 dark:text-white text-xl'>{element.info}</p>
                                <ul className="mb-5 text-[18px]">
                                    <li className={`${element.lang? "block":"hidden "}`}><span className='font-semibold text-[20px]'>Basic Languages :</span> {element.lang}</li>
                                    <li className={`${element.framwork? "block":"hidden"}`}><span className='font-semibold text-[20px]'>Framework : </span>{element.framwork}</li>
                                    <li className={`${element.library? "block":"hidden"}`}><span className='font-semibold text-[20px]'>Libraries :</span> {element.library}</li>
                                </ul>
                                <a href={element.repo} className='bg-blue text-white px-[32px] py-[11px] rounded-[8px] w-fit hover:bg-purpple duration-500'>Github Repo</a>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }
</div>
)
}

export default ContentOfProject
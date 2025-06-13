import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
const MyProject = ({img,name,lang,id,fit}) => {
    const scroll = () =>{
        window.scrollTo({
            top: 0,
            behavior: "instant",
        })
    }
return (
    <div className="project w-max shadow-[0_2px_15px_#00000038] duration-500 hover:shadow-[0_2px_15px_#0000009c] hover:translate-y-[-10px] lg:basis-[35%] md:basis-[100%] xl:basis-[30%] rounded-tl-[8px] rounded-tr-[8px] m-auto">
        <img src={img} alt="" className={` rounded-[8px] mb-[32px]  ${fit? "w-[100%]" : "sm:w-[460px] w-[380px]"}`} />
        <div className="footer flex justify-between items-end px-4 pb-6 dark:text-white ">
            <div className="desc">
                <h3 className='text-[22px] font-semibold mb-[11px]'>{name}</h3>
                <p>{lang}</p>
            </div>
            <Link to= {`/project/${id}`} onClick={scroll()}><LuCircleArrowOutUpRight className='text-blue text-[35px] hover:text-purpple duration-500'/></Link>
        </div>
    </div>    
)
}

export default MyProject
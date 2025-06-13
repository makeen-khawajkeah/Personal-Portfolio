import { PiArrowUpRightBold } from "react-icons/pi";

const Title = ({sectionName,title,btn}) => {
return (
    <div className="title flex justify-between  flex-col items-center lg:flex-row px-2">
        <div className="main-title lg:text-start text-center lg-mb-0 mb-5">
            <p className="text-blue">{sectionName}</p>
            <h2 className="lg:text-[40px] text-[32px] font-semibold">{title[0]}<span className="text-blue"> {title[1]}</span></h2>
        </div>
        <a href="https://github.com/makeen-khawajkeah" className={`${btn? "flex" : "hidden"} text-white bg-blue px-5 py-[13px] gap-[10px] items-center rounded-[6px] hover:bg-purpple duration-500`}>{btn}<PiArrowUpRightBold /></a>
    </div>
)
}

export default Title

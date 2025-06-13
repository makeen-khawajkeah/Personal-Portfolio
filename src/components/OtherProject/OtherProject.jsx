import { projects } from "../../data"
import MyProject from "../MyProject/MyProject"
import Title from "../Title/Title"
import "../../../node_modules/swiper/swiper-bundle.min.css"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
const OtherProject = () => {
    const [swiper, setSwiper] = useState(null);
    const slidePrev = () => {
        if (swiper) swiper.slidePrev();
    };
    
    const slideNext = () => {
        if (swiper) swiper.slideNext();
    };
    
    const {id} = useParams();
return (
    <div className="other-project pt-[80px]">
        <div className="container m-auto">
            <div className="title flex lg:justify-between items-center text-center w-[100%] justify-center">
                <Title sectionName="portfolio"title={["The Best","Projects"]}/>
                <ul className={`flex items-center gap-6 text-[40px]  text-white`}>
                    <li className="cursor-pointer bg-blue rounded-[50%] hidden lg:block hover:bg-purpple duration-500"><MdOutlineKeyboardArrowLeft onClick={slidePrev}/></li>
                    <li className="cursor-pointer bg-blue rounded-[50%] hidden lg:block hover:bg-purpple duration-500" ><MdOutlineKeyboardArrowRight onClick={slideNext}/></li>
                </ul>
            </div>
            <div className="projects mt-[56px] px-0 " >
            <Swiper
            slidesPerView={3}
            spaceBetween={10}
            modules={[Navigation]}
            style={{ padding:" 0" }}
            navigation={{
                prevEl: ".arrow-left",
                nextEl: ".arrow-right",
            }}
        breakpoints={{
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1400:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1500:{
                slidesPerView: 3,
                spaceBetween: 20,
            }
            }}
            onSwiper={setSwiper}
            >
            {
                projects.map((element,index)=>{
                    if(element.id!=id){
                        return(
                            <SwiperSlide>
                                <MyProject img = {element.image} name={element.name} lang={element.languageUsed} id= {element.id} key={index}/>
                            </SwiperSlide>
                        )
                    }
                })
            }
            </Swiper>
            </div>
        </div>
    </div>
)
}

export default OtherProject

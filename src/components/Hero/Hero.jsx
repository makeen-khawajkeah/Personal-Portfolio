import "../style.css"
const Hero = ({id}) => {
return (
    <div className="hero h-screen relative section sm:border-b-2 sm:border-black sm:dark:border-white border-dashed" id={id}>
        <img src="/image/hero-lines.png" alt="" className="absolute top-[220px]  w-full md:block hidden h-[400px] "/>
        <div className="container m-auto " >
            <div className="hero-content relative top-[140px] md:top-[240px] flex justify-around flex-col md:flex-row md:gap-0 gap-10 ">
                <div className="left-side lg:mt-[50px] text-center lg:text-start md:text-left relative lg:w-[638px] md:w-[465px]">
                    <h1 className="lg:text-[55px]  sm:text-[40px] text-[34px] mb-2 animate-typing overflow-hidden whitespace-nowrap m-auto lg:m-0">HEY! <span className="font-black">I'm Makeen, <br />Frontend Developer</span></h1>
                    <p className="mb-[40px] text-herop text-lg dark:text-white duration-500">Agency-quality Webflow websites with <br />the personal touch of a freelancer.</p>
                    <a href="" className=" px-6 py-3 rounded-[6px] text-white  cursor-pointer  border-[2px] border-black relative z-20 bg-blue hover:bg-purpple duration-500">Download Cv</a>
                </div>
                <div className="right-side relative md:top-0 top-16 ">
                    <div className="images relative">
                        <img src="/image/my-image.png" alt="" className="w-[380px]  relative z-10 left-2/4 translate-x-[-50%] -top-[45px] sm:w-[380px] md:w-[380px] lg:w-[430px]"/>
                        <img src="/image/circ.png" alt="" className="absolute top-0 left-2/4 translate-x-[-50%] w-[365px]  md:w-[350px] lg:w-[420px]"/>
                        <img src="/image/squers.png" alt="" className="absolute top-0 left-2/4 translate-x-[-50%] w-[365px]  md:w-[350px] lg:w-[420px]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Hero
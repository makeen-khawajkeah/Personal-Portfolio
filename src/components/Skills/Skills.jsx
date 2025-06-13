const Skills = ({skill}) => {
return (
    <div className="skills basis-1/2 mb-10 mx-3">
        <div className="box flex gap-x-[47px]    ">
            <img src="/src/assets/image/Frame .png" alt="" className="hidden xl:block"/>
            <ul className="flex flex-col gap-y-[46px]">
            {
                skill.map((ed,index)=>{
                    return(
                        <li key={index}>
                            <h2 className="md:text-[25px] text-[22px]"><span className="text-blue">{ed.field[0]}</span> {ed.field[1]}</h2>
                            <p className="text-[16px] text-educationp">{ed.more}</p>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    </div>
)
}

export default Skills
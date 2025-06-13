import { projects } from "../../data"
import MyProject from "../MyProject/MyProject"
import Title from "../Title/Title"
const MyProjects = ({id}) => {
return (
    <div className="my-projects section pt-[94px]" id={id}>
        <div className="container mx-auto">
            <Title sectionName="portfolio"title={["My Creative Works Latest","Projects"]} btn = "View Github "/>
            <div className="projects flex flex-wrap justify-center gap-[58px] mt-[56px] px-4">
            {
                projects.map((element,index)=>{
                    return(
                        <MyProject img={element.image} name={element.name} lang={element.languageUsed} id={element.id} fit={true} key={index}/>
                    )
                })
            }
            </div>
        </div>
    </div>
)
}

export default MyProjects


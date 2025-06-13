import { useParams } from 'react-router-dom';
import ContentOfProject from '../components/ContentOfProject/ContentOfProject';
import OtherProject from '../components/OtherProject/OtherProject';
import { projects } from '../data';
const OpenProject = () => {
    if(document.documentElement.scrollTop>0 ){
        window.scrollTo({
            top: 0,
            behavior: "instant",
        })
    }
return (
    <div className="open-project">
        <ContentOfProject/>
        <OtherProject/>
    </div>
)
}

export default OpenProject
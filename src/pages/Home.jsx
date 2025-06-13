import AboutMe from "../components/AboutMe/AboutMe"
import Contact from "../components/Contact/Contact"
import Education from "../components/Education/Education"
import Hero from "../components/Hero/Hero"
import MyProjects from "../components/MyProjects/MyProjects"
import ScrollButton from "../components/ScrollButton/ScrollButton"
import TryMe from "../components/TryMe/TryMe"
const Home = () => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        })
return (
    <>
        <Hero id="1"/>
        <AboutMe id = "2"/>
        <Education id="3"/>
        <TryMe/>
        <ScrollButton/>
        <MyProjects id="4"/>
        <Contact id="5"/>
    </>
)
}

export default Home
import React, { useState, useEffect } from 'react';

const NavItems = ({ links }) => {
    const [activeSection, setActiveSection] = useState("1");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".section");
            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop -250) {
                    setActiveSection(section.id);
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
    }, []);
    return (
        <ul className="nav-items sm:flex gap-x-6 hidden">
            {links.map((link, index) => (
                <li key={index} className={`text-base cursor-pointer hover:text-blue  duration-500 ${activeSection === link.id ? "text-blue" : ""}`}>
                    <a href={`${link.path}`}>{link.title}</a>
                </li>
            ))}
        </ul>
    );
}

export default NavItems;
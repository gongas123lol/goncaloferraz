import '../App.css';
import React from "react";
import { useNavigate } from "react-router-dom";
import earlyLife from "./EarlyLife";
import Fsisel from "./Fsisel";
import Education from "./Education";
import '../App.css'
import './Home.css'

function Home() {
    const navigate = useNavigate();
    const cards = [
        {
            id: 1,
            title: "Early Life",
            description: "Click here to learn a bit more about me!",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-0bflFHNTkYw%2FVYErItXMo6I%2FAAAAAAAAAOQ%2Fq9hCbNtenRc%2Fs1600%2Fo-WHEN-DID-ANTHROPOCENE-BEGIN-facebook.jpg&f=1&nofb=1&ipt=2623e72d6427f4583484e8adb7f358722b8a894af253c9c6a875ec327bb288af&ipo=images",
            onClick: () => navigate("/early-life"),
        },
        {
            id: 2,
            title: "Education",
            description: "Click here to learn more about my education.",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ipl.pt%2Fsites%2Fdefault%2Ffiles%2F2023-02%2Fisel.jpg&f=1&nofb=1&ipt=a9754abc4ffa14ef80c6d0811b8561892a86e3918d28e250f49e289db3c59ae2&ipo=images",
            onClick: () => navigate("/education"),
        },
        {
            id: 3,
            title: "FSISEL",
            description: "Click here to learn more about my journey @FSISEL.",
            image: "https://formulastudent.isel.pt/static/media/ifs02_1.7a687b04ac27e6f5c4f4.webp",
            onClick: () => navigate("/fsisel"),
        },
        {
            id: 4,
            title: "Personal Projects",
            description: "Click here to learn more about my personal projects.",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F11%2FGitHub-Symbol.png&f=1&nofb=1&ipt=c86224fb338636707ec0b6e035d4d7fde0eb92052c17ed9d64f53fbcb0acdf3c&ipo=images",
            onClick: () => navigate("/personalprojects"),
        },
    ];

    return (
        <div className="home-container">
            <div className="intro-text">
                <p>
                    I'm Gonçalo Ferraz, currently a computer engineering student at ISEL.
                    <br /> I'm also currently a member of the FSISEL team.
                </p>

            </div>
            <div>
                <h1 className="ps-st">Skills:</h1>
                <div className="tech-logos-container">
                    <div className="tech-grid">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="tech-logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="tech-logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="tech-logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="tech-logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="tech-logo" />
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.g2crowd.com%2Fuploads%2Fproduct%2Fimage%2Fsocial_landscape%2Fsocial_landscape_55da269609bde6556a387629b0594314%2Faltium-altium-designer.png&f=1&nofb=1&ipt=162edf740125cf0910af33eb6b048a6f57201c2563671083350146d8d40c6029&ipo=images" alt="Altium" className="tech-logo" />

                    </div>
                </div>

            </div>
            <div className="card-grid">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <img src={card.image} alt={card.title} className="card-img" />
                        <div className="card-content">
                            <h2 className="card-title">{card.title}</h2>
                            <p className="card-description">{card.description}</p>
                            <button
                                className="card-button"
                                onClick={card.onClick}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Home;

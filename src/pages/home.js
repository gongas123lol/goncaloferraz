import '../App.css';
import React from "react";
import { useNavigate } from "react-router-dom";
import earlyLife from "./EarlyLife";
function toggleModal(cardId) {
    console.log(`Card ${cardId} clicked!`);
}

function Home() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="row">
                <div className="mainText">
                    <p>
                        I'm Gonçalo Ferraz, currently a computer engineering
                        student at ISEL. <br /> I'm also currently a member of
                        the FSISEL team.
                    </p>
                </div>
            </div>
            <div className="row">

                <div className="card-container">
                    {/* First Card */}
                    <div className="card">
                        <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-0bflFHNTkYw%2FVYErItXMo6I%2FAAAAAAAAAOQ%2Fq9hCbNtenRc%2Fs1600%2Fo-WHEN-DID-ANTHROPOCENE-BEGIN-facebook.jpg&f=1&nofb=1&ipt=2623e72d6427f4583484e8adb7f358722b8a894af253c9c6a875ec327bb288af&ipo=images"
                            alt="DevOps Roadmap"
                            className="card-img"
                        />
                        <div className="card-content">
                            <h2 className="card-title">Early life</h2>
                            <p className="card-description">
                                Click here to learn a bit more about me!
                            </p>
                            <button
                                className="card-button"
                                onClick={() => navigate("/early-life")}
                            >
                                HERE
                            </button>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="card">
                        <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ipl.pt%2Fsites%2Fdefault%2Ffiles%2F2023-02%2Fisel.jpg&f=1&nofb=1&ipt=a9754abc4ffa14ef80c6d0811b8561892a86e3918d28e250f49e289db3c59ae2&ipo=images"
                            alt="Full Stack Developer Roadmap"
                            className="card-img"
                        />
                        <div className="card-content">
                            <h2 className="card-title">Education</h2>
                            <p className="card-description">
                                Click here to learn more about my education.

                            </p>

                            <button
                                className="card-button"
                                onClick={() => navigate(earlyLife)}
                            >
                                HERE
                            </button>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="card">
                        <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fformulastudent.isel.pt%2Fstatic%2Fmedia%2Fifs02_1.7a687b04.webp&f=1&nofb=1&ipt=72cebf4b26ccada643cc6ce8122b2abc6f8668c909518860ea42bfa6219386ac&ipo=images"
                            alt="Web Development Trends"
                            className="card-img"
                        />
                        <div className="card-content">
                            <h2 className="card-title">FSISEL</h2>
                            <p className="card-description">
                                Click here to learn more about my journey @FSISEL

                            </p>

                            <button
                                className="card-button"
                                onClick={() => toggleModal(3)}
                            >
                                Here
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F11%2FGitHub-Symbol.png&f=1&nofb=1&ipt=c86224fb338636707ec0b6e035d4d7fde0eb92052c17ed9d64f53fbcb0acdf3c&ipo=images"
                            alt="Web Development Trends"
                            className="card-img"
                        />
                        <div className="card-content">
                            <h2 className="card-title">Personal projects</h2>
                            <p className="card-description">
                                Click here to learn more about my personal projects.

                            </p>

                            <button
                                className="card-button"
                                onClick={() => navigate("/early-life")}
                            >
                                HERE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;

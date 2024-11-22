import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contacts() {
    return (
        <div className="centered-container">
            <h1>Contact me!</h1>
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Flinkedin%2Flogo-linkedin-icon-1536.png&f=1&nofb=1&ipt=e5e9c89871522f98bd25cc4a938d932bc29d62256097479316603de7e7d8b2e1&ipo=images"
                            alt="linkedin logo"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="col">
                        <p className="m-0"><a href="https://www.linkedin.com/in/gon%C3%A7alo-ferraz-9aba24274/">Linkedin</a></p>
                    </div>
                </div>

                <div className="row">
                    <p><a href="mailto:gjsferraz@gmail.com">Contact me through Email</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;

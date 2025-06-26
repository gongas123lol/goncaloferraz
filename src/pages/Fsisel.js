import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import footer from "../components/Footer";
function Fsisel(){
    return(<div className="container">

        <h1>My jorney in ISEL Formula Student</h1>
        <br/>
        <h2>Why did i join IFS?</h2>
        <p>Well, since ever, i had a gigantic passion for cars and the automotive world, and i think that had a big
            influence in that,
            even before i entered ISEL i was aiming to join this amazing team.
        </p>
        <h2>What is it even about?</h2>
        <p>The Formula Student competion is an engineering competition where teams from all over the globe come together
            to participate in various classes and areas,
            the main ones beeing eletric (EV) and combustion (CV) drivetrains, where teams get to build their own mono
            seat racing cars, following some very strict rules, and compete against other teams.
            It all started with the FSAE in the united states.</p>
        <h2>What did i do?</h2>
        <h3>Charging station:</h3>
        The charging station is used to charge our cars TSAC (Tractive System Accumulator), its a very complicated and expensive
        part of our car, but maybe one of the most important ones.
        It works closely to 400V, so extreme care using it and assembling it was necessary, as it can output as much as
        3.6kW, a similar power output to a 50cc mopped.
        I was responsible for the assembly of the electronics circuitry and component choosing.
        <img src="images/cs.png" className="rounded mx-auto d-block" alt="Charging station"/>
        <h3>BSPD:</h3>
        <p>The BSPD-Breaking System plausability device is a eletronics board that checks for brake or engine
            malfunction, triggering the shutdown circuit.
            The board and schmatic was made by me, using altium, and the simulation was made with felstad. It does not
            contain any controller, only raw Op-amps and discrete logic.</p>
        <img src="images/bspd.png" className="rounded mx-auto d-block" alt="BSPD board"/>

    </div>);

}

export default Fsisel;
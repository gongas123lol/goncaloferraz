

function PersonalProjects(){
    return(

        <div className='container'>
            <h1>Personal projects</h1>
            <h3>Well, obviously, this website, duhhh!</h3>
            <p>This site was done using mostly "vanilla" react JS, and some bootstrap here and there.</p>
            <br/>

            <h3> OLX web scrapper:</h3>
            <p>This project was done just for giggles, and maybe in the future make a database for items sold on OLX.
                It consists of searching for a certain item and retreiving some data like names, prices, etc, afterwards, its put in a csv file to import into excel.
                Im sorry for the bad quality of this code, but this was done in my 1st year of my bachelors xD<br/>


                <a href = "https://github.com/gongas123lol/OLXScraperV1">you can see more about it here.</a>
            </p>

            <br/>
            <h3> SECA-Shows and Events Chelas Application:</h3>
            <p>This project was done by me and a colleague for a class named IPW. It consists of a webApp complete with an elasticSearch DB and more.<br/>


                <a href = "https://github.com/gongas123lol/seca-web-app">you can see more about it here.</a>
            </p>

            <h3>Sokoban AI solving</h3>
            <p>This project was done by me and other 2 colleages for a class named IA. It consists of a sokoban solving AI, implementing many algoritms, like GA, SA, A*, Etc.<br/>


                <a href = "https://github.com/gongas123lol/ia_2">you can see more about it here.</a>
            </p>

            <h3> Speeduino adapter for honda OBD1:</h3>
            <p>This project came out of a necessity for a standalone ECU for my Honda, but i wasnt really feeeling like
                spending 400-1000€ for a pnp ecu from bossgarage or pnpduino, etc. so i made a PNP adapter for stock honda
                harness, to use with a speeduino ecu (open source hardware and firmware)<br/>


                <a href = "https://github.com/gongas123lol/OBD1-adapter-board-for-Civic-MA-MB-MC">you can get the gerber files and more explanation here.</a>
            </p>
            <br/>

        </div>

    );
}

export default PersonalProjects
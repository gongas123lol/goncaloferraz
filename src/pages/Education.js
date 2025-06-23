import './Home.css';


const steps = [
    { id: 1, title: 'Highschool: ',name:'ESPAV -> ',course:'Cience and technology', completed: true },
    { id: 2, title: 'Bachelor: ', name: 'ISEL -> ', course:'Computer and informatics Engineering', completed: true },
    { id: 3, title: 'Masters: ', name: 'ISEL? -> ', course:'Computer and informatics Engineering', completed: false  },

];
function Education(){
    return (
        <div className="container">


            <div style={{ maxWidth: 600, margin: 'auto' }}>
                <h1>My academic career</h1>

                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {steps.map((step, index) => (
                        <li key={step.id} style={{ marginBottom: 20 }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div
                                    style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: '50%',
                                        backgroundColor: step.completed ? 'green' : 'lightgray',
                                        marginRight: 10,
                                    }}
                                ></div>
                                <span>{step.title + step.name + step.course}</span>
                            </div>
                            {index < steps.length - 1 && (
                                <div
                                    style={{
                                        height: 40,
                                        borderLeft: '2px solid',
                                        marginLeft: 9,
                                        marginTop: 2,
                                        borderColor: step.completed ? 'green' : 'lightgray',
                                    }}
                                ></div>
                            )}
                        </li>
                    ))}
                </ul>
                <br/>
                <br/>
                <br/>

            </div>
            <p>Since always i was interested in my academic path, knowing i was going to follow computer engineering.</p>
        </div>

    );

}

export default Education;
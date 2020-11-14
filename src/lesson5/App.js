import React, { useState } from 'react';
import Hello from "./Hello";
import Alumn from "./Alumn";

const App = (props) => {

    const [show, setExibition] = useState(false);
    const [alumns, setAlumnsList] = useState([{name: "Mariazinha", age: 10}, 
                                                {name: "Joaozinho", age: 11}, 
                                                {name: "Pedrinho", age: 10}]);

    const renderAlumns = () => alumns.map((alumn, index) => <Alumn index={index} alumn={alumn}/>);

    return (
        <div>
            <button onClick={() => setExibition(!show)}>
                Click to {show ? "hide" : "show"} the your name!
            </button>
            <Hello name={props.name} show={show}/>
            {renderAlumns()}
        </div>
    );
}

export default App;
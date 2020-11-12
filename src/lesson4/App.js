// import React, { Component } from 'react';
// import Test from "./Test";

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             show: false
//             // alumns: [{name: "Mariazinha", age: 10}, {name: "Joaozinho", age: 11}, {name: "Pedrinho", age: 10}] 
//         };
//         // setInterval(() => 
//         //     this.setState({ cycle: this.state.cycle + 1 }), 1000
//         // );
//     }

//     toogleSecretMessage = () => {
//         this.setState({ show : !this.state.show });
//     }

//     // renderInfoOneAlumn = (alumn, index) => <p key={index}>{alumn.name} - {alumn.age}</p>;

//     // renderInfoAlumn = () => {
//     //     const { alumns } = this.state;
//     //     return alumns.map((alumn, index) => this.renderInfoOneAlumn(alumn, index));
//     // }

//     renderMessage = () => <p>Hello, World!</p>;

//     renderMessageWithName = () => <p>Hello, {this.state.show ? this.props.name : "World"}!</p>;

//     render() {
//         const { show, alumns } = this.state;

//         console.log("render");

//         return (
//             <div>
//                 <button onClick={this.toogleSecretMessage}>
//                     Click to {show ? "hide" : "show"} the your name!
//                 </button>
//                 {this.renderMessage()}
//                 {show && this.renderMessageWithName()}
//                 {/* {this.renderInfoAlumn()} */}
//             </div>
//         );
//     }
// }

import React, { useState } from 'react';

const App = () => {

    const [show, setExibition] = useState(false);

    return (
        <div>
            <button onClick={() => setExibition(!show)}>
                Click to {show ? "hide" : "show"} the your name!
            </button>
        </div>
    );
}

export default App;
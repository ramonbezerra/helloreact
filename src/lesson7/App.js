import React from 'react';

import About from './About';
import Homepage from './Homepage';
import Search from './Search';
import Navbar from './Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// const RouteTo = path => {
//     const paths = path.split('/').map(p => p.toLowerCase()).slice(1);

//     switch (paths[0]) {
//         case 'about':
//             return <About />;
//         default:
//             return <Homepage />
//     }
// };

const App = () => (
    // <div>
    //     {/* <h1>Example Router</h1>
    //     <hr/>
    //     <p>href: {window.location.href}</p>
    //     <p>path: {window.location.pathname}</p>

    //     <hr/> */}
    //     {/* {RouteTo(window.location.pathname)} */}
    // </div>

    <Router>
        <Navbar />
        <Switch>
            <Route path="/search">
                <Search />
            </Route>

            <Route path="/about">
                <About />
            </Route>

            {/* <Route> */} 
            <Route exact path="/">  
                <Homepage />
            </Route>

            <Route path="*">
                <h1>404 - Component Not Found</h1>
                <a href="/">Return Home</a>
            </Route>
        </Switch>
    </Router>
);

export default App;
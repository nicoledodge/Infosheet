import './App.css';
// import {useState} from "react";
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
    // const [cookies, setCookieCount] = useState('');


    return (
        <div className="App">
            <Router>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div className="outer">
                        <div className="inner">

                            {/*<Route exact path='/' element={<Login/>} />*/}
                            <Routes>
                                <Route path="/" element={<SignUp/>} />
                                {/*<Route path="/sign-up" element={<SignUp/>} />*/}
                            </Routes>
                            {/*<Route exact path='/' component={Login} />*/}
                            {/*<Route path="/sign-in" component={Login} />*/}
                            {/*<Route path="/sign-up" component={SignUp} />*/}

                        </div>
                    </div>
                </div>
            </Router>
            {/*<img src={logo} className="App-logo" alt="logo"/>*/}

            {/*<input*/}
            {/*    type="text" onInput={(e) => setCookieCount(e.target.value)}/>*/}

            {/*<button type="submit" onClick={(e) => {*/}

            {/*    console.log(cookies);*/}
            {/*    console.log(`https://frontend-take-home.fetchrewards.com/form/occupations`);*/}

            {/*    fetch(`https://frontend-take-home.fetchrewards.com/form/occupations`)*/}
            {/*        .then(response => response.json())*/}
            {/*        .then(data => {*/}
            {/*            console.log(data);*/}
            {/*        })*/}

            {/*}}>*/}
            {/*    Search*/}
            {/*</button>*/}
        </div>
    );
}

export default App;

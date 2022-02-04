import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/form";


function App() {
    return (
        <div className="App">
            <Router>
                <div className="App">
                    <div className="outer">
                        <div className="inner">

                            <Routes>
                                <Route path="/" element={<Form/>}/>
                            </Routes>

                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;

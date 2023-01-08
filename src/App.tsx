import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import CounterOne from './components/CounterOne/CounterOne';
import CounterTwo from './components/CounterTwo/CounterTwo';
import CounterThree from "./components/CounterThree/CounterThree";
import Navigation from './navigation/Navigation';
import './App.css';

export const PATH = {
    C1: { link: "/c1", name: "counter 1" },
    C2: { link: "/c2", name: "counter 2" },
    C3: { link: "/c3", name: "counter 3" },
}

function App() {

    return (
        <div className="container">
            <HashRouter>
                <Navigation />
                <Routes>
                    <Route path={PATH.C1.link} element={<CounterOne startValue={0} maxValue={5} />} />
                    <Route path={PATH.C2.link} element={<CounterTwo startValue={0} maxValue={5} />} />
                    <Route path={PATH.C3.link} element={<CounterThree startValue={0} maxValue={5} />} />
                    <Route path={"*"} element={<Navigate to={PATH.C1.link} />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;

import  { HashRouter, Routes, Route } from "react-router-dom";

import About from '../components/about/about'
import Contact from '../components/contact/contact'
import Home from '../components/home/home'
import Navbar from '../components/navbar/navbar'

function Main() {
    return (
        <div>
            <HashRouter>
                <Navbar></Navbar>
                <div className="content">
                
                    <Routes>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                    </Routes>
                </div>
            </HashRouter>
        </div>
    )
}

export default Main;
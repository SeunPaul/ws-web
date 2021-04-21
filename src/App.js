import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Team from './Pages/Team/Team'
import Blog from './Pages/Blog/Blog';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = ()=>{
    return(
        <div className="root-web">
        <Router>
            <Switch>
                <Route path = "/home">
                <>
                    <Home/>
                    <Footer/>
                </>
                </Route>
                <Route path = "/about">
                <>
                    <About/>
                    <Footer/>
                </>
                </Route>
                <Route path = "/contact">
                <>
                    <Home/>
                    <Footer/>
                </>
                </Route>
                <Route path = "/team">
                <>
                    <Team/>
                    <Footer/>
                </>
                </Route>
                <Route path = "/blog">
                <>
                    <Blog/>
                    <Footer/>
                </>
                </Route>
                <Redirect to = "/home"/>
            </Switch>
        </Router>
        </div>
    )
}

export default App;
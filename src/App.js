import './assets/styles/app.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Nav } from './components/nav';

function App() {
    return (
        <Router>
            <div className="container">
                <Nav />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

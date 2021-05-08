import './assets/styles/app.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Nav } from './components/nav';
import PhotoContainer from './views/photo-container';
import { SearchForm } from './components/search-form';

function App() {
    return (
        <Router>
            <div className="container">
                <SearchForm />
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <PhotoContainer />
                    </Route>
                    <Route path="/cats">
                        <PhotoContainer />
                    </Route>
                    <Route path="/dogs">
                        <PhotoContainer />
                    </Route>
                    <Route path="/computers">
                        <PhotoContainer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

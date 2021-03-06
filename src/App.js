import './assets/styles/app.css';

import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import { Nav } from './components/nav';
import NotFound from './views/not-found';
import PhotoContainer from './views/photo-container';
import { SearchForm } from './components/search-form';
import { queryPhotos } from './Api/flickr';
import { useState } from 'react';

/**
 * App container with router
 * @returns
 */
function App() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    /**
     * Query for the photos
     * @param {string} query
     */
    const getPhotos = async (query) => {
        setLoading(true);
        const response = await queryPhotos(query);
        setPhotos(response);
        setLoading(false);
    };
    return (
        <Router>
            <div className="container">
                <SearchForm />
                <Nav />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return <Redirect to="/cats" />;
                        }}
                    ></Route>
                    <Route exact path="/cats">
                        <PhotoContainer
                            get={getPhotos}
                            photos={photos}
                            isLoading={loading}
                            tag="cats"
                        />
                    </Route>
                    <Route exact path="/dogs">
                        <PhotoContainer
                            get={getPhotos}
                            photos={photos}
                            isLoading={loading}
                            tag="dogs"
                        />
                    </Route>
                    <Route exact path="/computers">
                        <PhotoContainer
                            get={getPhotos}
                            photos={photos}
                            isLoading={loading}
                            tag="computers"
                        />
                    </Route>
                    <Route exact path="/:query">
                        <PhotoContainer
                            get={getPhotos}
                            photos={photos}
                            isLoading={loading}
                        />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

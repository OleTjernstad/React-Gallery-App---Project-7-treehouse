import './assets/styles/app.css';

import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import { Nav } from './components/nav';
import PhotoContainer from './views/photo-container';
import { SearchForm } from './components/search-form';
import { queryImages } from './Api/flickr';
import { useState } from 'react';

function App() {
    // const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const getImages = async (query) => {
        const response = await queryImages(query);
        setImages(response);
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
                    <Route path="/:query">
                        <PhotoContainer
                            get={getImages}
                            images={images}
                            isLoading={loading}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

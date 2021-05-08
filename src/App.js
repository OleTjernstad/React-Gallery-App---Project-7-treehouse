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

    const getImages = async (query) => {
        setImages(await queryImages(query));
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
                    <Route path="/cats">
                        <PhotoContainer
                            get={getImages}
                            images={images}
                            query="cats"
                        />
                    </Route>
                    <Route path="/dogs">
                        <PhotoContainer
                            get={getImages}
                            images={images}
                            query="dogs"
                        />
                    </Route>
                    <Route path="/computers">
                        <PhotoContainer
                            get={getImages}
                            images={images}
                            query="computers"
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

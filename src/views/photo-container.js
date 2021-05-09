import React, { useEffect } from 'react';

import { Photo } from '../components/photo';

const PhotoContainer = ({ get, query, images }) => {
    useEffect(() => {
        get(query);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const photoList = images.map((photo) => (
        <Photo photo={photo} key={photo.id.toString()} />
    ));

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>{photoList}</ul>
        </div>
    );
};
export default PhotoContainer;

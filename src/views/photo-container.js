import React, { useEffect } from 'react';

import { Photo } from '../components/photo';

const PhotoContainer = ({ get, query, images }) => {
    useEffect(() => {
        get(query);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const imageList = images.map((image) => <Photo />);

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>{imageList}</ul>
        </div>
    );
};
export default PhotoContainer;

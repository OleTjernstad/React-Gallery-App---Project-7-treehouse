import React, { useEffect } from 'react';

import { NotFound } from '../components/not-found';
import { Photo } from '../components/photo';
import { useParams } from 'react-router';

const PhotoContainer = ({ get, images, isLoading }) => {
    let { query } = useParams();
    useEffect(() => {
        get(query);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);
    if (isLoading) {
        return <h2>Loading.....</h2>;
    }

    const photoList = images.map((photo) => (
        <Photo photo={photo} key={photo.id.toString()} />
    ));

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>{photoList.length ? photoList : <NotFound />}</ul>
        </div>
    );
};
export default PhotoContainer;

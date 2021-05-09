import React, { useEffect } from 'react';

import { NotFound } from '../components/not-found';
import { Photo } from '../components/photo';
import { useParams } from 'react-router';

/**
 *
 * @param {object} props (get loadPhotos, photos array of photos, isLoading boolean loading status)
 * @returns
 */
const PhotoContainer = ({ get, photos, isLoading, tag }) => {
    let { query } = useParams();
    useEffect(() => {
        get(tag === undefined ? query : tag);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, tag]);

    /**
     * show loading before photos has loaded
     */
    if (isLoading) {
        return <h2>Loading.....</h2>;
    }

    /**
     * render list of photos
     */
    const photoList = photos.map((photo) => (
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

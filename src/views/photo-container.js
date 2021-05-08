import React, { useEffect } from 'react';

const PhotoContainer = ({ get, query }) => {
    useEffect(() => {
        get(query);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <div class="photo-container">
            <h2>Results</h2>
            <ul></ul>
        </div>
    );
};
export default PhotoContainer;

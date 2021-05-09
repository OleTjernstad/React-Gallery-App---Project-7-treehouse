import React from 'react';
import { photoUrl } from '../Api/flickr';

/**
 *
 * @param {object} props photo object
 * @returns
 */
export const Photo = ({ photo }) => {
    return (
        <li>
            <img
                src={photoUrl(photo.server, photo.id, photo.secret)}
                alt={photo.title}
            />
        </li>
    );
};

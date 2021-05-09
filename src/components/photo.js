import React from 'react';
import { photoUrl } from '../Api/flickr';

export const Photo = ({ photo }) => {
    return (
        <li>
            <img src={photoUrl(photo.server, photo.id, photo.secret)} alt="" />
        </li>
    );
};

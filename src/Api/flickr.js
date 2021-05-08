import apiKey from '../config';

const photoQueryUrl = (tag, prPage) => {
    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=${prPage}&format=json&nojsoncallback=1`;
};

export const queryImages = async (query) => {
    const response = await fetch(photoQueryUrl(query, 24));
    const json = await response.json();
    return json.photos.photo;
};

const axios = require('axios');
const flickrApi = 'https://api.flickr.com/services/feeds/photos_public.gne?tagmode=all&format=json&nojsoncallback=1';
const flickrTagApi = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&nojsoncallback=1';
module.exports = {
    index: async (req, res, next) => {
        const images = await axios.get(`${flickrApi}`);
        res.status(200).json(images.data.items);
    },

    getFlickrImage: async (req, res, next) => {
        const { name } = req.params;
        const images = await axios.get('${flickrApi}');
        const image = images.find(item => item.name == name)[0];
        res.status(200).json(image);
    }
};
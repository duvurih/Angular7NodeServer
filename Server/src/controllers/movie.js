const axios = require('axios');
const moviesApi = 'https://spring-movies-cf.cfapps.io/';

module.exports = {
    index: async (req, res, next) => {
        const movies = await axios.get(`${moviesApi}`);
        res.status(200).json(movies.data);
    },

    getMovie: async (req, res, next) => {
        const { name } = req.params;
        const movies = await axios.get('${moviesApi}');
        const movie = movies.find(item => item.name == name)[0];
        res.status(200).json(movie);
    }
};
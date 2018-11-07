const router = require('express-promise-router')();

const {
    index,
    getMovie
} = require('./../controllers/movie');

router.get('/', index);
router.get('/:name', getMovie);

module.exports = router;
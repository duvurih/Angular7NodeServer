const router = require('express-promise-router')();

const {
    index,
    getFlickrImage
} = require('./../controllers/flickr');

router.get('/', index);
router.get('/:name', getFlickrImage);

module.exports = router;
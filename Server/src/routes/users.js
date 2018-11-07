const router = require('express-promise-router')();

const {
    index,
    newUser,
    getUser,
    replaceUser,
    updateUser,
    deleteUser,
    getUsersObservations,
    newUserObservation
} = require('./../controllers/user');

router.get('/', index);
router.post('/', newUser);

router.get('/:userId', getUser);
router.put('/:userId', replaceUser);
router.delete('/:userId', deleteUser);

router.get('/:userId/observations', getUsersObservations);
router.post('/:userId/observations', newUserObservation);

module.exports = router;
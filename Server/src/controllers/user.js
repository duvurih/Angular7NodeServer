const User = require('./../models/user');
const Observation = require('./../models/observation');

module.exports = {
    index: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },

    newUser : async (req, res, next) =>{
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(200).json(user);
    },

    getUser : async (req, res, next) =>{
        const { userId } = req.params;
        const user = await User.findOne({'userId' : userId});
        res.status(200).json(user);
    },

    replaceUser : async (req, res, next) => {
        const { userId } = req.params;
        const newUser = req.body;
        const oldUser = await User.findOneAndUpdate({'userId': userId}, newUser);
        res.status(200).json(oldUser);
    },

    updateUser : async (req, res, next) => {
        const { userId } = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json(oldUser);
    },

    deleteUser : async (req, res, next) => {
        const { userId } = req.params;
        const newUser = req.body;
        const oldUser = await User.findOneAndDelete({'userId': userId}, newUser);
        res.status(200).json(oldUser);
    },

    getUsersObservations: async (req, res, next) =>{
        const { userId } = req.params;
        const userObservations = await User.findOne({'userId': userId}).populate({path: 'observataions', populate:[{path: 'recordedBy'},{path: 'discussionWith'}]});
        res.status(200).json(userObservations);
    },

    newUserObservation: async (req, res, next) =>{
        const { userId } = req.params;
        const newObsrvation = new Observation(req.body);
        const user = await User.findOne({'userId': req.body.recordedBy});
        newObsrvation.recordedBy = user;
        const userRecorded = await User.findOne({'userId': req.body.discussionWith});
        newObsrvation.discussionWith = userRecorded;
        await newObsrvation.save();
        user.observataions.push(newObsrvation);
        await user.save();
        res.status(200).json(newObsrvation);
    }
};
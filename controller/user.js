const userModel = require('../model/user');

async function getUser(req, res) {
    const {page, limit} = req.query;
    try {
        const users = await userModel.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const count = await userModel.countDocuments();
        res.json(
            {
                message: 'Get User Success',
                data: users.map(user => {
                    return {
                        name: user.name,
                        email: user.email,
                    }
                }),
                totalPages: Math.ceil(count / limit),
                currentPage: page
            }
        );
    } catch (error) {
        res.json({ message: error });
    }
}

async function getUserById(req, res) {
    try {
        const users = await userModel.findById(req.params.id);
        res.json(
            {
                message: 'Get User By Id Success',
                data: users
            }
        );
    } catch (error) {
        res.json({ message: error });
    }
}

async function createUser(req, res) {
    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.json({
            message: 'Create Success',
            data: {
                name: savedUser.name,
                email: savedUser.email,
                password: savedUser.password,
            }
        });
    } catch (error) {
        res.json({ message: error });
    }
}

async function updateUser(req, res) {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    try {
        const updatedUser = await userModel.updateOne(
            { _id: req.params.id },
            { $set: [
                user
            ], }
        );

        return res.json({
            message: 'Update Success',
            // data: updatedUser,
            data: user
        });

    } catch (error) {
        res.json({ message: error });
    }
}

async function deleteUser(req, res) {
    try {
        const findUser = await userModel.findById(req.params.id);
        const deleteUser = await userModel.deleteOne({ findUser });
        res.json([
            {
                message: 'Delete Success',
                data: [findUser, deleteUser]
            }
        ]);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
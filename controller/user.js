let user = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@gmail.com'
    }
]

 

module.exports = {
    getUser:(req, res) => {
        res.send(user)
    },
    getUserById: (req, res) => {
        const id = req.params.id;
        const userById = user.find(user => user.id == id);
        res.send(userById);
    },
    createUser: (req, res) => {
        const newUser = req.body;
        user.push(newUser);
        res.send(user);
    },
    updateUser: (req, res) => {
        const id = req.params.id;
        const updatedUser = req.body;
        const userById = user.find(user => user.id == id);
        userById.name = updatedUser.name;
        userById.email = updatedUser.email;
        res.send(user);
    },
    deleteUser: (req, res) => {
        const id = req.params.id;
        user = user.filter(user => user.id != id);
        res.send(user);
    }
}
const express = require('express');
const routes = express.Router();
const User = require('./config/mongoose');

routes.get("/", async (req, res) => {
    try {
        const users = await User.find().sort({ id: -1 });

        res.status(200).json(users);

    } catch (err) {
        res.status(500).json({ message: `Deu erro no sistema > ${err}` })
    }
})

routes.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const userID = await User.find({ _id: id });

        if (!userID) {
            res.status(422).json({ message: 'Usuario não encontrado...' });
            return;
        }

        res.status(200).json(userID);

    } catch (err) {
        res.status(500).json({ message: `Deu erro no sistema > ${err}` })
    }
})


routes.post('/', async (req, res) => {

    const { name, email, birthday, created_at, updated_at } = req.body;

    if (!name) {
        res.status(422)
            .json({ error: `O campo nome precisa ser preenchido!!!` });
        return;
    }

    const user = {
        name, email, birthday, created_at, updated_at
    }

    try {
        await User.create(user)
        res.status(201).json({ message: "User criado com sucesso!!" })
    } catch (err) {
        res.status(500).json({ message: `Deu erro no sistema > ${err}` })
    }

})


routes.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ _id: id });
    if (!user) {
        res.status(422).json({ message: "O usuário não foi encontrado..." });
        return;
    }

    try {
        await User.deleteOne({ _id: id });
        res.status(200).json({ message: "Usuário removido do sistema com sucesso!!!" });

    } catch (error) {
        res.status(500)
            .json({ message: `Deu erro no sistema!! > ${error}` })
    }
})

module.exports = routes;
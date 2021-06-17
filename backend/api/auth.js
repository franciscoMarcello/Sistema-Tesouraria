
module.exports = (app) => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!')
        }
        const user = await app
            .db('users')
            .where({ emial: req.body.email })
            .first()

        if (!user) return res.status(400).send('Usuário não encontrado!')

        const isMatch = compareSync(req.body.password, user.password)
        if (!isMatch) return res.status(401).send('Email/Senha inválidos!')
    }

    return {signin}
}

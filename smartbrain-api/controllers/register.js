const handleRegister =  (req,res, knex, bcrypt)=> {
    const { email, name, password} = req.body;
    const hash = bcrypt.hashSync(password, 1);
    knex.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(loginemail => {
            return trx('users')
                .returning('*')
                .insert({
                email: loginemail[0],
                name: name,
                joined: new Date()
                })
                .then(user => {
                    res.json(user[0]);
                })
        })
        .then(trx.commit).catch(trx.rollback)
    })
    .catch(err => res.json('unable to register'))
}

module.exports = {
    handleRegister: handleRegister
}
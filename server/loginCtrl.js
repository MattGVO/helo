const bcrypt = require('bcryptjs')

module.exports={
    async signup(req,res) {
        let { email, password } = req.body
        let db = req.app.get('db');
        let [existingUser] = await db.find_user([email])
        if (existingUser) return res.status(200).send({message: 'That email has already been registered'})
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password,salt)
        let [createdUser] = await db.create_user([email, hash])
        req.session.user = createdUser
        console.log(createdUser);
        res.status(200).send({message: 'loggedIn'})
    },
    async login(req,res) {
        let { email, password } = req.body
        let db = req.app.get('db');
        let [existingUser] = await db.find_user([email])
        if (existingUser){
            let result = bcrypt.compareSync(password, existingUser.cust_hash)
            if (result) {
                req.session.user = existingUser;
                console.log(existingUser)
                res.status(200).send({message: 'loggedIn'})
                
            }else {
                res.status(401).send({message: 'Incorrect Password'})
            }
        }else{
            res.status(401).send({message: 'That email has not been registered.'})
        }
    },
    userData(req,res) {
        if (req.session.user){
            console.log(req.session.user);
            res.status(200).send(req.session.user)
        }else {
            res.sendStatus(200)
        }
    },
    logout(req,res) {
        req.session.destroy();
        res.redirect('http://localhost:3000')
    }
}
const bcrypt = require('bcryptjs');

module.exports ={
    async signup(req,res) {
           let { email, password } = req.body; 
           let db = req.app.get('db');
           let foundUser = await db.find_user([email]);
           if (foundUser[0]) return res.status(200).send({message: 'Email already in use.'})
           let salt = bcrypt.genSaltSync(10);
           let hash = bcrypt.hashSync(password, salt);
           let [createdUser] = await db.create_user([email, hash]);
           req.session.user = createdUser;
           console.log(createdUser)
           res.status(200).send({message: 'loggedIn'})
        },
    async login(req,res) {
        let { email, password } = req.body; 
        console.log(req.body)
        let db = req.app.get('db');
        let [foundUser] = await db.find_user([email]);
        console.log(foundUser)
        if (foundUser){
            let result = bcrypt.compareSync(password, foundUser.userhash)
            console.log(result)
            if (result) {
                req.session.user = foundUser;
                console.log(foundUser)
                res.status(200).send({message: 'loggedIn'})
            }
            else {
                res.status(401).send({message: 'Incorrect Password'})
            }
        }else{
            res.status(401).send({message: 'That email has not been registered.'})
        }
    },
    userData(req,res) {
        if (req.session.user){
            console.log(req.session.user)
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(200)
        }
    }

    }
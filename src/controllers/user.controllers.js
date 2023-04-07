const create = (req, res) => {
    const {email, password, confirmpassword} = req.body

    if (!email || !password || !confirmpassword) {
        res.status(400).send({message: "submite all fields for registration"})

    }

    res.status(201).send({
        message: "User created successfully",
        user: { 
            email,
        },
    })
}


module.exports = {create}
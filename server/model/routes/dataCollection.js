const router = require('express').Router()
let DataCollection = require('../dataCollection.model')


// Route to get all Data
router.route('/').get((req, res) => {
    DataCollection.find()
        .then((DataCollection) => res.json(DataCollection))
    .catch((err) => res.status(400).json(err))
})

// Route to add to DB
router.route('/new_user').post((req, res) => {
    const firstname = req.body.firstname;
    const othername = req.body.othername;
    const sex = req.body.sex;
    const age = Number(req.body.age);


    const newDataCollection = new DataCollection({
        firstname,
        othername,
        sex,
        age
    })
    newDataCollection.save()
        .then(() => res.json("New User Added Successfully"))
        .catch((err) => res.json(err))
})

// Route to Find and Delete Data
router.route('/remove/:id').delete((req, res) => {
    DataCollection.findByIdAndDelete(req.params.id).exec()
        .then((res) => res.json("Delete"))
    .catch((err) => res.json(err))
})

// Route to Find nd Edit Data
router.route('/update/:id').post((req, res) => {
    DataCollection.findById(req.params.id)
        .then((updating) => {
            updating.firstname = req.body.firstname,
                updating.othername = req.body.othername,
                updating.sex = req.body.sex,
                updating.age = Number(req.body.age)
            
            updating.save()
                .then(() => res.json("User Updated"))
                .catch((err) => res.json(err))
    })
})


module.exports = router
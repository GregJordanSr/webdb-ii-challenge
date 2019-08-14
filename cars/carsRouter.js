const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);


const router = express.Router();

router.get('/', (req, res) => {

    db("cars")
        .then((car) => {
            res.status(200).json(car);
        })
        .catch(err => {
           res.status(500).json({ message: "There was an error with the server" })
        });
})

router.get('/:id', (req, res) => {
    
});

router.post('/', (req, res) => {
    const body = req.body;
     if (body) {
         db("cars")
            .insert(body)
            .then((car) => {
                res.status(201).json(car);
            }).catch(err => {
                res.status(500).json({ message: "There was a error with the server" });
            })
     } else {
         res.status(404).json({ message: "Fill in all the inputs" })
     }
});

router.put('/:id', (req, res) => {
    
});

router.delete('/:id', (req, res) => {
    
});

module.exports = router;
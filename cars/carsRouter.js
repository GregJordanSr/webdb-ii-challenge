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
    const body = req.body;
    console.log('Body', body)
    console.log('ID', req.params.id)

    db('cars')
        .where({ id: req.params.id })
        .update(body)
            
            .then((car) => {
                if (!car > 0) {
                    res.status(404).json({ message: "You did not update the record." });
                } else {
                    res.status(200).json(body);
                }
            }).catch(err => {
                res.status(500).json({ message: "There was an error with the server." });
            })
    
});

router.delete('/:id', (req, res) => {
    db('cars')
        .where({ id: req.params.id })
        .del()
            .then((record) => {
                res.status(200).json({ message: "The record deleted successfully" });
            }).catch(err => {
                res.status(500).json({message: "There was an error with the server" });
            })
});

module.exports = router;
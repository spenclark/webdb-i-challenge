const express = require("express")
const db = require('../data/dbConfig')

const router = express.Router()

router.get('/', (req, res) => {
    db("accounts")
        .then( data => {
            res.status(200).json(data)
        })
        .catch(error =>{
            res.status(500).json({ error: "Failed on GET /"})
        })
})

router.get('/:id', (req, res) => {
    db("accounts")
        .where({ id: req.params.id })
        .first()
        .then( data => {
            res.status(200).json(data)
        })
        .then(error => {
            res.status(500).json({ error: "Failed on GET /:id"})
        })
})

router.post('/', (req,res) => {
    const postReqBody = req.body;
    db('accounts').insert(postReqBody, "id")
        .then(data => {
            const id = data[0]
            res.status(201).json(id)
        })
        .catch(error => {
            res.status(500).json({ error: "Failed on POST /:id"})
        })
})

router.put("/:id", (req, res) => {
    db("accounts")
      .where({ id: req.params.id })
      .update({ name: req.body.name, budget: req.body.budget })
      .then(account => res.json(account))
      .catch(error =>
        res.status(500).json({ message: "Could not update account" })
      );
  });
  
  router.delete("/:id", (req, res) => {
    db("accounts")
      .where({ id: req.params.id })
      .del()
      .then(account => res.status(204).send())
      .catch(error =>
        res.status(500).json({ message: "Could not delete account", error })
      );
  });
  
module.exports = router
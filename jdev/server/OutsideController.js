const axios = require('axios')
module.exports={
    getJSON: (req, res) => {
        axios.get(req.body.url).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(404).send("failed to reach source")
        })
        
    },
    sendJSON: (req,res) => {
        res.status(200).send({[req.params]: req.body})
    }
}
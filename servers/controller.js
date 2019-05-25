//Models
const Pet = require("./models")
const path = require("path")

module.exports = {
    allpets:(req, res) => {
        Pet.find({})
            .collation({ locale: "en" })
            .sort({type: 1})
            .then(data => res.json({data: data}))
            .catch(err => res.json({error: err}));
    },
    newpet:(req, res) => {
        Pet.create(req.body)
            .then(data => res.json({data: data}))
            .catch(err => res.json({error: err}));
    },
    findpet: (req, res) => {
        Pet.findById(req.params.id)
            .then(data => res.json({data: data}))
            .catch(err => res.json({error: err}));
    },
    updatepet: (req, res) => {
        Pet.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, context: 'query'})
            .then(data => res.json({data: data}))
            .catch(err => res.json({error: err}));
    },
    deletepet: (req, res) => {
        Pet.findByIdAndRemove(req.params.id)
            .then(data => res.json({data: data}))
            .catch(err => res.json({error: err}));
    },
    addlike: (req, res) => {
      Pet.findByIdAndUpdate(req.params.id, {$push: {likes: req.body}}, {runValidators: true})
          .then(data => res.json({data: data}))
          .catch(err => res.json({error: err}));
  },
    index: (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    }
}


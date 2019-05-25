//Controller
const controller = require("./controller")

module.exports = function(app){
    app.get('/pets', controller.allpets)
    app.post('/pet', controller.newpet)
    app.get('/pet/:id', controller.findpet)
    app.put('/pet/:id', controller.updatepet)
    app.delete('/pet/:id', controller.deletepet)
    app.put('/like/:id', controller.addlike)
    app.all('*', controller.index)
}
const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost:27017/scatch")
.then(function(){
    console.log("moongoose connected successsfully")
})
.catch(function(){
    console.log("mongoose connection error")
})

module.exports = mongoose.connection
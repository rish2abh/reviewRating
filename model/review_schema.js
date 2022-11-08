

const mongoose = require("mongoose")
const reviewSchema = new mongoose.Schema({
    subject : {
        type : String,
        require : true
    },
     review :{
        type : String,
        require : true,
        default : false
    },
    rating : {
        type : String,
        require : true
    },

    isActive : {
        type : Boolean,
        default :true

    },
})
reviewSchema.set ("timestamps",true)
module.exports = mongoose.model("review", reviewSchema)



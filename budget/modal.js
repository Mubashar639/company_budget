const mongoose = require("mongoose")

const Model = mongoose.Schema({
    budgetName: {
        type: String,
        required: [true, "budget must have the name"],
        unique: true
    },
    budgetCost: {
        type: Number,
        required: [true, " budget must have the budgetCost "],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    
})



module.exports = mongoose.model("budget", Model)
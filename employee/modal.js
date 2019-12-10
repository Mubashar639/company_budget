const mongoose = require("mongoose")

const Model = mongoose.Schema({
    employeeName: {
        type: String,
        required: [true, "Company must have the name"],
        unique: true
    },
    employeeDesignation: {
        type: String,
        required: [true, "user must have the address"],
    },
    hireAt: {
        type: Date,
        default: Date.now(),
        select: false
    },  
})



module.exports = mongoose.model("employee", Model)
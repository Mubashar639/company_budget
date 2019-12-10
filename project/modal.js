const mongoose = require("mongoose")

const Model = mongoose.Schema({
    projectName: {
        type: String,
        required: [true, "Porject must have the name"],
        unique: true
    },
    projectDescript: {
        type: String,
        required: [true, "Porject must have the description"],
    },
    projectDurationInDays: {
        type: Number,
        required: [true, "Porject must have the duration"],

    },
    
    employeesRequired: {
        type: Number,
        required: [true, "No. of empoyee required for project complition"],
    },
    budget: {
        type: Number,
        required: [true, "Budget required for project"],
    },

    
})



module.exports = mongoose.model("project", Model)
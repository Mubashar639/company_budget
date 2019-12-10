const mongoose = require("mongoose");

const Model = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Company must have the name"],
      unique: true
    },
    companyType: {
      type: String,
      required: [true, "company must have type"]
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },

    companyEmpolyess: [{ 
        type: mongoose.Schema.ObjectId,
        ref: "employee",
        required: true
    }],

    companybudgets: [{
         type: mongoose.Schema.ObjectId,
         ref: "budget",
         required: true
        }]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

module.exports = mongoose.model("company", Model);

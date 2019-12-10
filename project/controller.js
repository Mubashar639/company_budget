
const Model = require("./modal")
const errCatch = require("../utils/asynError")



exports.getdata = errCatch(async (req, res) => {
    const data = await Model.find()
    res.status(200).json({
        success: true,
        data: {
            data
        }
    })
})

exports.createdata = errCatch(async (req, res, next) => {
    const data = await Model.create(req.body)
    res.status(201).json({
        success: true,
        data: {
            data
        }
    })
})



exports.updatedata = errCatch(async (req, res, next) => {
    const data = await tourModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        success: true,
        data
    })
})

exports.deleteAll = errCatch(async (req, res) => {
    const query = tourModel.deleteMany()
    const data = await query
    res.status(204).json({
        success: true,
        data: null
    })
})

exports.find = errCatch(async (req, res) => {
    const data = await Model.findById(req.params.id)
    res.status(200).json({
        success: true,
        data: {
            data
        }
    })
})

exports.deleteOne = errCatch(async (req, res) => {
    const query = tourModel.findByIdAndRemove(req.params.id)
    const user = await query
    res.status(204).json({
        success: true,
        data: null
    })
})



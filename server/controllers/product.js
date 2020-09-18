const formidable = require('formidable');
const _ = require("lodash")
const fs = require("fs")

const Product = require("../models/product")

const {
    errorHandler
} = require('../helpers/dbErrorHandler');

exports.productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            res.status(400).json({
                error: "Product not found"
            })
        }
        req.product = product
        next()
    })
}

exports.read = (req, res) => {
    req.product.photo = undefined
    res.json(req.product)
}


exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(400).json({
                error: "Image could not be uploaded"

            })
        } else {
            let {
                name,
                price,
                description,
                category,
                shipping,
                quanity
            } = fields
            if (!name || !price || !description || !category || !shipping || !quanity) {
                res.status(400).json({
                    error: "All fields are required"
                })
            } else {
                let product = new Product(fields)


                if (files.photo) {
                    console.log('Photo Info', files.photo)
                    if (files.photo.size > 5000000) {
                        res.status(400).json({
                            error: "Image must be 5mb or less"
                        })
                    }
                    product.photo.data = fs.readFileSync(files.photo.path)
                    product.photo.contentType = files.photo.type
                }
                product.save((err, results) => {
                    if (err) {
                        res.status(400).json({
                            error: errorHandler(err)
                        })
                    }
                    res.json(results);
                })
            }
        }
    })

}
exports.remove = (req, res) => {
    let product = req.product
    product.remove((err, deletedProduct) => {
        if (err) {
            res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            deletedProduct,
            "message": "Product Deleted"
        })
    })
}
const mongoose= require('mongoose')
const {ObjectId}= mongoose.Schema
// const productSchema = new mongoose.Schema({}, { strict: false });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    slug: {
        type: String,
        require: true,
        unique: true,
    },
    brand: {
        type: String,
    },
    brandSlug: {
        type: String,
    },
    category: {
        type: ObjectId,
        // required: true,
        ref: "Category",
        default: null,
    },
    sub: {
        type: ObjectId,
        // required: true,
        ref: "Sub",
        default: null,
    },
    description: {
        type: String,
    },
    params: {
        type: Object,
    },
    inStock: {
        type: String,
    },
    coast: {
        type: Number,
    },
    oldCoast: {
        type: Number,
    },
    sale: {
        type: Boolean,
        default: false,
    },
    discount: {
        type: Number,
        default: false,
    },
    promotion: {
        type: Boolean,
        default: false,
    },
    youtube: {
        type: String,
    },
    youtubeTutorial: {
        type: String,
    },
    download: {
        type: Object
    }
}, {timestamps: true})

module.exports=new mongoose.model('Product',productSchema)
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const port = process.env.PORT || 5000;
const cors = require('cors');
const colors = require('colors');

// middleware
app.use(express.json());
app.use(cors());

// schema desigh
const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Provide a name for this product"],
        trim: true, // first and last unnacessary space
        unique:[true, "Name must be unique"],
        minLength:[3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"]
    },
    description:{
        type:String,
        required:[true, "Please provide a name for this product"]
    },
    price:{
        type: Number,
        required:true,
        min:[0, "Price can't be negative"]
    },
    unit:{
        type: String,
        required:true,
        enum:{
            values:["kg", "liter","pcs"],
            message:"unit value can't be {VALUE}, MUSTBE kg/liters/pcs"
        }
    },
    quantity:{
        type: Number,
        required: true,
        min: [0, "quantity can not be negative"],
        validate:{
            validator: (value) =>{
                const isInteger = Number.isInteger(value);
                if(isInteger){
                    return true
                }else{
                    return false
                }
            }
        },
        message:"Quantity must be an integer"
    },
    status:{
        type:{
            type: String,
            required:true,
            enum:{
                values: ['in-stock', "out-of-stock", "discontinued"],
                message:"Status can't be {VALUE}"
            }
        }
    }, 
//     categories:[{
//         name:{
//             type: String,
//             required:true
//         },
//         _id: mongoose.Schema.Types.ObjectId,
//     }],
//     supplier:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref:"Supplier or user collection"
//     }
// },
// {
    // tymestamp:true,
}
)
// schema patern
// SCHEMA --> MODEL --> QUERY
// model name first letter must be will Capital letter
const Product = mongoose.model('Product', productSchema);
app.get('/', (req, res) =>{
    res.send('schema design App is running')
});

app.post('/api/v1/product', (req, res, next) =>{
    // res.send('it is working');
    // console.log(req.body);
    const product = new Product(req.body)

    product.save();
    
})

module.exports = app;
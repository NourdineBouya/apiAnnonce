const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    text : {
        type: String,
        required: true,
    }

},
{
    timestamps : true
}
)

module.exports = mongoose.model('Products' , productSchema)
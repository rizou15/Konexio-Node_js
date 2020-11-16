const mongoose = require('mongoose');


const Address = new mongoose.Schema({
    ID: {
        type: mongoose.Types.ObjectId,
        
    },
    streetName: String,
    streetNumber: String,
    postCode: String,
    city: String
});


module.exports = new mongoose.model('Address', Address);

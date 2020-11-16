const mongoose = require('mongoose');


const Student = new mongoose.Schema({
    ID: {
        type: mongoose.Types.ObjectId,
        ref: 'address'
    },
    firstname: String,
    surname: String,
    address: {
        type: mongoose.Types.ObjectId
    }
});


module.exports = new mongoose.model('Student', Student);

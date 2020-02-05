const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StretchContactSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },

    lastName: {
        type: String,
        trim: true,
        required: "Last Name is Required",
    },

    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        unique: true
    },

    phone: {
        type: String,
        trim: true,
        required: "Must enter a phone number"
    },

    contacted: {
        type: Date,
        default: Date.now
    }

});

const StretchContact = mongoose.model("StretchContact", StretchContactSchema);

module.exports = StretchContact;

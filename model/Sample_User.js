import mongoose, { Schema } from 'mongoose';



const addressSchema = new Schema({
    pincode: {type: Number, require: true},
    street: {type: String, require: true},
    phone: {type: Number, min:10, max: 10}
});

const Address = mongoose.model('Address', addressSchema);


const UserSchema = new Schema({
    firstName: { type: String, require: true, max: [16, 'Please use 16 letters as First-Name']},
    lastname: {type: String, max: [16, 'Please use 16 letters as Last-Name']},
    age: {type: Number, min:[12, 'Your age must be greater than 12'], max:[100, 'Your are kidding. Age must be less then 100.']} ,
    email: {
        valodator(email_Id) {
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email_Id)
        },
        require: [true, 'Sorry, Email is Required'],
    },
    address: {
        type: mongoose.ObjectId,
        ref: 'Address'
    }
})

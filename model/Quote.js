import mongoose, { Schema } from 'mongoose';


const querySchema = new Schema({
    quote: { type: String, require: true, },
    author: { type: String, require: true, }
})

export const QueryModel = mongoose.model('Queries', querySchema);
import { QueryModel } from '../model/Quote.js'


// Get | READ | /quotes
export const getAllQuotes = async (req, res) => {
    const allQuotes = await QueryModel.find()
    res.json(allQuotes)
}
// Get | READ | /quotes/:id
export const getQuoteById = async (req, res) => {
    const singleQuote = await QueryModel.findById(req.params.id)
    res.json(singleQuote)
}
// Post | CREATE | /quotes
export const createQuote = async (req, res) => {
    const query = new QueryModel(req.body)
    await query.save()
    res.json(req.body)
}
// Put | UPDATE | /quotes/:id
export const replaceQuote = async (req, res) => {
    const replacedQuote = await QueryModel.findOneAndReplace({ _id: req.params.id }, req.body, { new: true })
    res.json(replacedQuote)

}
// Patch | MODIFY | /quotes/:id
export const updateQuote = async (req, res) => {
    const updatedQuote = await QueryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedQuote)
}
// Delete | DELETE | /quotes/:id
export const deleteQuote = async (req, res) => {
    const deletedQuote = await QueryModel.findByIdAndRemove(req.params.id);
    res.json(deletedQuote)
}



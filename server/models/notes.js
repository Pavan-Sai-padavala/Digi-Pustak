const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: [String],
        required: true
    }
});

const Note = mongoose.model('note', NoteSchema);

module.exports = Note;
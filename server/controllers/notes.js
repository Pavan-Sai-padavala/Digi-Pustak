const Note = require('../models/notes');

exports.createNote = async (req, res) => {
    const note = new Note({
        title: req.body.title,
        body: req.body.body
    });
    try {
        await note.save();
        res.status(201).send(note);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({});
        res.send(notes);
    } catch (e) {
        res.status(500).send();
    }
};

exports.getNoteById = async (req, res) => {
    const _id = req.params.id;
    try {
        const note = await Note.findById(_id);
        if (!note) {
            return res.status(404).send();
        }
        res.send(note);
    } catch (e) {
        res.status(500).send();
    }
};

exports.updateNote = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'body'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send();
        }

        updates.forEach((update) => note[update] = req.body[update]);
        await note.save();
        res.send(note);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).send();
        }
        res.send(note);
    } catch (e) {
        res.status(500).send();
    }
};

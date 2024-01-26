const mongoose=require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: [String],
    },
    status:{
        type: String
    },
    deadline:{
        type: Date
    }
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
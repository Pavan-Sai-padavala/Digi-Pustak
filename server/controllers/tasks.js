const Task = require('../models/tasks');

exports.createTask = async (req, res) => {
    if(typeof(req.body.body)!='undefined'){
        var body=req.body.body;
    }
    if(typeof(req.body.date)!='undefined'){
        var Date=req.body.Date;
    }
    const task = new Task({
        title: req.body.title,
        body: body,
        status:"pending",
        deadline:Date
    });
    try {
        await task.save();
        res.status(201).send(note);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send();
    }
};

exports.getTaskById = async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send();
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        if(typeof(req.body.title)!='undefined')
              task['title']=req.body.title;
        if(typeof(req.body.body)!='undefined')
              task['body']=req.body.body;
        if(typeof(req.body.status)!='undefined')
              task['status']=req.body.status;
        if(typeof(req.body.Date)!='undefined')
              task['Date']=req.body.Date;
        await task.save();
        res.send(task);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send();
    }
};

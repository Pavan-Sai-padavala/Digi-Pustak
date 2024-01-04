const express = require('express');
const app = express();
app.use(express.json());
app.use('/notes',require('./routes/notes.js'));
// app.use('/tasks',require('./routes/tasks.js'));
// app.use('/habits',require('./routes/habits.js'));
const db = require('./config/mongoose.js')
app.listen(3000, function (error) {
    if (error) {
        console.log(`Error in running the Server`);
        return;
    }
    console.log("connected to http://localhost:3000" );
});
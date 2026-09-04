const express = require('express');
const app = express();
app.use(express.json());
let tasklist = [
    {
        id: 1,
        task: "Buy milk",
        status: "Completed"
    }
];
app.get('/tasks', (req, res) => {
    res.json(tasklist);
});
app.get('/tasks/:id', (req, res) => {
    const taskid = Number(req.params.id);
    const id = tasklist.find(n => n.id === taskid);
    if (!id) {
        res.status(404).json({ message: "Task not found" })
    }
    res.json(id);

});
app.post('/tasks', (req, res) => {
    const { task, status } = req.body;
    const newTask = {
        id: tasklist.length + 1,
        task,
        status
    };
    if (!id || !task || !status) {
        res.json({ message: "Id , Task and Status is required" })
    }
    tasklist.push(newTask)
    return res.status(201).json({ message: "Successfully created" });
});
app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    tasklist.filter(task => task.id === tasklist.id);
    res.status(200).json({ message: "Successfully deleted" })
});
app.listen(3000, () => {
    console.log("Server running");
});
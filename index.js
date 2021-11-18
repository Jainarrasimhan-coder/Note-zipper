const express = require('express');
// const notes = require("./data/notes")
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const userRouter = require('./routes/userRourter');
const { notFound, errorHandler } = require('./middleware/errMiddleware');
const noteRouter = require("./routes/noteRouter");
const path = require("path")
const app = express()
dotenv.config();
connectDB();
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello daaai  world")
})

// app.get('/api/notes', (req, res) => {
//     res.json(notes)
// })
// app.get("/api/notes/:id", (req, res) => {
//     const note = notes.find((n) => n._id === req.params.id)
//     res.send(note)
// })
// --------------------------deployment------------------------------
const _dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "/client/my-notes/build")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(_dirname, "client", "my-notes", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running..");
    });
}
// --------------------------deployment------------------------------
app.use("/api/users", userRouter)
app.use("/api/notes", noteRouter)


app.use(notFound)
app.use(errorHandler)


app.listen(5000, (req, res) => {
    console.log("app is running in port 5000")
})
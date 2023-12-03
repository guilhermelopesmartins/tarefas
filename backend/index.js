const express = require("express");
const app = express();
const noteController = require("./controller/noteController");
const sectionController = require("./controller/sectionController");
const boardController = require("./controller/boardController");
const columnController = require("./controller/columnController");
const cardController = require("./controller/cardController");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const cors = require("cors"); 

//MIDDLEWARE
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
    next();
  })
app.use(express.json())
app.use(cors())

//NOTES ROUTES
app.post("/notes", noteController.createNote);

app.get("/notes", noteController.getAllNotes);

app.get("/notes/:id", noteController.getFromSection);

app.put("/notes", noteController.updateNote);

app.delete("/notes/:id", noteController.deleteNote);

//SECTION ROUTES
app.get('/sections', sectionController.getAllSections);

app.post('/sections', sectionController.createSection);

app.get('/sections/:id', sectionController.getFromUser);

app.get('/section/:id', sectionController.getById);

app.put('/sections', sectionController.updateSection);

app.delete('/sections/:id', sectionController.deleteSection);

//BOARDS ROUTES
app.get('/boards', boardController.getAllBoards);

app.post('/boards', boardController.createBoard);

app.get('/boards/:id', boardController.getFromUser);

app.put('/boards', boardController.updateBoard);

app.delete('/boards/:id', boardController.deleteBoard);

//COLUMNS ROUTES
app.get('/columns', columnController.getAllColumns);

app.post('/columns', columnController.createColumn);

app.get('/columns/:id', columnController.getFromBoard);

app.put('/columns', columnController.updateColumn);

app.delete('/columns/:id', columnController.deleteColumn);

//CARDS ROUTES
app.get('/cards', cardController.getAllCards);

app.post('/cards', cardController.createCard);

app.get('/cards/:id', cardController.getFromColumn);

app.put('/cards', cardController.updateCard);

app.delete('/cards/:id', cardController.deleteCard);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//PORT
app.listen(8989, () => {
    console.log("Server is running on port 8989")
})
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to database
const db = require("./src/models");
db.sequelize.sync();

// const postRouter = require('./src/routes/post');

// app.use('/api/v1/posts', postRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

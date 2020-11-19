const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

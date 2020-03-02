import path from 'path';

const express = require('express');

const PORT = process.env.HTTP_PORT || 8081;
const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});

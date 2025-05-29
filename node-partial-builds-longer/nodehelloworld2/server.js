'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  console.log('Request received: ', req.method, req.path);
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


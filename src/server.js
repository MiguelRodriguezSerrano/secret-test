const express = require('express');
const app = express();

app.get('/password', function (_req, res) {
  res.json(
      {
        password:'6390'
    }
  );
});

app.listen(3001, function () {
  console.log('This is de magic password');
});
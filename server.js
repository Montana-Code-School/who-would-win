import wins from '../../models/Win.js'
const express = require('express');
import mongoose from 'mongoose'
const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express'})
});

router.route('/api/matchVote')
  .post(({
    body
  }, res) => {
    const matchVote = new matchVote();
    matchVote.name = body.name;
    matchVote.save(err => {
      if (err)
        res.send(err);
      res.json({
        message: 'matchVote created!'
      });
    })
  })

app.listen(port, () => console.log(`Listening on port ${port}`))

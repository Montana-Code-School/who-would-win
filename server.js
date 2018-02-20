const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express'})
});

router.route('/api/match')
  .post(({
    body
  }, res) => {
    const match = new match();
    match.name = body.name;
    match.save(err => {
      if (err)
        res.send(err);
      res.json({
        message: 'match created!'
      });
    })
  })

app.listen(port, () => console.log(`Listening on port ${port}`))

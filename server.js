const Win = require('./models/Win.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.options('*', cors());
mongoose.connect("mongodb://localhost/clicker-win");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/win', (req, res) => {
  res.send({ express: 'Hello From Express'})
});

  router.route('/increment-win/:obj_id')

  .get((req, res) => {
    Win.findById(req.params.obj_id, (err, win) => {
      if (err)
      res.send(err);
      res.json(win);
    });
  })

  .post((req, res) => {
    console.log(req.params.obj_id)
  Win.findById(req.params.obj_id, (err, win) => {
    if (err)
      res.send(err);
    win.dinosaurs += 1;
    win.save(err => {
      if (err)
        res.send(err);
      res.json({
        message: 'win updated!'
      });
    });
  })
})

app.use('/api', router);
app.listen(port, () => console.log(`Listening on port ${port}`))

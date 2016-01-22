'use strict';

const express = require('express');
const router = express.Router();

const BlinkDiff = require('blink-diff');
const _ = require('lodash');

const diff = (opts) => new BlinkDiff(_.merge(opts, defaultOpts));

const defaultOpts = {
  imageAPath: './public/images/sample1.png',
  imageBPath: './public/images/sample2.png',
  composition: false
};

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/image', (req, res) => {
  const d = diff(JSON.parse(req.query.opts));
  d.run((err, result) => {
    if(err) return res.status(500).json({error: err});
    console.log(result);
    d._imageOutput.getImage().pack().pipe(res);
  });
});


module.exports = router;

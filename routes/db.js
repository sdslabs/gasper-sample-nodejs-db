const express = require('express');
const router = express.Router();
const queries = require('../services/queries');

router.get('/', async function(req, res, next) {
  try {
    await queries.createTable();
    res.json(
      await queries.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting record `, err.message);
    next(err);
  }
});

module.exports = router;
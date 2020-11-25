const express = require('express');
const router = express.Router();
const { getList } = require('../models/db');

router.get('/', async (req, res) => {
  try {
    const bbbb = await getList();

    res.send(bbbb);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

module.exports = router;

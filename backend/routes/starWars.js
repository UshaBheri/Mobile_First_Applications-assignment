const express = require('express');
const axios = require('axios');
const auth = require('./auth');
const router = express.Router();

router.get('/characters', auth, async (req, res) => {
  const { page } = req.query;
  try {
    const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;

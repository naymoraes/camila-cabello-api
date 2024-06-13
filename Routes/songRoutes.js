const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.post('/songs', songController.createSong);
router.get('/songs', songController.getSongs);
router.get('/songs/:id', songController.getSongById);
router.put('/songs/:id', songController.updateSong);
router.delete('/songs/:id', songController.deleteSong);

module.exports = router;
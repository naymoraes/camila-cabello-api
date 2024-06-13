const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

router.post('/artists', artistController.createArtist);
router.get('/artists', artistController.getArtists);
router.get('/artists/:id', artistController.getArtistById);
router.put('/artists/:id', artistController.updateArtist);
router.delete('/artists/:id', artistController.deleteArtist);

module.exports = router;

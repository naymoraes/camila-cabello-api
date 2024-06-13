const db = require('../models');
const Song = db.Song;

exports.createSong = async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.findAll({ include: 'artist' });
    res.status(200).json(songs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id, { include: 'artist' });
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSong = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    await song.update(req.body);
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    await song.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

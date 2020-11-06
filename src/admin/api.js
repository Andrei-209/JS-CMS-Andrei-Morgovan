const express = require('express');
const { remove } = require('../db');
const db = require('../db');

const router = express.Router();

router.get('/posts', (req, res) => {
    res.send(db.getAll('posts'));
});
/*
router.delete('/posts/:postId', (req, res) => {
    remove('posts')
}

)*/
// @todo: de adăugat toate rutele necesare pentru a avea un API restfull

module.exports = router;
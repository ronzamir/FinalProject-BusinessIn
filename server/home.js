const express = require('express');
const router = express.Router();
const path = require('path');
//===========================================
router.get('/ch', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
//===============================================
router.get('/NewPost/:num', function (req, res) {

    res.send('About me page');
});
module.exports = router;
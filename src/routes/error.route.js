const express = require('express');
const router = express.Router();
router.use('/error', (req, res) => {
    res.send('Error Page')
});
module.exports = router;

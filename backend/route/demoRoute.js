const express = require('express');
const { getDemoFolder } = require('../controllers/project');
const router = express.Router();

router.use((req, res, next) => {
    let url = req.url.split("?")[0];
    let path = getDemoFolder(url);
    if (path === null)
        next();
    res.sendFile(path)
})

module.exports = router;
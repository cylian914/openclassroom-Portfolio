const express = require('express');
const router = express.Router();

const { getProjList, getPinList, getProject } = require('../controllers/project');

router.get("/", (req, res, next) => {
    let ret = {};
    let projFold = getProjList();

    projFold.forEach((f) => {
        let prj = getProject(f)
        ret[f] = prj;
    })
    res.status(200).json(ret)
})

router.get("/latest", (req, res, next) => {
    let projFold = getProjList();
    res.status(200).json(getProject(projFold[projFold.length - 1]));
})

router.get("/pined", (req, res, next) => {
    res.status(200).json(getPinList());
})

router.get("/prj/:prj", (req, res, next) => {
    let prjId = getProjList().find((v) => v.endsWith(req.params.prj));
    if (prjId === undefined) {
        res.status(404).json();
        return;
    }
    res.status(200).json(getProject(prjId));    
})

router.get("/cache", (req, res, next) => {
    projCache.clear();
    res.status(200).json({message: "flushed cache"});
})

router.get("/cache/:id", (req, res, next) => {
    projCache.set(req.params.id, undefined);
    res.status(200).json({message: "flushed " + req.params.id + " cache"});
})

module.exports = router;
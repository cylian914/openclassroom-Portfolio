const PROJFOLDER = "../projet";
const fs = require('fs');
const paths = require("path")
let projCache = new Map();

function readFile(path, file, defaults = "", enc = "utf-8") {
    if (!fs.existsSync(path + "/" + file)) {
        fs.writeFileSync(path + "/" + file, defaults);
        return defaults;
    }
    return fs.readFileSync(path + "/" + file, enc);
}

function readDir(path, dir) {
    if (!fs.existsSync(path + dir)) {
        fs.mkdirSync(path + dir);
        return [];
    }
    return fs.readdirSync(path + dir).map((f) => f );
}

function readImageDir(path, dir) {
    let ret = [];
    let prj = readDir(path, dir);
    let jsonPrj = prj.filter((f) => f.endsWith(".json"));
    if (jsonPrj.length === 0)
        return [];
    jsonPrj.forEach((d) => {
        ret.push(JSON.parse(readFile(path + "/" + dir, d)));
    })
    return ret;
}

exports.getProject = (id, useCache = false) => {
    path = PROJFOLDER + "/" + id + "/";
    if (useCache && projCache.has(id))
        return projCache.get(id);
    let ret = {};
    ret = JSON.parse(readFile(path, "info.json", `{\n\t"title": "",\n\t"desc": ""\n}`))
    ret = {
        ...ret,
        SCREEN: readImageDir(path, "/SCREEN/"),
        TECH: readImageDir(path, "/TECH/"),
        LINK: readImageDir(path, "/LINK/"),
        id: id
    }
    projCache.set(id, ret);
    return ret;
}

exports.getProjList = () => {
    return fs.readdirSync(PROJFOLDER).filter((t) => !(t.startsWith("common") || !fs.statSync(PROJFOLDER + "/" + t).isDirectory()));
}

exports.getPinList = () => {
    return readFile(PROJFOLDER, "pin.txt").split("\n").filter((s) => s===""?null:s);
}

exports.getDemoFolder = (id) => {
    let path = id.split("/");
    path[1] = path[1] + "/demo";
    path = path.join("/");
    path = paths.resolve(PROJFOLDER + "/" + path) 
    if (!fs.existsSync(path))
        return null;
    return path;
}
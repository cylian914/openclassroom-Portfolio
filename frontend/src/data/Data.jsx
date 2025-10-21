let cache = new Map();
let cacheStatus = { all: false, latest: undefined };
export const APIURL = "/api/";

export default function getLatest(callBack) {
    syncLatest().then((d) => {
        callBack([...d][0]);
    });
}

export function getAll(callBack) {
    syncAll().then((d) => {

        callBack([...d])
    });
}

export function getFromId(id, callBack) {
    syncPrj(id).then((d) => {
        callBack(d)
    })
}

export function getPined(callBack) {
    syncPined().then((pin) => {
        let promise = [];
        pin.forEach((prj) => {
            promise.push(syncPrj(prj));
        })
        Promise.all(promise).then((d) => {
            callBack(d);
        })
    })
}

function syncPined() {
    if (cacheStatus.pined)
        return Promise.resolve(cacheStatus.pined)
    return fetch(APIURL + "pined").then((e) => e.json()).then((d) => {
        cacheStatus.pined = d;
        return d;
    })
}

function syncLatest() {
    if (cacheStatus.latest)
        return Promise.resolve(cache);;
    return fetch(APIURL + "latest").then((e) => e.json()).then((d) => {
        cacheStatus.latest = d[0];
        cache.set(d.id, d);
        return d;
    })
}

function syncPrj(prj) {
    let temp;
    if (temp = cache.get(prj))
        return Promise.resolve(temp);
    return fetch(APIURL + "prj/" + prj).then((e) => e.json()).then((d) => {
        cache.set(d.id, d);
        return d;
    })
}

function syncAll() {
    if (cacheStatus.all)
        return Promise.resolve(cache.values());
    return fetch(APIURL + "/").then((e) => e.json()).then((d) => {
        for (const [key, value] of Object.entries(d)) {
            cache.set(key, value);
        }
        cacheStatus.all = true;
        return cache.values();
    })
}
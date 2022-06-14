function callback(lang) {
    return lang;
}

function newCall() {
    return callback;
}

function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return newCall();
}

function returnsAnAnonymousFunction() {
    return function (y) {
        return y * y;
    }
}
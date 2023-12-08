let localSetLevelCookie = (value) => {
    localSetCookie("max_level", value, 30);
};

let localGetLevelCookie = () => {
    return localGetCookie("max_level");
};

let localGetCurrentLevel = () => {
    if (window.location.search.startsWith("?escape-game=") && !window.location.search.endsWith("victory")) {
        return Number(window.location.pathname.split('=')[1]);
    } else {
        return 0;
    }
};

let localGetNextLevel = () => {
    return localGetCurrentLevel() + 1;
};

let localGetPreviousLevel = () => {
    return localGetCurrentLevel() - 1;
};

let localSetCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
};

let localGetCookie = (name) => {
    let pattern = RegExp(name + "=.[^;]*");
    let matched = document.cookie.match(pattern);
    if(matched) {
        let cookie = matched[0].split('=');
        return cookie[1];
    } else {
        return 0;
    }
};


exports.setLevelCookie = localSetLevelCookie;
exports.getLevelCookie = localGetLevelCookie;
exports.getCurrentLevel = localGetCurrentLevel;
exports.getNextLevel = localGetNextLevel;
exports.getPreviousLevel = localGetPreviousLevel;
exports.setCookie = localSetCookie;
exports.getCookie = localGetCookie;
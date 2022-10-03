export function setTimer(callback, interval) {
    let count = 0;

    const timerId = setTimeout( function rec () {
        if (callback(count)) {
            count++;
            setTimeout(rec, interval);
        } else {
            clearTimeout(timerId);
        }
    }, interval);
}
/**
 * https://ko.javascript.info/settimeout-setinterval
 * callback 함수가 count를 받아 실행되며, 참일경우 계속진행, 거짓일경우 멈춤
 * @param {*} callback 
 * @param {*} interval 
 */
export function setTimer(callback, interval) {
    let count = 0;

    const  timerId= setInterval( ()=> {
        if (callback(count)) {
            count++;
        } else {
            clearInterval(timerId);
        }
    }, interval);
}
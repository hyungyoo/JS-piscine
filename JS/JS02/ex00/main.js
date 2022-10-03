// import { setTimer } from "./setTimerInterval.js";
import { setTimer } from "./setTimerTimeout.js";


function printNum(count) {
    console.log(count);
    return count < 3;
};

setTimer(printNum, 100);


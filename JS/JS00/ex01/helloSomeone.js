'use strict';

/**
 * a function that takes a parameter and print 
 * switch use strict comparison
 * @param {*} value number, string, null, Nan, undefined
 */
export const helloSomeone = (value) => {
    switch (typeof value) {
        case "string":
            if (!value.length)
            console.log('Who are you?');
            else
            console.log(`Hello ${value}!`);
            break;
        case "object":
            if (value === null)
                console.log('I am null and void');
            break;
        case "number":
            if (isNaN(value))
                 console.log('Age is just a number');
            else if (value > 0)
                 console.log(`My age is ${value}`);
            else
                console.log('I am Benjamin Button!');
            break;
        case "undefined":
            console.log('Nobody can define me!');
            break;
    }
};
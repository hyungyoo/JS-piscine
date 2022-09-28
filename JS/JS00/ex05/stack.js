/**
 * create array for stack
 */
export const stackCreate = () => ({
    arr: []
});

/**
 * check stack status, return true or false
 * @param {*} stack objet
 * @returns 
 */
export function stackEmpty(stack) {
    return stack.arr.length ? true : false;    
}
/**
 * push data in stack
 * @param {} stack objet
 * @param {*} data data
 * @returns protection (if there is not a data)
 */
export function stackPush(stack, data) {
    if (data === undefined)
        return;
    stack.arr[stack.arr.length] = data;
}

/**
 * show last value in stack
 * @param {*} stack objet
 * @returns last value
 */
export function stackPeek(stack) {
    if (!stackEmpty(stack))
        return;
    return stack.arr[stack.arr.length - 1];
}

/**
 * delete last value in stack
 * @param {*} stack objet
 * @returns protection for error (if there is not elements in stack)
 */
export function stackPop(stack) {
    if (!stackEmpty(stack))
        return;
    stack.arr.splice(stack.arr.length - 1);
}

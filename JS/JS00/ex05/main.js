import { stackCreate, stackPush, stackPeek, stackPop } from "./stack.js";

const arr = stackCreate();

console.log(arr);               // { arr: [] }
console.log(stackPeek(arr))     // undefined

stackPush(arr, 2);
stackPush(arr, 3);

console.log(stackPeek(arr));    // 3
stackPush(arr, 5);
console.log(arr.arr);           // [2, 3, 5]
stackPop(arr);
stackPop(arr);
stackPop(arr);
stackPop(arr);
console.log(arr.arr);           // []
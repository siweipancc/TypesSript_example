/**
 * @author pancc
 * @version 1.0
 */
/********** boolean ***********/
const fail: boolean = false;
const success: boolean = true;
console.assert(success && fail === false);

/********** number ***********/
const num: number = 5;
console.assert(num === 5);

/********** string ***********/
let username: string = 'dim';
username = "tim";
console.log(username); // tim

/********** array ***********/
const list: number[] = [1, 51, 0, -9];
const nums: Array<number> = [1, 51, 0, -9];
console.assert(nums !== list);

/********** enum ***********/
enum Color {
    RED,  // 默认使用 index 0
    BLUE   // 默认使用 index 1
}

const color: Color = Color.RED;
console.assert(color === 0);

enum Car {
    BEN = 'ben', //改变行为为字符串
    JEEP = 'jeep'
}

const car: Car = Car.BEN;
console.assert(car === 'ben');

/********** any ***********/
const bucket: any[] = [1, 'dog', false, Car.BEN];
console.log(bucket); // [ 1, 'dog', false, 'ben' ]
console.assert(bucket[0] === 1);
bucket[1] = false;
console.assert(bucket[1] === false);

/********** void ***********/
const notReply = function (): void {
};
const invalid: any = notReply();
console.log(invalid); // undefined

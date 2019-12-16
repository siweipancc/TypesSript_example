/**
 * @author pancc
 * @version 1.0
 */
let cache: any;
cache = [1, 5, 33];
console.assert((cache as Array<number>).indexOf(5) === 1);
cache[1]='off';
console.log(cache as Array<boolean>);   // [ 1, 'off', 33 ] note: 不会有报错

 

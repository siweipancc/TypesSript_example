let count; // 未知 any 类型
count = 1;    // 推导出的 number 类型
console.log(`count: ${count}: ${typeof count}`);

count = '1';    // 推导出的 string 类型
console.log(`count: ${count}: ${typeof count}`);

let num: number;  // number 类型
num = 15;  // 正确赋值
console.log(`num: ${num}: ${typeof num}`);
/*num='shift'; //TS2322 not assignable*/

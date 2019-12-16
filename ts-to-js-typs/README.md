# 1 类型
## 1.1 可选的静态声明 
```     
// src/StaticDeclares.ts

let count; // 未知 any 类型
count = 1;    // 推导出的 number 类型
console.log(`count: ${count}: ${typeof count}`);

count = '1';    // 推导出的 string 类型
console.log(`count: ${count}: ${typeof count}`);

let num: number;  // number 类型
num = 15;  // 正确赋值
console.log(`num: ${num}: ${typeof num}`);
/*num='shift'; //TS2322 not assignable*/
```
上边的运行结果 :
>count: 1: number <br>
>count: 1: string <br>
>num: 15: number <br>  

## 1.2 基本类型
- boolean
- number
- string
- array
- enum
- any
- void
### 1.2.1 boolean
``` ts 
// src/types.ts   

const fail: boolean = false;
const success: boolean  = true;
console.assert(success && fail === false);   
```
### 1.2.2 number
```ts        
// src/types.ts  

const num:number=5;
console.assert(num===5);
```
### 1.2.3 string
```ts         
// src/types.ts  

let username: string = 'dim';
username = "tim";
console.log(username); // tim
```
### 1.2.4 array
```ts    
// src/types.ts  

const list: number[] = [1, 51, 0, -9];
const nums: Array<number> = [1, 51, 0, -9];
console.assert(nums !== list); 
```
### 1.2.5 enum
```ts     
// src/types.ts 

enum Color {
    RED,  // 默认使用 index 0
    BLUE   // 默认使用 index 1
}
const color: Color = Color.RED;
console.assert(color===0);

enum Car {
   BEN='ben', //改变行为为字符串
   JEEP='jeep'
}
const car:Car = Car.BEN;
console.assert(car==='ben');
```
### 1.2.6 any
```ts  
// src/types.ts  

const bucket: any[] =[1,'dog',false,Car.BEN];
console.log(bucket); // [ 1, 'dog', false, 'ben' ]
console.assert(bucket[0]===1);
bucket[1]=false;
console.assert(bucket[1]===false);
```          
### 1.2.7 void
```ts      
// src/types.ts  

const notReply = function (): void {
};
const invalid: any = notReply();
console.log(invalid); // undefined
```

## 1.3 联合类型
```ts    
// src/combination.ts

let protocol: string[] | string;
protocol='http';
protocol=['http','https'];
/*protocol=15; // TS2322 not assignable*/
```    
## 1.4 类型推断
```ts        
// src/typeInfer.ts

function foo(src: any): void {
    switch (typeof src) {
        case "string": {
            console.log(src.length);
            break;
        }
        case "boolean":{
            console.log(`value is ${src}`);      
             /*src.slice(3,1); // TS 2339 方法不存在*/
            break;
        }

        default: {
            console.log('not string nor boolean')
        }
    }
}
foo('len 5'); // 5
foo(true); // value is true
foo([1,5]); // not string nor boolean
```
## 1.5 类型转换
```ts     
// src/typeTransform.ts

let cache: any;
cache = [1, 5, 33];
console.assert((cache as Array<number>).indexOf(5) === 1);
cache[1]='off';
console.log(cache as Array<boolean>);   // [ 1, 'off', 33 ] note: 不会有报错 
``` 
## 1.6 类型别名
```ts                       
// src/typeAlias.ts

type PrimitiveArray = Array<number | boolean | string>;
type CustomNumber = number;
type  CallBack = () => void;
```
## 1.7 环境声明
```ts
console.log(chrome.toLocaleString()); //    TS2304 
``` 
上边的语句会报错，但是加上下边的这段在编译器则不会：
```ts
interface Chrome {
    toLocaleString(): string;
}
declare const chrome: Chrome;
```
当然这里调用的是 chrome 的接口，在 ide 中使用会报错：
> ReferenceError: chrome is not defined

需要在 chrome 浏览器中使用， 编译它并放置于html 文件中, console 台的输出
>[object Object]

TypesScript 默认包含一个 *lib.d.ts* 文件，包含了包括 DOM 在内的声明，位于： **node_modules\typescript\lib\lib.d.ts**
 


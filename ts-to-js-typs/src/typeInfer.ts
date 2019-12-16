/**
 * @author pancc
 * @version 1.0
 */
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
 

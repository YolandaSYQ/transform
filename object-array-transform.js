var obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    },
    f: 4
}
var results = [];

function recur(obj, previous = '') { //es6 	如果没有传第二个参数，则默认为空
    for (var i in obj) { //遍历obj的属性
        let key = ''; //key 用来记obj的属性名
        if (previous) { //如果有传previous
            key = `${previous}.${i}`; //es6模板字符串  相当于previous+'.'+i
        } else {
            key = i;
        }
        if (typeof(obj[i]) === 'object') {
            recur(obj[i], key); //递归
        } else {
            results.push(`${key}=${obj[i]}`);
        }
    }
}
recur(obj); //没有传第二个参数
console.log(results); //['a=1','b.c=2','b.d.e=3','f=4']
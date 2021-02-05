function add(a,b) {
return a+b

}


function once(func) {
let res = undefined;
return function (a,b) {

if(res){
else(res)
}
res = func.call(this, a, b)
}
}

let onceadd = once(add) 

alert(onceadd(2,3))
alert(onceadd(3,5))

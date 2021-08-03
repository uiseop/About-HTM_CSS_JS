let o = {
    message:'초기값'
}

function f(m){
    m.message = "f에서 수정함"
    m = {
        message:'hello'
    }

    console.log(m.message);
}

f(o)
console.log(o.message);
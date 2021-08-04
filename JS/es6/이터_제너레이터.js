class Log{
    constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push({message, timestamp:Date.now()});
    }
    [Symbol.iterator](){ // 이터레이션 프로토콜은 클래스에 심볼 메서드 Symbol.iterator가 있고 이 메서드가 이터레이터처럼 동작하는 객체를 반환한다면 이터러블객체
        // return this.messages.prototype.values(); // 이것 덕분에 클래스를 이터러블 객체로 만듦 --> for..of사용 가능
    }
}

const log = new Log();
log.add('first day at sea');
log.add('spotted whale');
log.add('spotted another vessel');

class Fib{
    [Symbol.iterator](){
        let a= 0, b = 1
        return {
            next(){
                let rval = {value:b,done:false}
                b += a
                a = rval.value
                return rval
            }
        }
    }
}

const fib = new Fib()
let i = 0
for(let n of fib){
    console.log(n);
    if(++i >9)break
}

// ################################### 제너레이터 ######################################
function*rainbow(){
    yield '빨'
    yield '주'
    yield '노'
    yield '초'
    yield '파'
    yield '남'
    yield '보'
}

const it = rainbow()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
for(let i of it){
    console.log(i);
}

function*interrogate(){
    const name = yield `What is your name`
    const color = yield `What is your favorite color`
    return `${name}'s favorite color is ${color}!!`

}

const iz = interrogate()
console.log(iz.next());
console.log(iz.next('Ethan'));
console.log(iz.next('orange'));
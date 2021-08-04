const u1 = {name:'철수'}
const u2 = {name:'영희'}
const u3 = {name:'정수'}
const u4 = {name:'채현'}

const userRoles = new Map()
/* 방법 1
userRoles.set(u1,'User')
userRoles.set(u2,'User')
userRoles.set(u3,'Admin') */

/* 방법 2
userRoles
    .set(u1,'User')
    .set(u2,'User')
    .set(u3,'Admin') */

const userRoles2 = new Map([
    [u1,'User'],
    [u2,'User'],
    [u3,'Admin'],
])
// get으로 역할을 알아봄
console.log(userRoles2.get(u1));
// has로 역할이 있는지 알아봄
// 없으면 undefined, false로 각각 나타냄
// size는 크기는 나타냄
// keys()는 키들을, values()는 값들을 , entries()느 ㄴ첫번쨰 요소가 키, 두번쨰 요소가 배열인 값들을 반환

console.log(userRoles2.keys()); //{ { name: '철수' }, { name: '영희' }, { name: '정수' } }
console.log(userRoles2.values()); // { 'User', 'User', 'Admin' }
console.log(userRoles2.entries()); 
/*
[ { name: '철수' }, 'User' ],
[ { name: '영희' }, 'User' ],
[ { name: '정수' }, 'Admin' ] }*/

//모두 이터러블 객체이므로 for..of를 사용할 수 있음
for(let u of userRoles2.keys()){
    console.log('hello ' + u.name);
}
for(let u of userRoles2.values()){
    console.log(u);
}
for(let u of userRoles2.entries()){
    console.log(`${u[0].name} : ${u[1]}`);
}
for(let [u,r] of userRoles2){
    console.log(`hello ${u.name} : ${r}`);
}
// 지울때는 delete(요소이름)
userRoles2.delete(u2)
for(let u of userRoles2.entries()){
    console.log(`${u[0].name} : ${u[1]}`);
}
console.log(userRoles2.size);

const SecreteHolder = (function(){
    const secrets = new WeakMap()
    return class{
        setSecret(secret){
            secrets.set(this,secret)
        }
        getSecret(){
            return secrets.get(this)
        }
    }
})()

비밀을 저장할 댸는 setSecret메서드만 사용해야하고, 보려할떄는 getSecret메서드를 써야만 한다
const a = new SecreteHolder()
const b = new SecreteHolder()

a.setSecret('secret A')
b.setSecret('secret B')

a.getSecret()
b.getSecret()


선언을 표현식으로 바꾸는 방법은 소괄호로 감싸는 방법이다.

(foo = function(){
  console.log("foo");
}); // 함수선언을 함수 표현식으로 표현
foo(); // "foo"

다음은 선언과 동시에 사용되는 방법이다.

(foo = function(){
  console.log("foo");
})(); // "foo"

익명함수 표현식은 다음과 같이 표현한다

(function(){
  console.log("hello");
})(); // "hello"

즉시실행함수 (IIFE) 를 쓰는이유는?
전역변수(global scope) 의 선언을 막기위해
IIFE 내부에 선언된 변수들의 범위(scope)는 익명함수내로 한정이 되기 때문에 중복선언문제가 해결된다.

var foo = "bye";
 
(function(){
    var foo = "hello";
    console.log(foo); // "hello"
})();
 
console.log(foo); // "bye"
똑같은 변수 foo임에도 불구하고 익명함수를 통해 중복문제를 해결했다.

클로저에서의 값의 중복 해결
클로저는 외부함수의 변수에대한 참조를 기억한다. 흔한 루프문이다.

for(var i = 0; i < 3; i++){
     setTimeout(() => {
         console.log(i);
     }, 1000);
}
/*출력값
3
3
3
*/
i 를 참조하지만 i는 전역으로 선언이 되어있기 때문에 전역 i는 마지막 값인 3이 된다. 그래서 3이 세번 찍힌다.

그렇다면 for문이 돌때 각각의 환경을 만들어주어야한다.
이 때 IIFE를 쓰면 된다.

for(var i = 0; i < 3; i++){
    (function(x) {
        setTimeout(function(){
            console.log(x);
        }, 1000);
    })(i);
}
/*출력값
0
1
2
*/
for문이 돌때마다 즉시실행함수에 i값이 parameter로 전달된다. 그리고 그 값을 x에 저장한다.
함수각각의 환경이 다르므로 각자의 값들을 기억할 수 있는것이다.
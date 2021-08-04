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
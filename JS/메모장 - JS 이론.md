# JS는 인터프리팅 언어이고 번거로운 부대 작업이 필요없다는 장점이있다.
단점 : 루비언어의 경우 downcase를 사용하면 사본의 소문자 버전, downcase!를 하면 원본이 바뀌는 사본과 원본의 메서드 차이가 있지만
JS는 어떤 메서드가 사본을 제공하는지, 원본을 제공하는지 프로그래머가 기억해야한다는 단점이 있음
(노드같은 자바스크립트 엔진은 분명 JS이긴 하지만, 프로그래머가 개입할 필요 없이 자동으로 이뤄짐)
JS의 장점은 어디서든 쓰인다는것. 거의 항상 브라우저 스크립트 언어의 표준이였고,
노드의 등장으로 이제 브라우저 바깥으로(Back-end)영역을 확장
자바스크립트의 버전 ES5->ES6로 점점 발전할 수 있는 이유 : JS의 동적 성격때문, 최근 브라우저 업데이트 방식 때문이기도 함
JS는 단일 스레드에서 동작한다. => 한번에 한가지 일만 할 수 있다. 때문에 비동기적 관점에서 생각해야해! CPU점유를 양보하는거지
동기적 : 코드가 작성된 순서대로만 진행해서 거어어업나게 오래걸리는 작업이 있으면 중간에 시간을 너무 잡아먹을지돞

원시타입  -> 실제 객체에 값이 저장되지 않음 : 대응하는 원시값에 기능을 제공하는 역할 , 임시로 만들어져서 객체랑 다르게 프로퍼티를 할당해도 undefind로 파괴됨
- 숫자 Number -> 숫자형 데이터를 하나만 갖기로 한 단순한 자바스크립트의 특성 : 고성능 정수 연산이나 정밀한 소수점 연산이 필요한 어플리케이션에선 쓸 수 없음
10진수, 2진수, 8진수, 16진수 네 가지 숫자형 리터럴을 인식 Number.EPSILON, MAX_SAFE_INTEGER, MAX_VALUE, NaN, POSITIVE_INFINITY 등 표현 가능 
자바스크립트의 0.1은 이진 표현으로 나타낼 수 있는 숫자들 사이에 걸쳐있어서 n === 0.3 결과를 처리하지 못해 
=> if(Math.abs(n-0.3) < Number.EPSILON) ==> '느슨하게' 비교함 EPSILON은 매우 작은값임. 거의 0
- 문자열 String -> \역슬레시를 쓰면 특수문자 사용 가능 가령 \" 같은, s.toUpperCase(); : 대문자로 변형
문자열 교체 => input.replace("going", "walking") // input.includes("going") : going이 포함됐냐? //
- 불리언
- null
- undefined
- Symbol -> 유일한 토큰을 나타내기 위해 ES6에서 도입한 새 데이터 타입. 심볼은 항상 유일 PK임 : 이런 면에서 객체와 유사
Symbol() 생성자로 만듦 (new 키워드로 시작하지 않아, 대문자로 시작하는 식별자는 new와 함께쓰는게 불문율임)

객체타입 : 유일함, 다른 어떤것과도 일치하지 않음, 여러 가지 값이나 복잡한 값을 나타낼 수 있으며 변할 수 있음
(본질은 컨테이너. 컨테이너의 내용물은 변할 수 있는데 컨테이너는 강철-안변함)
객체의 콘텐츠는 프로퍼티(Property) 혹은 멤버(Member)라고 부름 -> Key 문자열, 심볼이 올 수 있음
객체타입의 참조의 경우 원본이 바뀌면 및에 참조하는 값도 바뀜 -> shallowCopy라고 할 수 있음
delete sam3.speak 처럼 delete를 통해 객체의 멤버를 삭제 가능함 OOP개념 
@@객체지향 프로그래밍 OOP개념
@@객체는 데이터와 기능을 논리적으로 묶어놓은것. 
@@가령 자동차 -> 데이터 : 제조사,모델,도어숫자,차량번호 등이 있음, 기능 : 가속,변속,문열기,헤드라이트켜기 등이 있음
@@OOP는 사물에 관해 추상적으로(어떤 자동차), 구체적으로(특정 차동차) 생각할 수 있게 함
@@Class는 어떤 자동차처럼 추상적이고 범용적, Instance는 특정 자동차처럼 구체적이고 한정적인것, 기능은 메서드라고 불리지
@@Class에 속하지만 특정 인스턴스에 묶이지는 않는 기능을 클래스 메서드라고 합니다. 가령 모든 자동차는 '시동을 거는' 기능이 포함 : 클래스 메서드
@@Instance를 처음 만들 떄는 생성자(Constructor)가 실행됩니다. 생성자는 객체 인스턴스를 초기화(새로 만들어줌)해줍니다
@@운송수단 : 슈퍼클래스, 자동차 : 운송수단의 서브클래스
@@객체 확인, 이 객체가 클래스의 인스턴스인가 확인 ==> car1 instanceof Car ==> true or false
@@생성자 선언 함수관련은 test.js에서 확인
@@Class의 Instance를 사용할 수 있는 메서드 ==> 프로토타입 메서드를 말하는것. 프로토타입 체인을 통해 동적 디스패치를 구현한데.. 하...
@@디스패치란 메서드 호출과 같은 의미. (단어 뜻 보내다) 객체의 프로퍼티나 메서드에 접근하려 할 때 그런 프로퍼티나 메서드가 없으면
자바스크립트는 객체의 프로토타입(사용자가 생성한 메서드들)에서 해당 프로퍼티나 메서드를 찾습니다.

- Array : 파이썬의 list와 같음. 동적으로 할당 가능, 요소 데이터타입을 가리지않음. JS의 배열은 파이썬의 dictionary자료구조와 유사
선언한 크기보다 큰 인덱스에 요소를 할당하면 자동으로 그 인덱스에 맞게 늘어나며, 빈 자리는 undefind로 채워짐
# push와 pop 뿐만 아니라 큐에 해당하는 행동과 같은 기능 -> shift == popleft, unshift == appendleft
# array.concat(4,5,6) : 4,5,6을 사본에 push함 사본사본사본사본사본사본사본사본사본사본사본사본
# array.slice(4,3) or (-2) or (-2,-1) : 파이썬 arr[n:m]이랑 같은기능 사본사본사본사본사본사본
# array.splice(수정시작 인덱스, 제거할 요소 개수(없으면 0), 배열에 추가될 요소)
# array.copyWithin(붙여넣을 위치, 복사 시작할 위치, 복사 끝낼 위치)
# array.fill(요소,시작,끝) (시작,끝은 생략 가능) arr = new Array(5).fill(1)
# array.reverse() : 뒤집기
# array.sort() : 오름차순으로 정렬
# array.indexOf() , lastIndexOf(찾을거, 어디부터?) --> index번호를 출력함 없으면 -1
# array.findIndex(o=>o.id === 5) -> 객체의 id가 5인 요소의 index번호를 출력함
# array.find(o=>o.id === 5) -> id가 5인 객체 요소를 출력함 없으면 undefind로, callback으로 find((값,인덱스)=>처리함수)
# some과 every 메서드 : some은 조건에 맞는 요소를 찾으면 즉시 검색을 멈추고 true를 반환, 아님 false
# every는 모든 요소가 조건에 맞아야 true, 아님 false
# map과 filter 둘 다 모두 사본사본사본사본사본사본사본사본사본사본사본사본사본사본사본사본사본
# 일정한 형식의 배열을 다른 형식으로 바꿔야 한다면 map , const name = cart.map(x => x.name), prices.map(x => x*0.8)
# map과 filter를 사용하여 두 개의 객체를 합침 -> items.map((x,i)=>({name:x,price:prices[i]})) map은 item과 index를 넘겨줘
# 배열의 마법 reduce
# map은 배열의 요소를 변형, reduce는 배열 자체를 변형 -> reudce는 배열을 값 하나로 줄이는데 쓰이기 때문에 이름이 이렇게 붙여짐
# reduce, map, filter 모두 callback함수를 받음. map과 filter의 콜백인자는 항상 현재 배열요소
# const sum = arr.reduce((a,x) => a +=x, 100) 초기값 100설정 처럼 초기값을 설정할 수 있음 (설정안하면 배열의 첫번째값을 default로)
# join -> 문자열 병합하는애, 매개변수가 생략되면 기본으론 ,가 들어감 null,undefined
 ex) arr = ['hello','world','bye','bye'] 걍우 arr.join() // "hello,world,bye,bye" arr.join('') //helloworldbyebye arr.join(' -- ') // hello -- wolrd -- bye -- bye


Object.keys(schools)와 Array.map은 object객체를 배열로 만들어줘
복사배열 = Array.from(원래 배열)을 통해 기존 배열을 deepcopy한 배열을 만들어 사용해서 push를 사용해도 돼!
객체의 경우 복사객체 = Object.assign({},원래객체) 를 통해 객체를 복사할 수 있어
Object.keys(객체), Object.values(객체), Object.entries(객체) => [[키,값],...] 으로 이뤄진 배열을 반환하고 다시 이 값을 Object.fromEntries(배열)을 하면 다시 객체를 반환 => fetch할때 자주 사용되겠지?


- Date : new Date()로 생성 가능 퀴찮아! 구글링 해! d.valueOf()사용하면 1970년1월1일부터 얼마나 지났는지 출력
- RegExp : 정규표현식이래 17장에서################### 설명 가령 이메일 정규표현식같은 /.../안에 표현 ex)/\b[a-z0-9._-]+@[a-z_-]+\b/;
- Map과 WeakMap : 키와 값을 연결한다는 점에서 객체와 비슷, 대신 키에 여러 자료형을 쓸 수 있다는게 객체와 다른점
# Map은 es6이전에 객체만을 사용했을때의 문제점을 해결해줌
1. 프로토타입 체인 떄문에 의도하지 않은 연결이 생길 수 있음
2. 객체 안에 연결된 키와 값이 몇 개나 되는지 쉽게 알아낼 수 있는 방법이 없음 --> 각각 프로토타입 체인으로 연결되면 몰라
3. 키는 반드시 문자열이나 심봉이여야 하므로 객체를 키로 써서 값과 연결할 수 없음
4. 객체는 프로퍼티 순서를 전혀 보장하지 않음
ex) 사용자 객체가 여럿 있고 이들에게 각각 역할을 부여한다하면 map.js에서 확인
# WeakMap은 1) 키가 반드시 객체여야함 2) 키는 가비지 콜렉션에 포함될 수 있음 3) 이터러블이 아니며 clear()메서드도 없음
# 일반적으로 객체를 참조하는 한, 그 객체를 메모리에 계속 유지해야함. 인스턴스 전용private한 키를 저장하기에 알맞음
# WeakMap은 참조한 객체가 사라지면 같이 사라짐 (가비지 콜렉션에 포함되는게 이 뜼) 반면 Map은 참조한 객체가 사라져도 다른애니까 사라지지않음
- Set과 WeakSet : 중복을 허용하지 않는 파이썬과 마찬가지

원시값과 객체값의 참조 Call by Value VS Call by Reference
Value를 매개변수를 통해 참조시키면 변수 자체를 받는것이 아니라 값을 받음. 원래 변수의 값에 변화가 없음
Reference를 매개변수를 통해 참조시키면 객체 자체를 받음. 객체의 내용물은 변할 수 있는데 객체 자체는 변하지 않음
가령 o.message = {다른값} : 변함 , o = {다른값} ==> 객체 자체를 수정하려했기때문에 변하지 않음.

데이터 타입 변환
# 숫자로 변환
Number("33.3") --> 33.3
parseInt("16 volts", 10) --> 16 : 뒤에는 기수(몇진수인지 표현)
parseFloat("15.5 kph") --> 15.5 : 뒤에 기수는 default:10

# 문자열로 변환
배열경우 const arr = [1,true,"hello"] --> arr.toString() --> "1,true,hello"로 변환 문자열을 쉼표로 연결한 문자열로 변환해줘서 쓸만해


**for..of**모든 이터러블 객체에 사용할 수 있음
일반적인 파이썬의 for i in lst와 같음 : idx를 말고 idx번째 요소를 알고싶을때
**for..in** 얘는 index의 준말이라고 생각하자 // (객체에서 사용) test.js의 80번째줄 확인 --> 다른사람이 만든 프로퍼티에서 체인에 정의를 하면 상속이 이뤄지지 않음. 그래서 hasOwnProperty사용
얘는 그냥 length를 받아오지 않고 키값을 통해 끝까지 탐색한다는 점에서 쓸모가 없어보임. 객체에서는 자주 쓴데!
const o = {a:1,b:2,c:3,[SYM]:4}
for(let prop in o){
    if(!o.hasOwnProperty(prop)) continue # hasOwnProperty는 해당 key값이 존재하는지 확인하는앤데 기본적으로 항상 쓰길 권장한데!!!!
    console.log(`${prop}:${o[prop]}) 
}
**forEach**((인자)=>{함수내용}) // ex) students.forEach((v) => {})
Object.keys(o)는 객체타입 o의 키값들로 이뤄진 배열을 반환함 Symbol은 포함되지 않아 

# 비교연산자
=== vs == : === 는 일치함, == 는 동등함
일치함은 두 값이 같은 객체, 같은 타입, 같은 값인지를 확인함 !==
동등함은 두 값이 같은 객체, 같은 값인지를 확인 !=
결론 : 타입을 비교하는지 안하는지


# 쉼표연산자
쉼표 연산자는 표현식을 결합하여 두 표현식을 평가한 후, 두 번째 표현식의 결과를 반환합니다. 표현식을 하나 이상 실행해야 하지만
 값으로 필요한 것은 마지막 표현식의 결과뿐일 때 쉼표 연산자를 사용
ex) let x = 0, y = 10, z;
z = (x++, y++) ==> z = 10

# ES6에서 새로 도입한 해체 할당.
객체나 배열을 변수로'해체'할 수 있다.
ex) const obj = {b:2, c:3, d:4}  const {a,b,c} = obj 하면 a 는 undefined, b는 2 c는 3으로 나옴
이처럼 객체를 해체시키려면 객체의 프로퍼티 이름이 일치해야 변수로 할당 해체 가능해.
# 확산연산자 ...를 이용
ex) let {a,b,...rest} = obj 라고 하면 앞에 2개의 요소는 a,b에 저장하고 나머지는 obj에 저장


# This 키워드
함수 바디 안에는 특별한 읽기 전용값인 this가 있음. this는 일반적으로 객체지향 프로그래밍 개념에 밀접한 연관이 있음. 9장에서 계속...###################
일반적으로 this는 객체의 프로퍼티인 함수에서 의미가 있음. 메서드를 호출하면 this는 호출한 메서드를 소유하는 객체가 됨 
ex) const o = { //`는 백틱이라고 함
    name:'Wallet',
    speak(){return `My name is ${this.name}!`} //this를 안붙이고 ${name}이라고만 쓰면 못알아쳐먹음
} this는 o에 묶임
this는 함수를 어떻게 선언했느냐가 아니라 어떻게 호출했느냐에 따라 달라진다는 것을 이해해야한다. 
this가 o에 묶인 이유는 speak가 o의 프로퍼티여서가 아니라 o에서 speak를 호출했기때문임
중첩함수안에서는 의도대로 this가 최상위 객체에 연결되지 않을 수 있어 -> 중첩함수 쓰기 전에 this를 다른 변수에 저장하는 방법을 사용
===> 화살표 함수를 사용하면 이 문제를 해결할 수 있데, 다른 변수에 this를 저장하지 않아도 되나?

# 화살표 표기법 Arrow notation
function이라는 단어와 중괄호 숫자를 줄이기 위해 고안된 단축 문법임
1. function을 생략 가능
2. 함수에 매개변수가 단 하나 뿐이라면 ()를 생략할 수 있음
3. 함수 바디가 표현식 하나라면 중괄호와 return문도 생략할 수 있음
값은 표현식의 결과 즉, 표현식의 계산 결과로 메모리에 할당된 값
표현식은 값을 산출하는 구문 ex) 1; 30+10; 'Hello' plus() 처럼 그냥 표현
리터럴은 값을 표기하는 약속된 기호, 문자, 방법 -> 1은 정수 리터럴, 'Hello'는 문자열 리터럴
일반함수와 화살표 함수의 차이점
1. 객체 생성자로 사용할 수 없음
2. arguments 변수도 사용할 수 없음 but ...(확산 연산자)로 대체가능

# call과 apply,bind
&1.call메서드는 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있음
ex) const bruce = {name : 'Bruce'}
const madeline = {name:"Madeline"}

function greet(){
    return `Hello I'm ${this.name}` // this는 어느 객체와도 연결 안되어있는 상태
}

greet.call(bruce) --> Hello I'm Bruce
greet.call(madeline) --> Hello I'm Madeline 출력 가능

# call을 사용하면 this로 사용할 객체를 넘기면서 해당 함수가 주어진 객체의 메서드인것처럼 재활용 가능

function update(birth, occu){
    this.birth = birth
    this.occu = occu
}

update.call(bruce,1949,'singer') --> bruce는 인제 {'name':bruce, 'birth':1949, 'occu':'singer'} 가 됨

# 2.apply는 매개변수를 배열로 받음 --> 매개변수를 배열로 받을 때 유용하겠네, 흔히 최대값, 최소값구할때 사용
update.apply(bruce,[1949,'singer'])
Math.min.apply(null,[2,3,-4,15,7]) --> this값에 null을 쓴 이유는 this와 관계없이 동작하기때문, 무엇을 넘기든 상관x
const newArr = [1940, 'singer']
update.call(bruce,...newArr) 도 apply랑 같은 기능 by 확산연산자를 통해
Math.min(...numArray) --> this값에 뭐를 쓰든 상관x 안써도 상관x니까 call이나 apply를 안씀

&&3.bind는 this값을 묶어주는것!
ex) const updateBruce = update.bind(bruce) --> update의 this는 인제 bruce인거야

# 스코프
스코프는 {}얘임. 가령 함수가 자신이 정의될때 접근할 수 있었던 식별자에는 접근 가능하지만, 호출시 스코프에 있는 식별자에는 접근이 불가능하데
트리처럼 계층적인 구조를 갖는 친구임. 
전역 스코프(Global Scope)는 말 그대로 전역에 선언되어있어 어느 곳에서든지 해당 변수에 접근할 수 있다는 의미이고 
지역 스코프(Local Scope)는 해당 지역에서만 접근할 수 있어 지역을 벗어난 곳에선 접근할 수 없다는 의미입니다.
 #클로저
 스코프를 함수 주변으로 좁히는것 ex) let globalFunc;
 {
     let blockVar = 'a';
     globalFunc = function(){
         console.log(blockVar)
     }
 }
 globalFunc(); --> globalFunc는 블록 안에서 값을 할당받음. 
 스코프 안에서 함수를 정의하면 해당 스코프는 더 오래 유지된데. return 값으로 사용 가능하다는거지
 일반적으로 접근할 수 없는 것에 접근할 수 있는 효과도 있다는군?
let f;
{
    let o = {note:'Safe'}
    f = function(){
        return o
    }
}
let oRef = f()
oRef.note = "Not so safe after all"

# let, const, var
var로 선언한 변수는 끌어올린다는 뜻으 hoisting이라는 메커니즘을 따름 -> 맨 위로 올림 (선언만 끌러올려)
var의 호이스팅 메커니즘때문에 다른 스코프안에서 선언한 같은 이름의 변수는 무시가됨 --> 원래는 이름만 같은 다른 공간에 저장되는데
let으로 선언하는 변수는 선언하기 전까지 존재하지 않는다는 직관적인 관점 
let과 const는 해당 스코프안에서 유효하기때문에 해당 단계마다 변수를 복사해서 관리해. 실행될 떄 독립 스코프에서 단계마다 값을 가져올 수 있지


# 즉시 호출하는 함수 표현식 : IIFE는 함수를 선언하고 즉시 실행함
(function(){
    // IIFE 바디
})() --> 즉시 실행함함수 표현식으로 익명 함수를 만들고 그 함수를 즉시 호출함.
IIFE의 장점은 내부에 있는 것들이 모두 자신만의 스코프를 가지지만, IIFE 자체는 함수이므로 그 스코프 밖으로 무언가를 내보낼 수 있다는것.
const message = (function(){
    const secret = "나는 비밀이다!"
    return `그 비밀은 바로 ${secret} 이다`
})()
console.log(message) 클로저를 만들고, 클로저에서 무언가 반환받을 떄에는 유용하게 사용

# 에러처리
Error인스턴스를 만들면서 에러 메시지를 지정 가능 const err = new Error(`invalid email`)
함수를 사용했을 떄 return 값으로 new Error를 지정햇다면 리턴값에서 Error인지를 확인하기 위해 instanceof Error 로 true,false를 체크
#예외처리 try/catch
에러를 발견하면 프로그램을 멈추는게 아니라 에러를 기록하고 계속 진행할 수 있도록 해줌
최소한 앞뒤 사정도 모르고 그냥 멈추는 일은 막을 수 있음
실행 흐름은 에러가 일어나는 즉시 cach블록으로 이동하지

# 직접에러일으키기 throw,eraise
에러는 호출스택에 쌓이게 돼, 이 호출스택을 통해 문제 해결에 유용한 정보를 얻을 수 있음
호출스택은 console.log(err.stack) 으로 확인할 수 있지!

# try..catch..finally
try블록의 코드가 HTTP(하이퍼 텍스트 트랜지션 프로토콜) 연결이나 파일 같은 일종의 '자원'을 처리할 때가 많음
프로그램에서 이 자원을 계속 가지고 있을 수는 없으므로 에러가 있든 없든 어느 시점에서는 이 자원을 해제해야함.
finally는 에러의 유무에  상관없이 반드시 호출됨

# 이터레이터 : 이터레이터는 반복가능한 이란 뜻. 책과 책갈피로 비교하는균? arr.values()가 이터레이터 선언하는것이래
이터레블한 객체는 for..of 사용 가능해서 Class도 구경 가능
# 제너레이터 : 제너레이터는 이터레이터를 사용해 자신의 실행을 제어하는 함수. 일반적인 함수는 매개변수를 받고 값을 반환하지만,
호출자는 매개변수 외에는 함수의 실해을 제어할 방법이 저혀 없음. 따라서 함수를 호출하면 그 함수가 종료될 때까지 제어권을 완전히 넘김
제너레이터는 그렇지 않아!! 
1) 함수의 실행을 개별적 단계로 나눔으로써 함수의 실행을 제어한다 이터레이터를 반환해서 next를 호출함으로써 진행
2) 실행중인 함수와 통신한다 yield를 통해
but) 제너레이터는 비동기적 프로그래밍을 지원하지 않는다는군.. 떄문에 프로미스나 콜백이랑 같이 써야 비동기적 사용 가능
#### 비동기를 써야하는 경우 1) Ajax호출을 비롯한 네트워크 요청 2)파일을 읽고쓰는 시스템작업 3)알람같은 의도적으로 시간 지연
function 키워드 뒤에 애스터리스크(별표*)를 붙임으로써 만듦 ex) function*rainbow()
# 제너레이터와 return : yield문은 설령 제너레이터의 마지막 문이 더라도 제너레이터를 끝내지 않음. 제너레이터는 return문을 사용하면 위치에 상관없이
done을 true로 하여 return 시킴. for..of 문을 사용하면 return값은 절대 출력되지 않아
제너레이터를 통해 비동기적 실행을 개선하는 방법을 배울것임.

순수함수 : 동일한 입력에 동일한 출력을 반환하는 함수 
왜 순수함수를 사용? 그렇게 하면 프로그램이 좀 더 수학과 비슷해져, 수학과 비슷해지면 테스트하기 쉽고, 이해하기 쉽고, 재사용하기 쉬워지기때문에!
순수함수가 아닌 상황에 따라 다른값을 반환하는 부수 효과가 있으면 다른 프로그램에서 사용시 분명 문제가 발생함 -> 잠재적 버그 그리고 찾기 어려움


# 즉시실행함수와 비동기코드
// setTimeout(function(){console.log('hello');},1500)
루프 안에서 즉시실행하지 않고 그냥 함수를 선언한다면, callback으로 선언한 함수는 전혀 호출되지 않아 -> 루프가 끝나고 실행돼
var i 이든 let이든 
##################매우 중요한 사실. 콜백은 자신을 선언한 스코프에 있는것에 접근할 수 있음 #####################################
따라서 i는 for문 block밖에서 선언됐기 때문에 콜백의 스코프에 있는 i값은 밖에있는 i값과 같은 값인 -1이 되고
만약 for문안에 let i=5라고 했으면 같은 블록스코프안에 있는 i값에 접근할 수 있게 되어 순서대로 값을 받을 수 있게 돼
for(i=5; i>=0; i--){ // for루프가 실행을 마치고 i 값이 -1이 된 후에 callback이 실행돼
    (function(j){ // 매개변수로 들어올 값의 이름은 j라고 하겠으
        setTimeout(function(){
            console.log(j===0? "go":j);
        },(5-j)*1000)
    })(i) // 익명의 즉시 실행함수로 실행될 값은 i임
}

# 커링
함수를 변수로 선언할 수 있으므로 여러개의 매개변수를 받는 함수를 한개의 매개변수만 받는 함수로의 변형

# 비동기처리
콜백과 프로미스는 맛집으로 비유가 가능하다. 콜백은 예약 장부에 내 전화번호를 적어서 나를 부를 수 있는 수단을 주인장한테 전달해줘서 부를 수 있도록
프로미스는 주인장이 나한테 진동벨을 줘서 자리가 나면 내가 알 수 있도록 해주는 방식이다.

콜백함수는 일반적으로 다른 함수에 넘기거나 객체의 프로퍼티로 사용됨 setTimeout vs setInterval은 주기마다 실행하고 clearInterval을 만나기전까지 멈추지않아
const start = new Date()
let i = 0;

const intervalId = setInterval(function(){
    let now = new Date()
    if(now.getMinutes() !== start.getMinutes() || ++i > 10){
        return clearInterval(intervalId) // setInterval은 중단을 시킨때 clearInterval을 사용한다했는데 매개변수로 선언한 변수를 주면 끝나.
    }
    console.log(`${i}:${now}`);
},5000)

# callback 지옥
콜백은 한번에 한가지의 처리만 가능하기때문에 한번에 여러가지의 오류처리를 하기 위해서는 여러개의 콜백을 사용해야함
중괄호로 둘러싸여 끝없이 중첩된 함수는 가독성-유지보수 면에서 매우 안좋음
또한 try...catch 블록은 같은 함수 안에서만 동작하기 때문에 더 깊은 블록에서 err를 호출한다고 해서 catch로 넘어가지 않아 
때문에 Promise가 등장했다고 하는군
# Promise의 등장
Promise는 콜백의 단점을 해결하려는 시도 속에서 만들어졌음 => 안전하고 관리하기 쉬운 코드를 만들 수 있음
콜백을 대체하는 것은 아님. 프로미스에서도 콜백은 사용 돼. 대신 예측 가능한 패턴으로 만들어지고, 콜백만 사용했을 떄 엉뚱한 현상이나 버그를 다소 해결함
프로미스 기반 비동기적 함수를 호출하면 그 함수는 Promise인스턴스를 반환함. 프로미스는 성공, 실패 단 두가지 뿐이므로 확인이 매우 쉬움
성공, 실패 값을 리턴하면 그 프로미스를 결정됐다(Settled)라고 함. 프로미스는 호출기임. 다른 함수에서 처리하게 하고 싶으면 넘기기만 하면 돼
마치 음식점에서 받은 예약 호출기를 친구에게 맡기는 것과 비슷하게 예약한 인원이 떄맞춰 오기만 한다면, 음식점은 손님을 받음/호출기가 누구에게 있던

function countDown(seconds){
    return new Promise(function(resolve,reject){
        for(let i=seconds; i>=0;i--){
            setTimeout(function(){
                if(i>0) console.log(i + '...')
                else resolve(console.log("GO"))
            },(seconds-i)*1000)
        }
    })
}


# 날짜 구성을 사용하기 위해서는 Moment.js를 사용하래 node로 설치해도 되고 CDN(Content Delivery Network)로 script를 불러와도 돼 - 모질라에서 확인
# Math관련 수학 관련
고정 소수점 => x.toFixed(3) : 소수점 3개까지 확인, 매개변수 n 에 따라 소수점 개수 정해짐
제곱 : Math.pow(x,y) : x**y
제곱근 : Math.sqrt(x) == Math.pow(x,0.5)
절대값 : Math.abs(x)
버림 : Math.floor(x)
그냥 소수점 삭제 : Math.trunc(x)
반올림 : Math.round(x)
최대, 최소 : Math.min Math.max

## 정규 표현식 : 이메일 주소나 URL, 전화번호처럼 보이는 문자열을 찾을떈 정규표현식을 잘 알아야함
검색 알고리즘에 많이 사용되나봄

## DOM 문서 객체 모델
Node객체는 트리 구조로 구성 돼 parentNode랑 childNodes 프로퍼티, 자신에 대한 nodeName과 nodeType 프로퍼티가 있음
getElementById, getElementsByClassName, getElementsByTagName ==> ID는 유일하기떄문에 s가 안붙어 나머진 해당되는 요소들을 반환해
%%%%%%%%%%%%%%%querySelector이랑 querySelectorAll은 CSS선택자를 사용해서 요소를 찾는 메서드임. CSS선택자는 p, div같은 요소이름
, ID,class,class의 조합 등 다양한방식으로 사용되서 get메서드보다 더 많이 사용된다

모든 요소에는 textContent와 innerHTML이 있는데 textContent는 HTML태그를 모두 제거하고 순수한 텍스트 데이터만 제공
innerHTML은 HTML태그를 그대로 제공함
jQuery는 text와 html으로 관리하지 $('p').text('hello this is change') // $('p').html('<h1>hello</h1>') 형식 가능

# 새 DOM요소 만들기 DOM이 없다 --> HTML이 없다
document.createElement('p')  처럼 동적으로 DOM 노드를 생성할 수 있음
생성한 요소는 const parent = document.getElementById('content') 에서 parent.insertBefore(p1, para1) 1은 새로 만든 애, 2는 어떤애 앞에 넣을것인지
parent.appendChild(p1) 은 parent의 요소에 가장 밑에 추가해줌
요소 <p>태그 안에 동적으로 class를 추가시켜줄 수 있는데 모든 요소에는 클래스를 나열하는 classList프로퍼티가 있음
p.classList.add('highlight') 로 highlight의 css를 먹일 수 있음
클래스를 제거할때는 classList.remove()를 사용해서 제거해

# 코어 모듈, 파일 모듈, npm 모듈
코어 모듈은 fs나 os처럼 노드 자체에서 제공하는 모듈
파일모듈은 module.exports 에 할당되는 파일 (**.js파일같은)을 만들고 그 파일을 불러오는것
npm모듈은 특별한 디렉터리 node_modules npm init하면 생성되는 애들
require함수를 사용하면 노드는 함수의 매개변수를 보고 어떤 타입인지를 판단함

# 모듈이란? 
모듈이란 **여러 기능들에 관한 코드가 모여있는 하나의 파일**로 다음과 같은 것들을 위해 사용된다
- 유지보수성 : 기능들이 모듈화가 잘 되어있다면, 의존성을 그만큼 줄일 수 있기 때문에 어떤 기능을 개선한다거나 수정할 떄 훨씬 편하게 할 수 있다
- 네임스페이스화 : 자바스크립트에서 전역변수는 전역공간을 가지기 때문에 코드의 양이 많아질수록 겹치는 네임스페이스가 많아질 수 있다. 그러나 모듈로 분리하면 모듈만의 네임스페이스를 갖기 때문에 그 문제가 해결된다.
- 재사용성 : 똑같은 코드를 반복하지 않고 모듈로 분리시켜서 필요할 때마다 사용할 수 있다. 

이러한 장점들을 살리기 위해서 모듈 개념이 필요했고, 자바스크립트에선 모듈을 개발하기 위한 여러가지 시도들이 있었다.
CommonJS, AMD, UMD, 및 ES6등 각각의 특징과 사용법을 알아보자

# CommonJS
다른 모듈을 사용할 때는 require을, 모듈을 해당 스코프 밖으로 보낼 때에는 module.exports를 사용하는 방식으로, Node.js에서 현재 이 방식을 사용하고 있다. 

```
[a.js]
const printHelloWorld = () => {
  console.log('Hello Wolrd');
};

module.exports = {
  printHelloWorld
};
[b.js]
const func = require('./a.js'); // 같은 디렉토리에 있다고 가정
func.printHelloWorld();
```

여기서 module.exports 의 module 은 현재 모듈에 대한 정보를 갖고 있는 객체이다. 이는 예약어이며 그 안에 id , path , parent 등의 속성이 있고 exports 객체를 가지고 있다.

exports vs module.exports
module.exports 외에도 exports 를 사용하기도 하는데 이 관계에 대해서 명확히 이해하고 있어야 한다. 정리하자면 아래와 같다.

- module.exports 는 빈 객체를 참조한다.
- exports 는 module.exports 를 참조한다.
- require 는 항상 module.exports 를 리턴받는다.
즉, 함수를 모듈 밖으로 내보내고자 할 때는 위에 예시에서 2가지 모두 사용할 수 있다.

여기서 눈여겨봐야될 것은 default 의 유무인데 export 를 사용할 때는 named export 와 default export 를 사용할 수 있다. 단, default export는 모듈 내에서 한번만 사용할 수 있고 named export는 여러번 사용할 수 있다는 것이다. 그렇게 default export로 내보내면 import 에선 내보낸 이름 그대로 바로 사용할 수 있지만, named export로 내보내면 {} 로 묶어서 불러와야 한다. 이것이 기본적인 사용법이고 별칭(alias)을 as 로 주어서 다른 이름으로 사용할 수도 있고 * 와일드카드를 사용하여 한번에 불러오거나 내보낼 수도 있다. 이런 여러가지 변형기법의 사용은 
<a href="https://velog.io/@doondoony/JavaScript-Module-System#-es6-modulesesm">여기 를 참고하자.</a>
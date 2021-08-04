// 다중상속 -> 어떤 클래스에서 두개의 슈퍼클래스, 두개의 슈퍼클래스는 모두 같은 이름의 메서드가 있다면
// 자식 클래스는 둘 중 어느 클래스의 메서드를 쓸것인가??

// 다중상속을 지원하지 않는 언어는 Interface 개념을 도입해서 이런 상황을 대처함

// 자바스크립트는 다중상속의 문제에 대한 해답 : Mixin 믹스인 제공

class InsurancePolicy(){}

function makeInsurable(o){
    o.addInsurancePolicy = function(p){this.insurancePolicy = p}
    o.getInsurancePolicy = function(){return this.insurancePolicy;}
    o.isInsured = function(){return !!this.insurancePolicy}
}

class Vehicle{
    constructor(){
        this.passengers = []
        console.log("Vehicle created")
    }
    addPassenger(p){
        this.passengers.push(p)
    }
}

class Car extends Vehicle{
    constructor(){
        super()
        console.log("Car created");
    }
    deployAirbags(){
        console.log("BWOOSH!!");
    }
}

/* const car1 = new Car()
makeInsurable(car1) 
car1.addInsurancePolicy(new InsurancePolicy()) */ //이 방법은 모든 자동차에서 makeInsurable을 호출해야함

makeInsurable(Car.prototype) // Car클래스에 새로운 메서드들을 추가해줌 -> 자동차회사, 보험회사가 따로 작업해도 되게
const car1 = new Car()
car1.addInsurancePolicy(new InsurancePolicy)
console.log(car1);


// Symbol을 사용하면 같은 이름의 메서드의 충돌을 방지할 수 있데
// 가령 자동차회사에서 자신들이 만든 메서드들과 충돌할까봐 보험회사한테는 키를 모두 심볼로 사용해달라고 요청해서 방지
// Symbol은 유일한 토큰을 나타내기 위해 ES6에서 도입한 새 데이터 타입

const ADD_POLICY = Symbol()
const GET_POLICY = Symbol()
const IS_INSURED = Symbol()
const _POLICY = Symbol()
function makeInsurable(o){
    o[ADD_POLICY] = function(p){this[_POLICY] = p}
    o[GET_POLICY] = function(){return this[_POLICY]}
    o[IS_INSURED] = function(){return !!this[_POLICY]}
}
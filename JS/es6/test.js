class Car{
    constructor(brand,model){
        this.brand = brand
        this.model = model
        this._userGears = ['P','N','R','D'] // 밑줄이 붙은 프로퍼티 : 가짜 접근 제한
        this._userGear = this._userGears[0] //default setting
    }

    get userGear(){return this._userGear}
    set userGear(value){
        if(this._userGear.indexOf(value) < 0){
            throw new Error(`Invalid gear: ${value}`)
        }
        this._userGear = value
    }
    shift(gear){// popleft가 아니라 새로운 func를 생성해준건데 이름이 같을뿐
        if(this.userGears.indexOf(gear) < 0){ // this 키워드는 의도한 목적, 즉 메서드를 호출한 인스턴스를 가리키는 목적으로 쓰임
            throw new Error(`Invalid gear: ${gear}`) // 일종의 플레이스홀더로 생각
        }
        this.userGear = gear
    } 
}

const car1 = new Car('Teslar','Model S'); // 새 인스턴스를 생성함
const car2 = new Car('Mazda', '3i');
console.log(car1.userGear)
car1.shift('X')
console.log(car1);

// car1 객체에는 shift메서드가 없지만, car1.shift('D')를 호출하면 실행 됨
// car1의 프로토타입인 Car에서 shift를 찾았기 때문 ==> 동적 디스패치
// car1이 shift라는 메서드를 추가하면 더이상 프로토타입의 shift를 사용하지 않고 만든 걸 사용
// 프로토타입의 데이터 프로퍼티를 수정하는것은 상속받은 모든 객체가 바뀜 --> 개개인을 바꾸는 걸 추천함
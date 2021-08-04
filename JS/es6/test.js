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
    // shift(gear){// popleft가 아니라 새로운 func를 생성해준건데 이름이 같을뿐
    //     if(this.userGears.indexOf(gear) < 0){ // this 키워드는 의도한 목적, 즉 메서드를 호출한 인스턴스를 가리키는 목적으로 쓰임
    //         throw new Error(`Invalid gear: ${gear}`) // 일종의 플레이스홀더로 생각
    //     }
    //     this.userGear = gear
    // } 
}

const car1 = new Car('Teslar','Model S'); // 새 인스턴스를 생성함
const car2 = new Car('Mazda', '3i');
console.log(car1.userGear)


// car1 객체에는 shift메서드가 없지만, car1.shift('D')를 호출하면 실행 됨
// car1의 프로토타입인 Car에서 shift를 찾았기 때문 ==> 동적 디스패치
// car1이 shift라는 메서드를 추가하면 더이상 프로토타입의 shift를 사용하지 않고 만든 걸 사용
// 프로토타입의 데이터 프로퍼티를 수정하는것은 상속받은 모든 객체가 바뀜 --> 개개인을 바꾸는 걸 추천함

class Gar{
    static getNextVin(){
        return Gar.nextVin++ // this.nextVin++ 라고 써도 되지만, Gar를 앞에 쓰면 정적 메서드라는 점을 상기하기 쉬움
    }

    constructor(brand, model){
        this.brand = brand
        this.model = model
        this.vin = Gar.getNextVin()
    }
    static areSimilar(car1,car2){ //브랜드가 같은지
        return car1.brand === car2.brand && car1.model === car2.model
    }
    static areSame(car1,car2){ //Vin은 차량 식별번호!!
        return car1.vin === car2.vin
    }
}

Gar.nextVin = 0 // Class Gar의 속성을 추가시킴

const gal1 = new Gar('Teslar', 'S')
const gal2 = new Gar('Mazda', '3')
const gal3 = new Gar('Mazda','3')

console.log(gal1.vin);
console.log(gal2.vin);
console.log(gal3.vin);

console.log(Gar.areSame(gal1,gal2));
console.log(Gar.areSame(gal2,gal3));

class Super{
    constructor(){
        this.name = 'Super'
        this.isSuper = true
    }
}

Super.prototype.sneaky = 'not Recommended'

class Sub extends Super{
    constructor(){
        super()
        this.name = 'Sub'
        this.isSub = true
    }
}

const obj = new Sub()

for(let p in obj){
    console.log(`${p}: ${obj[p]} ` + (obj.hasOwnProperty(p)? '':'(inherited)'));

}

console.log(Object.keys(obj));

const bbj = new Super()

console.log(Object.keys(bbj).toString());

const arr = ['hello','bye','seeyou'];
const it = arr.values();
// 가짜 접근제한자가 아니라 진짜 접근 제한자 WeakMap
// 프로퍼티를 꼭 보호해야한다면 스코프를 이용해 보호
// 즉시 호출하는 함수 표현식을 사용해서 WeakMap을 클로저로 감싸고 바깥에서 접근할 수 업게 했음. WeakMap은 클래스 외부에서 접근하면 안되는 프로퍼티를 안전하게 보장

const Car = (function(){ // 클로저로 감쌈
    const carProps = new WeakMap()

    class Car{
        constructor(brand,model){
            this.brand = brand
            this.model = model
            this._userGears = ['P','N','R','D']
            carProps.set(this,{userGear:this._userGears[0]}) // WeakMap사용부분
        }
    
    get userGear(){return carProps.get(this).userGear}
    set userGear(value){
        if(this._userGear.indexOf(value) < 0){
            throw new Error(`Invalid gear: ${value}`)
        }
        this._userGear = value
    }

    shift(gear){this.userGear = gear}
    }

    return Car
})

const car1 = new Car()

car1.Car('Teslar','Model S')

console.log(car1);
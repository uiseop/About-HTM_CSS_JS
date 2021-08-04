// 객체지향 언어에서 여러 슈퍼크래스의 멤버인 인스턴스를 가리키는 말 --> 자식 속성들 (상속받은애들)
// 클래스의 메서드를 보면서 해당 인스턴스는 어떤 클래스의 인스턴스인지 유추가 대략적으로 가능해
// 보통 instanceof를 사용 --> car1 instanceof Car 괄호는 없네!
class Parent { ... }

class Child extends Parent { ... }

...

Parent pa = new Parent(); // 허용

Child ch = new Child();   // 허용

Parent pc = new Child();  // 허용

Child cp = new Parent();  // 오류 발생.
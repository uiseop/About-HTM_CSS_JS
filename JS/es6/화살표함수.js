// var gangwon = {
//     resorts : ['용평','평창','강촌','강릉','홍천'],
//     print : function(delay = 1000){
//         setTimeout(function(){
//             console.log(this.resorts.join(','));
//         },delay)
//     }
// }

// 위는 this가 gangwon의 객체가 아니라 window의 객체이기때문에 undefined 출력됨


var gangwon2 = {
    resorts : ['용평','평창','강촌','강릉','홍천'],
    print : function(delay = 1000){
        setTimeout(() => { // function() 대신 () => 사용 this영역이 유지됨 
            console.log(this.resorts.join(',')); // .join을 사용해 리조트 이름을 콤마로 연결함
        },delay) 
    }
}

// gangwon.print()
gangwon2.print()

// 화살표 함수는 새로운 this영역을 만들어내지 않는다 @@@@@@@@@@@@@@@@@@@@@중요@@@@@@@@@@@@@@@@@@@@@@@@
// 대신 print 프로퍼티 자체를 화살표 함수로 만들면 this는 window객체가 된다는 뜻
// print 프로퍼티는 함수이고, 함수안에서 화살표함수로 this를 불러내 현재 객체를 유지시켜야 함
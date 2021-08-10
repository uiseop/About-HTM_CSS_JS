let color_lawn = {
    title : "잔디",
    color : "#00FF00",
    rating : 0
}

const rateColor = (color,rating) => {
    return Object.assign({}, color, {rating:rating}) // Object.assign을 사용해 색의 평점을 바꿈, 복사기와 같음, 빈 객체를 받고,
    // color객체를 {}빈객체에 복사하고, 복사본에 있는 rating프로퍼티 값을 rating파라미터 값으로 바꿔줌
}

console.log(rateColor(color_lawn,5).rating);
console.log(color_lawn.rating);

const ratingColor = (color,rating) => ({// 화살표 함수의 본문에서 바로 중괄호 {}를 사용해 객체를 반환할 수 없기때문에 꼭 필요하데
    // 객체 스프레드 연산자
    // 노드나 브라우저 버전에 따라 지원 여부가 달라짐
    ...color,
    rating
})

console.log(ratingColor(color_lawn,5).rating)
console.log(color_lawn.rating)

// ---------------------------------------------------------------- //

let colorArray = [
    {title:"과격한 빨강"},
    {title:"잔디"},
    {title:"파티 핑크"}, //length 는 현재 3
]

var addColor = function(title,colors){
    colors.push({title:title}) // push는 불변함수가 아님을 알려줌
    return colors
}

console.log(addColor("매력적인 초록",colorArray).length) // addColor를 통해 length는 4가 될거야
console.log(colorArray.length)

var addingColor = (title,array) => array.concat({title}) // Array.concat을 사용하면 원본 배열은 그대로 있는거야

console.log(addingColor("매혹적인 블랙",colorArray).length)
console.log(colorArray.length)

const addingColor2 = (title,list) => [...list, {title}]

let schools = [
    {name : "동국대"},
    {name : "숭실대"},
    {name : "세종대"},
    {name : "서울대"}
  ]

const editName = (oldName, name, arr) => 
    arr.map(item => (item.name === oldName) ?  {...item, name}:item)

let updateSchools = editName("숭실대","명문대",schools)

console.log(updateSchools);

  

const colors = ['red','red','green','blue','green']

const distinctColors = colors.reduce((list,color) => (list.indexOf(color) === -1) ? [...list,color] : list ,[])

console.log(distinctColors)

const userLog = userName => message => console.log(`${userName} -> ${message}`)

const log = userLog("grandpa23")("is going up")

// -----------------------------------------------------//

// 매초 시간을 로그에 남긴다.
setInterval(logClockTime,1000)

function logClockTime(){
    // 현재 식각을 상용시로 표현하는 문자열을 만든다
    var time = getClockTime()

    // 콘솔을 지우고 시간을 로그에 남긴다.
    console.clear()
    console.log(time)
}

function getClockTime(){
    // 현재 시각을 받는다
    var date = new Date()
    var time = ''

    // 시각을 직렬화 한다
    var time = {
        hours : date.getHours(),
        minutes : date.getMinutes(),
        seconds : date.getSeconds(),
        ampm : 'AM'
    }

    // 상용시로 변환한다
    if(time.hours == 12){
        time.ampm = 'PM'
    }else if(time.hours > 12){
        time.ampm = 'PM',
        time.hours -= 12
    }

    // 시간을 2글자로 만들기 위해 앞에 0을 붙인다.
    if(time.hours < 10){
        time.hours = "0" + time.hours
    }
    if(time.minutes < 10){
        time.minutes = '0' + time.minutes
    }
    if(time.seconds < 10){
        time.seconds = '0' + time.seconds
    }

    return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`
}

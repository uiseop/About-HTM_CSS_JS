const main = document.querySelector("#main");
const qna = document.querySelector("#qna"); 
const endPoint = 12;
const result = document.querySelector("#result");
const select = [0,0,0,0,0,0,0,0,0,0,0,0];

function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    // createElement는 지정한 tagName의 html요소를 만들어 반환
    var answer = document.createElement('button');
    // 동적으로 생성한 버튼에다 클래스명을 생성함 // 이미 있으면 무시 // remove 하면 클래스명 제거
    answer.classList.add('answerList');
    // 클래스 명들은 하나씩 추가해야함. 한번에 추가하면 안먹음 why??
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
            
        }
        setTimeout(()=>{
            var target = qnaList[qIdx].a[idx].type;
            // console.log(target);
            for(let j=0; j < target.length; j++){
                select[target[j]] += 1;
            }

            for(let i=0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },
        450)
        
    })
}
function calResult(){

    var result = select.indexOf(Math.max(...select));

    return result;
}

function setResult(){
    let point = calResult();
    const resultName = document.querySelector(".resultName");
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
    // main.style.display = "none";
    // qna.style.display = "block";
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        },450)
        let qIdx = 0;
        goNext(qIdx);
    },450);
    setResult();
}

function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
        return
    }
    // class는 . id는 #
    var q = document.querySelector(".qBox");
    
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx + 1) + '%';

}
function begin(){
    // main.style.display = "none";
    // qna.style.display = "block";
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block"
        },450)
        let qIdx = 0;
        goNext(qIdx);
    },450);
    
}
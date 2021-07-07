const main = document.querySelector("#main");
const qna = document.querySelector("#qna"); 


function addAnswer(answerText, qIdx){
    var a = document.querySelector('.answerBox');
    // createElement는 지정한 tagName의 html요소를 만들어 반환
    var answer = document.createElement('button');
    // 동적으로 생성한 버튼에다 클래스명을 생성함 // 이미 있으면 무시 // remove 하면 클래스명 제거
    answer.classList.add('answerList');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.display = 'none';
        }
        goNext(++qIdx);
    })
}

function goNext(qIdx){
    // class는 . id는 #
    var q = document.querySelector(".qBox");
    
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx);
    }
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
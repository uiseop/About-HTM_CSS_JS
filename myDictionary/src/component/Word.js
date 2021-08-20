import {useState} from 'react'
export default function Word({word:w}) {
    const [word, setWord] = useState(w)
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone)

    function toggleShow(){
        setIsShow(!isShow)
    }
    function toggleDone(){
        // setIsDone(!isDone)
        fetch(`http://localhost:3001/words/${word.id}`,{
            method : 'PUT',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({ // Json을 문자열로 바꿔주기 위해서 이렇게 바꿔줌
                ...word,
                isDone : !isDone
            })

        })
        .then(res => {
            if(res.ok){
                setIsDone(!isDone)
            }
        })
    }

    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`,{
            method:'DELETE'})
            .then(res=>{
                if(res.ok){
                    setWord({id:0})
                }
            })
        }
    }

    if(word.id === 0){
        return null // null을 표시하면 아무것도 return하지 않아 해당 단어는
    }
  return (
    <tr className={isDone?'off':''}>
      <td>
        <input type="checkbox" checked={isDone}
        onChange={toggleDone}/>
      </td>
      <td onClick={toggleDone}>{word.eng}</td>
      <td onClick={toggleDone}>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow? '숨기기' : '보기'}</button>
        <button className="btn_del" onClick={del}>삭제</button>
      </td>
    </tr>
  );
}

import { useHistory } from "react-router-dom"
import useFetch from "../hooks/useFetch"

export default function CreateDay(){
    const history = useHistory()

    const days = useFetch(`http://localhost:3001/days`)

    function addDay(){
        fetch(`http://localhost:3001/days/`,{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({ // Json을 문자열로 바꿔주기 위해서 이렇게 바꿔줌
                day:days.length+1
            })

        })
        .then(res => {
            if(res.ok){
                alert('생성되었습니다')
                history.push(`/day/${days.length+1}`)
            }
        })
    }

    return(
        <div>
            <h3>현재 일수 : {days.length}</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    )
}
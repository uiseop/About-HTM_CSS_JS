import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
export default function DayList() {
const [days,setDays] = useState([])

useEffect( () => {
  fetch('http://localhost:3001/days') // Promise가 반환됨 - 비동기 처리
  .then(res => { // 여기서 response는 http 응답이고 실제 json이 아니기에 json 매소드를 사용해
    return res.json() // 프로미스를 반환해
  })
  .then(data => {
    setDays(data)
  })
},[])
  return (
    <div className="daylist">
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link></li>
        ))}
      </ul>
    </div>
  );
}

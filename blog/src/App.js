import './App.css';
import {useState} from 'react'
import Posts from './components/Posts';

function App() {

  let [title,setTitle] = useState(['강남 우동 맛집', '강남 홍차 맛집', '강남 왁싱 맛집'])
  let [date,setDate] = useState(['21년10월6일', '20년12월19일', '20년8월29일'])

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <Posts title={title[0]} date={date[0]}/>
      <Posts title={title[1]} date={date[1]}/>
      <Posts title={title[2]} date={date[2]}/>
    </div>
  );
}

export default App;

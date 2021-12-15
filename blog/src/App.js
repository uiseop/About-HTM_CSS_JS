import "./App.css";
import { useState } from "react";
import Posts from "./components/Posts";

function App() {
  let [title, setTitle] = useState([
    "강남 우동 맛집",
    "강남 홍차 맛집",
    "강남 왁싱 맛집",
  ]);
  let [date, setDate] = useState([
    "21년10월6일",
    "20년12월19일",
    "20년8월29일",
  ]);
  let [like, setLike] = useState(0);

  function changeTitle() {
    let newArray = Array.from(title);
    newArray[0] = "여자코트 추천";
    setTitle(newArray);
  }

  function addLike() {
    setLike(like + 1);
  }

  function orderby() {
    let orderArray = Array.from(title);
    orderArray.sort();
    setTitle(orderArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}>버튼</button>
      <button onClick={orderby}>정렬</button>
      <div className="list">
        <h3>
          {title[0]} <span onClick={addLike}>👍</span>
          {like}
        </h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>
          {title[1]} <span onClick={addLike}>👍</span>
          {like}
        </h3>
        <p>2월 15일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>
          {title[2]} <span onClick={addLike}>👍</span>
          {like}
        </h3>
        <p>2월 11일 발행</p>
        <hr />
      </div>

      <Modal/>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

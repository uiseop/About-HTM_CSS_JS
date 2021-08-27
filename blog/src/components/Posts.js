import { useState } from "react";

export default function Posts(props) {
  let title = props.title;
  let date = props.date;
  return (
    <div className="post">
      <div className="header">
        {/* 데이터 바인딩 */}
        <h1>{title}</h1>
      </div>
      <div className="body">
        <h1>날짜 : {date}</h1>
      </div>
      <hr />
    </div>
  );
}

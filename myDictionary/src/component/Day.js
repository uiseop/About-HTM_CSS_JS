// import data from "../db/data.json";
import { useParams } from "react-router";
import {useState, useEffect} from 'react'
import Word from "./Word";
import useFetch from "../hooks/useFetch";
export default function Day() {
  const dayParam = useParams().day
  const words = useFetch(`http://localhost:3001/words?day=${dayParam}`)
  // const wordsList = data.words.filter((word) => word.day === Number(dayParam));
  // const [words, setWords] = useState([])
  // useEffect(()=>{
  //   fetch(`http://localhost:3001/words?day=${dayParam}`)
  //   .then(res =>{
  //     return res.json()
  //   })
  //   .then(data =>{
  //     setWords(data)
  //   })
  
  return (
    <div className="wordsz">
      <h1>Day {dayParam}</h1>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id}></Word>
          ))}
        </tbody>
      </table>
    </div>
  );
}

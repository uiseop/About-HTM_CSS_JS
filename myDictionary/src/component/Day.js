import data from "../db/data.json";
import { useParams } from "react-router";
import Word from "./Word";
export default function Day() {
  const dayParam = useParams().day
  const wordsList = data.words.filter((word) => word.day === Number(dayParam));

  
  return (
    <div className="wordsz">
      <h1>Day {dayParam}</h1>
      <table>
        <tbody>
          {wordsList.map((word) => (
            <Word word={word} key={word.id}></Word>
          ))}
        </tbody>
      </table>
    </div>
  );
}

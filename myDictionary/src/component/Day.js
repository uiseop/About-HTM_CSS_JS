import data from "../db/data.json";

export default function Day() {
  return (
    <div className="wordsz">
      <table>
        <tbody>
          {data.words.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

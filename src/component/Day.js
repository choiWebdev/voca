import { Link, useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
  // 파라미터로 받아온 일수 저장
  const day = useParams().day;

  // 현재 일수에 해당하는 단어들
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  
  // 현재 등록된 일수
  const createdDays = useFetch(`http://localhost:3001/days`);

  return (
    <>
      <h2 className="day_title">Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
      <div className="day_nav">
        {/* 첫째날 제외, 전날로 이동 */}
        {day !== "1" && (
          <Link 
            to={`/day/${Number(day) - 1}`} 
            className="btn_day day_prev"
          >
              Day {Number(day) - 1}
          </Link>
        )}
        {/* 마지막 날 제외, 다음날로 이동 */}
        {Number(day) !== createdDays.length && (
          <Link 
            to={`/day/${Number(day) + 1}`} 
            className="btn_day day_next"
          >
            Day {Number(day) + 1}
          </Link>
        )}
      </div>
    </>
  );
}

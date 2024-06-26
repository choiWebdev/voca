import { useState } from "react";

export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    // setIsDone(!isDone)
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  if (word.id === 0) {
    return null;
  }

  function del() {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td className="td_chk">
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td className="td_eng">{word.eng}</td>
      <td className="td_kor">{isShow && word.kor}</td>
      <td className="td_btn">
        <div className="btn_wrap">
          <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
          <button className="btn_del" onClick={del}>
            삭제
          </button>
        </div>
      </td>
    </tr>
  );
}

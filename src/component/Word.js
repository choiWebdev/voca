import { useState } from "react";

export default function Word({word}) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow)
    }

    function toggleDone(){
        setIsDone(!isDone)
    }

    return (
        <tr className={isDone ? 'off' : ''}>
            <td className="td_chk">
                <input type="checkbox" checked={isDone} onChange={toggleDone} />
            </td>
            <td className="td_eng">{word.eng}</td>
            <td className="td_kor">{isShow && word.kor}</td>
            <td className="td_btn">
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    );
};

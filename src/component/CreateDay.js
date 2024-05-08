import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay(params) {
    const days = useFetch('http://localhost:3001/days');
    const history = useNavigate();

    function addDay(){
        fetch(`http://localhost:3001/days`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                day: days.length + 1
            })
        }).then(res => {
            if(res.ok){
                alert('일수 추가가 완료 되었습니다.');
                history(`/`);
            }
        })
    }

    return (
        <>
            <h3>현재 일수 : {days.length}</h3>
            <button onClick={addDay} className="btn_save">Day 추가</button>
        </>
    );
};

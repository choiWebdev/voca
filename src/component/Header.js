import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="header">
            <h1 id="logo">
                <Link to="/">토익 영단어(고급)</Link>
            </h1>
            <nav className="menu">
                <Link to="/create_word" className="link">단어 추가</Link>
                <Link to="/create_day" className="link">Day 추가</Link>
            </nav>
        </div>
    );
}
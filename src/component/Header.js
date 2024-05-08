import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="header">
            <h1 className="logo">
                <Link to="/">토익 영단어(고급)</Link>
            </h1>
            <nav className="menu">
                <a className="link" href="#x">단어 추가</a>
                <a className="link" href="#x">Day 추가</a>
            </nav>
        </div>
    );
}
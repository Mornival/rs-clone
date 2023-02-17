import './Header.scss';
import logo from './img/logo.png';
import loupeimg from './img/loupe.png';
import filter from './img/filter.png';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import urlContext from "../../context/historyURL";

export function Header() {
    const {setUrl} = useContext(urlContext);
    const blockSearch = document.querySelector('.block-search');
    const tringle = document.querySelector('.tringle');
    const searchBtn = document.querySelector('.search-btn');
    const btnsearch = document.querySelector('.btn-search');
    const filtersearch = document.querySelector('.filter-search');
    const [text, setText] = useState<string>('');
    const location = useLocation();
    const inputText = (e: React.FormEvent<HTMLInputElement>) =>{
        setText(e.currentTarget.value);
    }
    const clickFound = () =>{
        if(location.pathname === "/vacancies" && setUrl){
            setUrl();
        }
    }
    function search() {
        blockSearch?.classList.toggle('close');
        tringle?.classList.toggle('close-tringle');
        tringle?.classList.toggle('tringle-white');
        blockSearch?.classList.toggle('block-search-hiden');
        searchBtn?.classList.toggle('hide');
        btnsearch?.classList.toggle('hide');
        filtersearch?.classList.toggle('hide');
    }

    return (
        <header className="header">
            <div className="header-wrapper container">
                <div className="left-block">
                    <div className="block-logo">
                        <Link className="logo-link" to={'/'}>
                            <img className="logo" src={logo} alt="logo" />
                            <div className="logo-text">hh.ru</div>
                        </Link>
                    </div>
                    <div className="help">
                        <p>Помощь</p>
                    </div>
                </div>
                <div className="rigth-block">
                    <div className="loupe">
                        <img className="loupe-logo" onClick={search} src={loupeimg} alt="loupe logo" />
                        <div className="tringle "></div>
                    </div>
                    <a href="/" className="add-resume">
                        <div className="btn-res">Создать резюме</div>
                    </a>
                    <a href="/" className="login">
                        <div className="btn-login">Войти</div>
                    </a>
                </div>
            </div>
            <div className="block-search">
                <div className="search-wrapper">
                    <div className="search search-btn">
                        <input className="search-inpute" type="text" placeholder="Профессия, должность или компания" onChange={e => inputText(e)} value={text}/>
                    </div>
                    {location.pathname === "/vacancies" && <button className="btn-search" onClick={clickFound}>Найти</button>}
                    {location.pathname !== "/vacancies" && <Link to={`/vacancies?text=${text}`}><button className="btn-search">Найти</button></Link>}
                    {location.pathname !== "/vacancies" && <Link to={`/vacancies?text=${text}`}><button className="filter-search">
                        <img className="filter-icon" src={filter} alt="" />
                    </button></Link>}
                </div>
            </div>
        </header>
    );
}

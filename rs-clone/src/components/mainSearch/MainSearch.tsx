import './mSearch.scss';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';

export function MainSearch() {
    const blockSearch = document.querySelector('.block-search');
    const tringle = document.querySelector('.tringle');
    const searchBtn = document.querySelector('.search-btn');
    const btnsearch = document.querySelector('.btn-search');
    const filtersearch = document.querySelector('.filter-search');

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
        <header className="header searchBlock">
            <div className="header-wrapper container">
                <div className="header-tittle">
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
                        
                        <a href="/" className="add-resume">
                            <div className="btn-res">Создать резюме</div>
                        </a>
                        <a href="/" className="login">
                            <div className="btn-login">Войти</div>
                        </a>
                    </div>
                </div>
                <div className="geader-desc">
                    <h1>Работа найдется для каждого</h1>
                </div>
            </div>
            
        </header>
    );
}

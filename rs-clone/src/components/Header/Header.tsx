import './Header.scss'

import logo from './img/logo.png'
import loupeimg from './img/loupe.png'
import filter from './img/filter.png'

export function Header(){
    const blockSearch = document.querySelector('.block-search')
    const tringle = document.querySelector('.tringle')
    const searchBtn = document.querySelector('.search-btn')
    const btnsearch = document.querySelector('.btn-search')
    const filtersearch = document.querySelector('.filter-search')


    function search(){
            blockSearch?.classList.toggle('close');
            tringle?.classList.toggle('close-tringle');  
            tringle?.classList.toggle('tringle-white');  
            blockSearch?.classList.toggle('block-search-hiden');
            searchBtn?.classList.toggle('hide');
            btnsearch?.classList.toggle('hide');
            filtersearch?.classList.toggle('hide');
            
            
    }

    return(
        <header className="header">
            <div className="header-wrapper container">
                <div className="left-block">
                <div className="block-logo">
                    <a className='logo-link' href="/"><img className='logo' src={logo} alt="logo" />
                        <div className="logo-text">rabota.by</div>
                    </a>
                </div>
                <div className="help"><p>Помощь</p></div>
                </div>
                <div className="rigth-block">
                    <div className="loupe">
                        <img className='loupe-logo' onClick={search} src={loupeimg} alt="loupe logo" />
                        <div className="tringle "></div>
                    </div>
                    <a href="/" className="add-resume">
                        <div className='btn-res' >Создать резюме</div>
                    </a>
                    <a href="/" className="login">
                        <div className='btn-login' >Войти</div>
                    </a>
                </div>
            </div>
            <div className="block-search">
                <div className="search-wrapper">
                    <div className="search search-btn">
                        <input className='search-inpute'  type="text" placeholder="Профессия, должность или компания"/>
                    </div>
                    <button className='btn-search'>Найти</button>
                    <button className='filter-search'>
                        <img className='filter-icon' src={filter} alt="" />
                    </button>
                </div>
            </div>
           
        </header>
    )
}

import './Header.scss'

import logo from './img/logo.png'
import loupeimg from './img/loupe.png'
import filter from './img/filter.png'

export function Header(){
    const loupe = document.querySelector('.loupe')
    const blockSearch = document.querySelector('.block-search')
    const tringle = document.querySelector('.tringle')

    loupe?.addEventListener('click', ()=> {
        console.log('hi');
        
        if (blockSearch?.className === 'block-search') {
            blockSearch?.classList.add('close');
            tringle?.classList.add('close-tringle');
            console.log('hi');
            
        } else {
            blockSearch?.classList.remove('close');
            tringle?.classList.remove('close-tringle');
        }
            // blockSearch?.classList.toggle('close');
            // tringle?.classList.toggle('close-tringle');
            // console.log('hi');
            
        
    })

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
                        <img className='loupe-logo' src={loupeimg} alt="loupe logo" />
                        <div className="tringle"></div>
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
                    <div className="search">
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

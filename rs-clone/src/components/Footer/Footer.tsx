import './Footer.scss'

import darkLogo from './img/rss.jpg'
import gitHub from './img/github.svg'

export function Footer(){
    

    return(
        <footer className='footer'>
            <div className="footer-wrapper container">
                <div className="main-block">
                    <div className="main-block-tittle">
                        <div className="footer-name-logo">RSJobs</div>
                        <div className="footer-logo"><img className='footerlogo' src={darkLogo} alt="dark logo" /></div>
                    </div>
                    {/* <div className="text">
                        <div className="text-colum1 footercolum">
                            <p>О компании</p>
                            <p>Наши вакансии</p>
                            <p>Реклама на сайте</p>
                            <p>Требования к ПО</p>
                            <p>Защита персональных данных</p>
                            <p>Безопасный HeadHunter</p>
                            <p>Этика и комплаенс</p>
                            <p>HeadHunter API</p>
                            <p>Партнерам</p>
                            <p>Инвесторам</p>
                        </div>
                        <div className="text-colum2 footercolum">
                            <p >Сервисы для соискателей</p>
                            <p>Готовое резюме</p>
                            <p>Все сервисы</p>
                            <p>Профориентация</p>
                            <p>Продвижение резюме</p>
                            <p>Хочу у вас работать</p>
                            <p>Производственный календарь</p>
                            <p>Экспертная рекомендация</p>
                        </div>
                        <div className="text-colum3 footercolum">
                            <p>Поиск сотрудников</p>
                            <p>Помощь</p>
                            <p>Пользовательское соглашение</p>
                            <p>Каталог компаний</p>
                            <p>Работа по профессиям</p>
                            <p>Работа рядом с метро</p>
                        </div>
                    </div> */}
                    <div className="links">
                        <div className="rs"><a href="https://rs.school/js/" target="_blank" rel="noreferrer"><img src="https://rs.school/images/rs_school_js.svg" alt="rsschool" /></a></div>
                        <div className="github"><a href="https://github.com/Mornival" target="_blank" rel="noreferrer"><img src={gitHub} alt="github" /></a></div>
                        <div className="github"><a href="https://github.com/thestrelchik" target="_blank" rel="noreferrer"><img src={gitHub} alt="github" /></a></div>
                        <div className="github"><a href="https://github.com/SergeiKudlai" target="_blank" rel="noreferrer"><img src={gitHub} alt="github" /></a></div>
                    </div>

                </div>
                <div className="desk">
                    <div className="descCompany">© 2023 Группа компаний HeadHunter</div>
                    <div className="descCopyright">Сегодня на сайте 1082845 вакансии, 62297450 резюме, 1858475 компаний и за неделю 3293024 приглашения</div>

                </div>
            </div>
        </footer>
    )
}

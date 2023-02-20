import './company.scss';
import screen from './image/screen.png';
import screen_1 from './image/screen_1.png';
import screen_2 from './image/screen_2.png';
import screen_3 from './image/screen_3.png';
import { BtnPrevDes } from '../components/description/btnPrev';

export const ValidCompanyPage = () => {
    function getActiveImage() {
        const box = document.querySelector('.shadow-block') as HTMLElement;

        box.style.display === '' || box.style.display !== 'block'
            ? (box.style.display = 'block')
            : (box.style.display = '');

        document.body.style.overflow === 'hidden'
            ? (document.body.style.overflow = '')
            : (document.body.style.overflow = 'hidden');
    }

    return (
        <section className="company container">
            <BtnPrevDes />

            <h1 className="company__title">Проверенный работодатель</h1>

            <ul className="company__list">
                <li className="company__item">
                    Маркировка «Компания прошла проверку на сайте» значит, что эта организация пришла на сайт искать
                    сотрудников и действительно существует. Чтобы проверить это, наши специалисты проводят процедуру
                    идентификации компании. Для этого, среди прочего, они могут попросить копии документов,
                    подтверждающие регистрацию юридического лица и фактическую деятельность.
                </li>

                <li className="company__item">
                    Это не всегда нужно, но такое право у наших специалистов есть. Отсутствие маркировки автоматически
                    не делает компанию подозрительной: возможно, она просто не успела выслать нам документы. Однако
                    такой работодатель будет под особым вниманием у наших специалистов.
                </li>

                <li className="company__item">
                    Если вы заметили, что какая-то компания нарушает правила сайта (спамит, грубит, пытается что-то
                    продать) – не стесняйтесь сообщить нам об этом.
                </li>

                <li className="company__item">
                    Надпись «Компания прошла проверку на сайте» появится при наведении курсора на галочку:
                </li>

                <li className="company__item">
                    <img
                        className="company__screen"
                        src={screen}
                        alt="пример провереной компании"
                        onClick={getActiveImage}
                    />
                </li>

                <li className="company__item">
                    <p className="company__text">Галка отображается на странице работодателя:</p>
                    <img className="company__img" src={screen_1} alt="" />
                </li>

                <li className="company__item">
                    <p className="company__text">На странице вакансии:</p>
                    <img className="company__img" src={screen_2} alt="" />
                </li>

                <li className="company__item">
                    <p className="company__text">И в поисковой выдаче:</p>
                    <img className="company__img" src={screen_3} alt="" />
                </li>
            </ul>

            <div className="shadow-block">
                <span className="shadow-block__close" onClick={getActiveImage}></span>
                <img
                    className="shadow-block__img"
                    src={screen}
                    alt="пример провереной компании"
                    onClick={getActiveImage}
                />
            </div>
        </section>
    );
};

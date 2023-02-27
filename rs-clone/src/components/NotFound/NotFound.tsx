import './NotFoundStyle.scss';
import logo from './img/logo.png';
import man from './img/man__min.png';
import { Link } from 'react-router-dom';

export function NotFoundBlock() {
    return (
        <div className="not-found">
            <Link className="not-found__logo" to={'./'}>
                <img src={logo} alt="logo" />
            </Link>
            <div className="notfound-desc">
                <div className="text">
                    <div className="text-tittle">
                        <p>Ошибка 404</p>
                    </div>
                    <div className="text-desc">
                        <p>
                            Что-то пошло не так. Возможно, вы ошиблись, набирая адрес в строке браузера — так бывает.
                            Если вы уверены, что адрес набран верно, то страница, скорее всего, была удалена и ее больше
                            нет.
                        </p>
                    </div>
                    <div className="text-info">
                        <p>
                            Но не отчаивайтесь! Смело обращайтесь за помощью в{' '}
                            <Link className="blue" to={'./'}>
                                сообщество поддержки
                            </Link>{' '}
                            или перейдите на{' '}
                            <Link className="blue" to={'./'}>
                                главную страницу
                            </Link>
                            .
                        </p>
                    </div>
                </div>
                <img src={man} alt="not found" />
            </div>
        </div>
    );
}

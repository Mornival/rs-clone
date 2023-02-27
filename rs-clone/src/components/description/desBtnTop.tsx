import { IData } from '../../types/interfaces';
import { useAuth } from 'hooks/use-auth';
import { useNavigate } from 'react-router-dom';

export const BtnListTop: React.FC<Pick<IData, 'contacts'> | undefined> = (props) => {
    const contactsEmployer = props?.contacts || '';
    const { isAuth } = useAuth();
    const history = useNavigate();

    function addClassInfoNandler() {
        const box = arguments[0].target.parentElement as HTMLElement;
        box.classList.toggle('active');
    }

    const arrPhone = [];
    contactsEmployer && arrPhone.push(...contactsEmployer.phones);

    const getValidEmail = (param: string) => {
        if (param) {
            return (
                <a className="top-info__email" href={`mailto:${param}`} target="_blank" rel="noreferrer">
                    {param}
                </a>
            );
        }
    };

    function getLinkHandler() {
        return isAuth ? history('/cabinet') : history('/login');
    }

    return (
        <ul className="descriptions__top-buttons">
            <li className="descriptions__top-item">
                <button className="descriptions__top-link" type="button" onClick={getLinkHandler}>
                    Откликнуться
                </button>
            </li>

            <li className="descriptions__top-item descriptions__top-item--employer">
                <div className="descriptions__top-item_info top-info">
                    {isAuth ? (
                        <>
                            <h3 className="top-info__title">
                                {contactsEmployer ? contactsEmployer.name : 'Данные не указаны'}
                            </h3>
                            <address className="top-info__address">
                                <ul className="top-info__phone-box">
                                    {arrPhone.length !== 0
                                        ? arrPhone.map(({ city, number, country, formatted }) => (
                                              <li className="top-info__phone" key={formatted}>
                                                  <a
                                                      className="top-info__phone-link"
                                                      href={`tel:${formatted}`}
                                                      target="_blank"
                                                      rel="noreferrer"
                                                  >
                                                      {`${country}-${city}-${number}`}
                                                  </a>
                                              </li>
                                          ))
                                        : ''}
                                </ul>
                                {contactsEmployer ? getValidEmail(contactsEmployer.email) : ''}
                            </address>
                        </>
                    ) : (
                        'пройдите авторизацию'
                    )}
                </div>

                <button className="descriptions__top-btn" type="button" onClick={addClassInfoNandler}>
                    Показать контакты
                </button>
            </li>
        </ul>
    );
};

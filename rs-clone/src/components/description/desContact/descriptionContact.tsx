import { IData } from '../../../types/interfaces';
import { useAuth } from 'hooks/use-auth';

export const DescriptionContact = (props: { data: IData }) => {
    const { isAuth } = useAuth();

    function addClassInfoNandler() {
        const box = arguments[0].target.parentElement as HTMLElement;
        box.classList.toggle('active');
    }

    const getValidEmail = (param: string) => {
        if (param) {
            return (
                <a className="des-contanct__email" href={`mailto:${param}`} target="_blank" rel="noreferrer">
                    {param}
                </a>
            );
        }
    };

    const contactsEmployer = props.data?.contacts || '';
    const arrPhone = [];
    contactsEmployer && arrPhone.push(...contactsEmployer.phones);

    return (
        <div className="descriptions__contact des-contanct">
            <h2 className="des-contanct__title">Контактная информация</h2>

            <div className="des-contanct__box">
                {isAuth ? (
                    <>
                        <h3 className="des-contanct__name">{contactsEmployer ? contactsEmployer.name : ''}</h3>
                        <address className="des-contanct__address">
                            <ul className="des-contanct__phone-box">
                                {arrPhone.length !== 0
                                    ? arrPhone.map(({ city, number, country, formatted }, index) => (
                                          <li
                                              className="des-contanct__phone"
                                              key={country + '-' + city + '-' + number + '-' + index}
                                          >
                                              <a
                                                  className="des-contanct__phone-link"
                                                  href={`tel:${formatted}`}
                                                  target="_blank"
                                                  rel="noreferrer"
                                              >
                                                  {`${country}-${city}-${number}`}
                                              </a>
                                          </li>
                                      ))
                                    : 'Данные не указаны'}
                            </ul>
                            {contactsEmployer ? getValidEmail(contactsEmployer.email) : ''}
                        </address>
                    </>
                ) : (
                    'пройдите авторизацию'
                )}
            </div>

            <button className="des-contanct__btn" type="button" onClick={addClassInfoNandler}>
                Показать контакты
            </button>
        </div>
    );
};

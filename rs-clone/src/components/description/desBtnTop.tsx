import { IData } from '../../types/interfaces';

export const BtnListTop: React.FC<Pick<IData, 'contacts'> | undefined> = (props) => {
    const contactsEmployer = props?.contacts || '';

    function addClassInfoNandler() {
        const box = arguments[0].target.parentElement as HTMLElement;
        box.classList.toggle('active');
    }

    const arrPhone = [];
    contactsEmployer && arrPhone.push(...contactsEmployer.phones);

    return (
        <ul className="descriptions__top-buttons">
            <li className="descriptions__top-item">
                <button className="descriptions__top-link" type="button">
                    Откликнуться
                </button>
            </li>

            <li className="descriptions__top-item descriptions__top-item--employer">
                <div className="descriptions__top-item_info top-info">
                    <h3 className="top-info__title">{contactsEmployer ? contactsEmployer.name : 'Загрузка...'}</h3>

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
                                : 'Загрузка...'}
                        </ul>
                        <a
                            className="top-info__email"
                            href={contactsEmployer ? `mailto:${contactsEmployer.email}` : ''}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {contactsEmployer ? contactsEmployer.email : 'Загрузка...'}
                        </a>
                    </address>
                </div>

                <button className="descriptions__top-btn" type="button" onClick={addClassInfoNandler}>
                    Показать контакты
                </button>
            </li>

            <li className="descriptions__top-item">
                <button className="descriptions__top-btn descriptions__top-btn--favorite" type="button">
                    <span className="sr-only">Кнопка фаворита</span>
                </button>
            </li>
        </ul>
    );
};

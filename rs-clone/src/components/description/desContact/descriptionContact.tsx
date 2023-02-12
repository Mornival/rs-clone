import { IData } from '../../../types/interfaces';
import { getRequestVacancies } from '../../../api/api';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

export const DescriptionContact = () => {
    const [state, setState] = useState<Pick<IData, 'contacts'>>();
    const { id } = useParams();

    let valid = true;

    const getVacancies = async () => {
        valid = false;
        const response = await getRequestVacancies(id);
        setState(response);
    };

    useEffect(() => {
        if (valid) getVacancies();
    }, []);

    function addClassInfoNandler() {
        const box = arguments[0].target.parentElement as HTMLElement;
        box.classList.toggle('active');
    }

    const getValidEmail = (param: string) => {
        if (param) {
            return (
                <a className="des-contanct__email" href={param} target="_blank" rel="noreferrer">
                    {param}
                </a>
            );
        }
    };

    const contactsEmployer = state?.contacts || '';
    const arrPhone = [];
    contactsEmployer && arrPhone.push(...contactsEmployer.phones);

    return (
        <div className="descriptions__contact des-contanct">
            <h2 className="des-contanct__title">Контактная информация</h2>

            <div className="des-contanct__box">
                <h3 className="des-contanct__name">{contactsEmployer ? contactsEmployer.name : 'Загрузка...'}</h3>

                <address className="des-contanct__address">
                    <ul className="des-contanct__phone-box">
                        {arrPhone.length !== 0
                            ? arrPhone.map(({ city, number, country, formatted }) => (
                                  <li className="des-contanct__phone" key={formatted}>
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
                            : 'Загрузка...'}
                    </ul>
                    {contactsEmployer ? getValidEmail(contactsEmployer.email) : 'Загрузка...'}
                </address>
            </div>

            <button className="des-contanct__btn" type="button" onClick={addClassInfoNandler}>
                Показать контакты
            </button>
        </div>
    );
};

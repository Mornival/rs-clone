import { IData } from '../../../types/interfaces';
import iconOk from './img/icon/ok.png';
import iconNotOk from './img/icon/notOk.png';
import { Link } from 'react-router-dom';

export const BrendName: React.FC<Pick<IData, 'employer'>> = (props) => {
    const { employer } = props;
    const validIcon = employer?.trusted ? iconOk : iconNotOk;
    const validText = employer?.trusted ? 'Компания прошла проверку на сайте' : 'Компания не прошла проверку на сайте';

    return (
        <div className="des-brend__title-box">
            <h2 className="des-brend__title">
                <Link to={`/employers/${employer?.id}`}>{employer ? employer.name : ''}</Link>
            </h2>
            <span
                className="des-brend__valid"
                style={{
                    backgroundImage: `url(${validIcon})`,
                }}
                title={validText}
            ></span>
        </div>
    );
};

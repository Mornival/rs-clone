import { IData } from '../../../types/interfaces';

export const BrendImg: React.FC<Pick<IData, 'employer'>> = (props) => {
    const { employer } = props;

    let validImg = '';
    let addClassImg = false;

    if (employer && employer.logo_urls !== null) {
        validImg = employer?.logo_urls[240] || employer?.logo_urls[90];
    } else {
        addClassImg = true;
    }

    return <img src={validImg} alt={employer?.name} className="des-brend__img" data-valid={addClassImg} />;
};

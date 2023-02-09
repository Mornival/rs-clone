import { IData } from '../../../types/interfaces';

export const BrendImg: React.FC<Pick<IData, 'employer'>> = (props) => {
    const { employer } = props;
    const validImg = employer?.logo_urls[240] || '';
    return <img src={validImg} alt={employer?.name} className="des-brend__img" />;
};

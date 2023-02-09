import { IData } from '../../../types/interfaces';

export const BrendAddress: React.FC<Pick<IData, 'address'>> = (props) => {
    const { address } = props;

    const city = address?.city || '';
    const street = address?.street || '';
    const building = address?.building || '';

    let validAddress = '';

    if (address) {
        validAddress = `${city}, ${street} ${building}`;
    } else if (address === null) {
        validAddress = 'Адрес не указан';
    } else {
        validAddress = 'Загрузка...';
    }
    return <span className="des-brend__address">{validAddress}</span>;
};

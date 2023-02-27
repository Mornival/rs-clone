import { IData } from '../../../types/interfaces';

export const BrendAddress: React.FC<Pick<IData, 'address'>> = (props) => {
    const { address } = props;

    const city = address?.city || '';
    const street = address?.street || '';
    const building = address?.building || '';
    const raw = address?.raw || '';

    let validAddress = '';

    if (address) {
        if (city && street && building) {
            validAddress = `${city} ${street} ${building}`;
        } else {
            validAddress = raw;
        }
    } else if (address === null) {
        validAddress = 'Адрес не указан';
    } else {
        validAddress = '';
    }
    return <span className="des-brend__address">{validAddress}</span>;
};

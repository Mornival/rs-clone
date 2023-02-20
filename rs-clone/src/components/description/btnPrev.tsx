import { useNavigate } from 'react-router-dom';
import { getTopScroll } from '../../utils/scroll';

export const BtnPrevDes = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
        getTopScroll();
    }

    return (
        <button className="descriptions__btn-prev" type="button" onClick={goBack}>
            <span className="sr-only">Кнопка назад</span>
        </button>
    );
};

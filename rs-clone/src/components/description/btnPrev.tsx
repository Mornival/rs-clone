import { useNavigate } from 'react-router-dom';

export const BtnPrevDes = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return <button className="descriptions__btn-prev" type="button" onClick={goBack}>
        <span className="sr-only">Кнопка назад</span>
    </button>;
};

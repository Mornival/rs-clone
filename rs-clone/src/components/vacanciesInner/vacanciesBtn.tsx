export const VacanciesBtn = (props: { clickBtnPages: () => void }) => {
    const { clickBtnPages } = props;

    return (
        <button className="vacancies__btn btn" type="button" onClick={clickBtnPages} style={{ display: 'none' }}>
            Обновить вакансии
        </button>
    );
};

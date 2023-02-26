
export const VacanciesFilterSelect = () => {
    return (
        <div className="vacancy-filter-line" key="Time-Date">
            {<select name="date" id="date-select">
                <option value="">За всё время</option>
                <option value="30">За месяц</option>
                <option value="7">За неделю</option>
                <option value="3">За последние 3 дня</option>
                <option value="1">За день</option>
            </select>}
        </div>
    )
}
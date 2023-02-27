import { IData } from '../../types/interfaces';
import { VacanciesSalary } from '../vacanciesInner/vacanciesSalary';
import { DesExperience } from './desExperience';
import { BtnListTop } from './desBtnTop';
import { DesTimeline } from './desTimeline';
import { DesName } from './desName';

export const DescriptionTitle = (props: { data: IData }) => (
    <div className="descriptions__top">
        <DesName param={props.data} />
        <VacanciesSalary salary={props.data?.salary} />
        <DesExperience param={props.data?.experience} />
        <DesTimeline schedule={props.data?.schedule} employment={props.data?.employment} />
        <BtnListTop contacts={props.data?.contacts} />
    </div>
);

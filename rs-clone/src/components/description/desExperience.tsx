import { IArea } from '../../types/interfaces';

export const DesExperience = (props: { param: Pick<IArea, 'id' | 'name'> | undefined }) => {
    const { param } = props;

    const setExperience = (value: any): string => {
        if (value) {
            const { id } = value;
            return id === 'noExperience' ? 'не требуется' : 'требуется';
        }
        return 'Загрузка...';
    };

    return <p className='descriptions__experience'>{`Требуемый опыт работы: ${setExperience(param)}`}</p>;
};

import { IArea } from '../../types/interfaces';

export const DesTimeline = (props: {
    employment: Pick<IArea, 'name' | 'id'> | undefined;
    schedule: Pick<IArea, 'name' | 'id'> | undefined;
}) => {
    const { employment, schedule } = props;

    const setEmployment = (
        ...value: [Pick<IArea, 'id' | 'name'> | undefined, Pick<IArea, 'id' | 'name'> | undefined]
    ) => {
        if (value[0] && value[1]) {
            const [schedule, employment] = value;
            return schedule.name + ' , ' + employment.name;
        }
    };

    return <span className="descriptions__employment">{setEmployment(employment, schedule)}</span>;
};

import { IData } from '../../types/interfaces';

export const DesName = (props: { param: IData }) => {
    const { name } = props.param;
    const setValidText = (value: string | undefined): string => (value ? value : '');
    return <h2 className="descriptions__title">{setValidText(name)}</h2>;
};

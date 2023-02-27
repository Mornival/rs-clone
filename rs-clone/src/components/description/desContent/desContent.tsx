import { IData } from '../../../types/interfaces';

export const DescriptionContent = (props: { data: IData }) => {
    let validContent = '';

    if (props.data?.branded_description) {
        validContent = props.data?.branded_description;
    } else if (props.data?.branded_description === null) {
        validContent = props.data?.description || '';
    } else {
        validContent = 'Загрузка...';
    }

    return <div className="descriptions__content" dangerouslySetInnerHTML={{ __html: validContent }}></div>;
};

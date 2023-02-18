import { IData } from '../../../types/interfaces';

export const DescriptionsSnippet = (props: { data: IData }) => {
    const { snippet } = props.data;
    const arrObj = Object.values(snippet);

    const createMarkup = (data: string) => ({ __html: data });

    return (
        <ul className="des-similiar__inner">
            {arrObj.length !== 0
                ? arrObj.map((value, index) => (
                      <li className="des-similiar__item" key={index} dangerouslySetInnerHTML={createMarkup(value)}></li>
                  ))
                : ''}
        </ul>
    );
};

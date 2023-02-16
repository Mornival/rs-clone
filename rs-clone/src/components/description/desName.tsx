export const DesName = (props: { param: string | undefined }) => {
    const { param } = props;
    const setValidText = (value: string | undefined): string => (value ? value : '');
    return <h2 className="descriptions__title">{setValidText(param)}</h2>;
};

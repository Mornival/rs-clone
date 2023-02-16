import './desBrend.scss';
import { BrendName } from './desBrendName';
import { IData } from '../../../types/interfaces';
import { BrendImg } from './desBrendImg';
import { BrendAddress } from './desBrendAddress';

export const DescriptionBrends = (props: { data: IData }) => (
    <div className="descriptions__brends des-brend">
        <BrendImg employer={props.data?.employer} />
        <BrendName employer={props.data?.employer} />
        <BrendAddress address={props.data?.address} />
    </div>
);

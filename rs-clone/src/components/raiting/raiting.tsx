import { getRandomRaiting } from '../../utils/starsRaiting';
import { IEmployer } from '../../types/interfaces';
import './raiting.scss';

export const Raiting = (props: { employer: IEmployer }) => {
    const { employer } = props;
    const randomNum = getRandomRaiting(employer).toFixed(1);

    return (
        <div className="rating">
            <div className="rating__text">{randomNum}</div>
            <div className="rating__stars">
                <div className="rating__on" style={{ width: `${(+randomNum * 100) / 5}%` }}></div>
                <div className="rating__inner">
                    <span className="rating__star"></span>
                    <span className="rating__star"></span>
                    <span className="rating__star"></span>
                    <span className="rating__star"></span>
                    <span className="rating__star"></span>
                </div>
            </div>
        </div>
    );
};

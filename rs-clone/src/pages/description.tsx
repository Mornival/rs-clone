import { DescriptionTitle } from '../components/description/descriptionTitle';
import { BtnPrevDes } from '../components/description/btnPrev';
import '../components/description/description.scss';
import { DescriptionBrends } from '../components/description/desBrends/desBrend';
import { DescriptionContent } from '../components/description/desContent/DescriptionContent';

export const DescriptionPages = () => (
    <section className="descriptions container">
        <BtnPrevDes />
        <DescriptionTitle />
        <DescriptionBrends />
        <DescriptionContent />
    </section>
);

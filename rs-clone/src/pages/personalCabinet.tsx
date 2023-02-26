import { BtnPrevDes } from 'components/description/btnPrev';

export const PersonalCabinet = () => {
    return (
        <section className="container" style={{ paddingTop: 30 + 'px' }}>
            <BtnPrevDes />

            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: -1,
                }}
            >
                <h1 style={{ textAlign: 'center', fontSize: 20 + 'px' }}>
                    Страница на доработке
                    <p style={{ fontSize: 16 + 'px' }}>приносим извнения</p>
                </h1>
            </div>
        </section>
    );
};

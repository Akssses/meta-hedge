import s from './Section4.module.css'
import lineChart from '../../../assets/images/График.svg'
import { useTranslation } from 'react-i18next';

export const Section4 = () => {
    const { t } = useTranslation('mains1');

    return (
        <section className={s.section4_block}>
            <div className={s.content}>
                <div className={s.header}>
                    <h1>{t('main-s4-h1')} <br /> <span>{t('alg')}</span></h1>
                    <p>{t('main-s4-h2')}</p>
                </div>
                <div className={s.line_block}>
                    <div className={s.lines}>
                        <div className={s.line}/>
                        <div className={s.circle}/>
                    </div>
                    <div className={s.buy_sell}>
                        <h3>Buy & Sell</h3>
                    </div>
                </div>

                <p className={s.text}>{t('main-s4-p')}</p>
            </div>
            <div className={s.line_chart}>
                <img src={lineChart} alt="" />
                <div className={s.position}>
                    <div className={s.long}>
                        <span></span>
                        <p>{t('long')}</p>
                    </div>
                    <div className={s.short}>
                        <span></span>
                        <p>{t('short')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
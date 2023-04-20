import s from './Section2.module.css'
import JPY from '../../../assets/icons/JPY.svg' 
import GBR from '../../../assets/icons/GBR.svg'
import XAU from '../../../assets/icons/XAU.svg' 
import profitCard from '../../../assets/images/Profit_Card.png'
import circle from '../../../assets/images/Circle.svg'
import { useTranslation } from 'react-i18next'

export const Section2 = () => {
    const { t } = useTranslation('mains1');

    return (
        <section className={s.section2}>
            <div className={s.content}>
                <div className={s.content_p}>
                    <p>{t('main-s2-p')}</p>
                    <div className={s.button}>
                        <h3>{t('main-s2-btn')}</h3>
                    </div>
                    <h6 className={s.welcome}>{t('main-s2-p2')}</h6>
                </div>
                <div className={s.diversification}>
                    <h3>{t('def')}</h3>
                    <div className={s.valutes}>
                        <div className={s.valute}>
                            <img src={JPY} alt="JPY" />
                            <span>{t('JPY')}</span>
                        </div>
                        <div className={s.valute}>
                            <img src={GBR} alt="GBR" />
                            <span>{t('GBR')}</span>
                        </div>
                        <div className={s.valute}>
                            <img src={XAU} alt="XAU" />
                            <span>{t('XAU')}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.cripto_blocks}>
                <img src={profitCard} alt="Profit Cards" />
            </div>
            <div className={s.glow}/>
            <img className={s.circle} src={circle} alt="circle" />
        </section>
    )
}
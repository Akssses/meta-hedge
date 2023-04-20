import s from './Section5.module.css'
import arrow from '../../../assets/images/arrow-up.svg'
import bybit from '../../../assets/icons/bybit.svg'
import roboForex from '../../../assets/icons/roboforex.svg'
import ellipse from '../../../assets/images/Ellipse.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const Section5 = () => {
    const { t } = useTranslation('mains1');

    return (
        <section className={s.section5_block}>
            <div className={s.text}>
                <p>{t('main-s5-h1')}<br /> <span>{t('main-s5-span')}</span></p>
                <div className={s.button}>
                    <img src={arrow} alt="arrow" />
                    <Link to="/solutions">
                        <p>{t('main-s5-btn')}</p>
                    </Link>
                </div>
            </div>
            <div className={s.partners_block}>
                <div className={s.ellipse}>
                    <img src={ellipse} alt="ellipse" />
                    <p>{t('partners')}</p>
                </div>
                <div className={s.partners}>
                    <div>
                        <img src={bybit} alt="bybit" />
                        <p>{t('main-s5-roboforex')}</p>
                    </div>
                    <div>
                        <img src={roboForex} alt="RoboForex" />
                        <p>{t('main-s5-bybit')}</p>
                    </div>
                </div>
            </div>
            <div className={s.glow}/>
        </section>
    )
}
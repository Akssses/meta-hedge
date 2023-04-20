import s from './Section10.module.css'
import roboforex from '../../../assets/icons/roboforex.svg'
import { useTranslation } from 'react-i18next';

export const Section10 = () => {
    const { t, i18n } = useTranslation('atombot');

    return (
        <section className={s.section10_block}>
            <div className={s.text}>
                <h1>{t('testAtomBot')} <br /> {t('onRoboForex')}</h1>
                <div className={s.roboforex}>
                    <div>
                        <span>{t('account')}:</span>
                        <h2>BETA</h2>
                    </div>
                    <img src={roboforex} alt="roboforex" />
                </div>
                <p>{t('minAmount')}:</p>
                <div className={s.balance}>
                    <h3>1 000 USDT</h3>
                    <h6>{t('onPersonalAccount')}<br /> roboforex.com</h6>
                </div>
                <button>{t('start')}</button>
            </div>
            <div className={s.statistics}>
                <div className={s.val}>
                    <p>{t('volatility')}:</p>
                    <span>{t('high')}</span>
                </div>
                <div className={s.val}>
                    <p>{t('maxLoss')}:</p>
                    <span>50%</span>
                </div>
                <div className={s.val}>
                    <p>{t('profit')}:</p>
                    <span>1000%+</span>
                </div>
                <p className={s.text_p}>{t('note1')}{t('note2')}</p>
                <div className={s.val}>
                    <p>{t('maximizeProfit')}:</p>
                    <span>{t('yes')}</span>
                </div>
            </div>
            
            <div className={s.glow}/>
        </section>
    )
}
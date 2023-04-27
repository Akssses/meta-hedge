import s from './Section2.module.css'
import roboforex from '../../../assets/icons/roboforex.svg'
import { useTranslation } from 'react-i18next';
import arrow from '../../../assets/icons/arrow-down.svg'

export const Section2 = () => {
    const { t } = useTranslation('solution');
    const personal = t('personal');

    return (
        <section className={s.section2_block}>
            <div className={s.first_block}>
                <div className={s.block2_header}>
                    <div>
                        <h3>03. BETA</h3>
                        <img src={roboforex} alt="roboforex" />
                    </div>
                    <button className={s.button}>{t('min')}</button>
                </div>
                <p className={s.rf}>{t('roboforex')}</p>
                <div className={s.block1_main}>
                    <div className={s.sum}>
                        <p>{t('min_am')}</p>
                        <span>50 000 USDT</span>
                    </div>
                    <p className={s.account} dangerouslySetInnerHTML={{__html: personal}}></p>
                    <h3 className={s.accord}>{t('view')} <img src={arrow} alt="" /></h3>
                    <a target='_blank' href="https://t.me/MetaHedge_bot" rel="noreferrer">
                        <button className={s.request_btn}>{t('btn')}</button>
                    </a>
                </div>
            </div>
            <div className={s.first_block}>
                <div className={s.block2_header}>
                    <h3>{t('ind')}</h3>
                </div>
                <div className={s.block1_main}>
                    <p className={s.text}>{t('text')}</p>
                    <p className={s.account}>{t('p')}</p>
                    <a target='_blank' href="https://t.me/MetaHedge_bot" rel="noreferrer">
                        <button className={s.request_btn}>{t('btn')}</button>
                    </a>
                </div>
            </div>
        </section>
    )
}
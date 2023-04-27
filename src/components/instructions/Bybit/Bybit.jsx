import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import arrow from '../../../assets/icons/lineArrow.svg'
import s from './Bybit.module.css'

export const Bybit = () => {
    const { t } = useTranslation('instructions')
    return (
        <section className={s.bybit_block}>
            <div className={s.nav}>
                <Link to="/">
                    <p>{t('home')}</p>
                </Link>
                <img src={arrow} alt="" />
                <p>{t('instr')}</p>
            </div>

            <div className={s.header_content}>
                <div className={s.circle}>
                    <div/>
                    <h1>{t('h1')}</h1>
                </div>
                <div className={s.header_button}>
                    <p>{t('p')}</p>
                    <a target='_blank' href="https://t.me/MetaHedge_bot" rel="noreferrer">
                        <button>{t('question_btn')}</button>
                    </a>
                </div>
            </div>

            <div className={s.box_header}>
                <h1>{t('bybit_h1')}</h1>
                <p>{t('bybit_platform')}</p>
            </div>
            <div className={s.box_grid}>
                <div className={s.box}>
                    <h3>01.</h3>
                    <p>{t('bb1')}</p>
                </div>
                <div className={s.box}>
                    <h3>02.</h3>
                    <p>{t('bb2')}</p>
                </div>
                <div className={s.box}>
                    <h3>03.</h3>
                    <p>{t('bb3')}</p>
                </div>
                <div className={s.box}>
                    <h3>04.</h3>
                    <p>{t('bb4')}</p>
                </div>
                <div className={s.box}>
                    <h3>05.</h3>
                    <p>{t('bb5')}</p>
                </div>
                <div className={s.box}>
                    <h3>06.</h3>
                    <p>{t('bb6')}</p>
                </div>
            </div>

            <div className={s.box_header}>
                <h1>{t('rf_h1')}</h1>
                <p>{t('rf_platform')}</p>
            </div>
            <div className={s.box_grid}>
                <div className={s.box}>
                    <h3>01.</h3>
                    <p>{t('rf1')}</p>
                </div>
                <div className={s.box}>
                    <h3>02.</h3>
                    <p>{t('rf2')}</p>
                </div>
                <div className={s.box}>
                    <h3>03.</h3>
                    <p>{t('rf3')}</p>
                </div>
                <div className={s.box}>
                    <h3>04.</h3>
                    <p>{t('rf4')}</p>
                </div>
                <div className={s.box}>
                    <h3>05.</h3>
                    <p>{t('rf5')}</p>
                </div>
                <div className={s.box}>
                    <h3>06.</h3>
                    <p>{t('rf6')}</p>
                </div>
            </div>

            <div className={s.header_button}>
                    <p>{t('rf_p')}</p>
                    <a target='_blank' href="https://t.me/MetaHedge_bot" rel="noreferrer">
                        <button>{t('rf_btn')}</button>
                    </a>
                </div>
        </section>
    )
}
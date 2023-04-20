import s from './Section7.module.css'
import bybit from '../../../assets/icons/bybit2.svg'
import { useTranslation } from 'react-i18next';

export const Section7 = () => {
    const { t} = useTranslation('mains7');
    return (
        <section className={s.section7_block}>
            <div className={s.header}>
                <h2>{t('h1')} <span>{t('h1_br')}</span></h2>
                <p>{t('p')}</p>
            </div>
            <div className={s.blocks}>
                <div className={s.block}>
                    <div className={s.block_header}>
                        <div>
                            <div className={s.circle}/>
                            <h1>{t('title')}</h1>
                        </div>
                        <img src={bybit} alt="bybit" />
                    </div>
                    <div className={s.stats}>
                        <div className={s.stat}>
                            <h3>{t('stat-title-1')}</h3>
                            <span>{t('stat-1')}</span>
                        </div>
                        <div className={s.stat}>
                            <h3>{t('stat-title-2')}</h3>
                            <span>20%</span>
                        </div>
                        <div className={s.stat_p}>
                            <div>
                                <h3>{t('stat-title-3')}</h3>
                                <span>60-500%</span>
                            </div>
                            <p>{t('stat-title-3p')}</p>
                        </div>
                        <div className={s.stat}>
                            <h3>{t('stat-title-4')}</h3>
                            <span>{t('stat-4')}</span>
                        </div>
                        <div className={s.stat}>
                            <div>
                                <h3>{t('stat-title-5')} <br />{t('stat-title-br')}</h3>
                                <p>{t('stat-5p')}</p>
                            </div>
                            <span>50 000 USDT</span>
                        </div>
                    </div>
                    <div className={s.block_btn}>
                        <p>{t('btn')}</p>
                    </div>
                </div>
                <div className={s.block}>
                    <div className={s.block_header}>
                        <div>
                            <div className={s.circle}/>
                            <h1>ATOM</h1>
                        </div>
                        <img src={bybit} alt="bybit" />
                    </div>
                    <div className={s.stats}>
                        <div className={s.stat}>
                            <h3>{t('stat-title-1')}</h3>
                            <span>{t('stat-1')}</span>
                        </div>
                        <div className={s.stat}>
                            <h3>{t('stat-title-2')}</h3>
                            <span>50%</span>
                        </div>
                        <div className={s.stat_p}>
                            <div>
                                <h3>{t('stat-title-3')}</h3>
                                <span>1000%+</span>
                            </div>
                            <p>{t('stat-title-3p')}</p>
                        </div>
                        <div className={s.stat}>
                            <h3>{t('stat-title-4')}</h3>
                            <span>{t('stat-4-at')}</span>
                        </div>
                        <div className={s.stat}>
                            <div>
                                <h3>{t('stat-title-5')} <br />{t('stat-title-br')}</h3>
                                <p>{t('stat-5p')}</p>
                            </div>
                            <span>20 000 USDT</span>
                        </div>
                    </div>
                    <div className={s.block_btn}>
                        <p>{t('btn')}</p>
                    </div>
                </div>
            </div>
            <div className={s.glow}/>
        </section>
    )
}
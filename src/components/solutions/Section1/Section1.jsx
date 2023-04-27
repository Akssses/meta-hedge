import s from './Section1.module.css'
import bybit from '../../../assets/icons/bybit.svg'
import arrow from '../../../assets/icons/lineArrow.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Section1 = () => {
    const { t } = useTranslation('solution');
    const personal = t('personal');

    return (
        <section className={s.choice_block}> 
            <div className={s.nav}>
                <Link to="/">
                    <p>{t('home')}</p>
                </Link>
                <img src={arrow} alt="" />
                <p>{t('solutions')}</p>
            </div>
            <header className={s.choice_header}>
                <div className={s.circle}/>
                <h1>{t('h1')} <span>{t('span')}</span></h1>
            </header>
            <div className={s.block}>
                <div className={s.left_content}>
                    <div className={s.bybit}>
                        <div className={s.button}>
                            <h3>{t('premium')}</h3>
                        </div>
                        <img src={bybit} alt="bybit" />
                    </div>
                    <div className={s.info}>
                        <div className={s.platforms}>
                            <p>{t('platform')}</p>
                            <h4>ATOM</h4>
                        </div>
                        <div className={s.sum}>
                            <p>{t('min_amount')}</p>
                            <div>
                                <span>20 000 USDT</span>
                                <h6 dangerouslySetInnerHTML={{__html: personal}} className={s.sum_p}></h6>
                            </div>
                        </div>
                    </div>
                    <a target='_blank' href="https://t.me/MetaHedge_bot" rel="noreferrer">                     
                        <div className={s.btn}><button>{t('btn')}</button></div>
                    </a>
                    <p className={s.number}>01</p>
                </div>
                

                <div className={s.statistics}>
                    <div className={s.val}>
                        <p>{t('volatil')}</p>
                        <span>{t('high')}</span>
                    </div>
                    <div className={s.val}>
                        <p>{t('max_loss')}</p>
                        <span>50%</span>
                    </div>
                    <div className={s.val}>
                        <p>{t('profit')}</p>
                        <span>1000%+</span>
                    </div>
                    <p className={s.text_p}>{t('text_p')}</p>
                    <div className={s.val}>
                        <p>{t('maximize')}</p>
                        <span>{t('yes')}</span>
                    </div>
                </div>
            </div>
            <div className={s.block}>
                <div className={s.left_content}>
                    <div className={s.bybit}>
                        <div className={s.button}>
                            <h3>{t('stabil')}</h3>
                        </div>
                        <img src={bybit} alt="bybit" />
                    </div>
                    <div className={s.info}>
                        <div className={s.platforms}>
                            <p>{t('platform')}</p>
                            <h4>{t('consr')}</h4>
                        </div>
                        <div className={s.sum}>
                            <p>{t('min_amount')}</p>
                            <div>
                                <span>50 000 USDT</span>
                                <h6 dangerouslySetInnerHTML={{__html: personal}} className={s.sum_p}></h6>
                            </div>
                        </div>
                    </div>
                    <a target='_blank' href="https://t.me/MetaHedge_bot" rel="noreferrer">
                        <div className={s.btn}><button>{t('btn')}</button></div>
                    </a>
                    <p className={s.number}>02</p>
                </div>
                

                <div className={s.statistics}>
                    <div className={s.val}>
                        <p>{t('volatil')}</p>
                        <span>{t('low')}</span>
                    </div>
                    <div className={s.val}>
                        <p>{t('max_loss')}</p>
                        <span>20%</span>
                    </div>
                    <div className={s.val}>
                        <p>{t('profit')}</p>
                        <span>60-500%</span>
                    </div>
                    <p className={s.text_p}>{t('text_p')}</p>
                    <div className={s.val}>
                        <p>{t('maximize')}</p>
                        <span>{t('no')}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
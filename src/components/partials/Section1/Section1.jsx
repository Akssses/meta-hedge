import s from './Section1.module.css'
import circles from '../../../assets/images/bg-shape.png'
import { useTranslation } from 'react-i18next';

export const Section1 = () => {
    const { t } = useTranslation('mains1');

    return (
        <section className={s.section1_block}>
            <div className={s.content}>
                <div className={s.section1_text}>
                    <p>{t('main-s1-p')}</p>
                    <h1>{t('main-s1-h1')}</h1>
                    <h2>{t('main-s1-h2')}</h2>
                </div>
                <div className={s.section1_btn}>
                    <div className={s.lines}>
                        <div className={s.line1}/>
                        <div className={s.line2}/>
                    </div>
                    <p>{t('24/7')}</p>
                    <button>{t('request-btn')}</button>
                </div>
            </div>
            <div className={s.shape_bg}>
                <img src={circles} alt="background" />
            </div>
            <div className={s.glow}/>
        </section>
    )
}
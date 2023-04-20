import s from './Section9.module.css'
import illustration from '../../../assets/images/s9-img.png'
import { useTranslation } from 'react-i18next';


export const Section9 = () => {
    const { t, i18n } = useTranslation('mains8');

    return (
        <section className={s.section9_block}>
            <div className={s.image}>
                <div className={s.glow}></div>
                <img src={illustration} alt="img" />
            </div>
            <div className={s.text}>
                <h1>{t('s9_h1')}</h1>
                <h3>{t('s9_h3')}</h3>
                <p>{t('s9_p')}</p>
                <h6 className={s.more_info}>{t('s9_inf')}</h6>
                <div className={s.button}>
                    <button>{t('btn')}</button>
                </div>
            </div>
        </section>
    )
}
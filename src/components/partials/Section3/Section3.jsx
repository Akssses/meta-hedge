import s from './Section3.module.css'
import logo from '../../../assets/images/minLogo.svg'
import { useTranslation } from 'react-i18next';

export const Section3 = () => {
    const { t } = useTranslation('mains1');

    return (
        <section className={s.section3_block}>
            <div className={s.fond_block}>
                <div className={s.fond_title}>
                    <h2>{t('main-s3-h3')}</h2>
                    <img src={logo} alt="logo" />
                </div>
                <p className={s.text}>{t('main-s3-h4')}</p>
            </div>
            <div className={s.content_block}>
                <h2>{t('main-s3-h1')}<br /> <span>{t('main-s3-span')} </span></h2>
                <p>{t('main-s3-p')}</p>
            </div>
            <div className={s.glow}/>
        </section>
    )
}
import s from './Section6.module.css'
import box1 from '../../../assets/images/box1.svg'
import box1_en from '../../../assets/images/box1_en.svg'
import box2 from '../../../assets/images/box2.svg'
import box2_en from '../../../assets/images/box2_en.svg'
import box3 from '../../../assets/images/box3.svg'
import box3_en from '../../../assets/images/box3_en.svg'
import box4 from '../../../assets/images/box4.svg'
import box4_en from '../../../assets/images/box4_en.svg'
import box5 from '../../../assets/images/box5.svg'
import box5_en from '../../../assets/images/box5_en.svg'
import box6 from '../../../assets/images/box6.svg'
import box6_en from '../../../assets/images/box6_en.svg'

import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export const Section6 = () => {
    const { t, i18n } = useTranslation('mains1');
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        const changeLanguage = (lng) => {
        setCurrentLanguage(lng);
        };

        i18n.on('languageChanged', changeLanguage);

        return () => {
        i18n.off('languageChanged', changeLanguage);
        };
    }, [i18n]);

    return (
        <section className={s.section6}>
            <div className={s.container}>
                <div className={s.text}>
                    <h1>{t('main-s6-h1')}</h1>
                    <p>{t('main-s6-p')}</p>
                </div>
                <div className={s.grid_blocks}>
                    <img src={currentLanguage === 'en' ? box1_en : box1} alt=""/>
                    <img src={currentLanguage === 'en' ? box2_en : box2} alt="" />
                    <img src={currentLanguage === 'en' ? box3_en : box3} alt=""/>
                    <img src={currentLanguage === 'en' ? box4_en : box4} alt=""/>
                    <img src={currentLanguage === 'en' ? box5_en : box5} alt=""/>
                    <img src={currentLanguage === 'en' ? box6_en : box6} alt=""/>
                </div>
            </div>
        </section>
    )
}
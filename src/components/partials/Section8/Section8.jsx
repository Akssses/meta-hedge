import s from './Section8.module.css'
import React, { useEffect, useState } from 'react';
import circle1 from '../../../assets/images/Заработано.svg'
import circle1_en from '../../../assets/images/circle1_en.svg'

import circle2 from '../../../assets/images/управлении.svg'
import circle2_en from '../../../assets/images/circle2_en.svg'

import circle3 from '../../../assets/images/Прогноз.svg'
import circle3_en from '../../../assets/images/circle3_en.svg'

import arrow from '../../../assets/icons/down.svg'
import { useTranslation } from 'react-i18next';


export const Section8 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const { t, i18n } = useTranslation('mains8');


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

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
        <section className={s.section8_block}>
            <div className={s.stat1}>
                <div className={s.stat1_text}>
                    <h2>{t('stath1')}</h2>
                    <p>{t('statp')}</p>
                </div>
                <div className={s.circles}>
                    <div className={s.circle}>
                        <img src={currentLanguage === 'en' ? circle1_en : circle2} alt=""/> 
                    </div>
                    <div className={s.circle}>
                        <img src={currentLanguage === 'en' ? circle2_en : circle1} alt=""/>
                    </div>
                    <div className={s.circle}>
                        <img src={currentLanguage === 'en' ? circle3_en : circle3} alt=""/>
                    </div>
                </div>
            </div>
            <div className={s.stat2}>
                <div className={s.stat2_text}>
                    <h2>{t('realtime')}<br /> <span>{t('realtimespan')}</span></h2>
                    <p>{t('realtime_p')}</p>
                </div>
                <div className={s.stat2_score}>
                    <h2>{t('atom_bot')}</h2>
                    <p>{t('type')}</p>

                    <div className={s.dropdownWrapper}>
                        <div className={isOpen ?  s.selectOpen : s.dropdownHeader} onClick={toggleDropdown}>
                            <p>{selectedOption || (<p>ATOM</p>)}</p>
                            <img className={isOpen ? s.up : s.down} src={arrow} alt="arrow" />
                        </div>
                        {isOpen && (
                            <ul className={s.dropdownList}>
                                <li
                                    className={selectedOption === 'ATOM' ? s.selected : s.default}
                                    onClick={() => selectOption('ATOM')}
                                >
                                    ATOM
                                </li>
                                <li
                                    className={selectedOption === 'Консервативный' ? s.selected : s.default}
                                    onClick={() => selectOption('Консервативный')}
                                >
                                   {t('conservative')}
                                </li>
                            </ul>
                        )}
                    </div>

                    <button className={s.chek} onClick={() => {
                        if (selectedOption === 'ATOM') {
                            window.location.href = 'https://www.myfxbook.com/members/Milkivays/atom-pull-el/9908947';
                        } else if (selectedOption === 'Консервативный') {
                            window.location.href = 'https://www.myfxbook.com/members/Milkivays/conserve-a/9947281';
                        } else {
                            window.location.href = 'https://www.myfxbook.com/members/Milkivays/atom-pull-el/9908947';
                        }
                    }}>{t('view')}</button>
                </div>
            </div>
            <div className={s.glow}/>
        </section>
    )
}
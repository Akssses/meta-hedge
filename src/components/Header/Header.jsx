import s from './Header.module.css'
import logo from '../../assets/icons/Logo.svg'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import en from '../../assets/icons/en.svg'
import ru from '../../assets/icons/ru.svg'
import arrow from '../../assets/icons/down.svg'
import loginIcon from '../../assets/icons/login.svg'
import burgerIcon from '../../assets/icons/menu.svg'
import burgerIcon2 from '../../assets/icons/menu2.svg'
import telega from '../../assets/icons/telega.svg'
import { Link } from 'react-router-dom';


export const Header = () => {
    const [showLanguages, setShowLanguages] = useState(false);
    const { t, i18n } = useTranslation();
    const [showMenu, setShowMenu] = useState(false);
    const [blackBackground, setBlackBackground] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setShowLanguages(false);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const handleScroll = () => {
        const currentScrollPosition = window.pageYOffset;
    
        if (currentScrollPosition > 0) {
        setBlackBackground(true);
        } else {
        setBlackBackground(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${s.header} ${blackBackground ? s.black_background : ''}`}>
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className={`${s.header_nav} ${showMenu ? s.active_menu : ''}`}>
                <nav className={s.header_link}>
                    <ul>  
                        <Link to="/" onClick={() => setActiveLink('/')} className={activeLink === '/' ? s.active_link : s.ne_active_link}>{t('nav_home')}</Link>
                        <Link to="/solutions" onClick={() => setActiveLink('/solutions')} className={activeLink === '/solutions' ? s.active_link : s.ne_active_link}>{t('nav1')}</Link>
                        <Link to="/instructions" onClick={() => setActiveLink('/instructions')} className={activeLink === '/instructions' ? s.active_link : s.ne_active_link}>{t('nav2')}</Link>
                        <Link to="/blog" onClick={() => setActiveLink('/blog')} className={activeLink === '/blog' ? s.active_link : s.ne_active_link}>{t('nav3')}</Link>
                    </ul>
                </nav>
                <div className={s.lan}>
                    <div>
                        <div className={s.language_flag} onClick={() => setShowLanguages(!showLanguages)}>
                            <img src={require(`../../assets/icons/${i18n.language}.svg`)} alt={i18n.language} />
                            <span className={s.language_name}>{i18n.language === 'en' ? 'EN' : 'RUS'}</span>
                            <img src={arrow} alt="arrow" />
                        </div>
                        {showLanguages && (
                            <ul className={s.language_list}>
                                {i18n.language === 'en' && (
                                <li className={s.language} onClick={() => changeLanguage("ru")}>
                                    <img src={ru} alt="Russian" />
                                    <p>RUS</p>
                                </li>
                                )}
                                {i18n.language === 'ru' && (
                                <li className={s.language} onClick={() => changeLanguage("en")}>
                                    <img src={en} alt="English" />
                                    <p>EN</p>
                                </li>
                                )}
                            </ul>
                            )}
                    </div>
                </div>
                <div className={s.login_button}>
                    <p>{t('header_btn')}</p>
                    <img src={loginIcon} alt="login" />
                </div>
                <div className={s.telegram}>
                    <a href="#">Telegram</a>
                    <img src={telega} alt="Telegram" />
                </div>
            </div>
            <div className={s.burger_menu} onClick={toggleMenu}>
                {
                    showMenu ? (<img src={burgerIcon2} alt="burger menu" />) : (<img src={burgerIcon} alt="burger menu" />)
                }
                
            </div>
        </div>
)}

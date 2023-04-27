import s from './Footer.module.css'
import logo from '../../assets/icons/Logo.svg'
import telega from '../../assets/icons/telega.svg'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Footer = () => {
    const { t } = useTranslation('footer');
    const [activeLink, setActiveLink] = useState(null);

    return (
        <div>
            <footer className={s.footer}>
                <div className={s.footer_logo}>
                    <img src={logo} alt="logo" />
                    <div>{t('copyright')}</div>
                </div>
                <div className={s.footer_nav}>
                    <div>
                        <Link to="/" onClick={() => setActiveLink('/')} className={activeLink === '/' ? s.active_link : s.ne_active_link}>{t('nav_home')}</Link>
                        <Link to="/solutions" onClick={() => setActiveLink('/solutions')} className={activeLink === '/solutions' ? s.active_link : s.ne_active_link}>{t('nav1')}</Link>
                        <Link to="/instructions" onClick={() => setActiveLink('/instructions')} className={activeLink === '/instructions' ? s.active_link : s.ne_active_link}>{t('nav2')}</Link>
                    </div>
                    <div>
                        <Link to="/blog" onClick={() => setActiveLink('/blog')} className={activeLink === '/blog' ? s.active_link : s.ne_active_link}>{t('nav3')}</Link>
                    
                        <div className={s.telega}>
                            <a target='_blank' href="https://t.me/MetaHedge_bot" rel="noreferrer">
                                <h5>Telegram</h5>
                                <img src={telega} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={s.glow}/>
        </div>
    )
}
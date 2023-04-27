import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import s from './BlogCard.module.css'

export const BlogCard = ({id, title, date, readingTime, titleEN,  coverImage, slug, excerpt, excerptEN }) => {
    const {t, i18n } = useTranslation('blog');

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

    console.log(id)

    return (
        <div key={id} className={s.news}>
            <div className={s.news_content}>
                <div className={s.title}>
                <div />
                {
                    currentLanguage === 'en' ? (<h1>{titleEN}</h1>) : (<h1>{title}</h1>)
                }
                <span>{date}</span>
                </div>
                {
                    currentLanguage === 'en' ? (<p>{excerptEN}</p>) : (<p>{excerpt}</p>)
                }
                <div className={s.read_more}>
                    <Link to={`/blog/${slug}`}>
                        <button>{t('read_all')}</button>
                    </Link>
                <span>{t('readingTime')} {readingTime} {t('min')}</span>
                </div>
            </div>
            <div className={s.news_img}>
                <img src={coverImage} alt="News preview" />
            </div>
        </div>
    );
  };  
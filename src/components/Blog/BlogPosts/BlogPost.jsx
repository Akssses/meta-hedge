import s from './BlogPost.module.css'
import newsImg from '../../../assets/images/news-img.png'
import arrow from '../../../assets/icons/lineArrow.svg'
import backArrow from '../../../assets/icons/back-btn.svg'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'


export const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {t, i18n } = useTranslation('blog');
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const changeLanguage = (lng) => {
        setCurrentLanguage(lng);
        };

        i18n.on('languageChanged', changeLanguage);

        return () => {
        i18n.off('languageChanged', changeLanguage);
        };
    }, [i18n]);


    useEffect(() => {
      async function fetchData() {
        const res = await fetch('https://api-us-west-2.hygraph.com/v2/clg6i0ix10soj01tfebxvcy15/master', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              query {
                posts {
                  id
                  title
                  titleEN
                }
              }
            `,
          }),
        });
        const data = await res.json();
        setPosts(data.data.posts);
      }
      fetchData();
    }, []);
  

    useEffect(() => {
        async function fetchData() {
          try {
            setLoading(true);
            const res = await fetch('https://api-us-west-2.hygraph.com/v2/clg6i0ix10soj01tfebxvcy15/master', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                query: `
                  query {
                    posts {
                      id
                      title
                      readingTime
                      titleEN
                      tags
                      slug
                      date
                      excerpt
                      excerptEN
                      content {
                        html
                      }
                      contentEN {
                        html
                      }
                      coverImage {
                        url
                      }
                    }
                  }
                `,
              }),
            });
            const data = await res.json();
            const postBySlug = data.data.posts.find((post) => post.slug === slug);
            if (postBySlug) {
              setPost(postBySlug);
            } else {
              setError('Не удалось найти пост с указанным slug');
            }
            setLoading(false);
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        }
        fetchData();
      }, [slug]);

    if (loading) {
      return <div>Загрузка...</div>;
    }
  
    if (error) {
      return <div>Ошибка: {error}</div>;
    }
  
    if (!post) {
      return <div>Пост не найден</div>;
    }

    if (!post) {
      return <div>Loading...</div>;
    }
  

    return (
        <section className='container'>
            <div className={s.nav}>
                <Link to="/">
                    <p>{t('home')}</p>
                </Link>
                <img src={arrow} alt="" />
                <p>{t('blog')}</p>
            </div>
            <div className={s.circle}>
                <div/>
                <h1>{t('h1')}</h1>
            </div>

           <div className={s.news_section}>

                <div className={s.left_content}>
                    <div className={s.news_header}>
                        <Link to="/blog">
                            <button><img src={backArrow} alt="" />{t('back_btn')}</button>
                        </Link>
                        <div className={s.title}>
                            {
                                currentLanguage === 'en' ? (<h1>{post.titleEN}</h1>) : (<h1>{post.title}</h1>)
                            }
                            <div>
                                <p>{t('readingTime')} {post.readingTime} {t('min')}</p>
                                <span>{post.date}</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.news_tag}>
                        {post.tags.map(tag => (
                        <p key={tag}>{tag}</p>
                        ))}
                    </div>
                    {
                        currentLanguage === 'en' ? (<article className={s.article} dangerouslySetInnerHTML={{ __html: post.contentEN.html }} />)
                        : (<article className={s.article} dangerouslySetInnerHTML={{ __html: post.content.html }} />)
                    }
                    
                </div>

                <div className={s.right_content}>
                    <img src={post.coverImage.url} alt="" />
                    <div className={s.other}>
                        <p>{t('articles')}</p>
                        {posts.slice(0,4).map(newsTitle => (
                          <h1>{newsTitle.title}</h1>
                        ))}
                    </div>
                </div>
           </div>
        </section>
    )
}
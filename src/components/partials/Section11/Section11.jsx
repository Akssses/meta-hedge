import s from './Section11.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { BlogCard } from '../../Blog/BlogCard/BlogCard';
import { useTranslation } from 'react-i18next';

export const Section11 = () => {
    const {t} = useTranslation('blog');
    const [posts, setPosts] = useState([]);
  
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
                  tags
                  excerpt
                  excerptEN
                  slug
                  date
                  readingTime
                  content {
                    html
                  }
                  coverImage{
                      url
                  }
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
    return (
        <section className={s.section11_block}>
            <div className={s.header}>
                <h1>{t('last_news')}</h1>
                <Link to="/blog">
                    <button>{t('view_all')}</button>
                </Link>
            </div>
            <div className={s.news_block}>
              {posts.slice(0, 3).map(post => (
                <div>
                    <BlogCard
                        key={post.id}
                        title={post.title}
                        titleEN={post.titleEN}
                        date={post.date}
                        content={post.content.html}
                        coverImage={post.coverImage.url}
                        slug={post.slug}
                        excerpt={post.excerpt}
                        excerptEN={post.excerptEN}
                        readingTime={post.readingTime}
                    />
                  <div className={s.line}/>
                  </div>
              ))}
            </div>
        </section>
    )
}
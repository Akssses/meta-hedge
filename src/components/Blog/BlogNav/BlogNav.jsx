import { Link } from 'react-router-dom'
import s from './BlogNav.module.css'
import arrow from '../../../assets/icons/lineArrow.svg'
import search_img from '../../../assets/icons/search-btn.svg'
import { BlogCard } from '../BlogCard/BlogCard'
import { useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'


export const BlogNav = () => {
    const [posts, setPosts] = useState([]);
    const {t} = useTranslation('blog');
    const [search, setSearch] = useState('')
    const [activeTag, setActiveTag] = useState(null);
    const onChangeSearch = (event) => {
        setSearch(event.target.value)
    }
  
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
    <section className={s.nav_section}>
        <div className={s.nav}>
            <Link to="/">
            <p>{t('home')}</p>
            </Link>
            <img src={arrow} alt="" />
            <p>{t('blog')}</p>
        </div>
        <div className={s.circle}>
            <div />
            <h1>{t('h1')}</h1>
        </div>

        <div className={s.nav_buttons}>
            <button className={activeTag === null ? s.active_button : s.off_button} onClick={() => setActiveTag(null)}>all</button>
            <button className={activeTag === "MetaHedge" ? s.active_button : s.off_button} onClick={() => setActiveTag("MetaHedge")}>MetaHedge</button>
            <button className={activeTag === "сryptocurrency" ? s.active_button : s.off_button} onClick={() => setActiveTag("сryptocurrency")}>сryptocurrency</button>
            <button className={activeTag === "trading" ? s.active_button : s.off_button} onClick={() => setActiveTag("trading")}>trading</button>
            <button className={activeTag === "investments" ? s.active_button : s.off_button} onClick={() => setActiveTag("investments")}>investments</button>
            <button className={activeTag === "AtomBot" ? s.active_button : s.off_button} onClick={() => setActiveTag("AtomBot")}>AtomBot</button>
            <button className={activeTag === "BTC" ? s.active_button : s.off_button} onClick={() => setActiveTag("BTC")}>BTC</button>
        </div>

        <div className={s.news_section}>
            <div className={s.header}>
            <h1>{t('all_post')}</h1>
            <div className={s.searchInput}>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={onChangeSearch} 
                    value={search} 
                />
                <button>
                    <img src={search_img} alt="search" />
                </button>
            </div>
        </div>
        <div className={s.news_block}>
            {posts
                .filter((post) => 
                    (post.title.toLowerCase().includes(search.toLowerCase()) ||
                    post.titleEN.toLowerCase().includes(search.toLowerCase())) &&
                    (activeTag === null || post.tags.includes(activeTag))
                )
                .map(post => (
                    <div key={post.id}>
                        <BlogCard 
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
                        <div className={s.line}></div>
                    </div>
            ))}

        </div>
        </div>
    </section>
  );
};
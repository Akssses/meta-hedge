import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Solution } from './pages/Solution';
import Layout from './components/Layout';
import { Instructions } from './pages/Instructions';
import { BlogPage } from './pages/Blog';
import { BlogPostPage } from './pages/posts/BlogPostPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { BlogPost } from './components/Blog/BlogPosts/BlogPost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/solutions" element={<Solution />}/>
          <Route path="/instructions" element={<Instructions/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/blog-post" element={<BlogPostPage/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/blog/:slug" element={<BlogPost/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
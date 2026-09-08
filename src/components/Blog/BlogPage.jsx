import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from '../../context/RouterContext';
import { BLOG_ARTICLES } from '../../data/blogData';
import BlogHero from './BlogHero';
import FeaturedStory from './FeaturedStory';
import TopicFilterBar from './TopicFilterBar';
import EditorialStream from './EditorialStream';
import EditorialPOV from './EditorialPOV';
import NewsletterSubscribe from './NewsletterSubscribe';
import ArticleReaderModal from './ArticleReaderModal';
import './Blog.css';

export default function BlogPage() {
  const { lang, isRTL, t } = useLanguage();
  const { blogArticleSlug, navigate } = useRouter();
  const pageMeta = t.blog?.pageMeta || {};

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(() => {
    if (blogArticleSlug) {
      return BLOG_ARTICLES.find((a) => a.slug === blogArticleSlug) || null;
    }
    return null;
  });

  const handleSelectArticle = (art) => {
    setActiveArticle(art);
    if (navigate) navigate(`/blog/${art.slug}`);
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    if (navigate) navigate('/blog');
  };

  // Set document title and scroll to top on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    document.title = pageMeta.title || (
      lang === 'fa'
        ? 'بینش‌های بازاریابی رشد // مقالات و دیدگاه‌ها // مجیکنسـی (MAGICENCY®)'
        : 'Growth Marketing Insights // Editorial Publication // MAGICENCY®'
    );
  }, [lang, pageMeta.title]);

  // Deep-link to article if slug changes in URL
  useEffect(() => {
    if (blogArticleSlug) {
      const match = BLOG_ARTICLES.find((a) => a.slug === blogArticleSlug);
      if (match) {
        setActiveArticle(match);
      }
    } else {
      setActiveArticle(null);
    }
  }, [blogArticleSlug]);

  // The featured article (first article with featured: true)
  const featuredArticle = useMemo(() => {
    return BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[0];
  }, []);

  // Filter articles based on active category & search query
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((art) => {
      // Category match
      const matchesCategory = activeCategory === 'all' || art.category === activeCategory;

      // Search match
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase().trim();
      const titleMatch = (art.titleEn && art.titleEn.toLowerCase().includes(q)) ||
                         (art.titleFa && art.titleFa.toLowerCase().includes(q));
      const excerptMatch = (art.excerptEn && art.excerptEn.toLowerCase().includes(q)) ||
                           (art.excerptFa && art.excerptFa.toLowerCase().includes(q));
      const catMatch = (art.categoryLabelEn && art.categoryLabelEn.toLowerCase().includes(q)) ||
                       (art.categoryLabelFa && art.categoryLabelFa.toLowerCase().includes(q));

      return matchesCategory && (titleMatch || excerptMatch || catMatch);
    });
  }, [activeCategory, searchQuery]);

  // Count articles per category for badge indicators
  const articlesCountByCategory = useMemo(() => {
    const counts = { all: BLOG_ARTICLES.length };
    BLOG_ARTICLES.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className={`blog-page-root ${isRTL ? 'is-rtl' : 'is-ltr'}`}>
      
      {/* 01 — Editorial Hero with Real-Time Search */}
      <BlogHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* 02 — Featured Centerpiece Story (Shown when browsing All without active search) */}
      {activeCategory === 'all' && !searchQuery.trim() && (
        <FeaturedStory
          article={featuredArticle}
          onSelectArticle={handleSelectArticle}
        />
      )}

      {/* 03 — Topic Navigation Filter Ribbon */}
      <TopicFilterBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        articlesCountByCategory={articlesCountByCategory}
      />

      {/* 04 — Editorial Stream Archive */}
      <EditorialStream
        articles={filteredArticles}
        onSelectArticle={handleSelectArticle}
      />

      {/* 05 — Editorial Point of View (Observe, Question, Share) */}
      <EditorialPOV />

      {/* 06 — Minimal Newsletter Dispatch */}
      <NewsletterSubscribe />

      {/* Immersive Article Reading View Modal */}
      {activeArticle && (
        <ArticleReaderModal
          article={activeArticle}
          onClose={handleCloseArticle}
          onSelectArticle={handleSelectArticle}
        />
      )}

    </div>
  );
}

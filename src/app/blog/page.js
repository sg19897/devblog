'use client'
import Link from 'next/link'
import { useState } from 'react'
import { posts, categories } from '../../data/posts'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <div style={{ padding: '3rem 5%' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a2e', marginBottom: '0.5rem' }}>All Posts</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>{filtered.length} articles on frontend development</p>

      {/* Search */}
      <input
        placeholder="Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: '100%', maxWidth: '400px', padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '0.95rem', outline: 'none', marginBottom: '1.5rem' }}
      />

      {/* Categories */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '0.4rem 1rem', border: '2px solid #6c63ff', borderRadius: '20px',
              background: activeCategory === cat ? '#6c63ff' : 'transparent',
              color: activeCategory === cat ? '#fff' : '#6c63ff',
              cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filtered.map(post => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'transform 0.2s', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <span style={{ background: '#6c63ff', color: '#fff', padding: '0.25rem 0.7rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>{post.category}</span>
                <span style={{ color: '#999', fontSize: '0.8rem' }}>{post.readTime} read</span>
              </div>
              <h2 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1a1a2e', marginBottom: '0.5rem' }}>{post.title}</h2>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>{post.excerpt}</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                {post.tags.map(tag => (
                  <span key={tag} style={{ background: '#f0f0f0', padding: '0.15rem 0.6rem', borderRadius: '10px', fontSize: '0.75rem', color: '#666' }}>#{tag}</span>
                ))}
              </div>
              <p style={{ color: '#999', fontSize: '0.8rem' }}>{post.author} · {post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

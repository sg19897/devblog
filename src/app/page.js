import Link from 'next/link'
import { posts } from '../data/posts'

export default function HomePage() {
  const featured = posts[0]
  const recent = posts.slice(1, 4)

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #6c63ff, #a29bfe)', color: '#fff', padding: '5rem 5%', textAlign: 'center' }}>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>Welcome to</p>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>DevBlog</h1>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', maxWidth: '500px', margin: '0 auto 2rem' }}>
          Practical tutorials on HTML, CSS, JavaScript, React & Next.js
        </p>
        <Link href="/blog" style={{ background: '#fff', color: '#6c63ff', padding: '0.8rem 2rem', borderRadius: '30px', fontWeight: '700', fontSize: '1rem' }}>
          Read All Posts →
        </Link>
      </section>

      {/* Featured */}
      <section style={{ padding: '4rem 5%' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1a1a2e' }}>Featured Post</h2>
        <Link href={`/blog/${featured.slug}`}>
          <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            <div style={{ background: 'linear-gradient(135deg, #6c63ff22, #a29bfe22)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem', minHeight: '250px' }}>
              <span style={{ fontSize: '5rem' }}>⚛️</span>
            </div>
            <div style={{ padding: '2rem' }}>
              <span style={{ background: '#6c63ff', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>{featured.category}</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '0.8rem 0', color: '#1a1a2e' }}>{featured.title}</h3>
              <p style={{ color: '#666', lineHeight: 1.7 }}>{featured.excerpt}</p>
              <div style={{ marginTop: '1rem', color: '#999', fontSize: '0.85rem' }}>
                {featured.author} · {featured.date} · {featured.readTime} read
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Recent */}
      <section style={{ padding: '0 5% 4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1a1a2e' }}>Recent Posts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {recent.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', height: '100%' }}>
                <span style={{ background: '#6c63ff22', color: '#6c63ff', padding: '0.25rem 0.7rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>{post.category}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: '0.7rem 0', color: '#1a1a2e' }}>{post.title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>{post.excerpt}</p>
                <p style={{ color: '#999', fontSize: '0.8rem', marginTop: '1rem' }}>{post.date} · {post.readTime} read</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

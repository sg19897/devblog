import Link from 'next/link'
import { posts } from '../../../data/posts'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }
  return { title: `${post.title} | DevBlog`, description: post.excerpt }
}

export default function PostPage({ params }) {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) notFound()

  const related = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2)

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 5%' }}>
      {/* Back */}
      <Link href="/blog" style={{ color: '#6c63ff', fontWeight: '600', fontSize: '0.9rem', display: 'inline-block', marginBottom: '1.5rem' }}>
        ← Back to Blog
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <span style={{ background: '#6c63ff', color: '#fff', padding: '0.3rem 0.9rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '700' }}>{post.category}</span>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1a1a2e', margin: '1rem 0' }}>{post.title}</h1>
        <div style={{ display: 'flex', gap: '1rem', color: '#999', fontSize: '0.9rem', flexWrap: 'wrap' }}>
          <span>By {post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.8rem', flexWrap: 'wrap' }}>
          {post.tags.map(tag => (
            <span key={tag} style={{ background: '#f0f0f0', padding: '0.2rem 0.7rem', borderRadius: '10px', fontSize: '0.8rem', color: '#666' }}>#{tag}</span>
          ))}
        </div>
      </div>

      {/* Cover */}
      <div style={{ background: 'linear-gradient(135deg, #6c63ff22, #a29bfe33)', borderRadius: '16px', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '5rem' }}>📝</span>
      </div>

      {/* Content */}
      <article style={{ lineHeight: 1.9, color: '#444' }}>
        {post.content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) return <h2 key={i} style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1a1a2e', margin: '2rem 0 0.8rem' }}>{line.slice(3)}</h2>
          if (line.startsWith('```')) return null
          if (!line) return <br key={i} />
          return <p key={i} style={{ marginBottom: '0.5rem' }}>{line}</p>
        })}
      </article>

      {/* Related */}
      {related.length > 0 && (
        <div style={{ marginTop: '4rem', borderTop: '1px solid #e5e7eb', paddingTop: '2rem' }}>
          <h3 style={{ fontWeight: '700', color: '#1a1a2e', marginBottom: '1rem' }}>Related Posts</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {related.map(p => (
              <Link key={p.id} href={`/blog/${p.slug}`}>
                <div style={{ background: '#fff', borderRadius: '10px', padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <h4 style={{ fontWeight: '700', fontSize: '0.95rem', color: '#1a1a2e', marginBottom: '0.4rem' }}>{p.title}</h4>
                  <p style={{ color: '#999', fontSize: '0.8rem' }}>{p.readTime} read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

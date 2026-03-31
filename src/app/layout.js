import './globals.css'

export const metadata = {
  title: 'DevBlog by Jyoti',
  description: 'A blog about frontend development — HTML, CSS, JavaScript, React & Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '1rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
          <a href="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: '#6c63ff' }}>DevBlog</a>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem', fontWeight: '500' }}>
            <a href="/" style={{ color: '#555' }}>Home</a>
            <a href="/blog" style={{ color: '#555' }}>Blog</a>
            <a href="/about" style={{ color: '#555' }}>About</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ background: '#1a1a2e', color: '#aaa', textAlign: 'center', padding: '2rem', marginTop: '4rem', fontSize: '0.9rem' }}>
          © 2025 Jyoti · Built with Next.js
        </footer>
      </body>
    </html>
  )
}

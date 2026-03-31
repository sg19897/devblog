export default function AboutPage() {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '4rem 5%' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1a1a2e', marginBottom: '1.5rem' }}>About Me</h1>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <div style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #6c63ff, #a29bfe)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: '800', color: '#fff', marginBottom: '1.5rem' }}>
          JG
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a2e' }}>Jyoti</h2>
        <p style={{ color: '#6c63ff', fontWeight: '600', marginBottom: '1rem' }}>Frontend Developer & Technical Writer</p>
        <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
          Hi! I'm Jyoti, a passionate frontend developer with a love for building beautiful, accessible, and performant web applications. I started my coding journey in 2019 and haven't stopped learning since.
        </p>
        <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          I specialize in HTML, CSS, JavaScript, React, and Next.js. This blog is my way of sharing what I learn and helping other developers grow.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Git'].map(skill => (
            <span key={skill} style={{ background: '#6c63ff22', color: '#6c63ff', padding: '0.3rem 0.9rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

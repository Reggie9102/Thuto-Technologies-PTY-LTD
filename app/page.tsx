import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav style={{
        background: 'linear-gradient(90deg, #0A0E1A 0%, #151B2E 100%)',
        borderBottom: '2px solid var(--gold)',
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, var(--blue), var(--green))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            color: 'white',
            fontWeight: 800
          }}>🎓</div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 800 }}>
              Thuto<span style={{ color: 'var(--gold)' }}>Tech</span>
            </div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
              AI-Augmented Education for SA
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            padding: '6px 12px',
            background: 'var(--bg-card)',
            border: '1px solid var(--gold)',
            borderRadius: '20px',
            fontSize: '10px',
            color: 'var(--gold)',
            fontWeight: 700
          }}>
            🏛️ A Reggie Express Company
          </div>
          <div style={{
            background: 'var(--gold)',
            color: '#000',
            padding: '5px 12px',
            borderRadius: '12px',
            fontSize: '10px',
            fontWeight: 800
          }}>
            🇿🇦 SIYAPHUMELELA 2026
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '80px 32px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(0,35,149,0.15) 0%, rgba(0,122,77,0.1) 50%, rgba(255,184,28,0.08) 100%)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            gap: '8px',
            marginBottom: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <span style={{
              padding: '6px 14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--gold)',
              borderRadius: '14px',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--gold)'
            }}>🎓 ThutoTech</span>
            <span style={{
              padding: '6px 14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--text-secondary)'
            }}>🇿🇦 Proudly SA</span>
            <span style={{
              padding: '6px 14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--text-secondary)'
            }}>🎯 CAPS-Aligned</span>
          </div>
          
          <h1 style={{
            fontSize: '56px',
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: '16px',
            letterSpacing: '-1.5px'
          }}>
            AI-Augmented Education<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--gold), var(--red))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>for South Africa</span>
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto 32px'
          }}>
            Empowering teachers. Guiding learners. Bridging education and innovation. 
            Built on real doctoral research at the University of Pretoria.
          </p>

          {/* Platform Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '48px',
            maxWidth: '1200px',
            margin: '48px auto 0'
          }}>
            {/* Fundisa AI Card */}
            <Link href="/fundisa" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'var(--gold)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(0,35,149,0.2), rgba(0,122,77,0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '16px'
                }}>👩‍🏫</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  Fundisa AI
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  marginBottom: '16px'
                }}>
                  CAPS-aligned lesson generation for teachers (R-12). Video/Slide generation.
                </p>
                <div style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  background: 'var(--success)',
                  color: 'white',
                  borderRadius: '10px',
                  fontSize: '9px',
                  fontWeight: 800
                }}>● LIVE</div>
              </div>
            </Link>

            {/* MatricPrep AI Card */}
            <Link href="/matricprep" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'var(--gold)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(222,56,49,0.2), rgba(255,184,28,0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '16px'
                }}>🔥</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  MatricPrep AI
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  marginBottom: '16px'
                }}>
                  NSC exam prep with AI tutoring. Book university tutors for human backup.
                </p>
                <div style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  background: 'var(--success)',
                  color: 'white',
                  borderRadius: '10px',
                  fontSize: '9px',
                  fontWeight: 800
                }}>● LIVE</div>
              </div>
            </Link>

            {/* Student Pass Card */}
            <Link href="/pass" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'var(--gold)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(255,184,28,0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '16px'
                }}>🎓</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  Student Pass
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  marginBottom: '16px'
                }}>
                  Verify 2026 registration. Unlock the ecosystem. Connect your institution.
                </p>
                <div style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  background: 'var(--success)',
                  color: 'white',
                  borderRadius: '10px',
                  fontSize: '9px',
                  fontWeight: 800
                }}>● LIVE</div>
              </div>
            </Link>

            {/* Frictionless Learner Card */}
            <Link href="/frictionless" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'var(--gold)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(255,184,28,0.2), rgba(222,56,49,0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '16px'
                }}>⚡</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  Frictionless Learner
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  marginBottom: '16px'
                }}>
                  3-Stage Flipped Protocol. Daily study blueprint. Siyaphumelela 2026.
                </p>
                <div style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  background: 'var(--success)',
                  color: 'white',
                  borderRadius: '10px',
                  fontSize: '9px',
                  fontWeight: 800
                }}>● LIVE</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '60px 32px 32px',
        background: '#05070D',
        borderTop: '1px solid var(--border)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '12px',
            lineHeight: 1.7,
            marginBottom: '24px'
          }}>
            <strong style={{ color: 'var(--gold)' }}>ThutoTech</strong> — AI-Augmented Education for South Africa.<br />
            Empowering teachers. Guiding learners. Bridging education and innovation.<br />
            A <strong style={{ color: 'var(--gold)' }}>Reggie Express (Pty) Ltd</strong> Company.<br />
            Founded by Reginald M. Kanyane • PhD Candidate, University of Pretoria
          </p>
          <div style={{
            fontSize: '10px',
            color: 'var(--text-muted)',
            paddingTop: '16px',
            borderTop: '1px solid var(--border)',
            marginTop: '16px',
            opacity: 0.7
          }}>
            © 2026 Reggie Express (Pty) Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

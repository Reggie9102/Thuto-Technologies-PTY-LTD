export default function FundisaAI() {
  return (
    <div>
      {/* Navigation */}
      <nav style={{
        background: 'linear-gradient(90deg, #0A0E1A 0%, #151B2E 100%)',
        borderBottom: '2px solid #FFB81C',
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
            background: 'linear-gradient(135deg, #002395, #007A4D)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            color: 'white',
            fontWeight: 800
          }}>👩‍🏫</div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 800 }}>
              Fundisa <span style={{ color: '#FFB81C' }}>AI</span>
            </div>
            <div style={{ fontSize: '10px', color: '#64748B' }}>
              Adaptive Learning (R-Tertiary)
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="/" style={{
            padding: '8px 14px',
            background: '#1E2642',
            border: '1px solid #2A3355',
            borderRadius: '8px',
            fontSize: '11px',
            fontWeight: 700,
            color: '#94A3B8',
            textDecoration: 'none'
          }}>🏛️ ThutoTech Hub</a>
          <div style={{
            padding: '6px 12px',
            background: '#1E2642',
            border: '1px solid #FFB81C',
            borderRadius: '20px',
            fontSize: '10px',
            color: '#FFB81C',
            fontWeight: 700
          }}>A Reggie Express Company</div>
          <button
            onClick={() => alert('🚀 Pilot Activated! (Demo Mode)\n\nWelcome to Fundisa AI!\n\nYour 14-day free pilot starts now.')}
            style={{
              padding: '9px 18px',
              background: 'linear-gradient(135deg, #FFB81C, #E6A800)',
              color: '#000',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >Start Free Pilot →</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        padding: '80px 32px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(0,35,149,0.15) 0%, rgba(0,122,77,0.1) 50%, rgba(255,184,28,0.08) 100%)',
        borderBottom: '1px solid #2A3355'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: '16px',
            letterSpacing: '-1.5px'
          }}>
            AI That Helps SA Teachers<br />
            <span style={{
              background: 'linear-gradient(90deg, #FFB81C, #DE3831)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Teach — Not Admin.</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto 32px'
          }}>
            Fundisa AI turns any CAPS document (Grades R–12) into chatbots, slides, quizzes, and audio lessons — synced with SASAMS & LURITS. Teachers save 5+ hours every week.
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { value: '5+', label: 'Hours Saved Weekly' },
              { value: '70%', label: 'Admin Reduced' },
              { value: '100%', label: 'CAPS-Aligned' },
              { value: '11', label: 'SA Languages' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: '#1E2642',
                border: '1px solid #2A3355',
                borderRadius: '12px',
                padding: '20px'
              }}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#FFB81C', letterSpacing: '-0.5px' }}>{stat.value}</div>
                <div style={{
                  fontSize: '11px',
                  color: '#64748B',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontWeight: 600
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ padding: '80px 32px', background: '#151B2E', borderTop: '1px solid #2A3355' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              background: '#1E2642',
              border: '1px solid #FFB81C',
              borderRadius: '14px',
              fontSize: '11px',
              fontWeight: 700,
              color: '#FFB81C',
              marginBottom: '16px',
              letterSpacing: '0.5px'
            }}>💰 FLEXIBLE PRICING FOR EVERY TEACHER</span>
            <h2 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.8px' }}>
              Start Free. <span style={{
                background: 'linear-gradient(90deg, #FFB81C, #DE3831)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Upgrade When Ready.</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '16px', maxWidth: '700px', margin: '0 auto' }}>
              Individual teachers can start with Free or Pro. Schools can unlock unlimited access for all teachers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '48px' }}>
            {[
              {
                name: 'Fundisa Free',
                price: 'R0',
                period: '/ forever',
                desc: 'Perfect for individual teachers exploring the platform.',
                features: ['5 document uploads', '20 AI generations / month', '1 class group (30 learners)', 'Basic text generation', 'Basic analytics', 'Community support', 'Learner App always free'],
                btnText: 'Start Free →',
                btnStyle: { background: '#2A3355', color: '#F1F5F9', border: '1px solid #2A3355' }
              },
              {
                name: 'Fundisa Pro',
                price: 'R149',
                period: '/ month',
                desc: 'For individual teachers who want full access & PRO features.',
                features: ['Unlimited document uploads', 'Unlimited AI generations', 'Up to 3 class groups (90 learners)', 'PRO Video & Slide Generation', 'Advanced analytics', 'Priority support', '11 SA languages', 'Annual: R1,499 (save R289)'],
                btnText: 'Upgrade to Pro →',
                btnStyle: { background: 'linear-gradient(135deg, #FFB81C, #E6A800)', color: '#000' },
                featured: true,
                badge: '⭐ MOST POPULAR'
              },
              {
                name: 'School License',
                price: 'R999',
                period: '/ month',
                desc: 'For schools ready to empower every teacher.',
                features: ['Everything in Pro', 'Unlimited teachers at your school', 'Up to 800 learners on app', 'Full SASAMS & LURITS sync', 'School-wide analytics dashboard', 'Priority onboarding & support', 'CPD-aligned training (ETDP SETA)', 'Annual: R9,990 (save R1,998)'],
                btnText: 'Get School License →',
                btnStyle: { background: 'linear-gradient(135deg, #007A4D, #5C7A4E)', color: 'white' },
                badge: '🏫 FOR SCHOOLS'
              },
              {
                name: 'District / Enterprise',
                price: 'Custom',
                period: 'pricing',
                desc: 'For DBE districts, independent school groups & NGOs.',
                features: ['Up to 15 schools', 'Centralized district analytics', 'Custom CAPS pacing guides', 'Dedicated success manager', 'White-label options', 'SLA guarantees', 'Bulk procurement', 'Multi-year contracts available'],
                btnText: 'Contact Sales →',
                btnStyle: { background: '#2A3355', color: '#F1F5F9', border: '1px solid #2A3355' }
              }
            ].map((plan, i) => (
              <div key={i} style={{
                background: '#1E2642',
                border: plan.featured ? '2px solid #FFB81C' : '1px solid #2A3355',
                borderRadius: '16px',
                padding: '32px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column' as const
              }}>
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '20px',
                    background: plan.featured ? '#FFB81C' : '#007A4D',
                    color: plan.featured ? '#000' : 'white',
                    fontSize: '10px',
                    padding: '4px 10px',
                    borderRadius: '10px',
                    fontWeight: 800,
                    letterSpacing: '0.5px'
                  }}>{plan.badge}</div>
                )}
                <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>{plan.name}</div>
                <div style={{ fontSize: '40px', fontWeight: 800, marginBottom: '4px', letterSpacing: '-1px' }}>
                  {plan.price} <span style={{ fontSize: '16px', color: '#64748B', fontWeight: 500 }}>{plan.period}</span>
                </div>
                <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '24px', lineHeight: 1.5, minHeight: '40px' }}>
                  {plan.desc}
                </div>
                <ul style={{ listStyle: 'none', marginBottom: '24px', flex: 1 }}>
                  {plan.features.map((feature, j) => (
                    <li key={j} style={{
                      fontSize: '13px',
                      color: '#94A3B8',
                      padding: '8px 0',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px'
                    }}>
                      <span style={{ color: '#10B981', fontWeight: 800, flexShrink: 0 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => alert(`${plan.name} selected! (Demo Mode)\n\nIn production, this would redirect to ${plan.price === 'Custom' ? 'enterprise contact form' : 'Stripe Checkout'}.`)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '14px',
                    cursor: 'pointer',
                    marginTop: 'auto',
                    ...plan.btnStyle
                  }}
                >
                  {plan.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '60px 32px 32px',
        background: '#05070D',
        borderTop: '1px solid #2A3355',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: '#64748B', fontSize: '12px', lineHeight: 1.7, marginBottom: '24px' }}>
            <strong style={{ color: '#FFB81C' }}>Fundisa AI</strong> — Adaptive Learning for Every SA Student & Teacher.<br />
            Primary, High School, or Tertiary. Learner or Teacher. NotebookLM-style workspace with CAPS R-12 curriculum understanding.<br /><br />
            A <strong style={{ color: '#FFB81C' }}>Reggie Express (Pty) Ltd</strong> Company. Part of the ThutoTech ecosystem.<br />
            Founded by Reginald M. Kanyane • PhD Candidate, University of Pretoria
          </p>
          <div style={{ fontSize: '10px', color: '#64748B', paddingTop: '16px', borderTop: '1px solid #2A3355', marginTop: '16px', opacity: 0.7 }}>
            © 2026 Reggie Express (Pty) Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
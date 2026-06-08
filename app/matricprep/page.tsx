export default function MatricPrepAI() {
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
            background: 'linear-gradient(135deg, #DE3831, #FFB81C)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            color: 'white',
            fontWeight: 800
          }}>🔥</div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 800 }}>
              MatricPrep <span style={{ color: '#FFB81C' }}>AI</span>
            </div>
            <div style={{ fontSize: '10px', color: '#64748B' }}>Turn Past Papers into A's</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="https://matricmate.co.za" style={{
            padding: '8px 14px',
            background: '#1E2642',
            border: '1px solid #2A3355',
            borderRadius: '8px',
            fontSize: '11px',
            fontWeight: 700,
            color: '#94A3B8',
            textDecoration: 'none'
          }}>📚 Free Past Papers</a>
          <a href="/fundisa" style={{
            padding: '8px 14px',
            background: '#1E2642',
            border: '1px solid #2A3355',
            borderRadius: '8px',
            fontSize: '11px',
            fontWeight: 700,
            color: '#94A3B8',
            textDecoration: 'none'
          }}>👩‍🏫 For Teachers</a>
          <div style={{
            padding: '6px 12px',
            background: '#1E2642',
            border: '1px solid #FFB81C',
            borderRadius: '20px',
            fontSize: '10px',
            color: '#FFB81C',
            fontWeight: 700
          }}>Powered by Fundisa AI</div>
          <button
            onClick={() => alert('🚀 Trial Activated! (Demo Mode)\n\nWelcome to MatricPrep AI!\n\nYour 14-day free trial starts now.')}
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
          >Start Free Trial →</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        padding: '80px 32px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(222,56,49,0.15) 0%, rgba(255,184,28,0.1) 50%, rgba(0,35,149,0.08) 100%)',
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
            Turn Past Papers<br />
            <span style={{
              background: 'linear-gradient(90deg, #FFB81C, #DE3831)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>into A's</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto 32px'
          }}>
            MatricPrep AI understands every NSC past paper from DBE. Get AI tutoring that knows the exact memo, book university tutors for human backup, and ace your matric exams.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { value: '60+', label: 'NSC Subjects' },
              { value: '10+', label: 'Years of Papers' },
              { value: '11', label: 'SA Languages' },
              { value: '24/7', label: 'AI Tutoring' }
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

      {/* Tutor Marketplace */}
      <section style={{ padding: '80px 32px', maxWidth: '1400px', margin: '0 auto' }}>
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
          }}>🎓 HUMAN BACKUP WHEN YOU NEED IT</span>
          <h2 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.8px' }}>
            Book <span style={{
              background: 'linear-gradient(90deg, #FFB81C, #DE3831)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>University Tutors</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '16px', maxWidth: '700px', margin: '0 auto' }}>
            AI is great, but sometimes you need a human to explain it differently. Book real university students — Golden Key honours students or top tertiary students.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '48px' }}>
          {[
            {
              initials: 'TM',
              name: 'Thabo Mokoena',
              badge: 'GOLDEN KEY',
              uni: 'UP • BSc Engineering 4th Year',
              subjects: ['Physical Sciences', 'Mathematics'],
              rating: '4.9',
              reviews: '127',
              avg: '89%',
              rate: 'R200'
            },
            {
              initials: 'PN',
              name: 'Priya Naidoo',
              badge: 'GOLDEN KEY',
              uni: 'Wits • BSc Medical 3rd Year',
              subjects: ['Life Sciences', 'English HL'],
              rating: '4.8',
              reviews: '89',
              avg: '92%',
              rate: 'R180'
            },
            {
              initials: 'KM',
              name: 'Kagelo Molefe',
              badge: null,
              uni: 'UCT • BBusSci 4th Year',
              subjects: ['Mathematics', 'Accounting'],
              rating: '5.0',
              reviews: '64',
              avg: '85%',
              rate: 'R220'
            }
          ].map((tutor, i) => (
            <div key={i} style={{
              background: '#1E2642',
              border: '1px solid #2A3355',
              borderRadius: '14px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: tutor.badge ? 'linear-gradient(135deg, #FFB81C, #E6A800)' : 'linear-gradient(135deg, #6366f1, #002395)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 800,
                  color: 'white'
                }}>{tutor.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '16px', fontWeight: 800, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {tutor.name}
                    {tutor.badge && (
                      <span style={{
                        background: 'linear-gradient(135deg, #FFB81C, #E6A800)',
                        color: '#000',
                        fontSize: '9px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontWeight: 800,
                        letterSpacing: '0.5px'
                      }}>{tutor.badge}</span>
                    )}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748B' }}>{tutor.uni}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                {tutor.subjects.map((subject, j) => (
                  <span key={j} style={{
                    background: '#151B2E',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 600
                  }}>{subject}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '12px' }}>
                <div>⭐ <strong style={{ color: '#FFB81C' }}>{tutor.rating}</strong> ({tutor.reviews} reviews)</div>
                <div>🎓 <strong style={{ color: '#FFB81C' }}>{tutor.avg}</strong> avg</div>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFB81C', marginBottom: '12px' }}>
                {tutor.rate} <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 500 }}>/ hour</span>
              </div>
              <button
                onClick={() => alert(`🎓 Booking ${tutor.name}\n\nRate: ${tutor.rate}/hour\n\nYou will be redirected to StudentMart to complete booking.`)}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'linear-gradient(135deg, #FFB81C, #E6A800)',
                  color: '#000',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >Book Session →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '80px 32px', background: '#151B2E', borderTop: '1px solid #2A3355' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '12px' }}>
              Student-Friendly <span style={{
                background: 'linear-gradient(90deg, #FFB81C, #DE3831)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Pricing</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '16px' }}>
              Cheaper than one hour with a private tutor. Cancel anytime.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '48px' }}>
            {[
              {
                name: 'Free Trial',
                price: 'R0',
                period: '/ 14 days',
                desc: 'Test-drive MatricPrep AI before committing.',
                features: ['Unlimited AI questions', 'All 60+ NSC subjects', '10+ years of past papers', 'Official DBE memos', 'Basic study plans', 'Community support'],
                btnText: 'Start Free Trial →',
                btnStyle: { background: '#2A3355', color: '#F1F5F9', border: '1px solid #2A3355' }
              },
              {
                name: 'Weekly Crammer',
                price: 'R29',
                period: '/ week',
                desc: 'Perfect for the 4-week exam panic window.',
                features: ['Everything in Free Trial', 'Step-by-step problem solving', 'Personalized study plans', 'Progress tracking', '11 SA languages', 'Priority support', 'Book university tutors'],
                btnText: 'Subscribe R29/week →',
                btnStyle: { background: 'linear-gradient(135deg, #FFB81C, #E6A800)', color: '#000' },
                featured: true,
                badge: '🔥 MOST POPULAR'
              },
              {
                name: 'Monthly Premium',
                price: 'R99',
                period: '/ month',
                desc: 'Best value — save R17 vs weekly.',
                features: ['Everything in Weekly', 'Advanced analytics', 'APS calculator', 'University matching', 'Parent progress reports', 'Exam countdown', 'R50 tutor credits monthly'],
                btnText: 'Subscribe R99/month →',
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
                    background: '#FFB81C',
                    color: '#000',
                    fontSize: '10px',
                    padding: '4px 10px',
                    borderRadius: '10px',
                    fontWeight: 800
                  }}>{plan.badge}</div>
                )}
                <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>{plan.name}</div>
                <div style={{ fontSize: '40px', fontWeight: 800, marginBottom: '4px' }}>
                  {plan.price} <span style={{ fontSize: '16px', color: '#64748B', fontWeight: 500 }}>{plan.period}</span>
                </div>
                <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '24px', minHeight: '40px' }}>
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
                      <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => alert(`${plan.name} selected! (Demo Mode)\n\nIn production, this would redirect to Stripe Checkout.`)}
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
            <strong style={{ color: '#FFB81C' }}>MatricPrep AI</strong> — Turn Past Papers into A's.<br />
            AI tutoring that understands every NSC past paper from DBE. Book university tutors for human backup.<br /><br />
            Powered by <strong style={{ color: '#FFB81C' }}>Fundisa AI</strong>. A <strong style={{ color: '#FFB81C' }}>Reggie Express (Pty) Ltd</strong> Company.
          </p>
          <div style={{ fontSize: '10px', color: '#64748B', paddingTop: '16px', borderTop: '1px solid #2A3355', marginTop: '16px', opacity: 0.7 }}>
            © 2026 Reggie Express (Pty) Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
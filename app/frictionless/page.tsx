export default function FrictionlessDashboard() {
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
            background: 'linear-gradient(135deg, #FFB81C, #DE3831)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            color: 'white',
            fontWeight: 800
          }}>⚡</div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 800 }}>
              Frictionless <span style={{ color: '#FFB81C' }}>Learner</span>
            </div>
            <div style={{ fontSize: '10px', color: '#64748B' }}>
              Week 1 Blueprint • Siyaphumelela 2026
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            padding: '6px 12px',
            background: '#1E2642',
            border: '1px solid #10B981',
            borderRadius: '20px',
            fontSize: '10px',
            color: '#10B981',
            fontWeight: 700
          }}>🛡️ Source-Grounded RAG</div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#1E2642',
            padding: '6px 12px 6px 6px',
            borderRadius: '20px',
            border: '1px solid #2A3355'
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #FFB81C)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 700,
              color: 'white'
            }}>KM</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '12px', fontWeight: 600 }}>Kagelo Molefe</div>
              <div style={{ fontSize: '10px', color: '#64748B' }}>BSc Eng 1st Year • UP EBIT</div>
            </div>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Dashboard Header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '8px' }}>
            Good morning, Kagelo! 👋 Your Week 1 blueprint is ready.
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.5px' }}>
            Your <span style={{
              background: 'linear-gradient(90deg, #FFB81C, #DE3831)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Daily Study Blueprint</span>
          </h1>
          <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6 }}>
            We've moved from reactive remediation to proactive Week 1 empowerment. Your AI-augmented study routines are designed to eliminate initiation friction and make abstract systems visible from Day 1.
          </p>
        </div>

        {/* Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Initiation Friction Reduced', value: '87%', trend: '↑ 23% vs Week 0', color: '#FFB81C' },
            { label: 'Cognitive Load Optimized', value: '92%', trend: '↑ Working memory freed', color: '#10B981' },
            { label: 'Source Verifications', value: '47', trend: '↑ Zero hallucinations', color: '#6366f1' },
            { label: 'Activation Sparks', value: '18', trend: '↑ This week', color: '#002395' }
          ].map((metric, i) => (
            <div key={i} style={{
              background: '#1E2642',
              border: '1px solid #2A3355',
              borderRadius: '12px',
              padding: '20px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: metric.color
              }}></div>
              <div style={{
                fontSize: '11px',
                color: '#64748B',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontWeight: 600,
                marginBottom: '8px'
              }}>{metric.label}</div>
              <div style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px' }}>{metric.value}</div>
              <div style={{ fontSize: '11px', color: '#10B981', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                {metric.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Protocol Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '24px',
          background: '#1E2642',
          padding: '6px',
          borderRadius: '12px',
          border: '1px solid #2A3355'
        }}>
          {[
            { num: 'Stage 1', label: '⚡ Activate (Pre-Class)' },
            { num: 'Stage 2', label: '🧠 Apply (In-Class)' },
            { num: 'Stage 3', label: '📚 Consolidate (Post-Class)' },
            { num: 'Weekly', label: '💬 Student Voice Protocol' }
          ].map((tab, i) => (
            <button
              key={i}
              style={{
                flex: 1,
                padding: '12px 20px',
                background: i === 0 ? '#FFB81C' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                color: i === 0 ? '#000' : '#94A3B8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <span style={{
                fontSize: '10px',
                background: i === 0 ? 'rgba(255,255,255,0.2)' : 'transparent',
                padding: '2px 8px',
                borderRadius: '6px'
              }}>{tab.num}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Stage 1: Activate Content */}
        <div style={{
          background: '#1E2642',
          border: '1px solid #2A3355',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <div style={{ fontSize: '18px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
              ⚡ Activation Spark Builder
              <span style={{
                fontSize: '10px',
                background: '#FFB81C',
                color: '#000',
                padding: '3px 10px',
                borderRadius: '8px',
                fontWeight: 800
              }}>Gemini</span>
            </div>
          </div>

          <div style={{
            background: '#151B2E',
            border: '1px solid #2A3355',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              color: '#FFB81C',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '12px'
            }}>🎯 4-Part Prompt Anatomy</div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '16px' }}>
              {[
                { label: '1. Role/Tone', value: 'Act as a first-year engineering tutor' },
                { label: '2. Topic', value: 'The Otto cycle thermal efficiency formula' },
                { label: '3. Task', value: 'Break this down into a 3-step micro-explanation' },
                { label: '4. Source Constraint', value: 'Using only fundamentals from my textbook' }
              ].map((part, i) => (
                <div key={i} style={{
                  background: '#0A0E1A',
                  border: '1px solid #2A3355',
                  borderRadius: '8px',
                  padding: '12px'
                }}>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#FFB81C',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>{part.label}</div>
                  <input
                    defaultValue={part.value}
                    style={{
                      width: '100%',
                      background: '#1E2642',
                      border: '1px solid #2A3355',
                      borderRadius: '6px',
                      padding: '8px 12px',
                      color: '#F1F5F9',
                      fontSize: '13px',
                      fontFamily: 'monospace'
                    }}
                  />
                </div>
              ))}
            </div>

            <div style={{
              background: '#0A0E1A',
              border: '1px solid #2A3355',
              borderRadius: '8px',
              padding: '16px',
              fontFamily: 'monospace',
              fontSize: '12px',
              lineHeight: 1.8
            }}>
              <span style={{ color: '#FFB81C', fontWeight: 700 }}>[Role]</span> Act as a first-year engineering tutor.<br />
              <span style={{ color: '#6366f1' }}>[Topic]</span> The Otto cycle thermal efficiency formula.<br />
              <span style={{ color: '#10B981' }}>[Task]</span> Break this down into a 3-step micro-explanation.<br />
              <span style={{ color: '#DE3831' }}>[Source Constraint]</span> Using only fundamentals from my textbook.<br />
              <strong>→ Output as a pre-class study checklist.</strong>
            </div>
          </div>

          <button
            onClick={() => alert('⚡ Activation Spark Generated!\n\nYour 3-step micro-explanation is ready:\n\n1. Thermal efficiency = Net work output / Heat input\n2. For Otto cycle: η = 1 - (1/r^(γ-1))\n3. Where r = compression ratio, γ = specific heat ratio\n\n✓ Source-grounded to textbook Chapter 4\n✓ Reduces initiation friction\n✓ Ready for pre-class review')}
            style={{
              width: '100%',
              padding: '14px',
              background: 'linear-gradient(135deg, #FFB81C, #E6A800)',
              color: '#000',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            ⚡ Generate Activation Spark
          </button>
        </div>

        {/* Case Studies */}
        <div style={{
          background: '#1E2642',
          border: '1px solid #2A3355',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '24px'
        }}>
          <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '20px' }}>
            📊 Longitudinal Case Studies
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {[
              {
                avatar: 'IG',
                avatarBg: 'linear-gradient(135deg, #6366f1, #FFB81C)',
                name: 'Industrial Engineering Graduate',
                meta: 'Nov 2022 - May 2025 • Neurodivergent Learner',
                artefact: 'Key Artefact (May 2025): Used NotebookLM to convert complex PDF textbooks into auditory podcasts, enabling study during commute.',
                outcomes: 'Dean\'s Merit List 2024 (76% average) • Kumba Iron Ore Early Talent Recognition Award',
                badge: '✓ Graduated with Distinction'
              },
              {
                avatar: 'RJ',
                avatarBg: 'linear-gradient(135deg, #10B981, #002395)',
                name: 'Ramiro Jardim',
                meta: 'Current First-Year • BSc Engineering',
                artefact: 'Daily Blueprint: Consistent use of structured planning templates and reflection logs, providing a daily blueprint of AI-augmented engagement.',
                outcomes: '18 Activation Sparks this week • 47 source verifications • Zero hallucinations',
                badge: '✓ Active Engagement'
              }
            ].map((caseStudy, i) => (
              <div key={i} style={{
                background: '#151B2E',
                border: '1px solid #2A3355',
                borderRadius: '12px',
                padding: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: caseStudy.avatarBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontWeight: 800,
                    color: 'white'
                  }}>{caseStudy.avatar}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '3px' }}>{caseStudy.name}</div>
                    <div style={{ fontSize: '11px', color: '#64748B' }}>{caseStudy.meta}</div>
                  </div>
                </div>
                <div style={{
                  background: '#0A0E1A',
                  border: '1px solid #2A3355',
                  borderRadius: '8px',
                  padding: '14px',
                  marginTop: '12px',
                  fontSize: '12px',
                  lineHeight: 1.6
                }}>
                  <strong style={{ color: '#FFB81C' }}>{caseStudy.artefact}</strong>
                  <br /><br />
                  <strong>Outcomes:</strong> {caseStudy.outcomes}
                </div>
                <div style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '4px 10px',
                  background: '#10B981',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: 700
                }}>{caseStudy.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '48px 24px',
        borderTop: '1px solid #2A3355',
        marginTop: '48px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '16px'
        }}>
          {['⚡ Frictionless Learner', '📍 Siyaphumelela 2026', '🧠 Cognitive Load Theory', '⚡ BJ Fogg Model', '📓 NotebookLM RAG', '🛡️ Dignity-Affirming'].map((badge, i) => (
            <span key={i} style={{
              padding: '4px 10px',
              background: '#1E2642',
              border: '1px solid #2A3355',
              borderRadius: '10px',
              fontSize: '10px',
              fontWeight: 700,
              color: i === 0 ? '#FFB81C' : '#94A3B8',
              borderColor: i === 0 ? '#FFB81C' : '#2A3355'
            }}>{badge}</span>
          ))}
        </div>
        <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
          <strong>The Frictionless Learner Framework</strong><br />
          Building a Daily Study Blueprint Through Strategic AI Integration<br />
          Moving from reactive remediation to proactive "Week 1" empowerment.<br />
          Practice-informed pilot generating feasibility and acceptability insights.
        </div>
        <div style={{
          fontSize: '10px',
          color: '#64748B',
          paddingTop: '16px',
          borderTop: '1px solid #2A3355',
          marginTop: '16px',
          opacity: 0.7
        }}>
          © 2026 A Reggie Express (Pty) Ltd initiative. All artefacts shared with written informed consent and pseudonymized.<br />
          Presenter: Reginald Mathule Kanyane, PhD Candidate • Submission ID: 39 • <a href="mailto:Reginald.Kanyane@up.ac.za" style={{ color: '#FFB81C', textDecoration: 'none' }}>Reginald.Kanyane@up.ac.za</a>
        </div>
      </footer>
    </div>
  )
}
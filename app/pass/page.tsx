'use client'

import { useState } from 'react'

export default function StudentPass() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedInstitution, setSelectedInstitution] = useState<string | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleInstitutionSelect = (institution: string) => {
    setSelectedInstitution(institution)
  }

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
          }}>🎓</div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 800 }}>
              Frictionless <span style={{ color: '#FFB81C' }}>Learner</span> Pass
            </div>
            <div style={{ fontSize: '10px', color: '#64748B' }}>Week 1 Empowerment • Siyaphumelela 2026</div>
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
          }}>🛡️ SACE / HPCSA Backed</div>
          <div style={{
            padding: '6px 12px',
            background: '#1E2642',
            border: '1px solid #10B981',
            borderRadius: '20px',
            fontSize: '10px',
            color: '#10B981',
            fontWeight: 700
          }}>🔒 POPIA Compliant</div>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: 'rgba(255,184,28,0.1)',
            border: '1px solid #FFB81C',
            borderRadius: '14px',
            fontSize: '11px',
            fontWeight: 700,
            color: '#FFB81C',
            marginBottom: '16px',
            letterSpacing: '0.5px'
          }}>SIYAPHUMELELA 2026 • WEEK 1 EMPOWERMENT</div>
          <h1 style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-1px' }}>
            Unlock Your <span style={{
              background: 'linear-gradient(90deg, #FFB81C, #DE3831)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Frictionless Learner</span> Blueprint
          </h1>
          <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
            We don't wait for you to fail. We eliminate "initiation friction" by making abstract academic systems visible from Day 1.
          </p>
        </div>

        {/* Stepper */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '48px', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            left: 0,
            right: 0,
            height: '2px',
            background: '#2A3355',
            zIndex: 0
          }}></div>
          {[
            { num: 1, label: 'Verify Status' },
            { num: 2, label: 'Connect Institution' },
            { num: 3, label: 'Activation Spark' }
          ].map((step, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: currentStep >= step.num ? (currentStep > step.num ? '#10B981' : '#FFB81C') : '#1E2642',
                border: `2px solid ${currentStep >= step.num ? (currentStep > step.num ? '#10B981' : '#FFB81C') : '#2A3355'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                margin: '0 auto 8px',
                color: currentStep >= step.num ? (currentStep > step.num ? 'white' : '#000') : '#64748B'
              }}>{currentStep > step.num ? '✓' : step.num}</div>
              <div style={{
                fontSize: '12px',
                fontWeight: 600,
                color: currentStep >= step.num ? (currentStep > step.num ? '#10B981' : '#FFB81C') : '#64748B'
              }}>{step.label}</div>
            </div>
          ))}
        </div>

        {/* Step 1: Verify */}
        {currentStep === 1 && (
          <div style={{
            background: '#1E2642',
            border: '1px solid #2A3355',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '24px'
          }}>
            <div style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              🎓 Step 1: Verify Your 2026 Registration
            </div>
            <div style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px', lineHeight: 1.5 }}>
              Upload your official 2026 Proof of Registration to unlock the Frictionless Learner ecosystem.
            </div>

            <label style={{
              border: '2px dashed #2A3355',
              borderRadius: '12px',
              padding: '40px',
              textAlign: 'center',
              cursor: 'pointer',
              background: '#151B2E',
              display: 'block'
            }}>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📄</div>
              <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>
                {selectedFile ? `✓ ${selectedFile.name}` : 'Click to Upload Proof of Registration'}
              </div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>
                {selectedFile ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB • Ready to verify` : 'PDF, JPG, or PNG • Must be dated 2026'}
              </div>
            </label>

            <button
              onClick={() => setCurrentStep(2)}
              disabled={!selectedFile}
              style={{
                width: '100%',
                padding: '16px',
                background: 'linear-gradient(135deg, #FFB81C, #E6A800)',
                color: '#000',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '16px',
                cursor: selectedFile ? 'pointer' : 'not-allowed',
                marginTop: '24px',
                opacity: selectedFile ? 1 : 0.5
              }}
            >Verify & Continue →</button>
          </div>
        )}

        {/* Step 2: Connect */}
        {currentStep === 2 && (
          <div style={{
            background: '#1E2642',
            border: '1px solid #2A3355',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '24px'
          }}>
            <div style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
              🔗 Step 2: Connect Your Institution
            </div>
            <div style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px', lineHeight: 1.5 }}>
              Link your university portal to enable the "Source Anchor" (NotebookLM RAG).
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {[
                { icon: 'C', name: 'UP ClickUP', desc: 'Sync modules & assignments', bg: 'linear-gradient(135deg, #6366f1, #DE3831)' },
                { icon: 'U', name: 'UPRS Diagnostic', desc: 'Readiness survey integration', bg: 'linear-gradient(135deg, #FFB81C, #007A4D)' },
                { icon: 'W', name: 'Wits University', desc: 'Self-managed learning portal', bg: 'linear-gradient(135deg, #DE3831, #FFB81C)' },
                { icon: 'U', name: 'UCT Vula', desc: 'Course management sync', bg: 'linear-gradient(135deg, #007A4D, #002395)' }
              ].map((inst, i) => (
                <div
                  key={i}
                  onClick={() => handleInstitutionSelect(inst.name)}
                  style={{
                    background: selectedInstitution === inst.name ? 'rgba(255,184,28,0.05)' : '#151B2E',
                    border: `2px solid ${selectedInstitution === inst.name ? '#FFB81C' : '#2A3355'}`,
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: inst.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontWeight: 800,
                    color: 'white'
                  }}>{inst.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '2px' }}>{inst.name}</div>
                    <div style={{ fontSize: '11px', color: '#64748B' }}>{inst.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCurrentStep(3)}
              disabled={!selectedInstitution}
              style={{
                width: '100%',
                padding: '16px',
                background: 'linear-gradient(135deg, #FFB81C, #E6A800)',
                color: '#000',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '16px',
                cursor: selectedInstitution ? 'pointer' : 'not-allowed',
                marginTop: '24px',
                opacity: selectedInstitution ? 1 : 0.5
              }}
            >Connect & Continue →</button>
          </div>
        )}

        {/* Step 3: Activation */}
        {currentStep === 3 && (
          <div style={{
            background: '#1E2642',
            border: '1px solid #2A3355',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '24px'
          }}>
            <div style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
              ⚡ Step 3: Your First "Activation Spark"
            </div>
            <div style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px', lineHeight: 1.5 }}>
              We use BJ Fogg's Behavior Model to eliminate decision fatigue.
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '24px' }}>
              {[
                { stage: 'Stage 1: Activate (Pre-Class)', title: 'Gemini Spark', desc: 'Translates impenetrable jargon into a 3-step micro-explanation.' },
                { stage: 'Stage 2: Apply (In-Class)', title: 'Active Engagement', desc: 'Human-led collaborative problem solving with mind maps.' },
                { stage: 'Stage 3: Consolidate (Post)', title: 'NotebookLM Anchor', desc: 'Source-anchored reflection. Eliminates hallucinations.' }
              ].map((protocol, i) => (
                <div key={i} style={{
                  background: '#151B2E',
                  border: '1px solid #2A3355',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    color: '#FFB81C',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '8px'
                  }}>{protocol.stage}</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, marginBottom: '6px' }}>{protocol.title}</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5 }}>{protocol.desc}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => alert('⚡ Activation Spark Generated!\n\nWelcome to the Frictionless Learner ecosystem.\n\nYour "Week 1" blueprint is ready.\nConnected to: ' + selectedInstitution + '\n\nRedirecting to your Frictionless Learner Dashboard...')}
              style={{
                width: '100%',
                padding: '16px',
                background: 'linear-gradient(135deg, #FFB81C, #E6A800)',
                color: '#000',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '16px',
                cursor: 'pointer',
                marginTop: '24px'
              }}
            >🚀 Generate My First Spark & Enter Portal</button>
          </div>
        )}
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
          {['🏛️ Reggie Express', '🛡️ SACE / HPCSA Backed', '🔒 POPIA Compliant', '🧠 Cognitive Load Theory', '⚡ BJ Fogg Model', '☁️ 1M Qwen Tokens'].map((badge, i) => (
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
        <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
          The Frictionless Learner Framework • Siyaphumelela 2026<br />
          Moving from reactive remediation to proactive "Week 1" empowerment.
        </div>
        <div style={{ fontSize: '10px', color: '#64748B', paddingTop: '16px', borderTop: '1px solid #2A3355', marginTop: '16px', opacity: 0.7 }}>
          © 2026 A Reggie Express (Pty) Ltd initiative. All artefacts shared with written informed consent and pseudonymized.
        </div>
      </footer>
    </div>
  )
}
import './App.css'

function App() {
  return (
    <div className="app">
      {/* 顶部导航 */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-mark">
            <span></span>
          </div>

          <span className="logo-text">MOON LAB</span>
        </div>

        <a
          className="github-link"
          href="https://github.com/tyrains/moon-lab"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <span>↗</span>
        </a>
      </header>

      {/* 主视觉 */}
      <main>
        <section className="hero">
          <div className="hero-glow"></div>

          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              DIGITAL EXPERIMENT LAB
            </div>

            <h1>
              Welcome to
              <br />
              <span>Moon Lab.</span>
            </h1>

            <p className="hero-description">
              一个属于我的数字实验室。
              <br />
              Explore technology, build ideas, and turn curiosity into reality.
            </p>

            <div className="hero-actions">
              <a href="#labs" className="button button-primary">
                探索实验室
                <span>↓</span>
              </a>

              <a
                href="https://github.com/tyrains/moon-lab"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                GitHub
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="scroll-hint">
            <span></span>
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* 实验室 */}
        <section className="labs" id="labs">
          <div className="section-heading">
            <div>
              <span className="section-label">01 / LABS</span>
              <h2>探索我的实验室</h2>
            </div>

            <p>
              从 Web 开发到 AI，
              <br />
              从数字能源到各种技术实验。
            </p>
          </div>

          <div className="lab-grid">
            <article className="lab-card">
              <div className="card-number">01</div>

              <div className="card-icon">◌</div>

              <h3>Web Lab</h3>

              <p>
                探索现代 Web 开发技术，
                从 React、Vite 到全栈应用。
              </p>

              <span className="card-arrow">↗</span>
            </article>

            <article className="lab-card">
              <div className="card-number">02</div>

              <div className="card-icon">✦</div>

              <h3>AI Lab</h3>

              <p>
                AI 模型、智能 Agent、
                知识库与各种人工智能实验。
              </p>

              <span className="card-arrow">↗</span>
            </article>

            <article className="lab-card">
              <div className="card-number">03</div>

              <div className="card-icon">⌁</div>

              <h3>Energy Lab</h3>

              <p>
                节能降碳、能源管理、
                能碳分析与数字能源探索。
              </p>

              <span className="card-arrow">↗</span>
            </article>
          </div>
        </section>

        {/* 关于 */}
        <section className="about">
          <span className="section-label">02 / ABOUT</span>

          <div className="about-content">
            <h2>
              Curiosity
              <br />
              <span>drives everything.</span>
            </h2>

            <p>
              Moon Lab 是一个持续成长的个人实验空间。
              在这里记录想法、尝试技术、构建项目，
              也记录那些值得留下来的探索。
            </p>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-logo">
          <div className="logo-mark small">
            <span></span>
          </div>

          <span>MOON LAB</span>
        </div>

        <span>© 2026 Moon Lab</span>

        <span>Built with React + Vite</span>
      </footer>
    </div>
  )
}

export default App

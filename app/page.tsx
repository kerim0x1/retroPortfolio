// Retro Windows 98 style landing page for Kerim

export default function Home() {
  return (
    <main>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Kerim — Windows 98 Edition</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body portfolio-content">
          <div className="portfolio-section">
            <h2>About Me</h2>
            <div className="profile-container">
              <div className="profile-text">
                <p>
                  Hey, I'm Kerim, a self-taught Full-Stack Developer & UI/UX Designer with a focus on
                  scalability and performance. I've been immersed in programming for over 10 years,
                  starting at the age of 9, and now at 19, I continue to expand my expertise.
                </p>
                <div className="divider"></div>
                <div className="sub-section">
                  <h3>Professional Profile</h3>
                  <p>
                    As an independent developer, I have extensive experience in designing, developing,
                    and optimizing modern web applications, all self-taught. My expertise lies in building
                    scalable systems with MySQL and modern frameworks like NextJS, VueJS, and NuxtJS.
                  </p>
                  <p>
                    I specialize in creating high-performance database structures and API endpoints for
                    dynamic applications with heavy user loads. My frontend development with NextJS
                    emphasizes Clean Code, accessibility, responsive UI, and design systems.
                  </p>
                  <p>
                    I implement performance-optimized websites using best practices for Pagespeed,
                    caching, lazy loading, compression, and Lighthouse optimization. Additionally, I have
                    years of experience in on-page SEO strategies, structured content optimization,
                    semantic HTML, OpenGraph optimization, and meta tags for top Google rankings.
                  </p>
                  <p>
                    My design-oriented work includes tools like Figma, Framer, and the entire Adobe
                    Creative Cloud (Photoshop, After Effects, Illustrator). I also have solid knowledge in
                    web hosting and DevOps, including Vercel, domain management, CI/CD, and performance
                    debugging.
                  </p>
                  <p>
                    I excel in fast-paced software project execution with proficiency in touch typing and
                    rapid implementation speed.
                  </p>
                </div>
                <div className="divider"></div>
                <div className="sub-section">
                  <h3>Technical Skills</h3>
                  <p><strong>Frameworks, Runtimes & Libraries:</strong> Next.js, Nuxt.js, Node.js, Rust, shadcn/ui, Tailwind CSS, Prisma</p>
                  <p><strong>Design & Tools:</strong> Figma, Framer, Adobe Photoshop, After Effects, Illustrator, Creative Cloud</p>
                  <p><strong>Performance & SEO:</strong> Core Web Vitals, On-page SEO, Lighthouse, Pagespeed Optimization, Structured Data</p>
                  <p><strong>Infrastructure & Hosting:</strong> Vercel, GitHub, GitHub Desktop</p>
                  <p><strong>Additional Tools:</strong> Notion</p>
                </div>
                <div className="divider"></div>
                <div className="sub-section">
                  <h3>Skid Tools</h3>
                  <p><strong>Windsurf</strong> - My AI-powered IDE and agentic coding assistant for rapid, reliable development.</p>
                  <p><strong>GPT-5</strong> - Advanced model I use for planning, reasoning, and automation across projects.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-section">
            <h2>Leisure & Interests</h2>
            <div className="sub-section">
              <p><strong>Motorsport Enthusiast</strong> - Actively engaged in racing with a personal racing kit.</p>
            </div>
            <div className="divider"></div>
            <div className="sub-section">
              <p><strong>AI Development</strong> - Developing personal AI agents and experimenting with machine learning.</p>
            </div>
            <div className="divider"></div>
            <div className="sub-section">
              <p><strong>Passion for Technology</strong> - Keen interest in web technologies, design trends, and innovative tools.</p>
            </div>
            <div className="divider"></div>
            <div className="sub-section">
              <p><strong>Continuous Learning</strong> - Committed to self-taught learning and constant skill development.</p>
            </div>
          </div>

          <div className="portfolio-section">
            <h2>Contact</h2>
            <div className="sub-section">
              <p>
                Email: <a href="mailto:contact@kerim0x1.com">contact@kerim0x1.com</a>
              </p>
            </div>
            <div className="divider"></div>
            <div className="sub-section">
              <p>
                Website: <a href="https://kerim0x1.com" target="_blank" rel="noopener noreferrer">kerim0x1.com</a>
              </p>
            </div>
            <div className="divider"></div>
            <div className="sub-section">
              <p>
                Twitter: <a href="https://x.com/kerim0x1" target="_blank" rel="noopener noreferrer">@kerim0x1</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

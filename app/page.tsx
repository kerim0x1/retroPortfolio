// Retro Windows 98 style landing page for Kerim

export default function Home() {
  return (
    <main>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Kerim's Portfolio - Windows 98 Edition</div>
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
            <h2>Projects & Achievements</h2>
            <div className="sub-section">
              <h3>Highlighted Projects</h3>
              <p>I've worked on a variety of impactful projects, including:</p>
              <div className="project-list">
                <div className="project-item"><strong>Windows System Optimization Software with AI Support</strong> - Developed a custom software to enhance Windows system performance with an integrated AI agent.</div>
                <div className="project-item"><strong>Full-Stack Websites with SEO Optimization</strong> - Launched multiple websites achieving a 99/100 Lighthouse rating through meticulous optimization.</div>
                <div className="project-item"><strong>Real-Time Dashboards</strong> - Created high-performance dashboards with live data integration for seamless user experiences.</div>
                <div className="project-item"><strong>Real Estate and E-Commerce Client Sites</strong> - Delivered complete solutions from design to code for various client projects.</div>
                <div className="project-item"><strong>Consulting on Load Times and UX</strong> - Provided expert advice to optimize loading times and improve user experience for external projects.</div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="sub-section">
              <h3>Project Portfolio</h3>
              <p>Below are some of the projects I've developed or contributed to:</p>
              <div className="project-list">
                <div className="project-item"><a href="https://www.wibify.de/" target="_blank" rel="noopener noreferrer">Wibify</a> - My own digital agency offering innovative web solutions.</div>
                <div className="project-item"><a href="https://umzugsservice-swiss.ch/" target="_blank" rel="noopener noreferrer">Umzugsservice Swiss</a> - A moving service platform in Switzerland.</div>
                <div className="project-item"><a href="https://production-order.com/" target="_blank" rel="noopener noreferrer">Production Order</a> - A platform for managing production orders.</div>
                <div className="project-item"><a href="https://www.gesund-zufuss.de/" target="_blank" rel="noopener noreferrer">Gesund Zu Fuß</a> - A health-focused website promoting walking for wellness.</div>
                <div className="project-item"><a href="https://www.autogutachten.info/" target="_blank" rel="noopener noreferrer">Auto Gutachten</a> - A site for car appraisals and expert opinions.</div>
                <div className="project-item"><a href="https://unfallfix24.de/" target="_blank" rel="noopener noreferrer">Unfallfix24</a> - A service for quick accident repairs and support.</div>
                <div className="project-item"><a href="https://win-tweaks.com/" target="_blank" rel="noopener noreferrer">Win Tweaks</a> - My Windows optimization tool with AI integration.</div>
                <div className="project-item"><a href="http://eiscafelisa.de" target="_blank" rel="noopener noreferrer">Eiscafe Lisa</a> - A website for a local ice cream cafe.</div>
                <div className="project-item"><a href="http://viralvision-management.com" target="_blank" rel="noopener noreferrer">ViralVision Management</a> - A management service for viral marketing campaigns.</div>
                <div className="project-item"><a href="https://www.service-alltagshelfer.de/" target="_blank" rel="noopener noreferrer">Service Alltagshelfer</a> - A platform for everyday assistance services.</div>
                <div className="project-item"><a href="https://rscartec.de/" target="_blank" rel="noopener noreferrer">RS Cartec</a> - A car service and repair website.</div>
                <div className="project-item"><a href="https://automobilzentrumrheinneckar.vercel.app/" target="_blank" rel="noopener noreferrer">Automobilzentrum Rhein-Neckar</a> - A car center service platform.</div>
                <div className="project-item"><a href="https://custom-forms-brown.vercel.app/" target="_blank" rel="noopener noreferrer">Custom Forms</a> - A customizable form-building tool.</div>
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
              <p>Email: myemail@example.com</p>
            </div>
            <div className="divider"></div>
            <div className="sub-section">
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

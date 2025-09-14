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
                        <h3>About Me</h3>
                        <div className="profile-container">
                            <div className="profile-text">
                                <p>
                                    I&#39;m Kerim, 19. I started coding at 9 by hosting and scripting Java-based Minecraft servers —
                                    that&rsquo;s where I discovered my passion for building and shipping software.
                                </p>
                                <p>
                                    Soon after, I moved from games to the web: my first HTML/JS projects were small utilities like
                                    a calculator and a mind‑map. I picked up UI/UX with Figma and then transitioned to Nuxt.js, where
                                    I built scalable systems such as booking/appointment apps, admin dashboards, and end‑to‑end software solutions.
                                </p>
                                <p>
                                    Today my primary stack is Next.js + Electron.js with Prisma, shadcn/ui, and Tailwind CSS,
                                    deployed on Vercel with GitHub and GitHub Desktop. I care deeply about maximum performance and SEO.
                                    I also work with Notion and Framer, alongside the Adobe Creative Cloud suite.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="sub-section">
                        <h4>Professional Profile</h4>
                        <p>
                            I design, develop, and optimize modern applications end‑to‑end — from UI/UX and component
                            systems to data modeling and deployment. I&rsquo;ve delivered scalable booking systems, admin
                            dashboards, and complete software solutions.
                        </p>
                        <p>
                            On the frontend I work component‑driven with shadcn/ui and Tailwind CSS, focusing on
                            accessibility and clean, maintainable code. On the backend I use Prisma for robust schemas
                            and type‑safe data access, shaping APIs for performance and great developer experience.
                        </p>
                        <p>
                            I ship via Vercel with GitHub and GitHub Desktop, and I tune Core Web Vitals with caching,
                            lazy loading, and compression to reach excellent Lighthouse scores.
                        </p>
                    </div>
                    <div className="divider"></div>
                    <div className="sub-section">
                        <h4>Technical Skills</h4>
                        <p><strong>Frameworks, Runtimes & Libraries:</strong> Next.js, Nuxt.js, Electron.js, Prisma, shadcn/ui, Tailwind CSS</p>
                        <p><strong>Design & Tools:</strong> Figma, Framer, Adobe Creative Cloud (Photoshop, After Effects, Illustrator)</p>
                        <p><strong>Performance & SEO:</strong> Core Web Vitals, On‑page SEO, Lighthouse, Pagespeed Optimization, Structured Data</p>
                        <p><strong>Infrastructure & Hosting:</strong> Vercel, GitHub, GitHub Desktop</p>
                        <p><strong>Additional Tools:</strong> Notion</p>
                    </div>
                    <div className="divider"></div>
                    <div className="sub-section">
                        <h4>Skid Tools</h4>
                        <p><strong>Windsurf</strong> — AI‑powered IDE and agentic coding assistant for rapid, reliable development.</p>
                        <p><strong>GPT‑5</strong> — Advanced model for planning, reasoning, and automation across projects.</p>
                    </div>

                    <div className="portfolio-section">
                        <h3>Leisure & Interests</h3>
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
                        <h3>Contact</h3>
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

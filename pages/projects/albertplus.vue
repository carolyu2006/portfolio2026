<template>
<AppHeader />
        <img class="hero-image" src="/assets/images/projects/albertplus/cover.webp" alt="Albert Plus">

        <div class="content">
            <div class="project-header-container">
                <div class="project-header">
                    <h4 class="tag" style="background-color: #EEE2FF;">2025</h4>

                    <h1>Albert Plus</h1>
                    <h3>A redesigned companion for NYU’s Albert — integrating course search, bulletin information, and
                        timetable planning into one connected flow so students can make registration decisions faster
                        and with less stress.</h3>
                </div>
                <div class="button-container">
                    <button class="button" onclick="window.location.href='https://www.intertabs.com/'"
                        target="_blank">View
                        Official Website</button>
                    <!-- <button class="button"
                        onclick="window.location.href='https://chromewebstore.google.com/detail/intertabs/ggofillocibganndbabgcplbefnhadao'"
                        target="_blank">Get Extension</button>
                    <button class="button" onclick="window.location.href='https://devpost.com/software/intertabs'"
                        target="_blank">Devpost</button> -->
                </div>
            </div>

            <div class="key-info">
                <div class="key-info-item">
                    <h3>TIMELINE</h3>
                    <p>Sep 2025 - Dec 2025</p>
                </div>
                <div class="key-info-item">
                    <h3>TEAM</h3>
                    <p>Case study w/ Charles Zhang</p>
                    <p>Tech@NYU Dev Team</p>
                </div>
                <div class="key-info-item">
                    <h3>ROLE</h3>
                    <p>Designer & Frontend Developer</p>

                </div>
                <div class="key-info-item">
                    <h3>SKILLS</h3>
                    <p> Figma, Typescript, Next.js, Convex </p>
                </div>
            </div>

            <!-- Problem statement -->
            <div class="problem-statement-container">
                <div class="problem-statement" style="background-color: #EEE2FF;">
                    <h3>How can NYU students search courses and plan their degree more efficiently?</h3>
                    <p><b>Target Audience:</b> <span style="margin-left: 10px;">NYU Students.</span></p>
                </div>
            </div>

            <!-- Problem research -->
            <section>
                <h2>PROBLEMS</h2>
                <h3>The current Albert system has four key pain points that consistently frustrate students during
                    registration.</h3>
                <div class="analysis-block">
                    <div class="analysis-images">
                        <img src="/assets/images/projects/albertplus/issue.webp"
                            alt="Albert current UI – course search modal">
                        <img src="/assets/images/projects/albertplus/issue2.webp"
                            alt="Albert current UI – course detail view">
                    </div>
                    <div class="analysis-items-grid">
                        <div class="analysis-item analysis-item-bad">
                            <h3>Messy UI/UX</h3>
                            <p>Cluttered and outdated — too many clicks, dense text with no visual hierarchy, and pop-up
                                modals that hinder scanning.</p>
                        </div>
                        <div class="analysis-item analysis-item-bad">
                            <h3>Hard to Search &amp; Find Courses</h3>
                            <p>15+ filter dropdowns return plain text lists with no way to compare sections, professors,
                                or timings side by side.</p>
                        </div>
                        <div class="analysis-item analysis-item-bad">
                            <h3>No Course Planning Support</h3>
                            <p>No built-in way to track degree requirements or see what courses still need to be
                                completed.</p>
                        </div>
                        <div class="analysis-item analysis-item-bad">
                            <h3>Can’t Preview Calendar</h3>
                            <p>No calendar preview before committing — students can’t spot conflicts or build a balanced
                                schedule without registering first.</p>
                        </div>
                    </div>
                </div>
            </section>


            <!-- Features -->
            <section id="features">
                <h2>SOLUTION</h2>
                <div class="features-container-wrapper">
                    <div class="features-container">
                        <div class="feature-item">
                            <video autoplay muted loop playsinline>
                                <source src="/assets/images/projects/albertplus/feature3.mov" type="video/mp4">
                            </video>
                        </div>
                        <div class="feature-description">
                            <h3>Smart Course Search</h3>
                            <p>Easy to find courses by navigating easily through school and major. Have filters and
                                search bar to help you find the course you want.</p>
                        </div>
                    </div>

                    <div class="features-container">
                        <div class="feature-item">
                            <video autoplay muted loop playsinline>
                                <source src="/assets/images/projects/albertplus/feature2.mov" type="video/mp4">
                            </video>
                        </div>
                        <div class="feature-description">
                            <h3>AI-powered course detail & Save courses</h3>
                            <p>Clearly sees all course info and get AI summary of the course. Save courses to your
                                account and access them anytime.</p>
                        </div>
                    </div>

                    <div class="features-container">
                        <div class="feature-item">
                            <video autoplay muted loop playsinline>
                                <source src="/assets/images/projects/albertplus/feature4.mov" type="video/mp4">
                            </video>
                        </div>
                        <div class="feature-description">
                            <h3>Time Table Builder</h3>
                            <p>Build your own time table by adding courses and see how it looks like. You can save
                                multiple time tables and compare different course plans.</p>
                        </div>
                    </div>

                    <div class="features-container">
                        <div class="feature-item">
                            <video autoplay muted loop playsinline>
                                <source src="/assets/images/projects/albertplus/feature1.mov" type="video/mp4">
                            </video>
                        </div>
                        <div class="feature-description">
                            <h3>4 Year Plan Builder</h3>
                            <p>Build your own 4 year plan by adding courses and see how it looks like. You can also see
                                the bulletin requirements of your major and minors and see if you are on track to
                                graduate.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>

                <h2>FIGMA PROTOTYPE</h2>
                <iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; height: 75vh;"
                    src="https://embed.figma.com/proto/7yjtGk13BUvr7oNGfl6HPI/Albert-Plus?page-id=1%3A83&node-id=371-5836&viewport=404%2C-2415%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=371%3A6071&embed-host=share"
                    loading="lazy" allowfullscreen></iframe>
            </section>

            <!-- Process & Visual Design -->
            <section class="process-section">
                <h2>PROCESS</h2>
                <br>
                <h3>USER RESEARCH</h3>
                <p>I interviewed 20+ NYU students to understand how they really feel about the course selection system.
                    </p>
                    <!-- <img class="content-wide" src="/assets/images/projects/albertplus/interview.webp" alt="Interview notes from NYU student research" style="margin-top: 20px; border-radius: 10px;"> -->
                <div class="interview-quotes-grid">
                    <div class="interview-quote-card">
                        <span class="interview-quote-mark">"</span>
                        <p>I have to click through so many pages just to find one course. The interface feels like it
                            was built in 2005 and never touched since.</p>
                        <span class="interview-quote-author">— Junior, CAS</span>
                    </div>
                    <div class="interview-quote-card">
                        <span class="interview-quote-mark">"</span>
                        <p>There's no good way to compare two sections of the same class. I have to open like five tabs
                            and flip back and forth.</p>
                        <span class="interview-quote-author">— Sophomore, Stern</span>
                    </div>
                    <div class="interview-quote-card">
                        <span class="interview-quote-mark">"</span>
                        <p>I genuinely don't know if I'm on track to graduate. Albert gives me a checklist but I still
                            have to manually figure it out every semester.</p>
                        <span class="interview-quote-author">— Senior, Tandon</span>
                    </div>
                    <div class="interview-quote-card">
                        <span class="interview-quote-mark">"</span>
                        <p>I accidentally enrolled in two classes that overlap because there's no calendar preview. I
                            didn't find out until the first week of class.</p>
                        <span class="interview-quote-author">— Junior, Gallatin</span>
                    </div>
                </div>
                <br>


                <h3 style="margin-top: 40px;">Existing Alternative — Einstein</h3>
                <p style="color: var(--color-gray); line-height: 1.6; margin-bottom: 16px;">Einstein is a student-built
                    tool offering a cleaner course list and timetable builder, but it still falls short in key ways:</p>
                <div class="analysis-block">
                    <div class="analysis-images">
                        <img src="/assets/images/projects/albertplus/issue3.webp" alt="Einstein – course search view">
                        <img src="/assets/images/projects/albertplus/issue4.webp"
                            alt="Einstein – timetable planner view">
                    </div>
                    <div class="analysis-columns">
                        <div class="analysis-col analysis-col-good">
                            <div class="analysis-col-header">
                                <span class="analysis-col-label">✓ What Works</span>
                            </div>
                            <div class="analysis-item analysis-item-good">
                                <h3>Cleaner Than Albert</h3>
                                <p>More readable course list with less visual noise than the original Albert interface.
                                </p>
                            </div>
                            <div class="analysis-item analysis-item-good">
                                <h3>All Course Info in One Place</h3>
                                <p>Course details, times, professor, and credits are all visible without navigating away
                                    — easy to scan and compare.</p>
                            </div>
                            <div class="analysis-item analysis-item-good">
                                <h3>Built-in Timetable Builder</h3>
                                <p>Students can preview their weekly schedule before committing — a useful step the
                                    original Albert lacks entirely.</p>
                            </div>
                        </div>
                        <div class="analysis-col analysis-col-bad">
                            <div class="analysis-col-header">
                                <span class="analysis-col-label">✗ Issues</span>
                            </div>
                            <div class="analysis-item analysis-item-bad">
                                <h3>Visually Overwhelming</h3>
                                <p>Bright, saturated course cards with no clear logic create a loud patchwork that makes
                                    scanning harder, not easier.</p>
                            </div>
                            <div class="analysis-item analysis-item-bad">
                                <h3>Hard to Navigate</h3>
                                <p>Small, unlabelled school filter icons and no clear hierarchy make it hard to move
                                    from search to selecting and adding a course.</p>
                            </div>
                            <div class="analysis-item analysis-item-bad">
                                <h3>Calendar Feature is Hard to Use</h3>
                                <p>No conflict or credit-load feedback. Switching between Favorites and numbered
                                    Schedules is unintuitive and easy to lose track of.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 style="margin-top: 56px;">Existing Alternative — Paper (Northwestern)</h3>
                <p style="color: var(--color-gray); line-height: 1.6; margin-bottom: 16px;">Paper is a course planning
                    tool used at Northwestern that introduces smart multi-year planning and a fluid schedule builder —
                    but its interface works against its own strengths:</p>
                <div class="analysis-block">
                    <div class="analysis-images">
                        <img src="/assets/images/projects/albertplus/issue-6.webp" alt="Paper – 4-year plan view">
                        <img src="/assets/images/projects/albertplus/issue-5.webp" alt="Paper – schedule builder view">
                    </div>
                    <div class="analysis-columns">
                        <div class="analysis-col analysis-col-good">
                            <div class="analysis-col-header">
                                <span class="analysis-col-label">✓ What Works</span>
                            </div>
                            <div class="analysis-item analysis-item-good">
                                <h3>Smart 4-Year Plan</h3>
                                <p>Drag-and-drop courses into a year-by-year grid makes long-term degree planning
                                    intuitive and visual — a feature missing from most course tools.</p>
                            </div>
                            <div class="analysis-item analysis-item-good">
                                <h3>Course-to-Schedule Flow</h3>
                                <p>Searching a course and adding it directly into a live calendar preview is seamless —
                                    students can spot conflicts before committing.</p>
                            </div>
                        </div>
                        <div class="analysis-col analysis-col-bad">
                            <div class="analysis-col-header">
                                <span class="analysis-col-label">✗ Issues</span>
                            </div>
                            <div class="analysis-item analysis-item-bad">
                                <h3>Cluttered, Hard to Read</h3>
                                <p>Dense information and inconsistent visual hierarchy across Plan and Schedule views
                                    make it difficult to know where to focus at any given step.</p>
                            </div>
                            <div class="analysis-item analysis-item-bad">
                                <h3>Disconnected Navigation</h3>
                                <p>Switching between the planning grid and the weekly schedule feels like two separate
                                    products — no clear through-line guides the user from search to plan to register.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br> 
                <br>

                <div class="problem-statement-container">
                    <div class="problem-statement" style="background-color: #EEE2FF;">
                        <h3><b style="margin-right: 10px;">Conclusion:</b> Create a clear and simple tool with easy and
                            smart navigation that helps users
                            search courses easily and plan their degree more efficiently.</h3>
                    </div>
                </div>
                <br>

                <br>
                <p>From design system foundations to full hi-fi screens — I built Albert Plus iteratively in Figma,
                    establishing components, layout patterns, and visual language before moving into refined interface
                    explorations.</p>

                <!-- Components row (full width) -->
                <div style="width: 100%; margin-top: 24px; margin-bottom: 24px;">
                    <img src="/assets/images/projects/albertplus/process-components.webp"
                        alt="Albert Plus – Figma components and design system" style="width: 100%; height: auto;">
                </div>

                <!-- Flow + visual identity side by side -->
                <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 32px; width: 100%;">
                    <div style="flex: 1 1 0;">
                        <img src="/assets/images/projects/albertplus/process.webp"
                            alt="Albert Plus – wireframe and screen iterations" style="width: 100%; height: auto;">
                    </div>
                    <div style="flex: 0 0 320px; display: flex; flex-direction: column; gap: 16px;">
                        <img src="/assets/images/projects/albertplus/visualdesign.webp"
                            alt="Albert Plus visual design — logo and branding" style="width: 100%; height: auto;">
                    </div>
                </div>
                <br>

                <br>
                <h3>DESIGN DECISIONS</h3>
                <p>I didn't treat this as a set of separate features — I designed "search → review → schedule" as one
                    continuous, connected flow.</p>

                <div style="display: flex; flex-direction: row; gap: 24px; margin-top: 32px;">
                    <div
                        style="flex: 1; display: flex; flex-direction: column; gap: 12px; padding: 24px; background: #f4edff;">
                        <span
                            style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #9B7FD4;">01</span>
                        <h3 style="margin: 0;">Connecting the Flow</h3>
                        <p style="color: var(--color-gray); line-height: 1.65; margin: 0; font-size: 14px;">Albert
                            forces students to jump between search, bulletin, and timetable separately. I designed these
                            as one continuous journey — state carries forward instead of resetting.</p>
                    </div>
                    <div
                        style="flex: 1; display: flex; flex-direction: column; gap: 12px; padding: 24px; background: #f4edff;">
                        <span
                            style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #9B7FD4;">02</span>
                        <h3 style="margin: 0;">Pages That Influence Each Other</h3>
                        <p style="color: var(--color-gray); line-height: 1.65; margin: 0; font-size: 14px;">Selecting a
                            course updates the timetable live. Adjusting a time slot filters the course list back. Users
                            never re-enter information — the interface keeps everything in sync.</p>
                    </div>
                    <div
                        style="flex: 1; display: flex; flex-direction: column; gap: 12px; padding: 24px; background: #f4edff;">
                        <span
                            style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #9B7FD4;">03</span>
                        <h3 style="margin: 0;">See Results, Not Data</h3>
                        <p style="color: var(--color-gray); line-height: 1.65; margin: 0; font-size: 14px;">Core details
                            surface first; additional context expands on demand. Students see outcomes directly instead
                            of having to process raw data themselves.</p>
                    </div>
                </div>
                <br>

                <!-- Trade-off -->
                <span
                    style="font-size: 14px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #7f5cc3; white-space: nowrap; padding-top: 3px;">Trade-off</span>
                <p style="font-size: 15px; color: var(--color-gray); line-height: 1.7; margin: 0;">More information
                    means better decisions — but also higher cognitive cost. I resolved this with layered disclosure:
                    key details always visible, deeper context revealed on demand.</p>
            </section>

            <!-- Reflection -->
            <section>
                <h2>REFLECTION</h2>
                <p>This project was a great learning experience for me. I learned a lot about how to create useful tools
                    with complex user experiences, and how design can be used to create much better workflow and
                    experience. Really bringing the concepts into practice.</p>
                <br>

                <h3>Two key takeaways from this project:</h3>


                <div style="display: flex; flex-direction: row; gap: 24px; margin-top: 12px;">
                    <div
                        style="flex: 1; display: flex; flex-direction: column; gap: 12px; padding: 24px; background: #f7f3ff;">
                        <h3 style="margin: 0;">Fragmented Flows are the Real Problem</h3>
                        <p style="color: var(--color-gray); line-height: 1.65; margin: 0; font-size: 14px;">Complex
                            systems feel overwhelming not because they lack features, but because their flows are split
                            across too many disconnected surfaces. The challenge here was reassembling those pieces into
                            one natural path.</p>
                    </div>

                    <div
                        style="flex: 1; display: flex; flex-direction: column; gap: 12px; padding: 24px; background: #f7f3ff;">
                        <h3 style="margin: 0;">Design as Flow Reorganisation</h3>
                        <p style="color: var(--color-gray); line-height: 1.65; margin: 0; font-size: 14px;">The value
                            wasn't adding features — it was reordering the sequence. Search, options, and schedule
                            visible together in sync makes decisions faster and far less stressful.</p>
                    </div>
                </div>
            </section>

            <section class="next-project-section">
                <h1 style="font-size: 24px;">More Projects</h1>
                <div class="next-projects-container">
                    <a class="next-project-card" href="/projects/intertabs">
                        <div class="next-project-image">
                            <img src="/assets/images/covers/intertabs.webp" alt="interTabs">
                        </div>
                        <div class="next-project-content">
                            <h2>interTabs</h2>
                            <p>An AI-powered Chrome extension that syncs your research across tabs and sessions.</p>
                        </div>
                    </a>
                    <a class="next-project-card" href="/projects/paletteu">
                        <div class="next-project-image">
                            <img src="/assets/images/covers/paletteu.webp" alt="Palette U">
                        </div>
                        <div class="next-project-content">
                            <h2>Palette U</h2>
                            <p>A color palette generator that creates palettes based on user preferences.</p>
                        </div>
                    </a>
                </div>
            </section>

        </div>

        <AppFooter />
</template>

<script setup>
useHead({
  title: 'Albert Plus',
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/project.css' }
  ],
  script: [
    { src: '/js/script.js', body: true },
    { src: '/js/project.js', body: true }
  ]
});
</script>

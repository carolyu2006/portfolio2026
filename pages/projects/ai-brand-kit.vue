<template>
  <AppHeader hero="dark" />
  <img class="hero-image" src="/assets/images/projects/ai-brand-kit/cover.webp" alt="AI Brand Kit cover">

  <div class="content">
    <section class="project-header-container">
      <div class="project-header">
        <h4 class="tag" style="background-color:#FFB0A3;">2026</h4>
        <h1>AI Brand Kit</h1>
        <h3>Partnering with TikTok Life Services to help an AI agent generate on-brand H5 pages and header images.</h3>
      </div>
    </section>

    <section class="key-info" aria-label="Project details">
      <div class="key-info-item"><h3>TIMELINE</h3><p>2026 June - August</p></div>
      <div class="key-info-item"><h3>TEAM</h3><p>1 Product Manager, 3 Developers, 3 Operations</p></div>
      <div class="key-info-item"><h3>ROLE</h3><p>AI Product Design Intern @TikTok</p></div>
      <div class="key-info-item"><h3>SKILLS</h3><p>Agent Design, Prompt Engineering</p></div>
    </section>

    <section id="overview">
      <h2>OVERVIEW</h2>
      <h3 class="overview-intro">Life Services teams constantly need to create campaign visuals and H5 pages that feel polished, branded, and ready to use. I designed a two-skill workflow that moves an AI agent from a campaign brief to a key visual and a complete H5 page.</h3>
      <div class="overview-container">
        <div class="overview-card-container">
          <div class="overview-card" style="background-color:#fff2f0;"><div class="overview-card-title"><h4>01</h4><h3>Brand Knowledge</h3></div><p>Analyzing and understanding the brand visual language and brand assets.</p></div>
          <div class="overview-card" style="background-color:#fff2f0;"><div class="overview-card-title"><h4>02</h4><h3>Visual Generation</h3></div><p>Generate high quality head images that includes the logo in a smart way, align with the campaign brie and fits the style of the brand.</p></div>
          <div class="overview-card" style="background-color:#fff2f0;"><div class="overview-card-title"><h4>03</h4><h3>H5 Page Generation</h3></div><p>Extend the head image into a complete H5 page and create elements and content that align with the brand.</p></div>
          <div class="overview-card" style="background-color:#fff2f0;"><div class="overview-card-title"><h4>04</h4><h3>Python Scripts</h3></div><p>Creating Python scripts in the skill to assist page generation, eg. Background removal, blending the picture to the background, inserting logo, etc.</p></div>
        </div>
        <div class="overview-image-container"><img class="overview-image" src="/assets/images/projects/ai-brand-kit/kv-02.webp" alt="Generated Life Services key visual"></div>
      </div>
    </section>

    <div id="problem" class="problem-statement-container">
      <div class="problem-statement" style="background-color:#FFB0A3;">
        <h3>How might we help an AI agent create Life Services H5 pages and header images that meet a high visual standard—without making every campaign a manual design task?</h3>
      </div>
    </div>

    <section id="solution">
      <h2>SOLUTION</h2>

      <div class="skill-list">
        <article class="skill-block">
          <div class="skill-info">
            <h3 class="skill-title"><span class="skill-num">01</span>Header Image Generation</h3>
            <p class="skill-summary">Turns a campaign theme into a ready-to-use Life Services key visual.</p>
            <p class="skill-steps-label">SKILL.md steps</p>
            <ol class="skill-steps">
              <li>Define the campaign theme</li>
              <li>Classify into one of seven categories</li>
              <li>Draft three titles, pick one</li>
              <li>Compose the prompt from the template</li>
              <li>Generate against two reference images</li>
              <li>Overlay the auto-colored logo</li>
            </ol>
          </div>
          <div class="skill-visuals skill-visuals-kv">
            <img src="/assets/images/projects/ai-brand-kit/kv-04.webp" alt="Travel campaign key visual">
            <img src="/assets/images/projects/ai-brand-kit/kv-05.webp" alt="Matcha campaign key visual">
            <img src="/assets/images/projects/ai-brand-kit/kv-06.webp" alt="Tea campaign key visual">
            <img src="/assets/images/projects/ai-brand-kit/kv-07.webp" alt="Late-night food campaign key visual">
            <img src="/assets/images/projects/ai-brand-kit/kv-08.webp" alt="Summer picnic campaign key visual">
            <img src="/assets/images/projects/ai-brand-kit/kv-09.webp" alt="Beauty campaign key visual">
          </div>
        </article>
        <article class="skill-block">
          <div class="skill-info">
            <h3 class="skill-title"><span class="skill-num">02</span>H5 Page Generation</h3>
            <p class="skill-summary">Extends the approved key visual into a complete, responsive H5 page.</p>
            <p class="skill-steps-label">SKILL.md steps</p>
            <ol class="skill-steps">
              <li>Confirm inputs and real content</li>
              <li>Generate or receive the key visual</li>
              <li>Analyze the key visual</li>
              <li>Build the brand kit</li>
              <li>Select modules, set page order</li>
              <li>Plan title images and cutouts</li>
              <li>Implement in HTML and CSS</li>
              <li>Check compliance, then deliver</li>
            </ol>
          </div>
          <div class="skill-visuals skill-visuals-h5">
            <img src="/assets/images/projects/ai-brand-kit/h5-set.webp" alt="Four generated H5 campaign pages: restaurant discovery, summer water play, winter pet travel, and spring blossom">
          </div>
        </article>
      </div>
    </section>

    <section id="impact">
      <h2>INTENDED IMPACT</h2>
      <h3>The skills aim to change three things: who can make campaign visuals, how good they are, and how long they take.</h3>
      <div class="impact-cards">
        <div>
          <h3>Wider Adoption</h3>
          <p>Operations teams can create their own campaign visuals on the agent platform instead of queuing for design support.</p>
        </div>
        <div>
          <h3>Higher Baseline</h3>
          <p>Life Services visual standards live inside the workflow, so output starts on-brand rather than generic.</p>
        </div>
        <div>
          <h3>Faster Turnaround</h3>
          <p>A campaign brief becomes a finished header image and H5 page in a single pass.</p>
        </div>
      </div>
    </section>

    <section id="process" class="process-section">
      <h2>PROCESS</h2>
      <ol class="process-steps">
        <li class="process-step">
          <h3><span class="process-step-num">01</span>LoRA vs. Skill</h3>
          <p>I evaluated two approaches, a LoRA and a skill, on which produced higher-quality images that fit the Life Services visual style. The comparison favored the skill, which became the foundation for the rest of the workflow.</p>
        </li>

        <li class="process-step">
          <h3><span class="process-step-num">02</span>Header Image Skill</h3>
          <div class="process-split">
            <div class="process-split-text">
              <p>The initial workflow was a linear chain: campaign topic, then generated prompt, then generated image. In practice it rarely met the quality bar, and the resulting style repeated itself across campaigns.</p>
              <p>I replaced it with a set of prompt templates organized by topic category. The skill now assigns the template that matches the campaign and composes a prompt from it, addressing both the quality ceiling and the repetition.</p>
            </div>
            <figure class="process-figure">
              <img src="/assets/images/projects/ai-brand-kit/prompt-canvas.webp" alt="Working canvas showing a logo reference and category reference images fanning out into prompt threads and their generated header images">
            </figure>
          </div>
        </li>


        <li class="process-step">
          <h3><span class="process-step-num">03</span>Problem Solving</h3>
          <p>Problems occurred in the process that affect the quality of the output. I iterated on reference inputs, scripts writing, prompt engineering, and adding steps to the skill to resolve each of these and brought the output to a consistent quality level.</p>
          <!-- Element repetition: hidden for now, no supporting image yet.
          <div class="issue-item">
            <h3>Element repetition</h3>
            <p>Decorative elements repeated excessively within one composition.</p>
          </div>
          -->
          <div class="issue-grid">
            <div class="issue-item">
              <img src="/assets/images/projects/ai-brand-kit/issue-logo.webp" alt="Problem and solution for the logo: inconsistent renders beside the reference sheet of approved heart-logo treatments">
              <h3>Logo distortion</h3>
              <p>The logo rendered with an incorrect shape, or appeared more than once in a single image.</p>
            </div>
            <div class="issue-item">
              <img src="/assets/images/projects/ai-brand-kit/issue-title.webp" alt="Problem and solution for title placement: an overlapping title beside the script-blended version that reserves space at the top">
              <h3>Title collision</h3>
              <p>The space reserved for the logo at the top of the image was not respected, so the title overlapped it.</p>
            </div>
            <div class="issue-item">
              <img src="/assets/images/projects/ai-brand-kit/issue-typeface.webp" alt="Campaign titles before and after, three samples each side">
              <h3>Wrong typeface</h3>
              <p>Generated text rendered in a typeface outside the brand set.</p>
            </div>
            <div class="issue-item">
              <img src="/assets/images/projects/ai-brand-kit/issue-style.webp" alt="Nine header images before and after, showing the shift away from a cartoonish render">
              <h3>Over-stylization</h3>
              <p>The overall render skewed more cartoonish than the brand allows.</p>
            </div>
          </div>
        </li>

        <li class="process-step">
          <h3><span class="process-step-num">04</span>H5 Page Skill</h3>
          <p>I analyzed the sample H5 pages to determine which parts of the layout could be encoded as a skill, then defined a template for each page section. The skill is written with HTML and CSS knowledge so pages can be reproduced consistently, including a typographic treatment for section subtitles that keeps them on brand.</p>
        </li>
      </ol>
    </section>

    <!-- <section id="reflection">
      <h2>REFLECTION</h2>
      <h3>Visual quality becomes repeatable only when it is designed as a system.</h3>
      <div class="analysis-items-grid" style="margin-top:32px;"><div class="analysis-item" style="border-left:4px solid #FFB0A3;"><h3>From Taste to Rules</h3><p>“Make it look better” cannot guide an agent. References become useful when they are translated into concrete visual, content, and layout constraints.</p></div><div class="analysis-item" style="border-left:4px solid #FFB0A3;"><h3>What Comes Next</h3><p>The next step is expanding the sample library and validating the workflow with real production requests and measurable quality feedback.</p></div></div>
    </section> -->

    <section class="next-project-section">
        <h1 style="font-size: 24px;">More Projects</h1>
        <div class="next-projects-container">
            <a class="next-project-card" href="/projects/orangobranding">
                <div class="next-project-image">
                    <img src="/assets/images/covers/orango_branding.webp" alt="ORANGO">
                </div>
                <div class="next-project-content">
                    <h2>ORANGO</h2>
                    <p>Brand identity design for ORANGO.</p>
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
  title: 'AI Brand Kit',
  link: [{ rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' }, { rel: 'stylesheet', href: '/css/styles.css' }, { rel: 'stylesheet', href: '/css/project.css' }],
  script: [{ src: '/js/script.js', body: true }, { src: '/js/project.js', body: true }]
});
</script>

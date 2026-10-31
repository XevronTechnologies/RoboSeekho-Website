/**
 * RoboSeekho - Dedicated Hackster.io 1:1 Project Detail Page Engine
 * Loads dynamic project data from data/blogs.json based on URL parameter (?id=...)
 */

(function () {
  'use strict';

  const DATA_URL = 'data/blogs.json';

  // SVG Icons
  const ICONS = {
    gauge: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 0-7.07 17.07L12 12V6"/><circle cx="12" cy="12" r="2"/></svg>',
    doc: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    clock: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    cart: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    externalLink: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    chip: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
    software: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    tool: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    copy: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>'
  };

  // Toast Notification
  function showToast(msg) {
    let toast = document.getElementById('hacksterToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'hacksterToast';
      toast.className = 'hackster-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${msg}</span>`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function getDifficultyClass(diff) {
    if (!diff) return 'beginner';
    const d = diff.toLowerCase();
    if (d.includes('beg')) return 'beginner';
    if (d.includes('adv')) return 'advanced';
    return 'intermediate';
  }

  // Brand channel tile icons
  function getChannelIconSvg(name) {
    const n = (name || '').toLowerCase();
    if (n.includes('arduino')) {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="14" y1="12" x2="18" y2="12"/></svg>`;
    }
    if (n.includes('python')) {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 5 3.5 5 6v2h7v1H4C2 9 2 12 2 14c0 3 1.5 5 5 5h1v-2c0-2.5 1.5-4 4-4h5c2 0 3-1 3-3V6c0-2.5-1.5-4-8-4z"/><circle cx="8" cy="5" r="1" fill="currentColor"/></svg>`;
    }
    if (n.includes('esp')) {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>`;
    }
    if (n.includes('ros') || n.includes('robot')) {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="7" width="14" height="12" rx="2"/><circle cx="9" cy="11" r="1.5"/><circle cx="15" cy="11" r="1.5"/><path d="M9 15h6M12 2v5M2 13h3M19 13h3"/></svg>`;
    }
    if (n.includes('3d') || n.includes('cad')) {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"/><path d="M12 11l8-4.5M12 11v9M12 11L4 6.5"/></svg>`;
    }
    return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/></svg>`;
  }

  // Render Project Function
  function renderProject(project, allProjects) {
    if (!project) return;

    // Document & Breadcrumb Title
    document.title = `${project.title} — RoboSeekho Labs`;
    const breadcrumbTitle = document.getElementById('breadcrumbTitle');
    if (breadcrumbTitle) breadcrumbTitle.textContent = project.title;

    // Header Badges
    const diffClass = getDifficultyClass(project.difficulty);
    const badgesContainer = document.getElementById('articleBadges');
    if (badgesContainer) {
      badgesContainer.innerHTML = `
        <span class="hackster-meta-badge ${diffClass}">
          ${ICONS.gauge} ${project.difficulty || 'Intermediate'}
        </span>
        <span class="hackster-meta-badge">
          ${ICONS.doc} Full instructions provided
        </span>
        <span class="hackster-meta-badge">
          ${ICONS.clock} ${project.readTime || '6 min read'}
        </span>
      `;
    }

    // Title & Subtitle
    const titleEl = document.getElementById('articleTitle');
    const subtitleEl = document.getElementById('articleSubtitle');
    if (titleEl) titleEl.textContent = project.title;
    if (subtitleEl) subtitleEl.textContent = project.summary;

    // Hero Image
    const heroImg = document.getElementById('articleHeroImg');
    if (heroImg) {
      heroImg.src = project.image;
      heroImg.alt = project.title;
    }

    // Overview Text
    const overviewText = document.getElementById('articleOverviewText');
    if (overviewText) overviewText.textContent = project.summary;

    // 1. Hardware BOM List
    const hardwareList = document.getElementById('hardwareBomList');
    if (hardwareList && project.details?.hardware) {
      hardwareList.innerHTML = project.details.hardware.map(h => `
        <div class="hackster-bom-row">
          <div class="hackster-bom-thumb">
            ${ICONS.chip}
          </div>
          <div class="hackster-bom-info">
            <span class="bom-item-name">${h.item}</span>
            <span class="bom-item-purpose">${h.purpose || 'Component'}</span>
          </div>
          <div class="hackster-bom-qty">&times; ${h.qty || 1}</div>
          <button class="hackster-bom-action-btn" title="Component Specs" onclick="window.showToast('${h.item} added to lab kit BOM')">
            ${ICONS.cart}
          </button>
        </div>
      `).join('');
    }

    // 2. Software BOM List
    const softwareGroup = document.getElementById('softwareGroup');
    const softwareList = document.getElementById('softwareBomList');
    if (project.details?.software && project.details.software.length > 0) {
      if (softwareList) {
        softwareList.innerHTML = project.details.software.map(s => `
          <div class="hackster-bom-row">
            <div class="hackster-bom-thumb software-thumb">
              ${ICONS.software}
            </div>
            <div class="hackster-bom-info">
              <span class="bom-item-name">${s.name}</span>
              <span class="bom-item-purpose">${s.type || 'Software / Library'}</span>
            </div>
            <button class="hackster-bom-action-btn" title="Platform Information" onclick="window.showToast('Platform: ${s.name}')">
              ${ICONS.externalLink}
            </button>
          </div>
        `).join('');
      }
      if (softwareGroup) softwareGroup.style.display = 'block';
    } else {
      if (softwareGroup) softwareGroup.style.display = 'none';
    }

    // 3. Hand Tools List
    const toolsGroup = document.getElementById('toolsGroup');
    const toolsList = document.getElementById('toolsBomList');
    if (project.details?.handTools && project.details.handTools.length > 0) {
      if (toolsList) {
        toolsList.innerHTML = project.details.handTools.map(t => `
          <div class="hackster-bom-row">
            <div class="hackster-bom-thumb tool-thumb">
              ${ICONS.tool}
            </div>
            <div class="hackster-bom-info">
              <span class="bom-item-name">${t.name}</span>
              <span class="bom-item-purpose">${t.purpose || 'Tooling'}</span>
            </div>
          </div>
        `).join('');
      }
      if (toolsGroup) toolsGroup.style.display = 'block';
    } else {
      if (toolsGroup) toolsGroup.style.display = 'none';
    }

    // 4. Story Subsections
    const storyContainer = document.getElementById('storySubsectionsContainer');
    const storyTocSublist = document.getElementById('storyTocSublist');

    if (storyContainer) {
      const sections = project.details?.storySections || [
        { id: "the-idea", title: "The Idea", text: project.details?.story || project.summary },
        { id: "how-it-works", title: "How It Works", text: "Using sensory inputs and microcontroller algorithms, real-time control logic triggers the desired outputs without manual human intervention." },
        { id: "assembling-electronics", title: "Assembling the Electronics", text: "Wire all modules ensuring shared common grounds and regulated power rails before testing full current loads." },
        { id: "programming-testing", title: "Programming and Testing", text: "Flash the firmware sketch and verify sensor telemetry on the serial monitor before deploying." }
      ];

      storyContainer.innerHTML = sections.map(sec => `
        <div class="hackster-story-sub" id="${sec.id}">
          <h3 class="hackster-story-h3">${sec.title}</h3>
          <p class="hackster-article-text">${sec.text}</p>
        </div>
      `).join('');

      // Also append steps if available
      if (project.details?.steps && project.details.steps.length > 0) {
        storyContainer.innerHTML += `
          <div class="hackster-story-sub" id="build-steps">
            <h3 class="hackster-story-h3">Step-by-Step Build Instructions</h3>
            <div class="hackster-steps-list">
              ${project.details.steps.map((st, i) => `
                <div class="hackster-step-item">
                  <div class="hackster-step-num">${i + 1}</div>
                  <div class="hackster-step-text">${st}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // Update Left TOC Sublist
      if (storyTocSublist) {
        storyTocSublist.innerHTML = sections.map(sec => `
          <li><a href="#${sec.id}">${sec.title}</a></li>
        `).join('');
      }
    }

    // 5. Custom Parts and Enclosures
    const cadTitle = document.getElementById('cadTitle');
    const cadFilename = document.getElementById('cadFilename');
    const cadPreviewImg = document.getElementById('cadPreviewImg');
    const btnDownloadCad = document.getElementById('btnDownloadCad');

    if (project.details?.customParts) {
      if (cadTitle) cadTitle.textContent = project.details.customParts.title || '3D CAD Enclosure & Parts';
      if (cadFilename) cadFilename.textContent = `${project.details.customParts.filename} (${project.details.customParts.size || '3.5 MB'})`;
    }
    if (cadPreviewImg) {
      cadPreviewImg.src = project.image;
    }
    if (btnDownloadCad) {
      btnDownloadCad.onclick = () => {
        showToast(`Preparing CAD download: ${project.details?.customParts?.filename || 'part.stl'}`);
      };
    }

    // 6. Schematics
    const schematicTitle = document.getElementById('schematicTitle');
    const schematicFilename = document.getElementById('schematicFilename');
    const schematicPreviewBox = document.getElementById('schematicPreviewBox');
    const btnDownloadSchematic = document.getElementById('btnDownloadSchematic');

    if (project.details?.schematic) {
      if (schematicTitle) schematicTitle.textContent = project.details.schematic.title || 'Circuit Schematic';
      if (schematicFilename) schematicFilename.textContent = project.details.schematic.filename || 'schematic.png';
    }

    if (schematicPreviewBox) {
      schematicPreviewBox.innerHTML = `
        <div class="schematic-board-canvas">
          <div class="schematic-header-tag">SCHEMATIC DIAGRAM // ${project.category.toUpperCase()}</div>
          <svg class="schematic-svg" viewBox="0 0 600 240" fill="none" stroke="currentColor">
            <!-- Grid Background -->
            <pattern id="circuitGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            </pattern>
            <rect width="600" height="240" fill="url(#circuitGrid)" />
            
            <!-- MCU Block -->
            <rect x="60" y="50" width="130" height="140" rx="6" fill="rgba(30,41,59,0.85)" stroke="#38bdf8" stroke-width="2"/>
            <text x="125" y="85" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">MICROCONTROLLER</text>
            <text x="125" y="105" text-anchor="middle" fill="#94a3b8" font-size="10">${project.details?.hardware?.[0]?.item?.slice(0, 18) || 'Arduino / ESP32'}</text>
            
            <!-- Sensor Block -->
            <rect x="410" y="50" width="130" height="60" rx="6" fill="rgba(30,41,59,0.85)" stroke="#8b5cf6" stroke-width="2"/>
            <text x="475" y="80" text-anchor="middle" fill="#8b5cf6" font-size="11" font-weight="bold">SENSOR / VISION</text>
            <text x="475" y="98" text-anchor="middle" fill="#94a3b8" font-size="9">I2C / UART Bus</text>

            <!-- Actuator Block -->
            <rect x="410" y="130" width="130" height="60" rx="6" fill="rgba(30,41,59,0.85)" stroke="#10b981" stroke-width="2"/>
            <text x="475" y="160" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">ACTUATOR / DRIVER</text>
            <text x="475" y="178" text-anchor="middle" fill="#94a3b8" font-size="9">PWM / Output Bus</text>

            <!-- Bus Wires -->
            <path d="M190 80 H410" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2"/>
            <circle cx="300" cy="80" r="3" fill="#38bdf8"/>
            <text x="300" y="72" text-anchor="middle" fill="#38bdf8" font-size="9">SDA / TX (Data)</text>

            <path d="M190 100 H350 V150 H410" stroke="#8b5cf6" stroke-width="2"/>
            <circle cx="350" cy="150" r="3" fill="#8b5cf6"/>
            <text x="270" y="115" text-anchor="middle" fill="#8b5cf6" font-size="9">SCL / RX (Clock)</text>

            <path d="M190 160 H410" stroke="#10b981" stroke-width="2"/>
            <text x="300" y="175" text-anchor="middle" fill="#10b981" font-size="9">PWM Signal Rail</text>
          </svg>
        </div>
      `;
    }

    if (btnDownloadSchematic) {
      btnDownloadSchematic.onclick = () => {
        showToast(`Exporting circuit schematic: ${project.details?.schematic?.filename || 'schematic.png'}`);
      };
    }

    // 7. Code Box with Line Numbers
    const codeTitle = document.getElementById('codeTitle');
    const codeLang = document.getElementById('codeLang');
    const codeGutter = document.getElementById('codeGutter');
    const codeContent = document.getElementById('codeSnippetContent');
    const btnCopyCode = document.getElementById('btnCopyCode');
    const btnDownloadCode = document.getElementById('btnDownloadCode');

    const snippet = project.details?.codeSnippet || '// No code required for this module.';
    const lines = snippet.split('\n');

    if (codeTitle) codeTitle.textContent = `${project.category} Controller Code`;
    if (codeLang) codeLang.textContent = snippet.includes('#include') ? 'Arduino' : 'Python';
    if (codeContent) codeContent.textContent = snippet;

    if (codeGutter) {
      codeGutter.innerHTML = lines.map((_, idx) => `<span>${idx + 1}</span>`).join('');
    }

    if (btnCopyCode) {
      btnCopyCode.onclick = () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(snippet).then(() => {
            btnCopyCode.innerHTML = `${ICONS.check} <span>Copied!</span>`;
            showToast('Firmware source code copied to clipboard!');
            setTimeout(() => {
              btnCopyCode.innerHTML = `${ICONS.copy} <span>Copy</span>`;
            }, 2000);
          });
        }
      };
    }

    if (btnDownloadCode) {
      btnDownloadCode.onclick = () => {
        const ext = snippet.includes('#include') ? 'ino' : 'py';
        const blob = new Blob([snippet], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${project.id}.${ext}`;
        a.click();
        showToast(`Downloaded ${project.id}.${ext}`);
      };
    }

    // 8. Channels & Tags in Right Sidebar
    const channelsGrid = document.getElementById('channelsGrid');
    const sidebarTags = document.getElementById('sidebarTags');

    if (channelsGrid) {
      const defaultChannels = [
        { name: "Arduino" },
        { name: "Python" },
        { name: "ESP32" },
        { name: "Robotics" },
        { name: "3D CAD" }
      ];
      const channels = project.channels || defaultChannels;
      channelsGrid.innerHTML = channels.map(c => `
        <div class="hackster-channel-tile" title="${c.name}">
          <div class="channel-icon">${getChannelIconSvg(c.name)}</div>
          <span class="channel-name">${c.name}</span>
        </div>
      `).join('');
    }

    if (sidebarTags && project.tags) {
      sidebarTags.innerHTML = project.tags.map(t => `
        <a href="blogs.html" class="hackster-tag-pill">${t}</a>
      `).join('');
    }

    // 9. Related Projects in Right Sidebar
    const relatedList = document.getElementById('sidebarRelatedList');
    if (relatedList && allProjects) {
      const otherProjects = allProjects.filter(p => p.id !== project.id).slice(0, 4);
      relatedList.innerHTML = otherProjects.map(p => `
        <a href="blog-detail.html?id=${encodeURIComponent(p.id)}" class="hackster-related-item">
          <div class="hackster-related-thumb">
            <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='logo.png'">
          </div>
          <div class="hackster-related-info">
            <span class="hackster-related-title">${p.title}</span>
            <span class="hackster-related-meta">${p.category} &middot; ${p.readTime || '5 min'}</span>
          </div>
        </a>
      `).join('');
    }

    // 10. Left TOC 3-Icon Actions: Respect, Bookmark, Share
    setupTocActionButtons(project);

    // 11. Scrollspy for TOC
    setupScrollspy();
  }

  function setupTocActionButtons(project) {
    // Share Project Link
    const btnShare = document.getElementById('btnShareArticle');
    if (btnShare) {
      btnShare.onclick = () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('Project link copied to clipboard!');
          });
        } else {
          showToast('Project URL: ' + window.location.href);
        }
      };
    }
  }

  // Smooth Scrollspy for left TOC
  function setupScrollspy() {
    const tocItems = document.querySelectorAll('.hackster-toc-item > a, .hackster-toc-sublist a');
    const sectionIds = [
      'overview', 'things', 'story', 'the-idea', 'how-it-works',
      'assembling-electronics', 'programming-testing', 'custom-parts',
      'schematics', 'code', 'credits'
    ];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    window.addEventListener('scroll', () => {
      let currentId = '';
      const scrollPos = window.scrollY + 160;

      sections.forEach(sec => {
        if (sec.offsetTop <= scrollPos) {
          currentId = sec.id;
        }
      });

      if (currentId) {
        tocItems.forEach(a => {
          const href = a.getAttribute('href');
          const li = a.parentElement;
          if (href === `#${currentId}`) {
            li.classList.add('active');
          } else {
            li.classList.remove('active');
          }
        });
      }
    }, { passive: true });
  }

  // Expose toast globally
  window.showToast = showToast;

  // Initialize
  function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'robotic-arm-vision';

    fetch(DATA_URL)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(blogs => {
        const list = Array.isArray(blogs) ? blogs : [];
        const target = list.find(b => b.id === projectId) || list[0];
        renderProject(target, list);
      })
      .catch(err => {
        console.warn('Could not load data/blogs.json:', err);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

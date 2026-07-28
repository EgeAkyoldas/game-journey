/**
 * Onboarding Modal
 * First-run "what is what" tour. Opens automatically once, then on demand
 * from the help FAB or the ? key.
 */

import { Storage } from '../../utils/storage.js';

const SEEN_KEY = 'onboarding_seen';

const STEPS = [
  {
    icon: 'fa-hat-cowboy',
    title: 'Welcome to the Ledger',
    body: `Every 100% completion task in Red Dead Redemption 2, in one checklist.
           Tick a circle to mark it done. Progress saves in this browser by itself —
           no account, no sign-in.`,
    rows: [
      { icon: 'fa-circle', label: 'The circle', text: 'Click it to complete an item. The card lights up and the counters move.' },
      { icon: 'fa-chart-line', label: 'Top bar', text: 'Overall completion across every task and sub-task.' },
    ],
  },
  {
    icon: 'fa-tags',
    title: 'Reading a card',
    body: 'Each item carries badges telling you when, where, and what for.',
    rows: [
      { icon: 'fa-book', label: 'CH 2', text: 'Earliest chapter this becomes available.' },
      { icon: 'fa-map-pin', label: 'Region', text: 'Where in the map to go.' },
      { icon: 'fa-trophy', label: 'Reward', text: 'Money, trinket, or unlock you get out of it.' },
      { icon: 'fa-triangle-exclamation', label: 'Missable', text: 'Lost forever if you pass the chapter. Do these on time.', warn: true },
      { icon: 'fa-exclamation', label: 'Priority', text: 'Doing it early makes the rest of the run easier.' },
    ],
  },
  {
    icon: 'fa-list-check',
    title: 'Digging into an item',
    body: 'Buttons on the right of a card open extra detail.',
    rows: [
      { icon: 'fa-list-check', label: 'Steps', text: 'Multi-part items expand into sub-steps you can tick one by one.' },
      { icon: 'fa-circle-info', label: 'Info', text: 'Full location description, tips, and gotchas.' },
    ],
  },
  {
    icon: 'fa-bars',
    title: 'Finding things fast',
    body: 'The sidebar is your index. On phones open it with the yellow button, bottom-left.',
    rows: [
      { icon: 'fa-magnifying-glass', label: 'Search', text: 'Type any item name to jump straight to it.' },
      { icon: 'fa-sliders', label: 'Filters', text: 'Narrow by Todo / Done, chapter, region, missable, or reward.' },
      { icon: 'fa-chevron-down', label: 'Categories', text: 'Click a category header to fold it away. It stays folded.' },
    ],
  },
  {
    icon: 'fa-gear',
    title: 'Making it yours',
    body: 'Floating buttons in the bottom-right corner.',
    rows: [
      { icon: 'fa-book', label: 'Journal', text: 'A free-text notepad for your own campaign notes. Auto-saves.' },
      { icon: 'fa-palette', label: 'Themes', text: 'Four looks — Wood, Ledger, Wanted, Saloon — each in day or night.' },
      { icon: 'fa-volume-high', label: 'Sound & video', text: 'Completion sound effects and the animated background, on or off.' },
      { icon: 'fa-floppy-disk', label: 'Backup', text: 'Progress lives in this browser only. Settings &rarr; Progress has Export and Import — grab a save file before clearing site data or switching device.', warn: true },
    ],
  },
];

let currentStep = 0;

/**
 * Initialize onboarding: help FAB + modal, auto-open on first visit
 */
export function initOnboarding() {
  const fab = document.createElement('button');
  fab.className = 'onboarding-fab';
  fab.id = 'onboarding-fab';
  fab.title = 'How this works';
  fab.setAttribute('aria-label', 'How this works');
  fab.innerHTML = '<i class="fa-solid fa-question"></i>';
  document.body.appendChild(fab);

  const modal = document.createElement('div');
  modal.className = 'onboarding-modal';
  modal.id = 'onboarding-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'How this works');
  modal.innerHTML = `
    <div class="onboarding-backdrop" data-onboarding-close></div>
    <div class="onboarding-content">
      <div class="onboarding-header">
        <h2 class="onboarding-title" id="onboarding-title"></h2>
        <button class="onboarding-close" data-onboarding-close aria-label="Close">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="onboarding-body" id="onboarding-body"></div>
      <div class="onboarding-footer">
        <div class="onboarding-dots" id="onboarding-dots"></div>
        <div class="onboarding-buttons">
          <button class="onboarding-btn ghost" id="onboarding-skip">Skip</button>
          <button class="onboarding-btn ghost" id="onboarding-prev">Back</button>
          <button class="onboarding-btn primary" id="onboarding-next">Next</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  attachListeners();

  if (!Storage.load(SEEN_KEY, false)) {
    // Let the checklist paint first so the tour lands on a finished page
    setTimeout(() => openOnboarding(), 600);
  }
}

function attachListeners() {
  document.getElementById('onboarding-fab')?.addEventListener('click', () => openOnboarding());

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-onboarding-close]') || e.target.closest('#onboarding-skip')) {
      closeOnboarding();
      return;
    }
    if (e.target.closest('#onboarding-next')) {
      currentStep < STEPS.length - 1 ? goToStep(currentStep + 1) : closeOnboarding();
      return;
    }
    if (e.target.closest('#onboarding-prev')) {
      goToStep(currentStep - 1);
      return;
    }
    const dot = e.target.closest('[data-onboarding-step]');
    if (dot) goToStep(Number(dot.dataset.onboardingStep));
  });

  document.addEventListener('keydown', (e) => {
    if (!isOpen()) {
      // "?" opens the tour, as long as the user isn't typing somewhere
      const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName || '');
      if (e.key === '?' && !typing) openOnboarding();
      return;
    }
    if (e.key === 'Escape') closeOnboarding();
    if (e.key === 'ArrowRight' && currentStep < STEPS.length - 1) goToStep(currentStep + 1);
    if (e.key === 'ArrowLeft' && currentStep > 0) goToStep(currentStep - 1);
  });
}

export function openOnboarding(step = 0) {
  goToStep(step);
  document.getElementById('onboarding-modal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOnboarding() {
  document.getElementById('onboarding-modal')?.classList.remove('open');
  document.body.style.overflow = '';
  Storage.save(SEEN_KEY, true);
}

function isOpen() {
  return document.getElementById('onboarding-modal')?.classList.contains('open');
}

function goToStep(index) {
  currentStep = Math.max(0, Math.min(index, STEPS.length - 1));
  const step = STEPS[currentStep];

  const title = document.getElementById('onboarding-title');
  if (title) {
    title.innerHTML = `<i class="fa-solid ${step.icon}"></i> ${step.title}`;
  }

  const body = document.getElementById('onboarding-body');
  if (body) {
    body.innerHTML = `
      <p class="onboarding-lead">${step.body}</p>
      <ul class="onboarding-rows">
        ${step.rows.map(row => `
          <li class="onboarding-row${row.warn ? ' warn' : ''}">
            <span class="onboarding-row-icon"><i class="fa-solid ${row.icon}"></i></span>
            <span class="onboarding-row-text">
              <strong>${row.label}</strong>
              ${row.text}
            </span>
          </li>
        `).join('')}
      </ul>
    `;
    body.scrollTop = 0;
  }

  const dots = document.getElementById('onboarding-dots');
  if (dots) {
    dots.innerHTML = STEPS.map((s, i) => `
      <button class="onboarding-dot${i === currentStep ? ' active' : ''}"
              data-onboarding-step="${i}"
              aria-label="Step ${i + 1}: ${s.title}"></button>
    `).join('');
  }

  const prev = document.getElementById('onboarding-prev');
  if (prev) prev.style.visibility = currentStep === 0 ? 'hidden' : 'visible';

  const skip = document.getElementById('onboarding-skip');
  if (skip) skip.style.visibility = currentStep === STEPS.length - 1 ? 'hidden' : 'visible';

  const next = document.getElementById('onboarding-next');
  if (next) {
    next.innerHTML = currentStep === STEPS.length - 1
      ? 'Start riding <i class="fa-solid fa-horse"></i>'
      : 'Next <i class="fa-solid fa-chevron-right"></i>';
  }
}

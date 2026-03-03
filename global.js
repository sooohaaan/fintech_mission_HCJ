// --- Screenshot ---
async function takeScreenshot(btn, filename) {
  const original = btn.textContent;
  btn.textContent = '⏳';
  btn.disabled = true;
  try {
    const canvas = await html2canvas(document.body, {
      scale: 1.5,
      useCORS: true,
      width: document.body.scrollWidth,
      height: document.body.scrollHeight,
      windowWidth: document.body.scrollWidth,
      windowHeight: document.body.scrollHeight,
    });
    const link = document.createElement('a');
    link.download = filename || 'screenshot.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  } finally {
    btn.textContent = original;
    btn.disabled = false;
  }
}

// --- Theme ---
(function () {
  const t = localStorage.getItem('md-theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(t);
})();
function toggleTheme() {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('md-theme', t);
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
  }
}

// --- Dialogs (used in task3) ---
function openDialog(id) {
  const scrim = document.getElementById(id + 'Scrim');
  if (scrim) {
    scrim.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeDialog(id) {
  const scrim = document.getElementById(id + 'Scrim');
  if (scrim) {
    scrim.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// --- Snackbar (used in task1) ---
function showSnack(msg) {
  let el = document.getElementById('snackbar');
  if (!el) { // Create if doesn't exist
    el = document.createElement('div');
    el.id = 'snackbar';
    el.className = 'm3-snackbar';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}


document.addEventListener('DOMContentLoaded', () => {
  // --- Code Blocks (Copy & Line Numbers) ---
  document.querySelectorAll('.m3-code').forEach(block => {
    const wrapper = document.createElement('div');
    wrapper.className = 'm3-code-wrapper';
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);

    const codeEl = block.querySelector('pre code');
    if (codeEl) {
        const lines = codeEl.innerText.split('\n');
        if (lines.length > 0 && lines[lines.length - 1].trim() === '') {
            lines.pop();
        }
        const lineNumbersEl = document.createElement('div');
        lineNumbersEl.className = 'line-numbers';
        lines.forEach((_, index) => {
            const span = document.createElement('span');
            span.textContent = index + 1;
            lineNumbersEl.appendChild(span);
        });
        wrapper.insertBefore(lineNumbersEl, block);
    }

    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    const copyIcon = '<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';
    const copiedIcon = '<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>';
    btn.innerHTML = copyIcon;
    btn.title = '코드 복사';
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(block.innerText).then(() => {
        btn.innerHTML = copiedIcon;
        btn.title = '복사됨!';
        setTimeout(() => {
          btn.innerHTML = copyIcon;
          btn.title = '코드 복사';
        }, 1500);
      });
    });
    wrapper.appendChild(btn);
  });

  // --- Interactive Demo Tabs ---
  document.querySelectorAll('.demo-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanelId = tab.dataset.tab;
      const container = tab.closest('.demo-container');

      container.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      container.querySelectorAll('.demo-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === targetPanelId);
      });
    });
  });

  // --- Close dialog on ESC ---
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openScrim = document.querySelector('.m3-dialog-scrim.open');
      if (openScrim) closeDialog(openScrim.id.replace('Scrim', ''));
    }
  });
});
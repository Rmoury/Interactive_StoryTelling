/**
 * engine.js
 * The core story engine — manages:
 *  - Current story state
 *  - Navigation between nodes
 *  - History (breadcrumb trail for "go back")
 *  - Progress tracking
 *  - Rendering story content
 *  - Restart logic
 */

class StoryEngine {
  constructor(storyData) {
    this.storyData = storyData;
    this.currentNode = null;
    this.history = [];         // Stack of visited node IDs
    this.visitedNodes = new Set(); // For progress tracking
    this.totalEndings = 0;
    this.foundEndings = new Set();

    // Count total endings for progress display
    for (const key in storyData) {
      if (storyData[key].ending) this.totalEndings++;
    }

    this._bindUI();
    this._loadProgress();
  }

  // ─── INITIALIZE ────────────────────────────────────────────────

  start(nodeId = "start") {
    this.history = [];
    this._goTo(nodeId);
    this._hideScreen("title-screen");
    this._showScreen("story-screen");
  }

  restart() {
    this.history = [];
    this.currentNode = null;
    this._hideScreen("story-screen");
    this._hideScreen("ending-screen");
    this._showScreen("title-screen");
  }

  // ─── NAVIGATION ────────────────────────────────────────────────

  _goTo(nodeId) {
    const node = this.storyData[nodeId];
    if (!node) {
      console.error(`Story node "${nodeId}" not found.`);
      return;
    }

    // Push current to history before moving
    if (this.currentNode) {
      this.history.push(this.currentNode.id);
    }

    this.currentNode = node;
    this.visitedNodes.add(nodeId);
    this._saveProgress();

    if (node.ending) {
      this.foundEndings.add(nodeId);
      this._saveProgress();
      this._renderEnding(node);
    } else {
      this._renderNode(node);
    }
  }

  goBack() {
    if (this.history.length === 0) return;
    const prevId = this.history.pop();
    const node = this.storyData[prevId];
    this.currentNode = node;
    if (node.ending) {
      this._renderEnding(node);
    } else {
      this._renderNode(node);
    }
  }

  // ─── RENDERING ─────────────────────────────────────────────────

  _renderNode(node) {
    const container = document.getElementById("story-container");

    // Build choices HTML
    const choicesHTML = node.choices.map((choice, i) => `
      <button 
        class="choice-btn" 
        data-next="${choice.next}"
        style="animation-delay: ${0.3 + i * 0.15}s"
        aria-label="Choice: ${choice.text}"
      >
        <span class="choice-arrow">›</span>
        ${choice.text}
      </button>
    `).join("");

    container.innerHTML = `
      <div class="story-content fade-in">
        <div class="chapter-label">${this._getChapterLabel(node.id)}</div>
        <h2 class="story-title">${node.title}</h2>
        <div class="story-text">${node.text}</div>
        <div class="choices-container">
          <p class="choices-prompt">What do you do?</p>
          ${choicesHTML}
        </div>
      </div>
    `;

    // Bind choice buttons
    container.querySelectorAll(".choice-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const nextId = btn.dataset.next;
        this._animateTransition(() => this._goTo(nextId));
      });
    });

    this._updateBackButton();
    this._updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  _renderEnding(node) {
    this._hideScreen("story-screen");
    const screen = document.getElementById("ending-screen");
    screen.innerHTML = `
      <div class="ending-content fade-in">
        <div class="ending-badge ${node.endingType === 'bad' ? 'ending-bad' : 'ending-good'}">
          ${node.endingType === 'bad' ? '☠️ FALLEN' : '👑 VICTORY'}
        </div>
        <h2 class="ending-title">${node.title}</h2>
        <div class="ending-text">${node.text}</div>
        <div class="achievement-box">
          <span class="achievement-label">Achievement Unlocked</span>
          <span class="achievement-name">${node.achievement}</span>
        </div>
        <div class="ending-stats">
          Endings Found: ${this.foundEndings.size} / ${this.totalEndings}
        </div>
        <div class="ending-actions">
          <button class="btn-primary" id="btn-restart">🔄 Play Again</button>
          <button class="btn-secondary" id="btn-back-from-ending">← Previous Choice</button>
        </div>
      </div>
    `;

    screen.classList.remove("hidden");
    screen.classList.add("visible");

    document.getElementById("btn-restart").addEventListener("click", () => this.restart());
    document.getElementById("btn-back-from-ending").addEventListener("click", () => {
      screen.classList.remove("visible");
      screen.classList.add("hidden");
      this._showScreen("story-screen");
      this.goBack();
    });

    this._updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ─── UI HELPERS ────────────────────────────────────────────────

  _getChapterLabel(id) {
    if (id === "start") return "Prologue";
    const match = id.match(/chapter_(\d)/);
    if (match) return `Chapter ${match[1]}`;
    if (["combat_ending","stealth_ending","music_ending","magic_ending",
         "dark_ending","orb_destroy_ending","orb_confront_ending",
         "army_ending","redemption_ending"].includes(id)) return "Epilogue";
    return "Chapter";
  }

  _animateTransition(callback) {
    const container = document.getElementById("story-container");
    container.classList.add("fade-out");
    setTimeout(() => {
      container.classList.remove("fade-out");
      callback();
    }, 400);
  }

  _updateBackButton() {
    const btn = document.getElementById("btn-back");
    if (btn) {
      btn.disabled = this.history.length === 0;
      btn.style.opacity = this.history.length === 0 ? "0.3" : "1";
    }
  }

  _updateProgress() {
    const bar = document.getElementById("progress-fill");
    const label = document.getElementById("progress-label");
    if (bar && label) {
      const pct = Math.round((this.foundEndings.size / this.totalEndings) * 100);
      bar.style.width = `${pct}%`;
      label.textContent = `${this.foundEndings.size}/${this.totalEndings} endings`;
    }
  }

  _showScreen(id) {
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove("hidden");
      el.classList.add("visible");
    }
  }

  _hideScreen(id) {
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove("visible");
      el.classList.add("hidden");
    }
  }

  // ─── PERSISTENCE ───────────────────────────────────────────────

  _saveProgress() {
    try {
      const data = {
        visited: [...this.visitedNodes],
        endings: [...this.foundEndings]
      };
      sessionStorage.setItem("eldenmoor_progress", JSON.stringify(data));
    } catch (e) { /* sessionStorage may be unavailable */ }
  }

  _loadProgress() {
    try {
      const raw = sessionStorage.getItem("eldenmoor_progress");
      if (raw) {
        const data = JSON.parse(raw);
        this.visitedNodes = new Set(data.visited || []);
        this.foundEndings = new Set(data.endings || []);
        this._updateProgress();
      }
    } catch (e) { /* ignore */ }
  }

  // ─── BIND PERSISTENT UI ────────────────────────────────────────

  _bindUI() {
    // Start button
    document.addEventListener("click", (e) => {
      if (e.target.id === "btn-start") this.start("start");
      if (e.target.id === "btn-back") {
        if (this.history.length > 0) {
          this._animateTransition(() => this.goBack());
        }
      }
      if (e.target.id === "btn-restart-header") this.restart();
    });
  }
}

// ─── BOOT ───────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  window.engine = new StoryEngine(STORY_DATA);
});

# Interactive_StoryTelling
It a story line based project where your choses changes the flow of the stream

# 👑 The Lost Heir of Eldenmoor
### Interactive Storytelling Web App 

---

## 📁 Project Structure

```
interactive-storytelling/
│
├── index.html              ← Entry point / main HTML shell
│
├── css/
│   └── style.css           ← All styles: theme, animations, layout, responsive
│
├── js/
│   ├── story-data.js       ← All story nodes (branching narrative data)
│   └── engine.js           ← Story engine: navigation, rendering, state
│
├── assets/                 ← (Optional) Images, audio files, custom fonts
│   └── .gitkeep
│
└── README.md               ← This file
```

---

## 🚀 How to Run

**No build tools needed.** Just open `index.html` in any modern browser.

```bash
# Option 1: Direct open
open index.html

# Option 2: Local dev server (recommended)
npx serve .
# or
python3 -m http.server 3000
```

---

## 🎮 Features

| Feature | Implementation |
|--------|----------------|
| Branching narrative | `story-data.js` — 15+ story nodes, 10 unique endings |
| Dynamic rendering | `engine.js` — injects content without page reloads |
| Go back / history | Stack-based history with ← Back button |
| Progress tracking | Progress bar shows X/10 endings discovered |
| Smooth transitions | CSS fade + slide animations on each scene change |
| Responsive design | Mobile-first CSS, works on all screen sizes |
| Accessibility | ARIA roles, `aria-live`, keyboard navigable |
| Session persistence | `sessionStorage` saves discovered endings per session |

---

## 📖 Story Overview

**Genre:** Dark Fantasy  
**Theme:** Legacy, power, and choice  
**Protagonist:** Kael — a farmer's child who discovers they are the lost heir to the kingdom of Eldenmoor

### Story Map (simplified)
```
start
├── forest_path
│   ├── bone_marsh
│   │   ├── marsh_rope  → [combat_ending] [stealth_ending]
│   │   └── marsh_wisps → [music_ending]  [combat_ending]
│   └── whispering_caves
│       ├── spellbook_path → [dark_ending]  [magic_ending]
│       └── tunnel_path    → [orb_destroy_ending] [orb_confront_ending]
│
└── watchtower
    ├── army_path  → [combat_ending] [army_ending]
    └── spy_path
        ├── prisoner_path → [redemption_ending] [combat_ending]
        └── [combat_ending]
```

---

## 🏗️ Architecture Notes

### `story-data.js`
- Plain JavaScript object (`STORY_DATA`) — no framework needed
- Each node: `{ id, title, text, choices[], ending?, endingType?, achievement? }`
- Easy to extend: just add new keys to the object

### `engine.js`
- `StoryEngine` class encapsulates all logic
- Methods: `start()`, `restart()`, `_goTo()`, `goBack()`, `_renderNode()`, `_renderEnding()`
- History stack enables "go back" without storing full state

### `style.css`
- CSS custom properties for consistent theming
- Keyframe animations: `fadeIn`, `fadeOut`, `slideInChoice`, `float`, `titleGlow`
- Media queries at 600px and 400px breakpoints

---

## 🎨 Design Decisions

- **Font:** Cinzel Decorative (title) + IM Fell English (body) — evokes old manuscripts
- **Color palette:** Deep blacks, crimson, and gold — classic dark fantasy
- **No external dependencies** — pure HTML/CSS/JS, no frameworks
- **Single-page app** — screens toggle visibility, no page reloads

---

## ✅ Requirements Checklist

- [x] Branching narrative with multiple decision points
- [x] HTML structure with semantic elements and ARIA
- [x] CSS animations, transitions, and responsive design
- [x] JavaScript for dynamic content and choice handling
- [x] Restart and go-back functionality
- [x] Progress tracking
- [x] Properly commented code
- [x] Cross-browser compatible (Chrome, Firefox, Safari, Edge)
- [x] Mobile responsive

---



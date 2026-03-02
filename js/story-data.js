/**
 * story-data.js
 * Contains all story nodes for the branching narrative.
 * Each node has: id, title, text, choices (array), and optional 'ending' flag.
 * Genre: Dark Fantasy - "The Lost Heir of Eldenmoor"
 */

const STORY_DATA = {

  // ─── BEGINNING ────────────────────────────────────────────────
  start: {
    id: "start",
    title: "Prologue: The Burning Village",
    text: `The village of Thornwick is ablaze. You are <strong>Kael</strong>, a young farmer's child who has just discovered a strange silver medallion buried beneath your burning home — the crest of a royal family long thought extinct.

    Through the smoke, two paths emerge before you. A hooded figure beckons from the forest edge, whispering your name. To the east, the old watchtower still stands, its bell ringing wildly.`,
    choices: [
      { text: "🌲 Follow the hooded figure into the forest", next: "forest_path" },
      { text: "🗼 Run toward the watchtower to ring for help", next: "watchtower" }
    ]
  },

  // ─── PATH A: FOREST ────────────────────────────────────────────
  forest_path: {
    id: "forest_path",
    title: "Chapter 1: The Witch of Ashveil",
    text: `The hooded figure leads you deep into the Ashveil Forest. Beneath a canopy of ancient silver oaks, she reveals herself — <strong>Mira</strong>, an old witch with eyes like twin moons. 

    "The medallion you carry is the Seal of Eldenmoor," she rasps. "You are the lost heir. The Shadow King's hunters already search for you."

    She gestures to two paths: a shortcut through the <em>Bone Marsh</em>, or the longer, safer route through the <em>Whispering Caves</em>.`,
    choices: [
      { text: "🌿 Take the dangerous shortcut through Bone Marsh", next: "bone_marsh" },
      { text: "🕯️ Choose the Whispering Caves route", next: "whispering_caves" }
    ]
  },

  bone_marsh: {
    id: "bone_marsh",
    title: "Chapter 2: Bone Marsh",
    text: `The Bone Marsh lives up to its name — skeletal remains of long-dead creatures poke through the foggy mire. Halfway through, your foot sinks into quicksand. As you struggle, you spot a rope tangled in a dead tree... and in the opposite direction, the glow of will-o'-wisps that locals claim can guide the worthy to safety.`,
    choices: [
      { text: "🪢 Grab the rope and climb out yourself", next: "marsh_rope" },
      { text: "✨ Trust the will-o'-wisps and follow their light", next: "marsh_wisps" }
    ]
  },

  marsh_rope: {
    id: "marsh_rope",
    title: "Chapter 2B: The Iron Knight",
    text: `You haul yourself out with the rope — only to find it tied to the wrist of a rusted suit of armor. The armor shudders, then rises. But instead of attacking, it kneels.

    "I am <strong>Sir Aldric</strong>, cursed to guard this marsh until the heir of Eldenmoor claims me." He offers his ancient sword. "Command me, my liege."

    With Aldric at your side, you reach the Shadow King's fortress gates. But to enter, you must choose your approach.`,
    choices: [
      { text: "⚔️ Challenge the fortress guards to single combat", next: "combat_ending" },
      { text: "🎭 Disguise yourselves and infiltrate as merchants", next: "stealth_ending" }
    ]
  },

  marsh_wisps: {
    id: "marsh_wisps",
    title: "Chapter 2C: The Wisp Queen",
    text: `The wisps lead you to a hidden glade where a luminous being floats — the <strong>Wisp Queen</strong>, an ancient spirit of the forest. She studies the medallion and smiles.

    "The blood of kings flows in you. I will grant you a gift: the truth of your enemy's weakness." She whispers in your ear that the Shadow King fears <em>music</em> — it was music that broke his first curse.

    Armed with this knowledge, you arrive at the fortress differently prepared.`,
    choices: [
      { text: "🎵 Find a bard and use music as your weapon", next: "music_ending" },
      { text: "⚔️ Use the knowledge as a distraction and fight your way in", next: "combat_ending" }
    ]
  },

  whispering_caves: {
    id: "whispering_caves",
    title: "Chapter 2: Whispering Caves",
    text: `The caves hum with ancient voices — echoes of Eldenmoor's past kings. A vision appears: your father, not a farmer at all, but a prince who hid you to save your life. The medallion begins to glow.

    Deep in the cave, you find two things: an old <strong>spellbook</strong> of Eldenmoor magic, and a <strong>hidden tunnel</strong> that leads directly into the Shadow King's fortress undercroft.`,
    choices: [
      { text: "📖 Study the spellbook — knowledge is power", next: "spellbook_path" },
      { text: "🕳️ Take the hidden tunnel for a surprise attack", next: "tunnel_path" }
    ]
  },

  spellbook_path: {
    id: "spellbook_path",
    title: "Chapter 3: The Heir's Power",
    text: `Hours of study unlock Eldenmoor's ancestral magic within you. You can conjure shields of light, read thoughts, and — crucially — break curses. You emerge from the caves transformed.

    At the fortress, the Shadow King himself appears at the gates. "I've been waiting for you, Kael," he sneers. He raises his hand — and you recognize him. He wears your father's face.`,
    choices: [
      { text: "💔 Lower your guard — it could really be him", next: "dark_ending" },
      { text: "✨ Cast the curse-breaking spell — it's an illusion", next: "magic_ending" }
    ]
  },

  tunnel_path: {
    id: "tunnel_path",
    title: "Chapter 3: Into the Dark",
    text: `The tunnel deposits you inside the fortress treasury. Gold, relics — and in the center, a <strong>crystal orb</strong> pulsing with dark energy. Mira's voice echoes in your memory: "The Shadow King's power lives in a vessel."

    This must be it. You could destroy it now — or use it to confront the king directly with his own power.`,
    choices: [
      { text: "💥 Smash the orb immediately", next: "orb_destroy_ending" },
      { text: "🔮 Take the orb and confront the king", next: "orb_confront_ending" }
    ]
  },

  // ─── PATH B: WATCHTOWER ────────────────────────────────────────
  watchtower: {
    id: "watchtower",
    title: "Chapter 1: The Knight's Vow",
    text: `You reach the watchtower and ring the bell until your arms ache. By dawn, a company of traveling knights from the Order of the Silver Lance arrives. Their captain, <strong>Commander Lysa</strong>, recognizes the medallion immediately and drops to one knee.

    "The heir lives! We have searched for seventeen years." 

    She offers you a choice of how to proceed against the Shadow King.`,
    choices: [
      { text: "🏰 March on the fortress with the knights' full army", next: "army_path" },
      { text: "🗺️ Send spies first to gather intelligence", next: "spy_path" }
    ]
  },

  army_path: {
    id: "army_path",
    title: "Chapter 2: The March of Silver",
    text: `Three hundred knights march under the Silver Lance banner. The Shadow King's army meets you on the Plains of Ashfeld. The battle is fierce — but in the chaos, you spot the Shadow King watching from a hilltop, surrounded by only five guards.

    You could end this war by reaching him directly.`,
    choices: [
      { text: "⚔️ Break away and charge the Shadow King alone", next: "combat_ending" },
      { text: "🛡️ Hold the line and let your army win the day", next: "army_ending" }
    ]
  },

  spy_path: {
    id: "spy_path",
    title: "Chapter 2: Shadows & Secrets",
    text: `Lysa's best spy returns with stunning news: the Shadow King has a <strong>prisoner</strong> — an elderly woman who knows the secret to undoing his curse permanently. She's held in the east tower.

    You also learn the fortress gates open at dawn for supply wagons — a window of only ten minutes.`,
    choices: [
      { text: "🧓 Rescue the prisoner first", next: "prisoner_path" },
      { text: "⏰ Use the dawn window to storm the gates", next: "combat_ending" }
    ]
  },

  prisoner_path: {
    id: "prisoner_path",
    title: "Chapter 3: The Elder's Secret",
    text: `The prisoner is <strong>Elder Sable</strong> — the last living wizard of Eldenmoor. Frail but sharp-minded, she reveals the truth: the Shadow King was once a good man, corrupted by a cursed crown. Remove the crown, and the man returns.

    "But he will fight you with everything he has," she warns. "The curse does not surrender willingly."`,
    choices: [
      { text: "👑 Attempt to remove the crown with compassion", next: "redemption_ending" },
      { text: "⚔️ Fight him until he is weakened enough to remove it", next: "combat_ending" }
    ]
  },

  // ─── ENDINGS ───────────────────────────────────────────────────
  combat_ending: {
    id: "combat_ending",
    title: "Ending: The Warrior's Crown",
    ending: true,
    endingType: "good",
    text: `Steel meets steel. The Shadow King is a formidable foe — but you are fueled by truth, birthright, and fury. Blow by blow, you drive him back until he stumbles and falls.

    As the cursed crown rolls from his head, the darkness that wreathed the fortress lifts. The man beneath blinks in confusion, then weeps. He is no one you recognize — just another victim of ancient evil.

    You hold the crown of Eldenmoor aloft. The knights cheer. The war is over.

    <em>You are crowned ruler of Eldenmoor. Your first act: to never let a crown corrupt a soul again.</em>`,
    achievement: "⚔️ The Warrior's Victory"
  },

  stealth_ending: {
    id: "stealth_ending",
    title: "Ending: The Shadow's Gambit",
    ending: true,
    endingType: "good",
    text: `Disguised as merchants, you and Aldric wheel a cart of "supplies" into the fortress. Inside the cart: you, coiled and ready.

    You reach the throne room undetected. The Shadow King sits alone, staring into a black flame. Before he can react, Aldric pins him and you press the Seal of Eldenmoor to the cursed crown.

    A blinding light. A scream. And then — silence. The curse is broken.

    <em>You rule Eldenmoor as the Unseen Heir — a monarch who knows the power of patience and wit over brute force.</em>`,
    achievement: "🎭 The Silent Crown"
  },

  music_ending: {
    id: "music_ending",
    title: "Ending: The Song of Kings",
    ending: true,
    endingType: "good",
    text: `You find a traveling bard named <strong>Pip</strong> and share the Wisp Queen's secret. Together, you walk through the fortress gates playing a haunting melody on a silver flute.

    With every note, the Shadow King convulses. Dark tendrils peel away from him like old bark. He screams, then sobs, then collapses — the curse dissolved by sound alone.

    The soldiers lay down their arms. The fortress fills with music.

    <em>You are crowned Queen/King of Eldenmoor — and music is declared the kingdom's highest art, never to be silenced again.</em>`,
    achievement: "🎵 The Melodic Throne"
  },

  magic_ending: {
    id: "magic_ending",
    title: "Ending: The Heir's True Power",
    ending: true,
    endingType: "good",
    text: `"I see through you," you say calmly, and cast the curse-breaking spell.

    The illusion shatters. The real Shadow King — smaller, older, terrified — is revealed cowering behind a tapestry. Without his dark magic, he is nothing but a frightened old man who reached for power he couldn't control.

    You offer him mercy. He surrenders the crown without a fight.

    <em>Eldenmoor is restored. Your wisdom — choosing knowledge over violence — becomes legend.</em>`,
    achievement: "✨ The Wise Heir"
  },

  dark_ending: {
    id: "dark_ending",
    title: "Ending: The Father's Betrayal",
    ending: true,
    endingType: "bad",
    text: `You lower your guard. The figure that wears your father's face smiles — and then the smile twists into something terrible.

    It was never your father. The Shadow King is a master illusionist, and your hesitation cost you everything. Chains of dark magic coil around you. The medallion is torn from your neck.

    <em>Eldenmoor falls into shadow. The heir is imprisoned, and the kingdom forgets your name. Perhaps another will rise to try again... someday.</em>`,
    achievement: "💔 Deceived by Darkness"
  },

  orb_destroy_ending: {
    id: "orb_destroy_ending",
    title: "Ending: Shattered Power",
    ending: true,
    endingType: "good",
    text: `You bring your boot down on the orb. A shockwave of dark energy explodes outward — you are thrown against the wall, ears ringing, vision white.

    When clarity returns, the fortress is crumbling. The Shadow King's screams echo from somewhere above as his power evaporates. You run for the exit as stone and shadow collapse behind you.

    You emerge into sunlight just as the fortress crumbles to rubble. From the ruin, a single black crown rolls to your feet.

    <em>You claim Eldenmoor — not from combat, but from courage. The kingdom rebuilds. So do you.</em>`,
    achievement: "💥 The Destroyer of Darkness"
  },

  orb_confront_ending: {
    id: "orb_confront_ending",
    title: "Ending: Power Reflected",
    ending: true,
    endingType: "good",
    text: `The orb pulses in your hands as you ascend to the throne room. The Shadow King's eyes go wide with recognition — and fear.

    "That is mine," he hisses, lunging forward.

    You hold it up. The medallion around your neck resonates with the orb — a harmony of light and dark that only the true heir can balance. The orb transforms, light pouring from within, burning the darkness from the king's eyes.

    He falls to his knees, bewildered. Free.

    <em>You rule Eldenmoor wielding both light and shadow — the only monarch who understood that power must be balanced, not destroyed.</em>`,
    achievement: "🔮 The Balanced Throne"
  },

  army_ending: {
    id: "army_ending",
    title: "Ending: The Banner of Eldenmoor",
    ending: true,
    endingType: "good",
    text: `You hold the line. The Silver Lance holds the line. For six brutal hours, the battle rages across Ashfeld Plains — and then the Shadow King's army breaks.

    Without soldiers to command, the Shadow King flees into his fortress and barricades the gates. But a kingdom without subjects is just a building. You wait.

    Three days later, he opens the gates himself, crown in hand.

    <em>"I am so tired," he says. You take the crown, and your first act as ruler is to offer him a warm meal. Sometimes, the greatest victories require patience — not swords.</em>`,
    achievement: "🏰 The Patient Ruler"
  },

  redemption_ending: {
    id: "redemption_ending",
    title: "Ending: The Merciful Heir",
    ending: true,
    endingType: "good",
    text: `You walk into the throne room alone, hands open, no weapons. The Shadow King raises his hand to blast you — and you speak.

    You speak of the man he was. Of what Elder Sable told you. Of the crown and its curse. With every word, his hand trembles.

    When you reach up slowly and lift the crown from his head, he lets you.

    What is left beneath is a broken, remorseful old man — and you show him mercy.

    <em>You are crowned the Merciful Ruler of Eldenmoor. It is said that under your reign, no prison was built — only schools, and gardens, and second chances.</em>`,
    achievement: "💛 The Merciful Crown"
  }
};

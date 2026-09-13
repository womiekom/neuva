export const studioMeta = {
  name: "NEUVA",
  subtitle: "Independent Game Development Collective",
  school: "SMAN 81 Jakarta",
  location: "Jakarta, Indonesia",
  instagram: "@helloneuva",
  instagramUrl: "https://instagram.com/helloneuva",
  tagline: "We light the path for brilliant youth!",
  vision: "To push the frontiers of Indonesian indie game development by blending scientific insight with emotive 3D worldcraft, proving that meaningful, reflective stories can be told through interactive game mechanics.",
  mentorship: "Developed under direct industry mentorship from Krafton and Prestasi Junior Indonesia (PJI)."
};

export const studioPillars = [
  {
    title: "Cognitive Neuroscience",
    badge: "Metaphoric Science",
    description: "Every biome, puzzle, and companion is mapped directly onto human brain structures—from pineal sleep regulation to amygdalar fear processing."
  },
  {
    title: "Low-Poly Surrealism",
    badge: "Handcrafted 3D Art",
    description: "Custom-modeled in Blender, our minimalist low-poly aesthetics emphasize atmospheric mood, expressive lighting, and dreamlike silhouettes."
  },
  {
    title: "Technical Rigor",
    badge: "Unity 6 Architecture",
    description: "Engineered on Unity 6 with Universal Render Pipeline (URP), modular C# architectures, and responsive player controller mechanics."
  },
  {
    title: "Radical Empathy",
    badge: "Reflective Narrative",
    description: "Tackling authentic struggles like chronic insomnia, anxiety, and fragmented memory—guiding players through acceptance and emotional integration."
  }
];

export const studioProjects = [
  {
    id: "nemuri",
    title: "NEMURI",
    tagline: "Wander Through The Mind That Cannot Rest",
    description: "A 3D low-poly psychological exploration game following Kael into Nocturne, a surreal dreamscape mapped onto human brain anatomy, guided by four Energeons to confront chronic insomnia.",
    bannerImage: "/assets/projects/nemuri_banner.webp",
    logoImage: "/assets/logo/nemuri-logo.webp",
    status: "Flagship Title • 1st Place Winner",
    awards: "1st Place Winner — Krafton Better Ground 2026",
    tags: ["Unity 6", "Blender 3D", "Psychological Adventure", "Single-Player", "PC Windows"],
    duration: "40 – 60 Minutes"
  }
];

export const gameMeta = {
  title: "NEMURI",
  tagline: "Wander Through The Mind That Cannot Rest",
  genre: "3D Low-Poly Psychological Exploration",
  playtime: "40 – 60 Minutes",
  platform: "PC (Windows Native)",
  targetStores: ["Steam", "Epic Games Store"],
  engine: "Unity 6 (6000.4.0f1)",
  pipeline: "Universal Render Pipeline (URP) 3D",
  tools: {
    engine: "Unity 6",
    art3d: "Blender (Self-Crafted 3D Models & Low-Poly Worlds)",
    art2d: "Procreate (Concept Art, UI/UX & Character Sheets)",
    writing: "Google Docs (Screenplay & Lore Writing)",
    code: "Visual Studio Code (C# Architecture)"
  },
  premise: "Afflicted with debilitating chronic insomnia that has shattered his emotional stability, Kael makes a desperate choice to consume a mysterious compound. The substance pulls him downward into Nocturne — a vast, distorted dreamscape formed from his own subconscious mind. Guided by four Energeons embodying fragmented aspects of his psyche, Kael must navigate through symbolic brain structures, solve cognitive mechanisms, and restore the corrupted Nocturne Heart.",
  moral: "Healing is not the erasure of suffering, but the courageous integration and acceptance of every fragmented part of who we are."
};

export const characters3D = [
  {
    id: "kael",
    name: "Kael",
    title: "The Insomniac Traveler",
    model3d: "/assets/3d/Kael3d.webp",
    nature: "The Conscious Self",
    psyche: "Chronic Exhaustion & Vulnerability",
    summary: "The protagonist trapped between waking fatigue and dream instability. Desperate for rest, he descends into Nocturne to confront the cognitive imbalances haunting his sleep.",
    mechanic: "Player Avatar: Navigates environments, interacts with puzzles, channels companion energies, and confronts fears.",
    accent: "#c084fc",
    dimension: "Blender 3D Native"
  },
  {
    id: "rona",
    name: "Rona",
    title: "The Pulse",
    model3d: "/assets/3d/Rona3d.webp",
    nature: "Energeon Companion",
    psyche: "Ambition & Stress",
    summary: "A concentrated embodiment of Kael's restless conscious drive. In Nocturne, Rona's kinetic energy activates dormant mechanisms and summons physical objects from memory.",
    mechanic: "Pulse Ability: Triggers sleeping switches, activates environmental levers, and manifests physical weights.",
    accent: "#f59e0b",
    dimension: "Blender 3D Native"
  },
  {
    id: "keiko",
    name: "Keiko",
    title: "Soul Sight",
    model3d: "/assets/3d/Keiko3d.webp",
    nature: "Energeon Companion",
    psyche: "Energetic & Anxiety",
    summary: "Born from high alert and hypervigilant anxiety. Keiko has the unique gift of perception, unmasking deceptive terrain and revealing hidden tracks invisible to the naked eye.",
    mechanic: "Soul Sight: Illuminates secret footsteps, structural faults, and crucial objective hints across puzzles.",
    accent: "#38bdf8",
    dimension: "Blender 3D Native"
  },
  {
    id: "feanor",
    name: "Feanor",
    title: "The Arcane",
    model3d: "/assets/3d/Feanor3d.webp",
    nature: "Energeon Companion",
    psyche: "Logical, Arrogant & Angry",
    summary: "A manifestation of sharp analytical intellect intertwined with defensive pride. Feanor dismantles intricate computational networks, logical puzzles, and locked mental barriers.",
    mechanic: "Arcane Decryption: Solves complex symbolic matrices, deciphering memory locks and mathematical seals.",
    accent: "#e11d48",
    dimension: "Blender 3D Native"
  },
  {
    id: "murial",
    name: "Murial",
    title: "The Reform",
    model3d: "/assets/3d/Murial3d.webp",
    nature: "Energeon Companion",
    psyche: "Chill & Lifeless",
    summary: "Echoing states of emotional depletion and stoic detachment. Murial channels deep quietude to reconstruct shattered monuments, fallen pillars, and fractured bridges.",
    mechanic: "Reform: Rebuilds fragmented structures, restoring broken pathways across the memory islands.",
    accent: "#10b981",
    dimension: "Blender 3D Native"
  }
];

export const brainChapters = [
  {
    chapter: "Chapter 01",
    region: "Pineal Gland",
    anatomicalRole: "Regulating Sleep-Wake Cycles & Melatonin Harmony",
    lore: "The threshold of Nocturne. Chronic insomnia has destabilized the sacred Somnolune Shrine, scattering its crystals and throwing the natural circadian rhythm into total disarray.",
    milestones: [
      "Somnolune Shrine: Search for and restore the missing sleep crystals",
      "Shattering Rocks: Traverse unsteady geological formations in the dream forest",
      "The Tangled Vines: Clear subconscious blockades rooted in stress",
      "Encounter Ferry: Meet the enigmatic rabbit guardian carrying memories of Kael"
    ],
    videoAmbient: "/assets/videos/pineal_gland_video.mp4",
    videoAmbientWebm: "/assets/videos/pineal_gland_video.webm",
    audioTone: "Eerie forest soundscape with authentic rustling foliage, cool wind, and gentle musical chime motifs."
  },
  {
    chapter: "Chapter 02",
    region: "Hippocampus",
    anatomicalRole: "Consolidation & Retrieval of Episodic Memories",
    lore: "An archipelago of three floating Memory Islands shaped by fading reminiscences. As time passes, unaddressed experiences dissolve into confusion, creating deep mental fog.",
    milestones: [
      "Circadian Isle: Navigate shifts between temporal daylight and nocturnal stillness",
      "Memory Archive: Reconstruct shattered physical relics and recalled conversations",
      "Anxiety Heights: Scale towers of psychological hesitation and second-guessing",
      "Memory Synthesis: Uncover the foundational moments driving Kael's sleeplessness"
    ],
    videoAmbient: "/assets/videos/hippocampus_video.mp4",
    videoAmbientWebm: "/assets/videos/hippocampus_video.webm",
    audioTone: "Soft dark-fantasy lullaby with nostalgic, faded piano chords evoking bittersweet, distant recollections."
  },
  {
    chapter: "Chapter 03",
    region: "Amygdala",
    anatomicalRole: "Processing Fear, Panic & Emotional Crisis",
    lore: "The innermost, most volatile sanctum of Nocturne. The Nocturne Heart has collapsed under overwhelming anxiety, distorting the world into a volatile landscape of dread.",
    milestones: [
      "The Distorted Core: Infiltrate the corrupted epicenter of Kael's subconscious",
      "Awaken Powerups: Master Attack, Heal, Buff, and Agility energy states",
      "Boss Battle: Confront the Corrupted Ferry, the towering avatar of collective panic",
      "Nocturne Heart Restored: Achieve emotional balance and unlock peaceful rest"
    ],
    videoAmbient: "/assets/videos/amygdala_video.mp4",
    videoAmbientWebm: "/assets/videos/amygdala_video.webm",
    audioTone: "Tense, urgent cello compositions that transition into an uplifting, peaceful melody upon victory."
  }
];

export const achievementsData = [
  {
    title: "1st Place Winner — Krafton Better Ground 2026",
    organization: "Krafton x Prestasi Junior Indonesia (PJI)",
    category: "Game Development Mentorship & National Championship",
    date: "2026",
    description: "Awarded 1st Place among high school game development teams across Indonesia for NEMURI, presenting an original 3D low-poly psychological adventure game in Unity 6 under direct mentorship from Krafton industry veterans, and earned the chance to showcase their game at Krafton's headquarters in Seoul, South Korea.",
    verified: "Official Krafton Better Ground Laureate",
    badge: "1st Place Winner"
  }
];


export const studioDevelopers = [
  {
    name: "Raiyan Mufid",
    role: "Engine Programmer",
    specialty: "Gameplay Architecture & Systems Foundation",
    photo: "/assets/team/raiyan_mufid.webp",
    bio: "Developed the core gameplay architecture in Unity 6, establishing the underlying mechanic systems, character controllers, and technical foundations."
  },
  {
    name: "M. Faiq Misyal",
    role: "Engine Programmer",
    specialty: "In-Engine Interactions & Collision Logic",
    photo: "/assets/team/faiq_misyal.webp",
    bio: "Handled core in-engine implementation for interactive environments, trigger logic, collision physics, and real-time gameplay behavior."
  },
  {
    name: "Raihana Lavania Mansur",
    role: "Main Designer",
    specialty: "3D Asset Modeling, Map Schemes & UI/UX",
    photo: "/assets/team/raihana_lavania.webp",
    bio: "Crafted the visual identity of Nocturne, modeling all 3D characters and biomes in Blender, illustrating concept sheets, and directing UI/UX aesthetics."
  },
  {
    name: "Keisha Rima Sofia",
    role: "Concept Designer",
    specialty: "Storyline, Dialogue & Narrative Mechanics",
    photo: "/assets/team/keisha_rima.webp",
    bio: "Authored the narrative world of NEMURI, directing Kael's psychological arc, character dialogue, emotional pacing, and thematic game design."
  }
];

export const controlsMatrix = [
  { input: "W / A / S / D", function: "Traverse Nocturne terrains & pathways" },
  { input: "Hold Ability Key", function: "Channel active Energeon's psychological power" },
  { input: "Spacebar", function: "Trigger rhythm-based cognitive puzzles" },
  { input: "Tab / 1 – 4", function: "Switch between Rona, Keiko, Feanor, and Murial" },
  { input: "E", function: "Inspect discovered memory relic in inventory" },
  { input: "Q", function: "Cycle active item in inventory wheel" },
  { input: "H", function: "Activate Keiko's Soul Sight for puzzle hints" }
];

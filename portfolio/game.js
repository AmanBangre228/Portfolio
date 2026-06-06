/* ═══════════════════════════════════════════════════════════
   WORLD OF AMAN — A Portfolio RPG
   Mechanical Engineer | YCCE Nagpur | CGPA 7.27
   ═══════════════════════════════════════════════════════════ */
'use strict';

// ─────────────────────────────────────────────────────────────
// §1  PORTFOLIO CONTENT DATA
// ─────────────────────────────────────────────────────────────
const DATA = {
  hero: {
    name: 'Aman Bangre',
    title: 'Mechanical Engineer',
    college: 'YCCE Nagpur',
    cgpa: '7.27 / 10',
    degree: 'B.Tech — Mechanical Engineering',
    university: 'RTM Nagpur University',
    linkedin: 'https://www.linkedin.com/in/aman-bangre-11209828a/',
  },

  projects: {
    cfd: {
      tag: 'PROJECT_01',
      title: 'CFD Analysis: 4-Element F1 Front Wing',
      subtitle: 'Aerodynamics Research — ANSYS Fluent',
      domain: 'Computational Fluid Dynamics · Aerodynamics · F1 Engineering',
      glowColor: '#00f5ff',
      description: [
        'Performed a <strong>steady-state RANS CFD simulation</strong> on a 4-element Formula-style',
        'front wing using <strong>ANSYS Fluent</strong> with the <strong>k-ω SST turbulence model</strong>.',
        'Analyzed downforce generation, drag, ground effect, slot-gap flow attachment,',
        'and vortical structures at race-speed conditions of <strong>216 km/h</strong>.',
        '<em>Half-domain symmetry used → all reported values doubled for full wing.</em>',
      ].join(' '),
      metrics: [
        { val: '216',  unit: 'km/h',     label: 'Inlet Velocity' },
        { val: '0.617', unit: 'Cd',      label: 'Drag Coefficient' },
        { val: '-1.44', unit: 'Cl',      label: 'Lift Coefficient' },
        { val: '3438', unit: 'N',        label: 'Total Downforce', highlight: true },
        { val: '1470', unit: 'N',        label: 'Total Drag' },
        { val: '2.33', unit: '|Cl/Cd|', label: 'L/D Ratio' },
        { val: '1.2M', unit: 'cells',    label: 'Mesh Size' },
        { val: '10⁻⁵', unit: 'residual', label: 'Convergence' },
      ],
      insights: [
        'Strong low-pressure region under wing → effective downforce generation',
        'High-pressure region confirmed on upper wing surfaces',
        'Good flow attachment across all 4 elements — slot-gap working as intended',
        'Ground effect significantly amplifies suction beneath the wing',
        'Local vortical structures observed near trailing regions',
      ],
      tools: ['ANSYS Fluent', 'k-ω SST', 'RANS', 'CAD', 'Mesh Generation', 'Half-Domain Symmetry'],
      nextSteps: ['Transient URANS simulation', 'Mesh independence study', 'Improved near-wall resolution'],
      linkedin: 'https://www.linkedin.com/posts/aman-bangre-11209828a_cfd-aerodynamics-mechanicalengineering-ugcPost-7444065282739838976-N3Sh/',
      images: [
        { file: 'assets/docx_images/image7.jpeg', caption: 'System Architecture' },
        { file: 'assets/docx_images/image11.jpeg', caption: 'Component Layout' },
        { file: 'assets/docx_images/image12.jpeg', caption: 'Design Overview' },
        { file: 'assets/docx_images/image13.jpeg', caption: 'Simulation Setup' },
      ],
    },
    drone: {
      tag: 'PROJECT_02',
      title: 'Gesture-Piloted Drone + Solar Docking',
      subtitle: 'Autonomous Hexacopter System — YCCE Nagpur',
      domain: 'UAV Design · Embedded Systems · Renewable Energy · HMI',
      glowColor: '#ff6b2b',
      description: [
        'Designed and built an <strong>F550 Hexacopter</strong> controlled entirely through hand gestures',
        'using an <strong>MPU6050-equipped glove transmitter</strong> — no joystick required.',
        'Paired with a <strong>20W solar-powered wireless inductive charging docking station</strong>',
        'for fully off-grid autonomous agricultural drone operations.',
        'Guide: <strong>Dr. Vijay R. Khawale</strong>, Dept. of Mechanical Engineering, YCCE Nagpur.',
      ].join(' '),
      specs: [
        { label: 'Frame',             value: 'DJI F550 Hexacopter' },
        { label: 'Flight Controller', value: 'SpeedyBee F405 V3' },
        { label: 'Motors',            value: '6× A2212/13T 1000KV BLDC' },
        { label: 'ESC',               value: 'SimonK 30A × 6' },
        { label: 'Propellers',        value: '1045 Props' },
        { label: 'Gesture Sensor',    value: 'MPU-6050 IMU Module' },
        { label: 'Glove MCU',         value: 'Arduino Nano V3' },
        { label: 'GPS',               value: 'M8N with Compass' },
        { label: 'Battery',           value: '3S 6600mAh Li-Ion (ICR-18650)' },
        { label: 'Solar Panel',       value: '20W + Wireless Inductive WPT' },
        { label: 'RF Link',           value: '2.4GHz (I2C/SPI Protocols)' },
        { label: 'Simulation',        value: 'SITL + MATLAB Kinematic Model' },
      ],
      insights: [
        'MPU6050 reads hand tilt angle → translated to flight command via Arduino Nano',
        '2.4GHz RF link transmits control signals glove → drone in real-time',
        'Magnetic induction coils transfer power wirelessly when drone lands on dock',
        'Auto-return logic triggers when battery voltage drops below threshold',
        'SITL simulation validated pitch/roll control before physical flight testing',
      ],
      tools: ['Arduino', 'MPU6050', 'EasyEDA', 'MATLAB', 'ArduPilot', 'SITL', 'I2C/SPI', 'SpeedyBee'],
      team: ['Aman Bangre (118)', 'Vansh Gondane (168)', 'Riddhi Agarwal (107)', 'Atharva Kangali (121)', 'Saksham Muktewar (152)', 'Vansh Narayani (167)'],
      guide: 'Dr. Vijay R. Khawale — Assistant Professor, Mech. Engg., YCCE Nagpur',
      images: [
        { file: 'assets/docx_images/image30.jpeg', caption: 'Hexacopter Frame Assembly' },
        { file: 'assets/docx_images/image31.jpeg', caption: 'Electronic Components' },
        { file: 'assets/docx_images/image32.jpeg', caption: 'Glove Transmitter Circuit' },
        { file: 'assets/docx_images/image34.jpeg', caption: 'SITL Simulation Dashboard' },
        { file: 'assets/docx_images/image36.jpeg', caption: 'Flight Testing' },
      ],
    },
  },

  skills: [
    {
      cat: 'SIMULATION & CFD', color: '#00f5ff', icon: '⚙',
      nodes: [
        { name: 'ANSYS Fluent', lvl: 90, unlocked: true },
        { name: 'CFD Analysis', lvl: 88, unlocked: true },
        { name: 'k-ω SST Model', lvl: 82, unlocked: true },
        { name: 'RANS / URANS',  lvl: 78, unlocked: true },
        { name: 'MATLAB',        lvl: 80, unlocked: true },
        { name: 'FEA / FEM',     lvl: 65, unlocked: true },
        { name: 'Mesh Generation', lvl: 75, unlocked: true },
        { name: 'Transient CFD', lvl: 40, unlocked: false },
      ],
    },
    {
      cat: 'CAD & DESIGN', color: '#a855f7', icon: '✏',
      nodes: [
        { name: 'SolidWorks', lvl: 85, unlocked: true },
        { name: 'AutoCAD',    lvl: 78, unlocked: true },
        { name: '3D Modelling', lvl: 84, unlocked: true },
        { name: 'CATIA',      lvl: 72, unlocked: true },
        { name: 'EasyEDA (PCB)', lvl: 70, unlocked: true },
        { name: 'Topology Opt.', lvl: 35, unlocked: false },
      ],
    },
    {
      cat: 'EMBEDDED SYSTEMS', color: '#ff6b2b', icon: '🔌',
      nodes: [
        { name: 'Arduino',     lvl: 87, unlocked: true },
        { name: 'C / C++',    lvl: 75, unlocked: true },
        { name: 'MPU6050/IMU', lvl: 82, unlocked: true },
        { name: 'I2C / SPI',   lvl: 76, unlocked: true },
        { name: 'ArduPilot',   lvl: 74, unlocked: true },
        { name: 'ROS2',        lvl: 30, unlocked: false },
      ],
    },
    {
      cat: 'UAV & ROBOTICS', color: '#00ff88', icon: '🚁',
      nodes: [
        { name: 'UAV Design',      lvl: 85, unlocked: true },
        { name: 'Flight Control',  lvl: 80, unlocked: true },
        { name: 'SITL Simulation', lvl: 76, unlocked: true },
        { name: 'Inductive WPT',   lvl: 73, unlocked: true },
        { name: 'Solar Systems',   lvl: 68, unlocked: true },
        { name: 'Swarm UAVs',      lvl: 20, unlocked: false },
      ],
    },
  ],

  npcs: {
    guide: {
      icon: '🤖', name: 'ARIA-7', color: '#00f5ff',
      lines: [
        "Welcome, Traveler! I'm ARIA-7, your guide.",
        "This world belongs to Aman Bangre —",
        "Mechanical Engineer & Innovator.",
        "Explore buildings to discover his projects.",
        "▸ CFD Lab is to the North-West",
        "▸ Drone Lab is to the North-East",
        "▸ Skill Tree Temple is to the West",
        "▸ About Me Hall is to the East",
        "▸ There's a hidden RESUME VAULT...",
        "Press [E] near buildings to enter. Let's go!",
      ],
    },
    aman: {
      icon: '👨‍🔧', name: 'AMAN BANGRE', color: '#ff6b2b',
      lines: [
        "Hey! I'm Aman Bangre.",
        "B.Tech Mechanical Engineering @ YCCE Nagpur.",
        "CGPA: 7.27 / 10.0",
        "I specialize in CFD, aerodynamics, and",
        "building drone systems from scratch.",
        "My F1 wing generates 3438 N of downforce.",
        "My drone flies with just a hand gesture.",
        "Check the labs to the north — and find",
        "the hidden Resume Vault if you can! 🎯",
      ],
    },
    cfdNpc: {
      icon: '🌬', name: 'DR. AERO', color: '#00ccff',
      lines: [
        "Ah, a visitor to the Aerodynamics Lab!",
        "Aman's CFD work is remarkable.",
        "He simulated a 4-element Formula wing",
        "at 216 km/h using ANSYS Fluent.",
        "The k-ω SST model with 1.2 million cells",
        "achieved engineering-level convergence.",
        "Total downforce: 3438 Newtons!",
        "That's equivalent to ~350 kg pressing down.",
        "Enter the lab to see the complete data. ▶",
      ],
    },
    droneNpc: {
      icon: '🚁', name: 'ENG. ROBO', color: '#ff8855',
      lines: [
        "Welcome to the Robotics District!",
        "Aman built a hexacopter that reads",
        "hand tilts via an MPU6050 sensor.",
        "No joystick — just tilt your hand!",
        "Forward tilt → drone flies forward.",
        "The docking station charges it wirelessly",
        "using solar power. No grid needed.",
        "Perfect for remote agricultural use.",
        "Enter the Drone Lab for full specs! ▶",
      ],
    },
  },

  achievements: [
    { id: 'spawn',    icon: '🌟', name: 'First Steps',          desc: 'You entered the World of Aman' },
    { id: 'cfd',     icon: '🌬', name: 'Aerodynamicist',       desc: 'You visited the CFD Lab' },
    { id: 'drone',   icon: '🚁', name: 'Drone Pilot',          desc: 'You visited the Drone Lab' },
    { id: 'skill',   icon: '⚡', name: 'Skill Seeker',         desc: 'You opened the Skill Tree' },
    { id: 'about',   icon: '👤', name: 'Know Your Engineer',   desc: 'You met Aman in the About Hall' },
    { id: 'resume',  icon: '📋', name: 'Secret Unlocked',      desc: 'You found the hidden Resume Vault!' },
    { id: 'talknpc', icon: '💬', name: 'Conversationalist',    desc: 'You talked to all NPCs' },
  ],
};

// ─────────────────────────────────────────────────────────────
// §2  WORLD LAYOUT CONSTANTS
// ─────────────────────────────────────────────────────────────
const T = 48; // tile size px
const WC = 32; // world columns
const WR = 24; // world rows
const WPX = WC * T; // 1536
const WPY = WR * T; // 1152

const BUILDINGS = [
  {
    id: 'cfd',    col: 1,  row: 1, cols: 9, rows: 5,
    doorCol: 5, doorRow: 5,
    color: 0x001428, border: 0x00f5ff, borderCSS: '#00f5ff',
    label: '⚙ CFD LAB', sublabel: 'Aerodynamics Research Center',
    interior: 'cfd',
  },
  {
    id: 'drone',  col: 22, row: 1, cols: 9, rows: 5,
    doorCol: 26, doorRow: 5,
    color: 0x140500, border: 0xff6b2b, borderCSS: '#ff6b2b',
    label: '🚁 DRONE LAB', sublabel: 'Autonomous Systems Center',
    interior: 'drone',
  },
  {
    id: 'skill',  col: 1,  row: 8, cols: 7, rows: 6,
    doorCol: 4, doorRow: 13,
    color: 0x0a0014, border: 0xa855f7, borderCSS: '#a855f7',
    label: '⚡ SKILL TREE', sublabel: 'Engineering Mastery Temple',
    interior: 'skill',
  },
  {
    id: 'about',  col: 24, row: 8, cols: 7, rows: 6,
    doorCol: 27, doorRow: 13,
    color: 0x001408, border: 0x00ff88, borderCSS: '#00ff88',
    label: '👤 ABOUT ME', sublabel: 'Profile & Story Hall',
    interior: 'about',
  },
  {
    id: 'resume', col: 2, row: 16, cols: 5, rows: 4,
    doorCol: 4, doorRow: 19,
    color: 0x141000, border: 0xffd700, borderCSS: '#ffd700',
    label: '📋 ??? VAULT', sublabel: 'Secret Collectible',
    interior: 'resume', hidden: true,
  },
];

const NPCS_DEF = [
  { id: 'guide',    col: 16, row: 21, data: 'guide' },
  { id: 'aman',     col: 16, row: 11, data: 'aman' },
  { id: 'cfdNpc',   col: 11, row: 6,  data: 'cfdNpc' },
  { id: 'droneNpc', col: 20, row: 6,  data: 'droneNpc' },
];

const SPAWN = { col: 16, row: 22 };

// ─────────────────────────────────────────────────────────────
// §3  SCENE: PRELOADER (creates all assets programmatically)
// ─────────────────────────────────────────────────────────────
class PreloadScene extends Phaser.Scene {
  constructor() { super({ key: 'Preload' }); }

  preload() {
    // Fake load bar
    const W = this.scale.width, H = this.scale.height;
    this.add.text(W / 2, H / 2 - 20, 'INITIALIZING WORLD...', {
      fontFamily: 'Orbitron,monospace', fontSize: '20px', color: '#00f5ff',
    }).setOrigin(0.5);

    const bar = this.add.graphics();
    this.tweens.addCounter({
      from: 0, to: 100, duration: 1200, ease: 'Sine.easeInOut',
      onUpdate: (t) => {
        const v = Math.floor(t.getValue());
        bar.clear();
        bar.fillStyle(0x00f5ff, 0.2);
        bar.fillRect(W / 2 - 150, H / 2 + 20, 300, 4);
        bar.fillStyle(0x00f5ff, 1);
        bar.fillRect(W / 2 - 150, H / 2 + 20, v * 3, 4);
        const el = document.getElementById('load-bar');
        if (el) el.style.width = v + '%';
      },
    });
  }

  create() {
    this._makePlayerTex();
    this._makeNpcTex();
    this._makeWorldTex();
    this._makeTileTex();

    this.time.delayedCall(1400, () => {
      const ls = document.getElementById('loading-screen');
      if (ls) { ls.style.transition = 'opacity 0.5s'; ls.style.opacity = 0; setTimeout(() => ls.remove(), 600); }
      this.scene.start('Menu');
    });
  }

  _makePlayerTex() {
    const g = this.make.graphics({ x: 0, y: 0, add: false });
    // Shadow
    g.fillStyle(0x000000, 0.25);
    g.fillEllipse(18, 40, 22, 7);
    // Legs
    g.fillStyle(0x1a2040);
    g.fillRect(9, 27, 8, 13);
    g.fillRect(19, 27, 8, 13);
    // Shoes
    g.fillStyle(0x080810);
    g.fillRect(7, 38, 10, 4);
    g.fillRect(19, 38, 10, 4);
    // Body
    g.fillStyle(0xff6b2b);
    g.fillRoundedRect(6, 13, 24, 16, 4);
    // Jacket accent
    g.fillStyle(0xcc4a15);
    g.fillRect(16, 13, 2, 16);
    // Collar
    g.fillStyle(0xdddddd);
    g.fillRect(12, 12, 12, 3);
    // Head
    g.fillStyle(0xffb899);
    g.fillCircle(18, 9, 8);
    // Hair
    g.fillStyle(0x1a0800);
    g.fillRect(10, 2, 16, 6);
    g.fillCircle(18, 5, 8);
    // Eyes
    g.fillStyle(0x0a0a14);
    g.fillCircle(14, 9, 2);
    g.fillCircle(22, 9, 2);
    // Eye shine
    g.fillStyle(0xffffff);
    g.fillCircle(15, 8, 0.8);
    g.fillCircle(23, 8, 0.8);
    g.generateTexture('player', 36, 44);
    g.destroy();
  }

  _makeNpcTex() {
    const colors = {
      guide: 0x00f5ff, aman: 0xff6b2b, cfdNpc: 0x00ccff, droneNpc: 0xff8855,
    };
    Object.entries(colors).forEach(([id, col]) => {
      const g = this.make.graphics({ x: 0, y: 0, add: false });
      g.fillStyle(0x000000, 0.2);
      g.fillEllipse(16, 38, 20, 6);
      g.fillStyle(col, 0.8);
      g.fillRoundedRect(6, 13, 20, 15, 3);
      g.fillStyle(0xffcc99);
      g.fillCircle(16, 8, 7);
      g.fillStyle(0x0a0a14);
      g.fillCircle(13, 8, 1.5);
      g.fillCircle(19, 8, 1.5);
      g.fillStyle(col, 0.5);
      g.fillRect(8, 26, 6, 12);
      g.fillRect(18, 26, 6, 12);
      g.generateTexture('npc_' + id, 32, 38);
      g.destroy();
    });
  }

  _makeWorldTex() {
    // World background texture (grass tile)
    const g = this.make.graphics({ x: 0, y: 0, add: false });
    g.fillStyle(0x061208); g.fillRect(0, 0, T, T);
    g.fillStyle(0x081a0a, 0.4);
    for (let i = 0; i < 6; i++) {
      const x = Phaser.Math.Between(2, T - 4), y = Phaser.Math.Between(2, T - 4);
      g.fillRect(x, y, 2, 3);
    }
    g.generateTexture('tile_grass', T, T);
    g.clear();

    // Path tile
    g.fillStyle(0x111824); g.fillRect(0, 0, T, T);
    g.fillStyle(0x1a2535, 0.3);
    g.fillRect(2, 2, T - 4, 2);
    g.fillRect(2, T - 4, T - 4, 2);
    g.generateTexture('tile_path', T, T);
    g.clear();

    // Water/fountain tile
    g.fillStyle(0x071828); g.fillRect(0, 0, T, T);
    g.fillStyle(0x00a0c0, 0.15);
    g.fillCircle(T / 2, T / 2, T / 2 - 4);
    g.fillStyle(0x00f5ff, 0.08);
    g.fillCircle(T / 2, T / 2, T / 4);
    g.generateTexture('tile_water', T, T);
    g.clear();

    // Spawn tile
    g.fillStyle(0x071828); g.fillRect(0, 0, T, T);
    g.lineStyle(1, 0x00f5ff, 0.4);
    g.strokeRect(2, 2, T - 4, T - 4);
    g.generateTexture('tile_spawn', T, T);
    g.destroy();
  }

  _makeTileTex() {
    // Tree texture
    const g = this.make.graphics({ x: 0, y: 0, add: false });
    g.fillStyle(0x040c06); g.fillRect(0, 0, T, T);
    g.fillStyle(0x0f2a0a); g.fillCircle(T / 2, T / 2 - 4, 17);
    g.fillStyle(0x1a4010); g.fillCircle(T / 2, T / 2 - 8, 13);
    g.fillStyle(0x0d1e08); g.fillCircle(T / 2, T / 2 + 2, 9);
    g.fillStyle(0x2a1a06); g.fillRect(T / 2 - 3, T / 2 + 10, 6, 12);
    g.generateTexture('tile_tree', T, T);
    g.clear();

    // Flower tile
    g.fillStyle(0x061208); g.fillRect(0, 0, T, T);
    [[12,12,'#ff3366'], [30,20,'#00f5ff'], [20,32,'#ffd700'], [38,14,'#ff6b2b']].forEach(([x,y,c]) => {
      g.fillStyle(Phaser.Display.Color.HexStringToColor(c).color, 0.8);
      g.fillCircle(x, y, 3);
    });
    g.generateTexture('tile_flower', T, T);
    g.destroy();
  }
}

// ─────────────────────────────────────────────────────────────
// §4  SCENE: MAIN MENU
// ─────────────────────────────────────────────────────────────
class MenuScene extends Phaser.Scene {
  constructor() { super({ key: 'Menu' }); }

  create() {
    const { width: W, height: H } = this.scale;
    this.cameras.main.setBackgroundColor('#020609');

    // Grid background
    const grid = this.add.graphics();
    grid.lineStyle(1, 0x00f5ff, 0.04);
    for (let x = 0; x < W; x += 60) { grid.lineBetween(x, 0, x, H); }
    for (let y = 0; y < H; y += 60) { grid.lineBetween(0, y, W, y); }

    // Particle stars
    for (let i = 0; i < 80; i++) {
      const star = this.add.graphics();
      const x = Phaser.Math.Between(0, W), y = Phaser.Math.Between(0, H);
      const r = Math.random() * 1.5 + 0.3;
      star.fillStyle(Math.random() > 0.7 ? 0xff6b2b : 0x00f5ff, Math.random() * 0.5 + 0.1);
      star.fillCircle(x, y, r);
      this.tweens.add({
        targets: star, alpha: 0, duration: Phaser.Math.Between(1500, 4000),
        yoyo: true, repeat: -1, delay: Phaser.Math.Between(0, 3000),
      });
    }

    // Title
    const titleBig = this.add.text(W / 2, H / 2 - 130, 'WORLD OF AMAN', {
      fontFamily: 'Orbitron,monospace', fontSize: Math.min(W / 10, 72) + 'px',
      fontStyle: 'bold', color: '#00f5ff', align: 'center',
      shadow: { offsetX: 0, offsetY: 0, color: '#00f5ff', blur: 30, fill: true },
    }).setOrigin(0.5).setAlpha(0);

    this.add.text(W / 2, H / 2 - 60, '— A PORTFOLIO RPG —', {
      fontFamily: 'Share Tech Mono,monospace', fontSize: '14px',
      color: '#ff6b2b', letterSpacing: 8, align: 'center',
    }).setOrigin(0.5).setAlpha(0).setName('sub');

    const desc = this.add.text(W / 2, H / 2 + 10,
      'Explore the world. Discover projects. Talk to NPCs.\nUnlock achievements. Find the hidden Resume Vault.', {
      fontFamily: 'Rajdhani,sans-serif', fontSize: '18px',
      color: '#7ba8b8', align: 'center', lineSpacing: 8,
    }).setOrigin(0.5).setAlpha(0);

    const startBtn = this.add.text(W / 2, H / 2 + 110, '[ PRESS ENTER OR TAP TO START ]', {
      fontFamily: 'Orbitron,monospace', fontSize: '14px',
      color: '#00f5ff', letterSpacing: 4,
    }).setOrigin(0.5).setAlpha(0).setInteractive({ useHandCursor: true });

    const credit = this.add.text(W / 2, H - 30,
      'Aman Bangre  ·  B.Tech Mechanical Engineering  ·  YCCE Nagpur  ·  CGPA: 7.27', {
      fontFamily: 'Share Tech Mono,monospace', fontSize: '11px', color: '#3d6578', align: 'center',
    }).setOrigin(0.5);

    // Corner decorations
    this._addCorner(this, 20, 20, 1, 1);
    this._addCorner(this, W - 20, 20, -1, 1);
    this._addCorner(this, 20, H - 20, 1, -1);
    this._addCorner(this, W - 20, H - 20, -1, -1);

    // Appear animations
    this.tweens.add({ targets: titleBig, alpha: 1, y: H / 2 - 140, duration: 900, ease: 'Back.out', delay: 200 });
    this.tweens.add({ targets: this.children.getByName('sub'), alpha: 1, duration: 700, delay: 900 });
    this.tweens.add({ targets: desc, alpha: 1, duration: 700, delay: 1100 });
    this.tweens.add({ targets: startBtn, alpha: 1, duration: 700, delay: 1300 });

    // Blink start button
    this.tweens.add({ targets: startBtn, alpha: 0.2, duration: 800, yoyo: true, repeat: -1, delay: 1800 });

    // Scanline effect
    const scanline = this.add.graphics();
    this.tweens.addCounter({
      from: -H, to: H, duration: 6000, repeat: -1,
      onUpdate: (t) => {
        scanline.clear();
        scanline.fillStyle(0x00f5ff, 0.04);
        scanline.fillRect(0, t.getValue(), W, 3);
      },
    });

    // Start handlers
    const doStart = () => {
      this.cameras.main.fadeOut(400, 2, 6, 9);
      this.time.delayedCall(400, () => this.scene.start('World'));
    };
    this.input.keyboard.once('keydown-ENTER', doStart);
    this.input.keyboard.once('keydown-SPACE', doStart);
    startBtn.on('pointerdown', doStart);
    this.input.once('pointerdown', doStart);
  }

  _addCorner(scene, x, y, sx, sy) {
    const g = scene.add.graphics();
    g.lineStyle(2, 0x00f5ff, 0.6);
    g.beginPath();
    g.moveTo(x, y + sy * 30);
    g.lineTo(x, y);
    g.lineTo(x + sx * 30, y);
    g.strokePath();
  }
}

// ─────────────────────────────────────────────────────────────
// §5  SCENE: OVERWORLD (main game)
// ─────────────────────────────────────────────────────────────
class WorldScene extends Phaser.Scene {
  constructor() { super({ key: 'World' }); }

  create() {
    this.cameras.main.fadeIn(600, 2, 6, 9);
    document.getElementById('hud').style.display = 'block';

    // State
    this._inDialogue = false;
    this._dialogueLines = [];
    this._dialogueIdx = 0;
    this._nearBuilding = null;
    this._nearNpc = null;
    this._achievements = new Set(JSON.parse(localStorage.getItem('aman_ach') || '[]'));
    this._npcTalked = new Set();

    this._buildWorld();
    this._addDecoration();
    this._addPlayer();
    this._addNPCs();
    this._addBuildingZones();
    this._setupCamera();
    this._setupInput();
    this._setupMobile();
    this._setupMinimap();
    this._unlockAchievement('spawn');
  }

  // ── World rendering ──────────────────────────────────────────
  _buildWorld() {
    // Tile map (2D array: 0=grass, 1=path, 2=tree, 3=flower, 4=water, 5=spawn)
    this._map = Array.from({ length: WR }, () => Array(WC).fill(0));

    // Paths
    const paths = [
      // horizontal
      [0, 6, WC, 2], [0, 14, WC, 2], [0, 20, WC, 2],
      // vertical
      [15, 0, 2, WR],
    ];
    paths.forEach(([c, r, w, h]) => {
      for (let dr = 0; dr < h; dr++)
        for (let dc = 0; dc < w; dc++)
          if (r + dr < WR && c + dc < WC) this._map[r + dr][c + dc] = 1;
    });

    // Trees: border & clusters
    for (let c = 0; c < WC; c++) { this._map[0][c] = 2; this._map[1][c] = 2; }
    for (let r = 0; r < WR; r++) { this._map[r][0] = 2; this._map[r][WC - 1] = 2; }
    // Tree clusters
    [[26,2],[27,2],[28,2],[26,3],[27,3],[28,3],[28,4],[29,4],[28,7],[29,7],[28,8],
     [1,16],[2,16],[3,16],[1,17],[2,17],[28,15],[29,15],[28,16]].forEach(([c,r])=>{
      if(r < WR && c < WC) this._map[r][c] = 2;
    });

    // Town square water feature
    [[15,9],[16,9],[15,10],[16,10],[15,11],[16,11]].forEach(([c,r])=>{ this._map[r][c] = 4; });

    // Flowers
    [[3,7],[7,7],[12,7],[19,7],[24,7],[3,13],[8,13],[19,13],[24,13],
     [5,21],[10,21],[21,21],[26,21]].forEach(([c,r])=>{
      if(this._map[r][c] === 0) this._map[r][c] = 3;
    });

    // Spawn
    this._map[SPAWN.row][SPAWN.col] = 5;

    // Buildings (clear their area)
    BUILDINGS.forEach(b => {
      for (let dr = 0; dr < b.rows; dr++)
        for (let dc = 0; dc < b.cols; dc++)
          if (b.row + dr < WR && b.col + dc < WC) this._map[b.row + dr][b.col + dc] = -1;
    });

    // Render tiles
    const tileMap = { 0: 'tile_grass', 1: 'tile_path', 2: 'tile_tree', 3: 'tile_flower', 4: 'tile_water', 5: 'tile_spawn' };
    for (let r = 0; r < WR; r++) {
      for (let c = 0; c < WC; c++) {
        const tile = this._map[r][c];
        if (tile === -1) continue;
        const key = tileMap[tile] || 'tile_grass';
        this.add.image(c * T + T / 2, r * T + T / 2, key);
      }
    }

    // Build collision map (1 = blocked)
    this._collision = Array.from({ length: WR }, (_, r) =>
      Array.from({ length: WC }, (__, c) => {
        const tile = this._map[r][c];
        if (tile === 2) return 1; // tree
        if (tile === -1) return 1; // building wall
        return 0;
      })
    );

    // Draw buildings
    BUILDINGS.forEach(b => this._drawBuilding(b));
  }

  _drawBuilding(b) {
    const g = this.add.graphics();
    const px = b.col * T, py = b.row * T;
    const pw = b.cols * T, ph = b.rows * T;

    // Fill
    g.fillStyle(b.color, 1);
    g.fillRect(px, py, pw, ph);

    // Animated glow border
    g.lineStyle(2, b.border, 0.8);
    g.strokeRect(px + 1, py + 1, pw - 2, ph - 2);
    g.lineStyle(1, b.border, 0.3);
    g.strokeRect(px + 4, py + 4, pw - 8, ph - 8);

    // Door indicator
    const dx = b.doorCol * T, dy = b.doorRow * T;
    g.fillStyle(b.border, 0.4);
    g.fillRect(dx + 8, dy, T - 16, T);
    g.fillStyle(b.border, 0.8);
    g.fillRect(dx + 10, dy + 4, T - 20, T - 8);
    // Door arrows
    g.fillStyle(b.border, 1);
    g.fillTriangle(dx + T/2 - 6, dy + T/2 + 8, dx + T/2 + 6, dy + T/2 + 8, dx + T/2, dy + T/2 - 8);

    // Label
    this.add.text(px + pw / 2, py + ph / 2 - 18, b.label, {
      fontFamily: 'Orbitron,monospace', fontSize: '11px', fontStyle: 'bold',
      color: Phaser.Display.Color.IntegerToColor(b.border).rgba,
      align: 'center',
    }).setOrigin(0.5);
    this.add.text(px + pw / 2, py + ph / 2, b.sublabel, {
      fontFamily: 'Share Tech Mono,monospace', fontSize: '8px',
      color: 'rgba(123,168,184,0.6)', align: 'center',
    }).setOrigin(0.5);

    // Collision — make building interiors non-walkable, but door is walkable
    for (let dr = 0; dr < b.rows; dr++) {
      for (let dc = 0; dc < b.cols; dc++) {
        const r = b.row + dr, c = b.col + dc;
        if (r < WR && c < WC) {
          // Door row/col is walkable
          const isDoor = (r === b.doorRow && c === b.doorCol);
          this._collision[r][c] = isDoor ? 0 : 1;
        }
      }
    }

    // Glow anim
    this.tweens.addCounter({
      from: 0.4, to: 1, duration: 1500, yoyo: true, repeat: -1,
      delay: Math.random() * 1000,
      onUpdate: (t) => {
        g.clear();
        const alpha = t.getValue();
        g.fillStyle(b.color, 1);
        g.fillRect(px, py, pw, ph);
        g.lineStyle(2, b.border, alpha);
        g.strokeRect(px + 1, py + 1, pw - 2, ph - 2);
        g.lineStyle(1, b.border, alpha * 0.4);
        g.strokeRect(px + 4, py + 4, pw - 8, ph - 8);
        g.fillStyle(b.border, 0.35);
        g.fillRect(dx + 8, dy, T - 16, T);
        g.fillStyle(b.border, alpha * 0.8);
        g.fillRect(dx + 10, dy + 4, T - 20, T - 8);
        g.fillStyle(b.border, alpha);
        g.fillTriangle(dx + T/2 - 6, dy + T/2 + 8, dx + T/2 + 6, dy + T/2 + 8, dx + T/2, dy + T/2 - 8);
      },
    });
  }

  _addDecoration() {
    // Spawn area platform
    const sg = this.add.graphics();
    sg.lineStyle(1, 0x00f5ff, 0.3);
    sg.strokeRect(SPAWN.col * T - T, SPAWN.row * T - T * 0.5, T * 3, T * 2);
    sg.lineStyle(1, 0x00f5ff, 0.15);
    sg.strokeRect(SPAWN.col * T - T * 1.5, SPAWN.row * T - T, T * 4, T * 3);

    // SPAWN text
    this.add.text(SPAWN.col * T + T / 2, SPAWN.row * T - 20, '[ SPAWN POINT ]', {
      fontFamily: 'Share Tech Mono,monospace', fontSize: '9px', color: 'rgba(0,245,255,0.4)',
    }).setOrigin(0.5);

    // Town square label
    this.add.text(16 * T, 10 * T, 'TOWN SQUARE', {
      fontFamily: 'Orbitron,monospace', fontSize: '13px', color: 'rgba(0,255,136,0.5)',
      align: 'center',
    }).setOrigin(0.5);

    // Fountain glow
    const fg = this.add.graphics();
    this.tweens.addCounter({
      from: 0.3, to: 0.9, duration: 2000, yoyo: true, repeat: -1,
      onUpdate: t => {
        fg.clear();
        fg.fillStyle(0x00f5ff, t.getValue() * 0.2);
        fg.fillCircle(15.5 * T, 10.5 * T, T * 1.5);
        fg.lineStyle(1, 0x00f5ff, t.getValue() * 0.5);
        fg.strokeCircle(15.5 * T, 10.5 * T, T * 1.5);
      },
    });
  }

  // ── Player ───────────────────────────────────────────────────
  _addPlayer() {
    this.physics.world.setBounds(0, 0, WPX, WPY);

    this._px = SPAWN.col * T + T / 2;
    this._py = SPAWN.row * T + T / 2;
    this._speed = 180;
    this._dir = 'down';
    this._moving = false;

    this.player = this.add.image(this._px, this._py, 'player').setDepth(10);

    // Player shadow
    this._shadow = this.add.graphics().setDepth(9);
    this._shadow.fillStyle(0x000000, 0.3);
    this._shadow.fillEllipse(this._px, this._py + 18, 24, 8);
  }

  // ── NPCs ─────────────────────────────────────────────────────
  _addNPCs() {
    this._npcs = NPCS_DEF.map(def => {
      const npcData = DATA.npcs[def.data];
      const x = def.col * T + T / 2, y = def.row * T + T / 2;

      // Sprite
      const sprite = this.add.image(x, y, 'npc_' + def.id).setDepth(8);

      // Name tag (floating)
      const bg = this.add.graphics().setDepth(9);
      const nameTag = this.add.text(x, y - 36, npcData.name, {
        fontFamily: 'Orbitron,monospace', fontSize: '8px',
        color: Phaser.Display.Color.IntegerToColor(
          Phaser.Display.Color.HexStringToColor(npcData.color.replace('#','#')).color
        ).rgba,
        backgroundColor: 'rgba(2,6,9,0.85)',
        padding: { x: 5, y: 3 },
      }).setOrigin(0.5).setDepth(9);

      // Idle bob
      this.tweens.add({
        targets: [sprite, nameTag],
        y: '-=6', duration: 1200, yoyo: true, repeat: -1,
        ease: 'Sine.easeInOut', delay: Math.random() * 800,
      });

      // Icon bubble
      const bubble = this.add.text(x, y - 60, npcData.icon, { fontSize: '18px' }).setOrigin(0.5).setDepth(9);
      this.tweens.add({
        targets: bubble, scaleX: 1.2, scaleY: 1.2,
        duration: 800, yoyo: true, repeat: -1, ease: 'Sine.easeInOut',
      });

      return { ...def, sprite, nameTag, bubble, x, y, data: npcData };
    });
  }

  // ── Building interaction zones ───────────────────────────────
  _addBuildingZones() {
    this._buildingZones = BUILDINGS.map(b => {
      const cx = (b.doorCol + 0.5) * T;
      const cy = (b.doorRow + 1.5) * T; // just outside door
      return { ...b, cx, cy, radius: T * 2 };
    });
  }

  // ── Camera ───────────────────────────────────────────────────
  _setupCamera() {
    this.cameras.main.setBounds(0, 0, WPX, WPY);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    this.cameras.main.setBackgroundColor('#020609');
    this.cameras.main.setZoom(Math.min(this.scale.width / (WPX / 2.5), this.scale.height / (WPY / 2.5)));
    this.cameras.main.setZoom(Math.max(this.cameras.main.zoom, 0.5));
  }

  // ── Keyboard input ────────────────────────────────────────────
  _setupInput() {
    this._keys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      upArr: Phaser.Input.Keyboard.KeyCodes.UP,
      downArr: Phaser.Input.Keyboard.KeyCodes.DOWN,
      leftArr: Phaser.Input.Keyboard.KeyCodes.LEFT,
      rightArr: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      interact: Phaser.Input.Keyboard.KeyCodes.E,
      escape: Phaser.Input.Keyboard.KeyCodes.ESC,
    });

    this.input.keyboard.on('keydown-E', () => this._onInteract());
    this.input.keyboard.on('keydown-ESC', () => this._onEscape());
    document.getElementById('interior-close').addEventListener('click', () => this._closeInterior());
    document.getElementById('mobile-interact-btn').addEventListener('click', () => this._onInteract());
  }

  // ── Mobile joystick ───────────────────────────────────────────
  _setupMobile() {
    this._joystick = { active: false, startX: 0, startY: 0, dx: 0, dy: 0 };
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent) || this.scale.width < 768;
    if (isMobile) {
      document.getElementById('joystick-zone').style.display = 'flex';
      document.getElementById('mobile-interact-btn').style.display = 'flex';
    }

    const jBase = document.getElementById('joystick-base');
    const jThumb = document.getElementById('joystick-thumb');
    const jZone = document.getElementById('joystick-zone');

    jZone.addEventListener('touchstart', e => {
      const t = e.touches[0];
      const rect = jBase.getBoundingClientRect();
      this._joystick.active = true;
      this._joystick.startX = rect.left + rect.width / 2;
      this._joystick.startY = rect.top + rect.height / 2;
      e.preventDefault();
    }, { passive: false });

    jZone.addEventListener('touchmove', e => {
      if (!this._joystick.active) return;
      const t = e.touches[0];
      const dx = t.clientX - this._joystick.startX;
      const dy = t.clientY - this._joystick.startY;
      const maxR = 38;
      const len = Math.sqrt(dx * dx + dy * dy);
      const nx = len > maxR ? (dx / len) * maxR : dx;
      const ny = len > maxR ? (dy / len) * maxR : dy;
      this._joystick.dx = nx / maxR;
      this._joystick.dy = ny / maxR;
      jThumb.style.transform = `translate(${nx}px, ${ny}px)`;
      e.preventDefault();
    }, { passive: false });

    const jEnd = () => {
      this._joystick.active = false;
      this._joystick.dx = 0;
      this._joystick.dy = 0;
      jThumb.style.transform = 'translate(0,0)';
    };
    jZone.addEventListener('touchend', jEnd);
    jZone.addEventListener('touchcancel', jEnd);
  }

  // ── Minimap ───────────────────────────────────────────────────
  _setupMinimap() {
    const mm = document.getElementById('minimap');
    const scale = 4;
    mm.width = WC * scale;
    mm.height = WR * scale;
    const ctx = mm.getContext('2d');
    mm.style.width = WC * scale + 'px';
    mm.style.height = WR * scale + 'px';

    this._minimapCtx = ctx;
    this._minimapScale = scale;

    // Draw static minimap background
    ctx.fillStyle = '#020609';
    ctx.fillRect(0, 0, mm.width, mm.height);

    // Draw tiles
    const colors = { 0: '#061208', 1: '#111824', 2: '#040c06', 3: '#061208', 4: '#071828', 5: '#07182a' };
    for (let r = 0; r < WR; r++) {
      for (let c = 0; c < WC; c++) {
        const tile = this._map[r][c];
        ctx.fillStyle = tile === -1 ? '#080e14' : (colors[tile] || '#061208');
        ctx.fillRect(c * scale, r * scale, scale, scale);
      }
    }

    // Draw buildings on minimap
    BUILDINGS.forEach(b => {
      ctx.fillStyle = Phaser.Display.Color.IntegerToColor(b.border).rgba;
      ctx.globalAlpha = 0.6;
      ctx.fillRect(b.col * scale, b.row * scale, b.cols * scale, b.rows * scale);
      ctx.globalAlpha = 1;
    });
  }

  _updateMinimap() {
    const ctx = this._minimapCtx;
    const scale = this._minimapScale;
    const px = Math.floor((this._px / T) * scale);
    const py = Math.floor((this._py / T) * scale);

    // Redraw player dot (clear old then draw new)
    if (this._lastMmX !== undefined) {
      ctx.fillStyle = '#071828';
      ctx.fillRect(this._lastMmX - 2, this._lastMmY - 2, 5, 5);
      // Redraw tile under player
      const tc = Math.floor(this._lastMmX / scale), tr = Math.floor(this._lastMmY / scale);
      const tileColors = { 0: '#061208', 1: '#111824', 2: '#040c06', 3: '#061208', 4: '#071828', 5: '#07182a' };
      const tile = this._map[tr] && this._map[tr][tc];
      ctx.fillStyle = tile === -1 ? '#080e14' : (tileColors[tile] || '#061208');
      ctx.fillRect(tc * scale, tr * scale, scale, scale);
    }
    ctx.fillStyle = '#ff6b2b';
    ctx.fillRect(px - 1, py - 1, 3, 3);
    this._lastMmX = px;
    this._lastMmY = py;
  }

  // ── Main update loop ──────────────────────────────────────────
  update(time, delta) {
    if (this._inDialogue || this._interiorOpen) return;

    const dt = delta / 1000;
    const k = this._keys;

    // Get input direction
    let vx = 0, vy = 0;
    if (k.left.isDown || k.leftArr.isDown) vx = -1;
    else if (k.right.isDown || k.rightArr.isDown) vx = 1;
    if (k.up.isDown || k.upArr.isDown) vy = -1;
    else if (k.down.isDown || k.downArr.isDown) vy = 1;

    // Mobile joystick
    if (this._joystick.active) {
      const d = this._joystick;
      if (Math.abs(d.dx) > 0.1) vx = d.dx;
      if (Math.abs(d.dy) > 0.1) vy = d.dy;
    }

    // Normalize diagonal
    if (vx !== 0 && vy !== 0) { vx *= 0.707; vy *= 0.707; }

    // Update direction for sprite flip
    if (vx < 0) this.player.setFlipX(true);
    else if (vx > 0) this.player.setFlipX(false);

    // Collision check & move
    const spd = this._speed * dt;
    const nx = this._px + vx * spd;
    const ny = this._py + vy * spd;

    const canMoveX = this._canWalk(nx, this._py);
    const canMoveY = this._canWalk(this._px, ny);

    if (canMoveX) this._px = Phaser.Math.Clamp(nx, T, WPX - T);
    if (canMoveY) this._py = Phaser.Math.Clamp(ny, T, WPY - T);

    this.player.setPosition(this._px, this._py);
    this._shadow.clear();
    this._shadow.fillStyle(0x000000, 0.25);
    this._shadow.fillEllipse(this._px, this._py + 20, 24, 7);

    // Camera follow is automatic via startFollow

    // Check proximity
    this._checkProximity();

    // Minimap update
    this._updateMinimap();

    // NPC interaction hint
    const hint = document.getElementById('interact-hint');
    const hintText = document.getElementById('hint-text');
    if (this._nearBuilding) {
      hint.style.display = 'flex';
      hintText.textContent = 'ENTER ' + this._nearBuilding.label;
    } else if (this._nearNpc) {
      hint.style.display = 'flex';
      hintText.textContent = 'TALK TO ' + this._nearNpc.data.name;
    } else {
      hint.style.display = 'none';
    }
  }

  _canWalk(px, py) {
    const margin = 10;
    const checks = [
      { x: px - margin, y: py + 16 },
      { x: px + margin, y: py + 16 },
      { x: px, y: py + 20 },
    ];
    return checks.every(({ x, y }) => {
      const c = Math.floor(x / T), r = Math.floor(y / T);
      if (r < 0 || r >= WR || c < 0 || c >= WC) return false;
      return this._collision[r][c] === 0;
    });
  }

  _checkProximity() {
    this._nearBuilding = null;
    this._nearNpc = null;

    // Check buildings
    for (const b of this._buildingZones) {
      const dx = this._px - b.cx, dy = this._py - b.cy;
      if (Math.sqrt(dx * dx + dy * dy) < b.radius + 20) {
        this._nearBuilding = b;
        break;
      }
    }

    // Check NPCs (only if no building nearby)
    if (!this._nearBuilding) {
      for (const npc of this._npcs) {
        const dx = this._px - npc.x, dy = this._py - npc.y;
        if (Math.sqrt(dx * dx + dy * dy) < T * 2.5) {
          this._nearNpc = npc;
          break;
        }
      }
    }
  }

  // ── Interaction ───────────────────────────────────────────────
  _onInteract() {
    if (this._inDialogue) {
      this._advanceDialogue();
      return;
    }
    if (this._interiorOpen) return;
    if (this._nearBuilding) {
      this._enterBuilding(this._nearBuilding);
    } else if (this._nearNpc) {
      this._startDialogue(this._nearNpc.data);
      this._npcTalked.add(this._nearNpc.id);
      if (this._npcTalked.size >= NPCS_DEF.length) this._unlockAchievement('talknpc');
    }
  }

  _onEscape() {
    if (this._inDialogue) { this._endDialogue(); return; }
    if (this._interiorOpen) { this._closeInterior(); }
  }

  // ── Dialogue ──────────────────────────────────────────────────
  _startDialogue(npcData) {
    this._inDialogue = true;
    this._dialogueLines = npcData.lines;
    this._dialogueIdx = 0;

    const box = document.getElementById('dialogue-box');
    document.getElementById('dialogue-portrait-inner').textContent = npcData.icon;
    document.getElementById('dialogue-name').textContent = npcData.name;
    document.getElementById('dialogue-name').style.color = npcData.color;
    box.style.display = 'flex';
    box.style.borderTopColor = npcData.color;

    this._showDialogueLine(this._dialogueLines[0]);
  }

  _showDialogueLine(line) {
    const el = document.getElementById('dialogue-text');
    el.textContent = '';
    let i = 0;
    clearInterval(this._typeInterval);
    this._typeInterval = setInterval(() => {
      el.textContent += line[i] || '';
      i++;
      if (i >= line.length) clearInterval(this._typeInterval);
    }, 28);
  }

  _advanceDialogue() {
    clearInterval(this._typeInterval);
    const el = document.getElementById('dialogue-text');
    const current = this._dialogueLines[this._dialogueIdx];

    // If still typing, complete immediately
    if (el.textContent.length < current.length) {
      el.textContent = current;
      return;
    }

    this._dialogueIdx++;
    if (this._dialogueIdx >= this._dialogueLines.length) {
      this._endDialogue();
    } else {
      this._showDialogueLine(this._dialogueLines[this._dialogueIdx]);
    }
  }

  _endDialogue() {
    clearInterval(this._typeInterval);
    this._inDialogue = false;
    document.getElementById('dialogue-box').style.display = 'none';
  }

  // ── Building interiors ────────────────────────────────────────
  _enterBuilding(building) {
    this._interiorOpen = true;
    const overlay = document.getElementById('interior-overlay');
    const content = document.getElementById('interior-content');
    overlay.style.display = 'flex';
    content.innerHTML = INTERIORS[building.interior](building);
    this._unlockAchievement(building.id);

    // Animate skill bars if entering skill scene
    if (building.interior === 'skill') {
      setTimeout(() => {
        document.querySelectorAll('.skill-node-bar').forEach(bar => {
          const w = bar.getAttribute('data-w');
          bar.style.width = w + '%';
        });
      }, 150);
    }
  }

  _closeInterior() {
    this._interiorOpen = false;
    document.getElementById('interior-overlay').style.display = 'none';
  }

  // ── Achievements ──────────────────────────────────────────────
  _unlockAchievement(id) {
    if (this._achievements.has(id)) return;
    this._achievements.add(id);
    localStorage.setItem('aman_ach', JSON.stringify([...this._achievements]));

    const ach = DATA.achievements.find(a => a.id === id);
    if (!ach) return;

    const popup = document.getElementById('achievement-popup');
    document.getElementById('ach-name').textContent = ach.icon + ' ' + ach.name;
    popup.style.display = 'flex';

    setTimeout(() => {
      popup.style.transition = 'opacity 0.5s';
      popup.style.opacity = '0';
      setTimeout(() => {
        popup.style.display = 'none';
        popup.style.opacity = '1';
        popup.style.transition = '';
      }, 500);
    }, 3000);
  }
}

// ─────────────────────────────────────────────────────────────
// §6  INTERIOR CONTENT BUILDERS (pure HTML strings)
// ─────────────────────────────────────────────────────────────
const INTERIORS = {

  cfd(b) {
    const p = DATA.projects.cfd;
    const imgs = p.images.map(img =>
      `<div class="int-image-card">
        <img src="${img.file}" alt="${img.caption}" loading="lazy" onerror="this.parentElement.style.display='none'"/>
        <div class="int-image-caption">${img.caption}</div>
      </div>`
    ).join('');

    return `
      <div class="int-header" style="border-bottom-color:rgba(0,245,255,0.15)">
        <div class="int-tag">${p.tag}</div>
        <div class="int-title">${p.title}</div>
        <div class="int-subtitle">${p.subtitle}</div>
      </div>
      <div class="int-body">
        <div class="int-section">
          <div class="int-section-title">// OVERVIEW</div>
          <p class="int-desc">${p.description}</p>
          <div class="tool-tags">${p.tools.map(t=>`<span class="tool-tag">${t}</span>`).join('')}</div>
        </div>

        <div class="int-section">
          <div class="int-section-title">// SIMULATION DATA</div>
          <div class="data-grid">
            ${p.metrics.map(m => `
              <div class="data-card">
                <div class="data-val${m.highlight ? ' highlight' : ''}">${m.val}</div>
                <div class="data-unit">${m.unit}</div>
                <div class="data-label">${m.label}</div>
              </div>`).join('')}
          </div>
        </div>

        <div class="int-section">
          <div class="int-section-title">// FLOW INSIGHTS</div>
          <ul class="insights-list">
            ${p.insights.map(i=>`<li>${i}</li>`).join('')}
          </ul>
        </div>

        ${imgs ? `
        <div class="int-section">
          <div class="int-section-title">// PROJECT IMAGES</div>
          <div class="int-image-grid">${imgs}</div>
        </div>` : ''}

        <div class="int-section">
          <div class="int-section-title">// NEXT STEPS</div>
          <ul class="insights-list">
            ${p.nextSteps.map(s=>`<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-top:20px">
          <a href="${p.linkedin}" target="_blank" rel="noopener"
            style="display:inline-flex;align-items:center;gap:8px;font-family:Orbitron,monospace;font-size:0.65rem;
            color:#00f5ff;text-decoration:none;border:1px solid #00f5ff;padding:10px 20px;letter-spacing:0.15em;
            transition:background 0.2s" onmouseover="this.style.background='rgba(0,245,255,0.1)'"
            onmouseout="this.style.background='transparent'">
            ▶ VIEW ON LINKEDIN →
          </a>
        </div>
      </div>`;
  },

  drone(b) {
    const p = DATA.projects.drone;
    const imgs = p.images.map(img =>
      `<div class="int-image-card">
        <img src="${img.file}" alt="${img.caption}" loading="lazy" onerror="this.parentElement.style.display='none'"/>
        <div class="int-image-caption">${img.caption}</div>
      </div>`
    ).join('');

    return `
      <div class="int-header" style="border-bottom-color:rgba(255,107,43,0.15)">
        <div class="int-tag" style="color:#ff6b2b">${p.tag}</div>
        <div class="int-title">${p.title}</div>
        <div class="int-subtitle" style="color:#ff6b2b">${p.subtitle}</div>
      </div>
      <div class="int-body">
        <div class="int-section">
          <div class="int-section-title" style="color:#ff6b2b;border-bottom-color:rgba(255,107,43,0.15)">// OVERVIEW</div>
          <p class="int-desc">${p.description}</p>
          <div class="tool-tags">${p.tools.map(t=>`<span class="tool-tag" style="border-color:rgba(255,107,43,0.3);color:#ff6b2b;background:rgba(255,107,43,0.05)">${t}</span>`).join('')}</div>
        </div>

        <div class="int-section">
          <div class="int-section-title" style="color:#ff6b2b;border-bottom-color:rgba(255,107,43,0.15)">// SYSTEM SPECIFICATIONS</div>
          <table class="spec-table">
            ${p.specs.map(s=>`<tr><td>${s.label}</td><td>${s.value}</td></tr>`).join('')}
          </table>
        </div>

        <div class="int-section">
          <div class="int-section-title" style="color:#ff6b2b;border-bottom-color:rgba(255,107,43,0.15)">// HOW IT WORKS</div>
          <ul class="insights-list">
            ${p.insights.map(i=>`<li>${i}</li>`).join('')}
          </ul>
        </div>

        ${imgs ? `
        <div class="int-section">
          <div class="int-section-title" style="color:#ff6b2b;border-bottom-color:rgba(255,107,43,0.15)">// PROJECT IMAGES</div>
          <div class="int-image-grid">${imgs}</div>
        </div>` : ''}

        <div class="int-section">
          <div class="int-section-title" style="color:#ff6b2b;border-bottom-color:rgba(255,107,43,0.15)">// TEAM & GUIDE</div>
          <div style="font-family:Share Tech Mono,monospace;font-size:0.75rem;color:rgba(232,244,248,0.7);margin-bottom:10px">
            ${p.team.join('  ·  ')}
          </div>
          <div style="font-family:Share Tech Mono,monospace;font-size:0.72rem;color:#ff6b2b">${p.guide}</div>
        </div>
      </div>`;
  },

  skill(b) {
    return `
      <div class="int-header" style="border-bottom-color:rgba(168,85,247,0.15)">
        <div class="int-tag" style="color:#a855f7">SKILL_TREE</div>
        <div class="int-title">Engineering Skill Tree</div>
        <div class="int-subtitle" style="color:#a855f7">Mastery of Systems & Simulation</div>
      </div>
      <div class="skill-tree-wrap">
        ${DATA.skills.map(cat => `
          <div class="skill-cat">
            <div class="skill-cat-title" style="color:${cat.color}">${cat.icon} ${cat.cat}</div>
            ${cat.nodes.map(n => `
              <div class="skill-node ${n.unlocked ? 'unlocked' : 'locked'}"
                   style="border-color:${n.unlocked ? cat.color + '33' : 'rgba(255,255,255,0.06)'}">
                <div class="skill-node-lock">${n.unlocked ? '🔓' : '🔒'}</div>
                <div class="skill-node-name">${n.name}</div>
                <div class="skill-node-bar-wrap">
                  <div class="skill-node-bar" data-w="${n.unlocked ? n.lvl : 0}"
                       style="width:0%;background:${cat.color}"></div>
                </div>
                <div class="skill-node-pct" style="color:${cat.color}">${n.unlocked ? n.lvl + '%' : '???'}</div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>`;
  },

  about(b) {
    const h = DATA.hero;
    return `
      <div class="int-header" style="border-bottom-color:rgba(0,255,136,0.15)">
        <div class="int-tag" style="color:#00ff88">PROFILE_DATA</div>
        <div class="int-title">${h.name}</div>
        <div class="int-subtitle" style="color:#00ff88">${h.title} · ${h.college}</div>
      </div>
      <div class="int-body">
        <div class="int-section">
          <div class="int-section-title" style="color:#00ff88;border-bottom-color:rgba(0,255,136,0.12)">// IDENTITY</div>
          <div class="about-stat-grid">
            <div class="about-stat"><div class="about-stat-label">FULL NAME</div><div class="about-stat-value accent">${h.name}</div></div>
            <div class="about-stat"><div class="about-stat-label">DEGREE</div><div class="about-stat-value">${h.degree}</div></div>
            <div class="about-stat"><div class="about-stat-label">INSTITUTION</div><div class="about-stat-value">${h.college}</div></div>
            <div class="about-stat"><div class="about-stat-label">UNIVERSITY</div><div class="about-stat-value">${h.university}</div></div>
            <div class="about-stat"><div class="about-stat-label">CGPA</div><div class="about-stat-value accent" style="font-size:1.4rem">${h.cgpa}</div></div>
            <div class="about-stat"><div class="about-stat-label">STATUS</div><div class="about-stat-value" style="color:#00ff88">▶ ACTIVE</div></div>
          </div>
        </div>

        <div class="int-section">
          <div class="int-section-title" style="color:#00ff88;border-bottom-color:rgba(0,255,136,0.12)">// ABOUT ME</div>
          <p class="int-desc">
            I'm a Mechanical Engineering student at YCCE Nagpur, driven by a passion for where physics meets
            innovation. I specialize in <strong>Computational Fluid Dynamics</strong>, <strong>UAV design</strong>,
            and <strong>embedded systems</strong>.<br><br>
            My F1 aerodynamic simulation generates <strong>3438 Newtons of downforce</strong> on a 4-element
            front wing at race speed. My gesture-controlled hexacopter flies with nothing but a tilt of the hand,
            powered by solar energy — no grid needed.<br><br>
            I believe the future belongs to engineers who can <strong>think across domains</strong> — from
            fluid dynamics to firmware, from CAD to control systems.
          </p>
        </div>

        <div class="int-section">
          <div class="int-section-title" style="color:#00ff88;border-bottom-color:rgba(0,255,136,0.12)">// CONNECT</div>
          <a href="${h.linkedin}" target="_blank" rel="noopener"
            style="display:inline-flex;align-items:center;gap:8px;font-family:Orbitron,monospace;font-size:0.65rem;
            color:#00ff88;text-decoration:none;border:1px solid #00ff88;padding:10px 20px;letter-spacing:0.15em">
            in LINKEDIN PROFILE →
          </a>
        </div>
      </div>`;
  },

  resume(b) {
    return `
      <div class="int-header" style="border-bottom-color:rgba(255,215,0,0.2)">
        <div class="int-tag" style="color:#ffd700">🏆 SECRET UNLOCKED</div>
        <div class="int-title" style="color:#ffd700">RESUME VAULT</div>
        <div class="int-subtitle" style="color:#ffd700">You found the hidden collectible!</div>
      </div>
      <div class="int-body">
        <div class="int-section">
          <div class="int-section-title" style="color:#ffd700;border-bottom-color:rgba(255,215,0,0.12)">// AMAN BANGRE — RÉSUMÉ</div>
          <div class="resume-item"><div class="resume-item-label">NAME</div><div class="resume-item-value">Aman Bangre</div></div>
          <div class="resume-item"><div class="resume-item-label">EDUCATION</div><div class="resume-item-value">B.Tech — Mechanical Engineering, YCCE Nagpur | CGPA: 7.27 / 10</div></div>
          <div class="resume-item"><div class="resume-item-label">PROJECT 1</div><div class="resume-item-value">CFD Analysis of 4-Element F1 Front Wing — ANSYS Fluent, k-ω SST, 3438N Downforce</div></div>
          <div class="resume-item"><div class="resume-item-label">PROJECT 2</div><div class="resume-item-value">Gesture-Piloted Hexacopter + Solar Inductive Docking — MPU6050, Arduino, SpeedyBee F405</div></div>
          <div class="resume-item"><div class="resume-item-label">SKILLS</div><div class="resume-item-value">ANSYS Fluent · SolidWorks · AutoCAD · MATLAB · Arduino · C/C++ · EasyEDA · ArduPilot</div></div>
          <div class="resume-item"><div class="resume-item-label">LINKEDIN</div><div class="resume-item-value"><a href="https://www.linkedin.com/in/aman-bangre-11209828a/" target="_blank" rel="noopener" style="color:#ffd700">linkedin.com/in/aman-bangre-11209828a</a></div></div>
        </div>
        <p style="font-family:Share Tech Mono,monospace;font-size:0.72rem;color:rgba(255,215,0,0.5);text-align:center;margin-top:20px">
          🎯 Achievement Unlocked: "Secret Unlocked" — You found the hidden vault!
        </p>
      </div>`;
  },
};

// ─────────────────────────────────────────────────────────────
// §7  PHASER GAME CONFIG + LAUNCH
// ─────────────────────────────────────────────────────────────
const config = {
  type: Phaser.AUTO,
  parent: 'game-wrap',
  canvas: document.getElementById('game-canvas'),
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#020609',
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 0 }, debug: false },
  },
  scene: [PreloadScene, MenuScene, WorldScene],
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);

// Handle resize
window.addEventListener('resize', () => {
  game.scale.resize(window.innerWidth, window.innerHeight);
});

// Mobile detect → show controls
if (/Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth < 768) {
  document.getElementById('joystick-zone').style.display = 'flex';
  document.getElementById('mobile-interact-btn').style.display = 'flex';
  document.getElementById('controls-help').style.display = 'none';
}

console.log('%cWORLD OF AMAN', 'color:#00f5ff;font-family:monospace;font-size:16px;font-weight:bold;');
console.log('%cMechanical Engineer Portfolio RPG — Aman Bangre, YCCE Nagpur', 'color:#7ba8b8;font-family:monospace;');

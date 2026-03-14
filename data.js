export const SCHOOL_ORDER = [
  "Chronomancer",
  "Elementalist",
  "Enchanter",
  "Illusionist",
  "Necromancer",
  "Sigilist",
  "Soothsayer",
  "Summoner",
  "Thaumaturge",
  "Witch"
];

export const SCHOOL_DATA = {
  "Chronomancer": {
    "summary": "Manipulates time, rewards risk-taking, and thrives on tempo tricks.",
    "aligned": [
      "Elementalist",
      "Necromancer",
      "Soothsayer"
    ],
    "opposed": "Enchanter",
    "palette": "time"
  },
  "Elementalist": {
    "summary": "Direct, explosive magic built around damage, walls, and battlefield pressure.",
    "aligned": [
      "Chronomancer",
      "Enchanter",
      "Summoner"
    ],
    "opposed": "Illusionist",
    "palette": "fire"
  },
  "Enchanter": {
    "summary": "Enhances gear, allies, and constructs with practical battlefield magic.",
    "aligned": [
      "Elementalist",
      "Sigilist",
      "Witch"
    ],
    "opposed": "Chronomancer",
    "palette": "bronze"
  },
  "Illusionist": {
    "summary": "Wins through deception, displacement, invisibility, and confusion.",
    "aligned": [
      "Sigilist",
      "Soothsayer",
      "Thaumaturge"
    ],
    "opposed": "Elementalist",
    "palette": "violet"
  },
  "Necromancer": {
    "summary": "Uses death magic, attrition, and undead pressure to grind enemies down.",
    "aligned": [
      "Chronomancer",
      "Summoner",
      "Witch"
    ],
    "opposed": "Thaumaturge",
    "palette": "bone"
  },
  "Sigilist": {
    "summary": "Runes, scrolls, and written magic with strong utility and treasure play.",
    "aligned": [
      "Enchanter",
      "Illusionist",
      "Thaumaturge"
    ],
    "opposed": "Summoner",
    "palette": "ink"
  },
  "Soothsayer": {
    "summary": "Information, prediction, control, and precision support magic.",
    "aligned": [
      "Chronomancer",
      "Illusionist",
      "Thaumaturge"
    ],
    "opposed": "Witch",
    "palette": "star"
  },
  "Summoner": {
    "summary": "Brings outsiders onto the table and leans into control of dangerous allies.",
    "aligned": [
      "Elementalist",
      "Necromancer",
      "Witch"
    ],
    "opposed": "Sigilist",
    "palette": "crimson"
  },
  "Thaumaturge": {
    "summary": "Protective and restorative magic with anti-undead tools and support buffs.",
    "aligned": [
      "Illusionist",
      "Sigilist",
      "Soothsayer"
    ],
    "opposed": "Necromancer",
    "palette": "sun"
  },
  "Witch": {
    "summary": "Nature magic, curses, potions, and beasts with flexible campaign tools.",
    "aligned": [
      "Enchanter",
      "Necromancer",
      "Summoner"
    ],
    "opposed": "Soothsayer",
    "palette": "moss"
  }
};

export const SPELLS = [
  {
    "name": "Crumble",
    "school": "Chronomancer",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack",
      "movement",
      "control"
    ]
  },
  {
    "name": "Decay",
    "school": "Chronomancer",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "attack",
      "buff"
    ]
  },
  {
    "name": "Fast Act",
    "school": "Chronomancer",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "warband",
      "summon",
      "buff"
    ]
  },
  {
    "name": "Fleet Feet",
    "school": "Chronomancer",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "movement"
    ]
  },
  {
    "name": "Petrify",
    "school": "Chronomancer",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "movement",
      "tempo"
    ]
  },
  {
    "name": "Slow",
    "school": "Chronomancer",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "movement",
      "tempo",
      "buff"
    ]
  },
  {
    "name": "Time Store",
    "school": "Chronomancer",
    "base": 14,
    "category": "Self Only",
    "tags": [
      "self",
      "tempo"
    ]
  },
  {
    "name": "Time Walk",
    "school": "Chronomancer",
    "base": 14,
    "category": "Self Only",
    "tags": [
      "self",
      "attack",
      "movement",
      "tempo"
    ]
  },
  {
    "name": "Call Storm",
    "school": "Elementalist",
    "base": 12,
    "category": "Area Effect",
    "tags": [
      "area",
      "attack"
    ]
  },
  {
    "name": "Destructive Sphere",
    "school": "Elementalist",
    "base": 12,
    "category": "Area Effect",
    "tags": [
      "area",
      "attack"
    ]
  },
  {
    "name": "Elemental Ball",
    "school": "Elementalist",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack",
      "utility"
    ]
  },
  {
    "name": "Elemental Bolt",
    "school": "Elementalist",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack",
      "utility"
    ]
  },
  {
    "name": "Elemental Hammer",
    "school": "Elementalist",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "attack",
      "buff"
    ]
  },
  {
    "name": "Elemental Shield",
    "school": "Elementalist",
    "base": 10,
    "category": "Self Only",
    "tags": [
      "self",
      "attack",
      "control"
    ]
  },
  {
    "name": "Scatter Shot",
    "school": "Elementalist",
    "base": 12,
    "category": "Area Effect",
    "tags": [
      "area",
      "warband",
      "summon",
      "attack"
    ]
  },
  {
    "name": "Wall",
    "school": "Elementalist",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "utility"
    ]
  },
  {
    "name": "Animate Construct",
    "school": "Enchanter",
    "base": 10,
    "category": "Out of Game (B)",
    "tags": [
      "campaign",
      "warband",
      "summon"
    ]
  },
  {
    "name": "Control Construct",
    "school": "Enchanter",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "warband",
      "summon",
      "tempo"
    ]
  },
  {
    "name": "Embed Enchantment",
    "school": "Enchanter",
    "base": 14,
    "category": "Out of Game (A)",
    "tags": [
      "campaign",
      "buff"
    ]
  },
  {
    "name": "Enchant Armour",
    "school": "Enchanter",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "buff"
    ]
  },
  {
    "name": "Enchant Weapon",
    "school": "Enchanter",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack",
      "buff"
    ]
  },
  {
    "name": "Grenade",
    "school": "Enchanter",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack",
      "utility"
    ]
  },
  {
    "name": "Strength",
    "school": "Enchanter",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "buff"
    ]
  },
  {
    "name": "Telekinesis",
    "school": "Enchanter",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "treasure",
      "movement",
      "utility"
    ]
  },
  {
    "name": "Blink",
    "school": "Illusionist",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "movement",
      "buff"
    ]
  },
  {
    "name": "Beauty",
    "school": "Illusionist",
    "base": 10,
    "category": "Self Only",
    "tags": [
      "self",
      "warband",
      "summon",
      "attack"
    ]
  },
  {
    "name": "Fool's Gold",
    "school": "Illusionist",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "treasure",
      "movement",
      "buff"
    ]
  },
  {
    "name": "Glow",
    "school": "Illusionist",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack"
    ]
  },
  {
    "name": "Illusionary Soldier",
    "school": "Illusionist",
    "base": 12,
    "category": "Out of Game (B) OR Touch",
    "tags": [
      "touch",
      "campaign",
      "treasure",
      "warband"
    ]
  },
  {
    "name": "Invisibility",
    "school": "Illusionist",
    "base": 12,
    "category": "Touch",
    "tags": [
      "touch",
      "treasure",
      "attack",
      "movement"
    ]
  },
  {
    "name": "Teleport",
    "school": "Illusionist",
    "base": 10,
    "category": "Self Only",
    "tags": [
      "self",
      "movement",
      "tempo",
      "utility"
    ]
  },
  {
    "name": "Transpose",
    "school": "Illusionist",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "warband",
      "summon",
      "movement"
    ]
  },
  {
    "name": "Animate Skull",
    "school": "Necromancer",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "movement",
      "tempo"
    ]
  },
  {
    "name": "Bone Dart",
    "school": "Necromancer",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack",
      "utility"
    ]
  },
  {
    "name": "Bones of the Earth",
    "school": "Necromancer",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "attack",
      "health"
    ]
  },
  {
    "name": "Control Undead",
    "school": "Necromancer",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "warband",
      "summon",
      "tempo"
    ]
  },
  {
    "name": "Raise Zombie",
    "school": "Necromancer",
    "base": 10,
    "category": "Out of Game (B) OR Touch",
    "tags": [
      "touch",
      "warband",
      "summon",
      "campaign"
    ]
  },
  {
    "name": "Spell Eater",
    "school": "Necromancer",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "attack",
      "control"
    ]
  },
  {
    "name": "Steal Health",
    "school": "Necromancer",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "warband",
      "summon",
      "health"
    ]
  },
  {
    "name": "Strike Dead",
    "school": "Necromancer",
    "base": 18,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "attack",
      "health"
    ]
  },
  {
    "name": "Absorb Knowledge",
    "school": "Sigilist",
    "base": 12,
    "category": "Out of Game (A)",
    "tags": [
      "attack",
      "health",
      "campaign"
    ]
  },
  {
    "name": "Bridge",
    "school": "Sigilist",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "movement",
      "tempo",
      "buff"
    ]
  },
  {
    "name": "Draining Word",
    "school": "Sigilist",
    "base": 14,
    "category": "Area Effect",
    "tags": [
      "area"
    ]
  },
  {
    "name": "Explosive Rune",
    "school": "Sigilist",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "warband",
      "summon",
      "attack"
    ]
  },
  {
    "name": "Furious Quill",
    "school": "Sigilist",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack",
      "movement",
      "buff"
    ]
  },
  {
    "name": "Power Word",
    "school": "Sigilist",
    "base": 14,
    "category": "Area Effect",
    "tags": [
      "area"
    ]
  },
  {
    "name": "Push",
    "school": "Sigilist",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack",
      "movement",
      "buff"
    ]
  },
  {
    "name": "Write Scroll",
    "school": "Sigilist",
    "base": 12,
    "category": "Out of Game (A)",
    "tags": [
      "campaign",
      "item"
    ]
  },
  {
    "name": "Awareness",
    "school": "Soothsayer",
    "base": 12,
    "category": "Out of Game (B)",
    "tags": [
      "campaign",
      "warband",
      "tempo",
      "control"
    ]
  },
  {
    "name": "Combat Awareness",
    "school": "Soothsayer",
    "base": 12,
    "category": "Touch",
    "tags": [
      "touch",
      "movement",
      "buff"
    ]
  },
  {
    "name": "Mind Control",
    "school": "Soothsayer",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "warband",
      "attack",
      "movement"
    ]
  },
  {
    "name": "Mind Lock",
    "school": "Soothsayer",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "buff",
      "control"
    ]
  },
  {
    "name": "Reveal Secret",
    "school": "Soothsayer",
    "base": 12,
    "category": "Out of Game (B)",
    "tags": [
      "campaign",
      "treasure"
    ]
  },
  {
    "name": "Suggestion",
    "school": "Soothsayer",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "treasure",
      "attack",
      "movement"
    ]
  },
  {
    "name": "True Sight",
    "school": "Soothsayer",
    "base": 10,
    "category": "Self Only",
    "tags": [
      "self",
      "movement",
      "utility",
      "control"
    ]
  },
  {
    "name": "Wizard Eye",
    "school": "Soothsayer",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack",
      "utility",
      "control"
    ]
  },
  {
    "name": "Control Demon",
    "school": "Summoner",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "warband",
      "summon",
      "tempo"
    ]
  },
  {
    "name": "Imp",
    "school": "Summoner",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "buff",
      "utility"
    ]
  },
  {
    "name": "Leap",
    "school": "Summoner",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "treasure",
      "warband",
      "attack"
    ]
  },
  {
    "name": "Plague of Insects",
    "school": "Summoner",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "attack",
      "movement"
    ]
  },
  {
    "name": "Planar Tear",
    "school": "Summoner",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "attack",
      "buff"
    ]
  },
  {
    "name": "Plane Walk",
    "school": "Summoner",
    "base": 10,
    "category": "Self Only",
    "tags": [
      "self",
      "treasure",
      "attack",
      "movement"
    ]
  },
  {
    "name": "Possess",
    "school": "Summoner",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "warband",
      "summon",
      "movement"
    ]
  },
  {
    "name": "Summon Demon",
    "school": "Summoner",
    "base": 12,
    "category": "Touch",
    "tags": [
      "touch",
      "summon",
      "control"
    ]
  },
  {
    "name": "Banish",
    "school": "Thaumaturge",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "attack",
      "health"
    ]
  },
  {
    "name": "Blinding Light",
    "school": "Thaumaturge",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack",
      "movement",
      "buff"
    ]
  },
  {
    "name": "Circle of Protection",
    "school": "Thaumaturge",
    "base": 12,
    "category": "Touch",
    "tags": [
      "touch",
      "summon",
      "control"
    ]
  },
  {
    "name": "Destroy Undead",
    "school": "Thaumaturge",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "attack",
      "health"
    ]
  },
  {
    "name": "Dispel",
    "school": "Thaumaturge",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "warband",
      "summon",
      "control"
    ]
  },
  {
    "name": "Heal",
    "school": "Thaumaturge",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "summon",
      "health"
    ]
  },
  {
    "name": "Miraculous Cure",
    "school": "Thaumaturge",
    "base": 16,
    "category": "Out of Game (A)",
    "tags": [
      "campaign",
      "movement",
      "buff",
      "item"
    ]
  },
  {
    "name": "Shield",
    "school": "Thaumaturge",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "buff"
    ]
  },
  {
    "name": "Animal Companion",
    "school": "Witch",
    "base": 10,
    "category": "Out of Game (B)",
    "tags": [
      "campaign",
      "warband",
      "summon",
      "buff"
    ]
  },
  {
    "name": "Brew Potion",
    "school": "Witch",
    "base": 12,
    "category": "Out of Game (B)",
    "tags": [
      "campaign",
      "warband",
      "item"
    ]
  },
  {
    "name": "Control Animal",
    "school": "Witch",
    "base": 12,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "warband",
      "summon",
      "tempo"
    ]
  },
  {
    "name": "Curse",
    "school": "Witch",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "buff",
      "control"
    ]
  },
  {
    "name": "Familiar",
    "school": "Witch",
    "base": 10,
    "category": "Out of Game (B)",
    "tags": [
      "campaign",
      "summon",
      "health"
    ]
  },
  {
    "name": "Fog",
    "school": "Witch",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "movement",
      "utility"
    ]
  },
  {
    "name": "Mud",
    "school": "Witch",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged"
    ]
  },
  {
    "name": "Poison Dart",
    "school": "Witch",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack"
    ]
  }
];

export const SOLDIERS = [
  {
    "name": "Thug",
    "cost": 0,
    "specialist": false,
    "move": "6",
    "fight": "+2",
    "shoot": "+0",
    "armour": "10",
    "will": "-1",
    "health": "10",
    "notes": "Hand Weapon"
  },
  {
    "name": "Thief",
    "cost": 0,
    "specialist": false,
    "move": "7",
    "fight": "+1",
    "shoot": "+0",
    "armour": "10",
    "will": "+0",
    "health": "10",
    "notes": "Dagger"
  },
  {
    "name": "War Hound",
    "cost": 10,
    "specialist": false,
    "move": "8",
    "fight": "+1",
    "shoot": "+0",
    "armour": "10",
    "will": "-2",
    "health": "8",
    "notes": "Animal; no item slot"
  },
  {
    "name": "Infantryman",
    "cost": 50,
    "specialist": false,
    "move": "6",
    "fight": "+3",
    "shoot": "+0",
    "armour": "11",
    "will": "+0",
    "health": "10",
    "notes": "Two-Handed Weapon, Light Armour"
  },
  {
    "name": "Man-at-Arms",
    "cost": 75,
    "specialist": false,
    "move": "6",
    "fight": "+3",
    "shoot": "+0",
    "armour": "12",
    "will": "+1",
    "health": "12",
    "notes": "Hand Weapon, Shield, Light Armour"
  },
  {
    "name": "Apothecary",
    "cost": 75,
    "specialist": false,
    "move": "6",
    "fight": "+1",
    "shoot": "+0",
    "armour": "10",
    "will": "+3",
    "health": "12",
    "notes": "Staff, Healing Potion"
  },
  {
    "name": "Archer",
    "cost": 75,
    "specialist": true,
    "move": "6",
    "fight": "+1",
    "shoot": "+2",
    "armour": "11",
    "will": "+0",
    "health": "10",
    "notes": "Bow, Quiver, Dagger, Light Armour"
  },
  {
    "name": "Crossbowman",
    "cost": 75,
    "specialist": true,
    "move": "6",
    "fight": "+1",
    "shoot": "+2",
    "armour": "11",
    "will": "+0",
    "health": "10",
    "notes": "Crossbow, Quiver, Dagger, Light Armour"
  },
  {
    "name": "Treasure Hunter",
    "cost": 100,
    "specialist": true,
    "move": "7",
    "fight": "+3",
    "shoot": "+0",
    "armour": "11",
    "will": "+2",
    "health": "12",
    "notes": "Hand Weapon, Dagger, Light Armour"
  },
  {
    "name": "Tracker",
    "cost": 100,
    "specialist": true,
    "move": "7",
    "fight": "+1",
    "shoot": "+2",
    "armour": "11",
    "will": "+1",
    "health": "12",
    "notes": "Staff, Bow, Quiver, Light Armour"
  },
  {
    "name": "Knight",
    "cost": 125,
    "specialist": true,
    "move": "5",
    "fight": "+4",
    "shoot": "+0",
    "armour": "13",
    "will": "+1",
    "health": "12",
    "notes": "Hand Weapon, Dagger, Shield, Heavy Armour"
  },
  {
    "name": "Templar",
    "cost": 125,
    "specialist": true,
    "move": "5",
    "fight": "+4",
    "shoot": "+0",
    "armour": "12",
    "will": "+1",
    "health": "12",
    "notes": "Two-Handed Weapon, Heavy Armour"
  },
  {
    "name": "Ranger",
    "cost": 125,
    "specialist": true,
    "move": "7",
    "fight": "+2",
    "shoot": "+2",
    "armour": "11",
    "will": "+2",
    "health": "12",
    "notes": "Bow, Quiver, Hand Weapon, Light Armour"
  },
  {
    "name": "Barbarian",
    "cost": 125,
    "specialist": true,
    "move": "6",
    "fight": "+4",
    "shoot": "+0",
    "armour": "10",
    "will": "+3",
    "health": "14",
    "notes": "Two-Handed Weapon, Dagger"
  },
  {
    "name": "Marksman",
    "cost": 125,
    "specialist": true,
    "move": "5",
    "fight": "+2",
    "shoot": "+2",
    "armour": "12",
    "will": "+1",
    "health": "12",
    "notes": "Crossbow, Quiver, Hand Weapon, Heavy Armour"
  }
];

export const STARTING_STATS = {
  "wizard": {
    "move": "6",
    "fight": "+2",
    "shoot": "+0",
    "armour": "10",
    "will": "+4",
    "health": "14",
    "level": "0",
    "experience": "0",
    "currentHealth": "14"
  },
  "apprentice": {
    "move": "6",
    "fight": "+0",
    "shoot": "+0",
    "armour": "10",
    "will": "+2",
    "health": "12",
    "currentHealth": "12"
  }
};

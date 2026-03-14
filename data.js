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
    ],
    "description": "This spell can only target inanimate structures such as buildings and walls. The spellcaster rapidly speeds up the passing of time in a small area of the structure, causing it to collapse. This can create a doorway-sized hole through any wall, which should be indicated on the table somehow. The spell can also be used to collapse a section of floor beneath a figure standing on a level above the ground. In this case, the figure about to be affected must pass a Move Roll (TN22) or fall to the next level down and taking damage appropriately. If this spell is cast on a wall created by the Wall spell, the wall is completely destroyed. If it is cast on terrain holding a Wizard Eye, the Wizard Eye is cancelled."
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
    ],
    "description": "The spellcaster selects and attacks a target’s weapon, causing it to decay and fall apart, rendering it useless for the rest of the game. This spell has no effect on magic weapons (even those only temporarily enchanted). This spell has no effect on creatures (unless they are specifically identified as being equipped with a weapon from the General Arms and Armour List)."
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
    ],
    "description": "This spell may only be cast on a member of the spellcaster’s warband or an uncontrolled creature. This figure will activate at the end of the current phase instead of in its normal phase. For example, if an apprentice casts this spell on an uncontrolled creature, the creature will activate at the end of that player’s Apprentice phase instead of the Creature phase. Spellcasters may not cast this spell on themselves, nor on a figure that has already activated in the current turn. 122"
  },
  {
    "name": "Fleet Feet",
    "school": "Chronomancer",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "movement"
    ],
    "description": "The target receives +2 Move for the rest of the game. Multiple castings of Fleet Feet on the same target have no effect."
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
    ],
    "description": "The target figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, it receives no actions in its next activation. Furthermore, the figure suffers -3 Fight (to a minimum of +0) and may not have Leap cast upon it until after it makes its next move action. Large creatures receive +8 to their Will Roll to resist this spell."
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
    ],
    "description": "The target is reduced to a maximum of one action per activation (which can be any action, it does not have to be movement). It may make an Will Roll verses the Casting Roll at the end of each of its activations. If successful the spell is cancelled."
  },
  {
    "name": "Time Store",
    "school": "Chronomancer",
    "base": 14,
    "category": "Self Only",
    "tags": [
      "self",
      "tempo"
    ],
    "description": "The spellcaster captures a fragment of their own present to save for future use. To cast this spell, the spellcaster must be able to take two actions during their activation. They must spend the first action casting Time Store. If successful, the second action is lost. This spellcaster is now considered to have a stored ‘extra action’ that they may use in a future turn. This action can only be used during the spellcaster’s activation and can give the spellcaster three actions in one activation. 134"
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
    ],
    "description": "Wizard only. The wizard will activate again in the Apprentice phase and the Soldier phase. This is in addition to the figures that can normally activate in those phases. The wizard may not activate any additional soldiers or be part of a group activation in these phases. The wizard may perform one action in each of these two phases and may take any action – they are not limited to movement. If the wizard moved at all in a previous activation during the turn, any additional move actions are at half rate. If a wizard casts this spell in consecutive turns, they immediately suffer 8 points of damage."
  },
  {
    "name": "Call Storm",
    "school": "Elementalist",
    "base": 12,
    "category": "Area Effect",
    "tags": [
      "area",
      "attack"
    ],
    "description": "All bow and crossbow attacks are made with -1 Shoot for the rest of the game. This spell may be cast multiple times (and by multiple spellcasters), with each additional casting increasing the penalty by a further -1, up to a maximum of -5."
  },
  {
    "name": "Destructive Sphere",
    "school": "Elementalist",
    "base": 12,
    "category": "Area Effect",
    "tags": [
      "area",
      "attack"
    ],
    "description": "Every figure within 3” of the spellcaster (but not counting the spellcaster) suffers a +5 elemental magic attack."
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
    ],
    "description": "The spellcaster selects an enemy figure within 16” and line of sight and hurls a ball of destructive elemental energy at it. The target and every figure within 1” and line of sight of the target immediately suffers a +5 elemental magic shooting attack. Roll this shooting attack separately for each figure. Treat the target figure as the origin of the attack for the purposes of determining cover or intervening terrain for all other figures suffering the attack. This spell may not target an enemy figure that is even partially obscured by another figure."
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
    ],
    "description": "The spellcaster makes a +7 elemental magic shooting attack against a target figure within 16” and line of sight."
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
    ],
    "description": "This spell is cast upon a weapon. The next time the figure wielding this weapon wins a round of combat and does at least 1 point of damage, this weapon inflicts an additional 5 points of elemental magic damage. If cast on a normal weapon, which is then used against a creature that is Immune to Normal Weapons, this weapon will only deal the 5 points of elemental magic damage. If cast on a bow or crossbow the spell only applies to the next attack."
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
    ],
    "description": "The spellcaster forms a floating shield that absorbs the next 3 points of damage the spellcaster would normally suffer in combat or from a shooting attack. Once 3 points have been absorbed the spell is cancelled. A spellcaster may only have one Elemental Shield active at any time."
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
    ],
    "description": "The spellcaster makes a +0 elemental magic shooting attack against every enemy figure (either from an opposing warband or uncontrolled creature) within 12” and line of sight. This may include enemy figures in combat, although the normal rules for shooting into combat are followed in this case."
  },
  {
    "name": "Wall",
    "school": "Elementalist",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "utility"
    ],
    "description": "This spell creates a 6”-long, 3”-high wall, part of which must be within 10” and line of sight of the spellcaster. This wall can be climbed as normal. At the end of each turn, after the turn in which the spell was cast, roll a die, on a 1–4 the wall vanishes. Lightning struck the guy eighteen times in a row. That goes beyond ‘bad weather’… 135"
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
    ],
    "description": "It is assumed that the spellcaster has built a construct prior to using this spell to animate it. If the spell is successfully cast, the construct immediately becomes a permanent member of the warband, taking the place of a soldier. A spellcaster must declare the size of construct they are attempting to animate (small, medium or large – page 183) before rolling to cast the spell. The larger the construct, the harder it is to animate, so the following modifiers are applied to the Casting Roll: Small -0, Medium -3, Large -6. There is no limit to the number of constructs in a warband other than the normal limits for soldiers. Large constructs count as specialist soldiers, the others as standard soldiers."
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
    ],
    "description": "The target construct must make an immediate Will Roll with a Target Number equal to the Casting Roll. If the roll fails, the construct becomes a temporary member of the spellcaster’s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one construct at a time."
  },
  {
    "name": "Embed Enchantment",
    "school": "Enchanter",
    "base": 14,
    "category": "Out of Game (A)",
    "tags": [
      "campaign",
      "buff"
    ],
    "description": "This spell causes any one Enchant Armour or Enchant Weapon spell that is still active at the end of a game to become permanent, and the weapon or armour in question to become a magic weapon or armour. The newly created magic weapon or armour takes up an item slot as normal."
  },
  {
    "name": "Enchant Armour",
    "school": "Enchanter",
    "base": 8,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "buff"
    ],
    "description": "This spell may only be cast on a figure wearing armour. The armour worn by the target now counts as magic armour and grants +1 Armour for the rest of the game. Multiple castings of this spell on the same target have no effect. 121"
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
    ],
    "description": "This spell targets a weapon of the spellcaster’s choosing. If cast on a melee weapon, this weapon counts as a magic weapon with +1 Fight. Bows and crossbows count as magic weapons with +1 Shoot, but the attacks made with them do not count as magic attacks. This spell may be cast on a single arrow or crossbow bolt, in which case that ammunition gives +1 Shoot and its attack counts as magic, but for the next shooting attack only. This spell may only be cast once on each weapon. When using both a magic missile weapon and magic ammunition, the shooter may choose to apply the bonus of one or the other, but not both."
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
    ],
    "description": "The spellcaster takes an object, commonly a simple rock, imbues it with magic energy and throws it at their target, whereupon it explodes into hundreds of fragments. The spellcaster picks a target point within 14”. Every figure, including allies, within 1.5” of that point immediately suffers a +3 magic shooting attack. Use the target point as the origin of the attack for working out line of sight and cover."
  },
  {
    "name": "Strength",
    "school": "Enchanter",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "buff"
    ],
    "description": "The target receives +2 Fight. Multiple Strength spells on the same target have no effect."
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
    ],
    "description": "The spellcaster may move any treasure token within 16” by up to 6” in any direction, so long as it remains in line of sight the entire time. If the treasure moves out of line of sight, it immediately falls straight to the ground. This spell has no effect on a treasure token that has any special requirements for how and when it can be picked up, nor on one being carried by a figure. This spell may not target the central treasure, until after that treasure has been picked up for the first time."
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
    ],
    "description": "This spell may target any figure within 12”. Move that figure 4” in a random direction. A figure may make a Will Roll with a Target Number equal to the Casting Roll in order to resist this spell. If successful, the figure does not move. Uncontrolled creatures will always attempt this Will Roll."
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
    ],
    "description": "This spell causes anyone who looks on the spellcaster to see a paragon of beauty. Any member of an opposing warband must make a Will Roll with a Target Number equal to the Casting Roll if they wish to do any of the following: move into combat with the spellcaster, make a shooting attack that could potentially hit the spellcaster (including shooting attacks generated by spells), or cast any spell that targets the spellcaster. Spellcasters may empower this Will Roll in the same way they would to resist a spell. A figure may only attempt such a Will Roll once per turn. This spell has no effect on creatures (anything found in Chapter Six: Bestiary, page 176) or war hounds. 114"
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
    ],
    "description": "This spell may only be cast on a figure carrying a treasure token. That figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, the spellcaster may take the treasure token from the figure and move it up to 4” in any direction, provided the final spot is within line of sight of the spellcaster. 124"
  },
  {
    "name": "Glow",
    "school": "Illusionist",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack"
    ],
    "description": "A brightly glowing light surrounds the target figure. For the rest of the game, all shooting attacks against this figure from any source are at +3. Multiple castings of Glow on the same target have no effect."
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
    ],
    "description": "An illusionary soldier becomes a temporary member of the warband for the next battle (if cast Out of Game) or until the end of the game (if cast during a battle). This soldier can be of any type found on the Soldier Tables (pages 30 and 31) except an apothecary. This soldier cannot pick up treasure, nor can it deal damage, but will otherwise count as a regular soldier for all other the purposes - it may engage in combat, albeit dealing no damage if it wins (it would still have the option to push back its opponent, however), lend support to other figures in combat, etc. If the illusionary soldier ever suffers damage of any type, it is removed. A warband may only have one illusionary soldier at any given time. The player must reveal which member of their warband is the illusionary soldier. 125"
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
    ],
    "description": "The target figure becomes invisible. No figure may move into combat with the invisible figure, nor target it with any attack or spell (although it may still be affected by area effects, such as the blast radius of a Grenade spell). If the invisible figure moves into combat, casts a spell, or picks up a treasure token, the Invisibility spell is cancelled. This spell may be cast on a figure already carrying treasure, rendering both invisible. In this case, if the figure drops the treasure, the spell is cancelled."
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
    ],
    "description": "The spellcaster immediately moves to any location within line of sight, but may take no other actions this turn after casting this spell. This spell may not be used to enter combat or to move off the table."
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
    ],
    "description": "This spell switches the position of two figures on the table. The two figures being transposed must both be within line of sight of the spellcaster and within 12” of one another. The spellcaster may cast Transpose to switch themselves with another figure. Members of opposing warbands are eligible targets for being transposed but may make a Will Roll with a Target Number equal to the Casting Roll to attempt to resist the spell. If successful, the spell is cancelled and no figures are moved. Friendly figures and uncontrolled creatures will not make such Will Rolls."
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
    ],
    "description": "The spellcaster fills a skull with magic malice and throws it at an opponent. Place one animated skull (page 190) within 6” of the spellcaster. It can be placed directly into combat. This skull is an uncontrolled creature. The spellcaster may not cast this spell again until this creature is removed from the table, but may spend an action to cancel the spell, in which case the animated skull is immediately removed from the table. 113"
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
    ],
    "description": "This spell fires a small, sharp shard of bone. The spellcaster makes a +5 shooting attack against any figure within line of sight and 12”. This does not count as a magic attack."
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
    ],
    "description": "A skeletal hand reaches out of the ground and grabs the target’s ankle. The figure may not take any move actions until it escapes. Any form of magic movement, except the Leap spell, allows a figure to escape the hand; otherwise, the only way to escape is to fight the hand, which has Fight +0, Health 1. If the hand takes one point of damage, it vanishes, and the target is free. Other figures in base contact may attack the hand or give a support bonus. If the hand wins the fight, it does damage as normal. This spell may only be cast against a target that is standing on the ground. Large creatures are unaffected by this spell. The maximum range for this spell is 18”."
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
    ],
    "description": "The target undead creature must make an immediate Will Roll with a Target Number equal to the Casting Roll. If the roll fails, the undead creature becomes a temporary member of the spellcaster’s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one undead creature at a time."
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
    ],
    "description": "The spellcaster adds one zombie (page 193) to their warband as a temporary member. If the spell is cast before the game, the zombie can be deployed normally. If it is cast during a game, the zombie appears in base contact with the spellcaster. A warband may only have one raised zombie at any one time. If the zombie is killed or exits the table, Raise Zombie can be cast again to create another."
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
    ],
    "description": "Casting this spell causes the spellcaster to immediately take 1 point of damage. When this spell is cast, it cancels the effects of a single casting of any one spell currently in play. This spell cannot unsummon a creature, but it can cancel the control of a creature."
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
    ],
    "description": "The target must make an immediate Will Roll with a Target Number equal to the Casting Roll. If failed, the target immediately loses 3 Health and the spellcaster regains 3 Health. The spellcaster gains 3 Health, even if the target had less Health than that remaining. This may not take the spellcaster above their starting Health. This spell has no effect on undead or constructs. A spellcaster may target a member of their own warband – if they do, however, the target immediately (and permanently) leaves the warband and is treated as an uncontrolled creature for the rest of the game. 132"
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
    ],
    "description": "This spell targets a figure within 8”. The target must make a Will Roll with a Target Number equal to the Casting Roll or be immediately reduced to 0 Health. All figures may empower their Will Roll to resist this spell, even non-spellcasters. The spellcaster immediately loses 1 Health upon attempting this spell (even if it is cast successfully), in addition to any loss incurred by failure or empowerment. This spell has no effect on undead or constructs."
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
    ],
    "description": "Wizard only. This spell allows a wizard to absorb the knowledge from a written work without having to read it. A wizard immediately gains 40 experience points for casting this spell to represent the speed with which they can gain knowledge. This experience does not count against the maximum that can be earned in one game. This spell may only be cast after a game in which the wizard was not reduced to 0 Health."
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
    ],
    "description": "The spellcaster uses the parchment of a long scroll to create a temporary bridge, ramp, or staircase. Place a bridge 6” long and 2” wide anywhere that is completely in the line of sight of the spellcaster. The bridge has no appreciable thickness and is essentially two-dimensional. The ends of this bridge do not have to be on the same horizontal plane, nor do the ends of the bridge need to be anchored on terrain, they may float in the air. Figures may move along this bridge at their normal movement rate, even when essentially climbing. Each spellcaster may only have one bridge in play at any time. Whenever the spellcaster activates, they may cancel this spell as a free action. Otherwise roll a die at the end of every turn: on a 1–2 the bridge vanishes. Figures on the bridge when it vanishes will fall to the ground."
  },
  {
    "name": "Draining Word",
    "school": "Sigilist",
    "base": 14,
    "category": "Area Effect",
    "tags": [
      "area"
    ],
    "description": "This spell draws a bright rune of power in the sky. The spellcaster may choose one spell for Draining Word to affect. All rolls to attempt to cast that particular spell are at -3 for the rest of the game. A spellcaster may only have one Draining Word spell in effect at a time. Only one Draining Word can be active for each specific target spell at one time. 120"
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
    ],
    "description": "The spellcaster draws a bright, glowing rune of power on the ground or a wall anywhere within 4” and line of sight. A marker should be placed on the table to represent the rune. If any character or creature that was not part of the spellcaster’s warband at the start of the game moves within 1” of the rune, it explodes, and every figure, friend or foe, within 2” suffers an immediate +5 magic attack. Note that if the rune is placed within 1” of a figure, it does not explode immediately – that figure must move to set it off. A spellcaster may have up to three such runes in play at any time. At the end of any turn, they may choose to cancel any or all their runes. If the spellcaster that placed a rune is no longer on the table, roll a die for each rune at the end of each turn: on an 11+ the rune vanishes."
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
    ],
    "description": "The target is attacked by a sharp animated quill. Although the quill does no damage, it is highly irritating and extremely distracting. While under attack, the target suffers -1 Move, -2 Fight, -4 Shoot, and -2 to all Casting Rolls. Whenever the target is activated, it may make a Will Roll with a Target Number equal to the Casting Roll – if successful, the quill is caught and destroyed. Multiple castings of Furious Quill against the same target have no effect."
  },
  {
    "name": "Power Word",
    "school": "Sigilist",
    "base": 14,
    "category": "Area Effect",
    "tags": [
      "area"
    ],
    "description": "This spell draws a bright rune of power in the sky. The spellcaster may pick one spell for the Power Word to affect. All rolls to cast that particular spell are at +3 for every spellcaster for the rest of the game. A spellcaster may only have one Power Word spell in effect at a time. Only one Power Word can be active for each specific target spell at one time. 130"
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
    ],
    "description": "The target suffers an immediate +10 attack. Instead of taking damage from this attack, the target is moved 1” directly away from the spellcaster for every point of damage they would have taken. If this pushes the target into the edge of the table or a piece of terrain over ½” high, they stop immediately. Other figures do not stop (or get hit by) a pushed figure – they are assumed to step out of the way. If this spell is cast from beneath a figure it will push them up. If the target is pushed up or off a height, it suffers falling damage as normal. This spell can push a figure out of combat, and as it is not a shooting attack, the target is not randomized."
  },
  {
    "name": "Write Scroll",
    "school": "Sigilist",
    "base": 12,
    "category": "Out of Game (A)",
    "tags": [
      "campaign",
      "item"
    ],
    "description": "This spell creates one scroll. The scroll must be of a spell that the spellcaster either knows or a spell for which they own the grimoire. The scroll may be sold, given to a figure, or stored in the wizard’s vault."
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
    ],
    "description": "If this spellcaster is on the table, its warband may add +2 to its Initiative Rolls for the purposes of determining the primary player only. This bonus stacks so, if both the wizard and the apprentice have cast this spell and are both on the table, the player may add +4 to their Initiative Rolls. The maximum possible bonus is +4. This spell counts as active on the spellcaster during the game and may be cancelled by anything that cancels spells."
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
    ],
    "description": "This spell gives the target a magic insight into the moves their opponent will attempt in a fight. It grants the target +1 Fight and +1 Armour for the remainder of the game. Multiple castings of this spell on the same target have no effect."
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
    ],
    "description": "The target figure must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, the target temporarily joins the spellcaster’s warband, activating as normal. After the figure activates each turn, it must make another Will Roll with a Target Number equal to the Casting Roll. If successful, the spell is cancelled and the figure returns to its normal allegiance. A spellcaster may only have one active Mind Control spell at a time. A figure under Mind Control cannot purposely take any action that causes it immediate damage (such as falling more than 3”) but can be moved into combat and may attack an enemy figure. A figure under Mind Control is not allowed to move off the table. A spellcaster may cancel an active Mind Control at the end of any turn. This spell has no effect on spellcasters but can be cast against any other figure unless they are specifically noted to be immune to it. 126"
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
    ],
    "description": "The target of this spell becomes immune to Mind Control and Suggestion spells for the rest of the game, and any current Mind Control spells on the figure are cancelled. The figure gains +2 Will for the rest of the game."
  },
  {
    "name": "Reveal Secret",
    "school": "Soothsayer",
    "base": 12,
    "category": "Out of Game (B)",
    "tags": [
      "campaign",
      "treasure"
    ],
    "description": "This spell imparts knowledge on some lost treasure. Every successful casting of this spell before a game allows the player to make two rolls for a single treasure token (other than the central treasure, which is unaffected by this spell) after the game and choose which one to take."
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
    ],
    "description": "The target of this spell immediately drops any treasure tokens it is carrying. The spellcaster may move the figure up to 3” in any direction provided this does not move the figure into combat or cause it any immediate damage (e.g. falling more than 3”). The target of this spell may make a Will Roll with a Target Number equal to the Casting Roll. If successful, the spell has no effect. 133"
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
    ],
    "description": "The spellcaster, and all friendly figures within 6” of the spellcaster, can see invisible figures and are immune to the effects of the Beauty spell. Furthermore, if an invisible figure is within 6” of the spellcaster, the Invisibility spell is cancelled. If an Illusionary Soldier is within 6” of the spellcaster, it is immediately removed from the table."
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
    ],
    "description": "This spell may be cast on any terrain feature within 12” that has a flat side, such as most ruins. Place a token on or next to the terrain feature to represent the Wizard Eye. For the rest of the game, the caster may choose to draw line of sight from the Wizard Eye instead of from the figure when casting spells. The Wizard Eye has 180-degree field of vision. A spellcaster may only maintain one Wizard Eye at a time. If the terrain piece on which the Wizard Eye is placed is damaged or destroyed (such as by a Crumble spell) the spell is cancelled. The spellcaster may cancel this spell at the end of any turn."
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
    ],
    "description": "The target demon must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, it becomes a temporary member of the spellcaster’s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one demon at a time. 118"
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
    ],
    "description": "The spellcaster places an imp (page 184) on the table anywhere within the spellcaster’s line of sight, but no closer than 3” to any other figure. The imp follows the normal rules for uncontrolled creatures and will activate in the next Creature phase. If the spellcaster casts this spell a second time, the first imp immediately vanishes."
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
    ],
    "description": "This spell may only be cast on a member of the spellcaster’s warband. Immediately move the target figure up to 10” in any direction, including vertically. This move must either be in a straight line or an arc. It cannot curve around corners. If this move leaves the figure above the ground, it immediately falls, taking damage as normal. If the target is carrying treasure, this move is reduced to 5”. This move may not take a figure off the table or into combat. The target of the Leap spell may take no other actions this turn, though it may have taken actions previously."
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
    ],
    "description": "The target figure is attacked by a cloud of stinging or biting insects that irritate and distract. The cloud of insects has a 1” radius centred on, and moving with, the target figure. It affects all figures, including the target figure, fully or partially within this radius. While being pestered by the insects, a figure has -4 Fight and -4 Shoot (to a minimum of +0) and -2 to Casting Rolls. After this figure activates each turn, it may make a Will Roll with a Target Number equal to the Casting Roll. If successful, the spell is cancelled. Other figures within the radius may simply move away to escape. A figure may only ever be affected by one Plague of Insects spell at a time, whether as a target or by virtue of being within the 1” radius. Large creatures, undead, and constructs are immune to this spell."
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
    ],
    "description": "The spellcaster creates a small tear in the fabric of the universe. This rift is painful to humans and creatures, but lethal to demons. The spellcaster selects a target point. All figures within 2” of that point must make a Will Roll with a Target Number equal to the Casting Roll or suffer 2 points of damage. Demons that fail the Will Roll take damage equal to the Casting Roll."
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
    ],
    "description": "Although the spellcaster remains in the same physical location, they move briefly between planes of existence. For the rest of this turn, they can ignore all terrain when moving, thus walking through walls or across chasms. They may not be the target of any shooting attacks or spells. The spellcaster will never be considered in combat during the turn, nor can they be attacked by any figure. They may not, however, pick up treasure or in any way affect other figures or terrain on the table. If they are carrying treasure, they drop it. It is incredibly draining to move between planes of existence, so if a spellcaster attempts to cast this spell in a second consecutive turn, they suffer a -5 modifier to their Casting Roll, -10 if they attempt it three turns in a row, and -15 on the fourth turn and beyond. 128"
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
    ],
    "description": "This spell may only be cast on a permanent or temporary member of the spellcaster’s own warband, except the wizard, apprentice, or demons. The target is possessed by a demon and gains +2 Fight, +1 Armour, and -2 Will and counts as a demon (i.e. it will be affected by Banish, Control Demon, Circle of Protection, etc.). This figure may not be part of a group activation. If removed from the game for any reason (such as being hit by a Banish spell), check for the character’s survival as normal. A spellcaster may only have one Possess spell active at a time."
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
    ],
    "description": "Immediately place a demon on the table within 1” of the spellcaster. It may not be placed straight into combat. This demon is considered to be under the effects of a Control Demon spell by the same spellcaster, and thus this spell may not be cast if the spellcaster is already controlling a demon. The type of demon summoned depends on the amount by which the spellcaster succeeded on their Casting Roll: 0–5 imp (page 184), 6–12 minor demon (page 185), 13+ major demon (page 185). If a spellcaster rolls a 1 while attempting to cast this spell, they summon an uncontrolled demon and must place this demon in combat with the spellcaster. Roll a die to determine the type of demon 1–10 imp, 11–17 minor demon, 18+ major demon. A spellcaster cannot empower a roll of 1 when casting this spell but there is otherwise no limit on empowering this spell. It may be empowered above 18."
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
    ],
    "description": "All demons within line of sight of the spellcaster must pass an immediate Will Roll with a Target Number equal to the Casting Roll. If a demon fails the roll and its current Will is +4 or less, it is immediately reduced to 0 Health and removed from the table. If its current Will is +5 or higher, it suffers damage equal to three times the amount by which it failed the Will Roll."
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
    ],
    "description": "The target must make an immediate Will Roll with a Target Number equal to the Casting Roll. If it fails, it may not attack, shoot, or cast Line of Sight spells. Its Fight stat is reduced to +0 and its Move to 1. At the end of each turn, the figure may attempt another Will Roll with the same Target Number. If successful, the spell is cancelled."
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
    ],
    "description": "Creates a circle with a 3” diameter which no demon or undead creature can enter or pass through. If something forces them into contact with the circle, they stop at its edge. A spellcaster may only have one active circle of protection at a time, but they do not have to remain within it. The spellcaster may cancel this spell at the end of any turn. Otherwise, roll a die at the end of every turn: on a 1–3 the spell is cancelled. 116"
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
    ],
    "description": "The target undead creature must make a Will Roll with a Target Number equal to the Casting Roll. If the undead creature fails the roll and its current Will is +2 or less, it is immediately reduced to 0 Health and is removed from the table. If its current Will is +3 or higher, it suffers damage equal to three times the amount by which it failed the Will Roll. 119"
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
    ],
    "description": "Immediately cancels the ongoing effect of any one casting of any one spell. It cannot unsummon a creature, but it can cancel the control of a creature that is a temporary member of a warband."
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
    ],
    "description": "This spell restores up to 5 points of lost Health to a target figure within 6”. This spell cannot take a model above its starting Health. This spell has no effect on undead or constructs."
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
    ],
    "description": "Wizard only. This spell may be used in several different ways. A successful casting of this spell will remove all permanent injuries from one figure. For example, a wizard suffering from Lost Fingers regrows all their missing digits, regardless of how many times they have suffered that particular injury. Or, it may be cast on a Badly Wounded figure – if successful, the soldier is healed and may participate in the next game with no penalty. Finally, it may be used to attempt to bring a figure back from the dead. The figure must have died in the game just played, and using the spell in this fashion incurs a -4 penalty to the Casting Roll. If successful, the figure is restored to life, and may participate in the next game with no penalty. If Miraculous Cure is cast using a scroll, it cannot be used to resurrect the dead."
  },
  {
    "name": "Shield",
    "school": "Thaumaturge",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "buff"
    ],
    "description": "The target receives +2 Armour for the rest of the game. The maximum armour rule still applies (see page 36). Multiple castings of Shield on the same target have no effect. He said it was a spell of ‘dissolution’, but failed to elaborate… 131"
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
    ],
    "description": "The spellcaster summons an animal companion of their choice from the following options to become a permanent member of their warband: bear (page 179), ice toad (page 180), snow leopard (page 182), or wolf (page 182). All Animal Companions count as standard soldiers. Animal companions are more strong-willed than wild examples of their species and receive a permanent +3 Will. A spellcaster may only have one animal companion at any time."
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
    ],
    "description": "The spellcaster creates one Lesser Potion of their choice (page 86) that may be sold, stored in the wizard’s vault, or given to a member of the warband. A wizard (and only a wizard) may use this spell to create a Greater Potion (page 87). First, they must declare what potion they are attempting to brew and pay the listed ingredients cost. The wizard should then roll to cast Brew Potion with a -4 to the Casting Roll. If successful, the potion is created and can be immediately assigned to a figure in the warband, sold, or stored in the wizard’s vault. If unsuccessful, the potion is not created and the money spent on ingredients is lost. 115"
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
    ],
    "description": "The target animal must make an immediate Will Roll with a Target Number equal to the Casting Roll. If the roll fails, the animal becomes a temporary member of the spellcaster’s warband. This control lasts for the rest of the game or until the spell is cancelled. The spellcaster may spend an action to cancel this spell. A spellcaster may only control one animal at a time."
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
    ],
    "description": "The target suffers -2 to all die rolls. At the end of each turn, the target may make a Will Roll with the Target Number equal to the Casting Roll (at -2, of course). If successful, this spell is cancelled. Curse cannot be cast on a figure already suffering the effects of a Curse spell."
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
    ],
    "description": "The spellcaster gains a familiar, which can take the form of any small creature. It is not depicted on the table, unless the player wants to include it on the spellcaster figure. A spellcaster with a familiar gains +2 Health (write as a split stat). If the spellcaster is ever reduced to 1 Health or less, the familiar is destroyed. At the start of the next game, the spellcaster reverts to their normal Health, unless another Familiar spell is successfully cast."
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
    ],
    "description": "Place a line of fog, 6” long, 3” high, and 1” thick anywhere on the table as long as some part of it is within line of sight of the spellcaster and all of it is within 24”. Figures can move through the fog with no penalty, but line of sight may not be drawn through it. At the start of each new turn, roll a die. On a result of 1–4 the fog dissipates and is removed from the table."
  },
  {
    "name": "Mud",
    "school": "Witch",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged"
    ],
    "description": "All ground within 3” of a target point becomes rough ground. 127"
  },
  {
    "name": "Poison Dart",
    "school": "Witch",
    "base": 10,
    "category": "Line of Sight",
    "tags": [
      "ranged",
      "attack"
    ],
    "description": "Make an immediate plus +3 poisoned shooting attack against the target figure. This is a non-magic attack."
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

export const SHOP_DATA = {
  "recruitment": {
    "summary": "Campaign hiring and purchases pulled from the rulebook. Soldiers are hired for their listed cost; a warband may field up to 8 soldiers, with at most 4 specialists. A new apprentice costs 100gc for a starting wizard, or (wizard level - 6) x 10 + 160gc later in a campaign. Wizards may buy a grimoire for any one spell for 500gc and a scroll for any one spell for 250gc.",
    "entries": [
      {
        "name": "Thug",
        "type": "Standard soldier",
        "price": 0,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Hand Weapon"
      },
      {
        "name": "Thief",
        "type": "Standard soldier",
        "price": 0,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Dagger"
      },
      {
        "name": "War Hound",
        "type": "Standard soldier",
        "price": 10,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "War hound has no item slot and cannot pick up treasure.",
        "notes": "Animal; no item slot"
      },
      {
        "name": "Infantryman",
        "type": "Standard soldier",
        "price": 50,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Two-Handed Weapon, Light Armour"
      },
      {
        "name": "Man-at-Arms",
        "type": "Standard soldier",
        "price": 75,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Hand Weapon, Shield, Light Armour"
      },
      {
        "name": "Apothecary",
        "type": "Standard soldier",
        "price": 75,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Staff, Healing Potion"
      },
      {
        "name": "Archer",
        "type": "Specialist soldier",
        "price": 75,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Bow, Quiver, Dagger, Light Armour"
      },
      {
        "name": "Crossbowman",
        "type": "Specialist soldier",
        "price": 75,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Crossbow, Quiver, Dagger, Light Armour"
      },
      {
        "name": "Treasure Hunter",
        "type": "Specialist soldier",
        "price": 100,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Hand Weapon, Dagger, Light Armour"
      },
      {
        "name": "Tracker",
        "type": "Specialist soldier",
        "price": 100,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Staff, Bow, Quiver, Light Armour"
      },
      {
        "name": "Knight",
        "type": "Specialist soldier",
        "price": 125,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Hand Weapon, Dagger, Shield, Heavy Armour"
      },
      {
        "name": "Templar",
        "type": "Specialist soldier",
        "price": 125,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Two-Handed Weapon, Heavy Armour"
      },
      {
        "name": "Ranger",
        "type": "Specialist soldier",
        "price": 125,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Bow, Quiver, Hand Weapon, Light Armour"
      },
      {
        "name": "Barbarian",
        "type": "Specialist soldier",
        "price": 125,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Two-Handed Weapon, Dagger"
      },
      {
        "name": "Marksman",
        "type": "Specialist soldier",
        "price": 125,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Joins the warband as a soldier.",
        "notes": "Crossbow, Quiver, Hand Weapon, Heavy Armour"
      },
      {
        "name": "Apprentice",
        "type": "Spellcaster hire",
        "price": 100,
        "salePrice": null,
        "whoCanBuy": "Wizard hires for the warband",
        "whoCanUse": "Apprentice shares the wizard's spells and casts them at -2.",
        "notes": "Starting wizard cost; later cost is (wizard level - 6) x 10 + 160gc."
      },
      {
        "name": "Grimoire",
        "type": "Spell purchase",
        "price": 500,
        "salePrice": 200,
        "whoCanBuy": "Wizard buys a grimoire for any one spell",
        "whoCanUse": "Wizard learns the spell from the grimoire when spending a level.",
        "notes": "A wizard may not sell a grimoire for a spell they do not already know."
      },
      {
        "name": "Scroll",
        "type": "Spell purchase",
        "price": 250,
        "salePrice": 30,
        "whoCanBuy": "Wizard buys a scroll for any one spell",
        "whoCanUse": "Spellcasters only. Non-spellcasters may not use scrolls.",
        "notes": "Casting from a scroll is automatically successful and treated as Casting Roll 14."
      }
    ]
  },
  "potions": {
    "summary": "Any figure that can carry an item may carry and use a potion unless the potion itself says otherwise. Potions use one item slot each. Apothecaries can hand a potion to a same-warband figure within 1 inch.",
    "lesser": [
      {
        "name": "Potion of Healing",
        "price": 75,
        "salePrice": 50,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Restores up to 5 lost Health."
      },
      {
        "name": "Potion of Strength",
        "price": 100,
        "salePrice": 40,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "+1 Fight for the rest of the game."
      },
      {
        "name": "Potion of Toughness",
        "price": 50,
        "salePrice": 30,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "+1 Armour for the rest of the game."
      },
      {
        "name": "Elixir of Speed",
        "price": 50,
        "salePrice": 30,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "+2 Move, to a maximum Move of 9."
      },
      {
        "name": "Potion of Invisibility",
        "price": 100,
        "salePrice": 50,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Acts as an Invisibility spell."
      },
      {
        "name": "Explosive Cocktail",
        "price": 100,
        "salePrice": 30,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Thrown like Grenade but without casting."
      },
      {
        "name": "Potion of Teleportation",
        "price": 500,
        "salePrice": 100,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Acts as a Teleport spell."
      },
      {
        "name": "Potion of Elemental Absorption",
        "price": 200,
        "salePrice": 80,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Ignores the next 5 points of elemental damage."
      },
      {
        "name": "Cordial of Clearsight",
        "price": 200,
        "salePrice": 80,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Ignores Beauty and Invisibility effects."
      },
      {
        "name": "Poison",
        "price": 100,
        "salePrice": 30,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Coats a weapon or one arrow/bolt; not for staff, bow, or crossbow."
      },
      {
        "name": "Philtre of Fury",
        "price": 300,
        "salePrice": 120,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Aggressive combat buff; must charge nearest visible enemy if possible."
      },
      {
        "name": "Potion of Iron Mind",
        "price": 50,
        "salePrice": 30,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "+5 Will for the rest of the game."
      },
      {
        "name": "Bottle of Burrowing",
        "price": 200,
        "salePrice": 80,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Move directly through terrain for the rest of the activation."
      },
      {
        "name": "Philtre of Fairy Dust",
        "price": 50,
        "salePrice": 30,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Makes one weapon or one arrow/bolt count as magic for the game."
      },
      {
        "name": "Construct Oil",
        "price": 100,
        "salePrice": 50,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Wizard for a medium or large construct in the warband",
        "notes": "Permanent +1 Move to one construct, once per construct."
      },
      {
        "name": "Potion of Fire Breath",
        "price": 200,
        "salePrice": 80,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Use a remaining action to make a +3 elemental magic shooting attack at 6 inches."
      },
      {
        "name": "Potion of Preservation",
        "price": 500,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Wizard between games",
        "notes": "Preserves a dead non-wizard figure for up to five games."
      },
      {
        "name": "Elixir of the Chameleon",
        "price": 400,
        "salePrice": 140,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Cannot be seen from more than 12 inches away."
      }
    ],
    "greater": [
      {
        "name": "Cordial of Empowerment",
        "price": 500,
        "salePrice": 200,
        "ingredientCost": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Spellcaster",
        "notes": "+4 to the next Casting Roll and suffer 2 damage."
      },
      {
        "name": "Shrinking Potion",
        "price": 500,
        "salePrice": 200,
        "ingredientCost": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Treasure carrier",
        "notes": "Shrinks carried treasure so it no longer causes carry penalties."
      },
      {
        "name": "Potion of Restoration",
        "price": 2000,
        "salePrice": 300,
        "ingredientCost": 750,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Restore to starting Health and cure poison and temporary stat reductions; can also cure permanent injuries after a game."
      },
      {
        "name": "Bottle of Dreams and Nightmares",
        "price": 2000,
        "salePrice": 300,
        "ingredientCost": 500,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Wizard immediately before a game",
        "notes": "Risk-reward experience potion for the coming game."
      },
      {
        "name": "Shatterstar Draught",
        "price": 1500,
        "salePrice": 200,
        "ingredientCost": 600,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Spellcaster",
        "notes": "The next spell this activation may be cast twice."
      },
      {
        "name": "Bottle of Darkness",
        "price": 1500,
        "salePrice": 300,
        "ingredientCost": 600,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Sets line of sight to 12 inches for the rest of the game."
      },
      {
        "name": "Ethereal Vacuum",
        "price": 2000,
        "salePrice": 200,
        "ingredientCost": 800,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Opens against Ethereal creatures within 8 inches."
      },
      {
        "name": "Potion of Invulnerability",
        "price": null,
        "salePrice": 400,
        "ingredientCost": 2000,
        "whoCanBuy": "Not for sale; may be found or brewed if allowed",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Immune to damage from non-magic weapons until it ends."
      },
      {
        "name": "Bottle of Null",
        "price": null,
        "salePrice": 200,
        "ingredientCost": 1000,
        "whoCanBuy": "Not for sale; may be found or brewed if allowed",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Cancels all spells in play and forces spellcasters to test or take damage."
      },
      {
        "name": "Elixir of Life",
        "price": null,
        "salePrice": 1000,
        "ingredientCost": 3000,
        "whoCanBuy": "Not for sale; may be found or brewed if allowed",
        "whoCanUse": "Wizard after a game",
        "notes": "Brings back one figure that died in the game just played."
      }
    ]
  },
  "magicWeaponsArmour": {
    "summary": "Magic weapons and armour use the same slot count as the mundane item. Soldiers may only carry magic weapons or armour that match a type already listed in their notes. Spellcasters may carry any weapon but may not wear armour or carry shields.",
    "entries": [
      {
        "name": "Hand Weapon (+1 damage)",
        "price": 300,
        "salePrice": 125,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a hand weapon",
        "notes": "Magic attack in melee."
      },
      {
        "name": "Hand Weapon (+1 Fight)",
        "price": 500,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a hand weapon",
        "notes": "Magic attack in melee."
      },
      {
        "name": "Hand Weapon (+2 Will)",
        "price": 300,
        "salePrice": 125,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a hand weapon",
        "notes": "Magic attack in melee."
      },
      {
        "name": "Two-Handed Weapon (+1 damage)",
        "price": 300,
        "salePrice": 125,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a two-handed weapon",
        "notes": "Takes two item slots for spellcasters."
      },
      {
        "name": "Two-Handed Weapon (+1 Fight)",
        "price": 500,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a two-handed weapon",
        "notes": "Takes two item slots for spellcasters."
      },
      {
        "name": "Two-Handed Weapon (+2 Will)",
        "price": 300,
        "salePrice": 125,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a two-handed weapon",
        "notes": "Takes two item slots for spellcasters."
      },
      {
        "name": "Bow (+1 damage)",
        "price": 300,
        "salePrice": 125,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a bow",
        "notes": "Missile attacks are not magical unless using magic ammunition."
      },
      {
        "name": "Bow (+1 Shoot)",
        "price": 600,
        "salePrice": 250,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a bow",
        "notes": "Missile attacks are not magical unless using magic ammunition."
      },
      {
        "name": "Crossbow (+1 damage)",
        "price": 300,
        "salePrice": 125,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a crossbow",
        "notes": "Missile attacks are not magical unless using magic ammunition."
      },
      {
        "name": "Crossbow (+1 Shoot)",
        "price": 600,
        "salePrice": 250,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a crossbow",
        "notes": "Missile attacks are not magical unless using magic ammunition."
      },
      {
        "name": "Dagger (+1 Fight)",
        "price": 400,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a dagger",
        "notes": "First carried dagger still costs no item slot."
      },
      {
        "name": "Dagger (+1 damage)",
        "price": 400,
        "salePrice": 150,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a dagger",
        "notes": "First carried dagger still costs no item slot."
      },
      {
        "name": "Dagger (+2 damage)",
        "price": 500,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a dagger",
        "notes": "First carried dagger still costs no item slot."
      },
      {
        "name": "Light Armour (+1 Armour)",
        "price": 600,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Figures allowed to wear light armour",
        "notes": "Spellcasters may not wear armour."
      },
      {
        "name": "Heavy Armour (Elemental Absorption)",
        "price": 800,
        "salePrice": 300,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Figures allowed to wear heavy armour",
        "notes": "Spellcasters may not wear armour."
      },
      {
        "name": "Ring of Protection (+1 Armour)",
        "price": 600,
        "salePrice": 250,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Magic item, not armour."
      },
      {
        "name": "Cloak of Protection (+1 Armour)",
        "price": 600,
        "salePrice": 250,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Magic item, not armour."
      },
      {
        "name": "Cloak of Night (Elemental Absorption)",
        "price": 500,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Magic item, not armour."
      },
      {
        "name": "Staff (+1 Fight)",
        "price": 300,
        "salePrice": 125,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure allowed to use a staff",
        "notes": "Counts as a magic weapon."
      },
      {
        "name": "Shield (+1 Armour)",
        "price": 700,
        "salePrice": 250,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Figures allowed to carry a shield",
        "notes": "Spellcasters may not carry shields."
      }
    ]
  },
  "magicItems": {
    "summary": "All magic items take one item slot. Unless specifically stated, soldiers can carry them, though spellcasting aids are only useful to spellcasters.",
    "entries": [
      {
        "name": "Staff of Power (1)",
        "price": 300,
        "salePrice": 150,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Spellcaster",
        "notes": "One point of stored power for empowering spells or Will rolls."
      },
      {
        "name": "Staff of Power (2)",
        "price": 400,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Spellcaster",
        "notes": "Two points of stored power for empowering spells or Will rolls."
      },
      {
        "name": "Ring of Transference",
        "price": 400,
        "salePrice": 150,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Transfers damage between wearer and a nearby ally; see item text in the rulebook if needed."
      },
      {
        "name": "Ring of Power (1)",
        "price": 200,
        "salePrice": 100,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Spellcaster",
        "notes": "One point of stored power for empowering spells or Will rolls."
      },
      {
        "name": "Orb of Power (6)",
        "price": 500,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Spellcaster",
        "notes": "Six points of stored power; does not recharge."
      },
      {
        "name": "Staff of Casting",
        "price": 500,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Spellcaster",
        "notes": "+1 to Casting Rolls for one random spell."
      },
      {
        "name": "Boots of Speed",
        "price": 300,
        "salePrice": 130,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "+1 Move."
      },
      {
        "name": "Ring of Slow Fall",
        "price": 200,
        "salePrice": 100,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "No falling damage."
      },
      {
        "name": "Ring of Will",
        "price": 300,
        "salePrice": 150,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "+1 Will."
      },
      {
        "name": "Ring of Teleportation",
        "price": 400,
        "salePrice": 150,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Teleport up to 8 inches once per game; not into or out of combat."
      },
      {
        "name": "Gloves of Strength",
        "price": 300,
        "salePrice": 150,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "+1 damage on successful hand-to-hand attacks."
      },
      {
        "name": "Robes of Arrow Turning",
        "price": 500,
        "salePrice": 250,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "+4 Armour against bow and crossbow attacks."
      },
      {
        "name": "Amulet of Resistance",
        "price": 300,
        "salePrice": 100,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "+4 to one Will Roll to resist a spell each game."
      },
      {
        "name": "Construct Hammer",
        "price": 300,
        "salePrice": 100,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Wizard for a medium or large construct",
        "notes": "Construct gets a magic weapon and +1 damage."
      },
      {
        "name": "Gloves of Casting",
        "price": 500,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Spellcaster",
        "notes": "+5 to one Casting Roll each game."
      },
      {
        "name": "Wand of Light",
        "price": 400,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Spellcaster",
        "notes": "Roll two dice for one spell cast each game and choose one."
      },
      {
        "name": "Horn of Destruction",
        "price": 300,
        "salePrice": 100,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Use an action to trigger a Crumble effect once per game."
      },
      {
        "name": "Fate Stone",
        "price": 500,
        "salePrice": 200,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Any figure with an item slot",
        "notes": "Re-roll one Casting, Stat, Combat, or Shooting Roll per game."
      },
      {
        "name": "Wand of Power (1)",
        "price": 300,
        "salePrice": 150,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Spellcaster",
        "notes": "One point of stored power for empowering spells or Will rolls."
      },
      {
        "name": "Staff of Power (3)",
        "price": 1200,
        "salePrice": 300,
        "whoCanBuy": "Wizard may buy freely",
        "whoCanUse": "Spellcaster",
        "notes": "Three points of stored power for empowering spells or Will rolls."
      }
    ]
  }
};

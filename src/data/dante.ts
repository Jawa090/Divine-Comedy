export type Realm = "inferno" | "purgatorio" | "paradiso";

export type CharacterId =
  | "dante"
  | "virgil"
  | "beatrice"
  | "paolo"
  | "francesca"
  | "ulysses"
  | "ugolino"
  | "charon"
  | "minos"
  | "cerberus"
  | "lucifer"
  | "farinata"
  | "brunetto"
  | "cato"
  | "statius"
  | "bernard";

export interface Character {
  id: CharacterId;
  name: string;
  epithet: string;
  role: string;
  encounter: string;
  canto: string;
  matters: string;
  symbolism: string;
  message: string;
  initial: string;
}

export const characters: Character[] = [
  {
    id: "dante",
    name: "Dante",
    epithet: "The Pilgrim",
    role: "Narrator, protagonist, and author — a Florentine exile writing himself into his own poem.",
    encounter: "Everywhere. The journey begins in a dark wood at midlife, in the year 1300.",
    canto: "Inferno I — Paradiso XXXIII",
    matters:
      "Dante makes the reader a traveller rather than a spectator. Every soul he meets is a mirror held up to his own capacity for the same failure.",
    symbolism: "Humanity itself: reason capable of error, will capable of return.",
    message: "You are not exempt from anything you are about to see.",
    initial: "D",
  },
  {
    id: "virgil",
    name: "Virgil",
    epithet: "The Guide",
    role: "Roman poet, author of the Aeneid, sent by Beatrice to lead Dante through Hell and Purgatory.",
    encounter: "The dark wood, where he turns Dante back from the she-wolf; he departs at the summit of Purgatory.",
    canto: "Inferno I; Purgatorio XXX",
    matters:
      "He is the best that human reason can be — and it is not enough. He can explain Hell perfectly and still cannot enter Heaven.",
    symbolism: "Human reason, classical culture, the limits of unaided intellect.",
    message: "Understanding evil is not the same as being saved from it.",
    initial: "V",
  },
  {
    id: "beatrice",
    name: "Beatrice",
    epithet: "The Beloved",
    role: "A Florentine woman Dante loved in life; in the poem, the one who descends into Hell to arrange his rescue.",
    encounter: "The Earthly Paradise at the top of Mount Purgatory; then throughout the heavens.",
    canto: "Purgatorio XXX — Paradiso XXXI",
    matters:
      "She rebukes Dante before she comforts him. Love in this poem is not indulgent; it demands that you tell the truth about yourself.",
    symbolism: "Revelation, grace, theology — love that leads upward rather than inward.",
    message: "The people who love you most are the ones who refuse your excuses.",
    initial: "B",
  },
  {
    id: "paolo",
    name: "Paolo Malatesta",
    epithet: "The Silent Lover",
    role: "Brother-in-law of Francesca, killed with her by her husband Gianciotto.",
    encounter: "The second circle, carried on the black wind, never separated from Francesca.",
    canto: "Inferno V",
    matters: "He never speaks. He only weeps while Francesca tells their story — the passive half of a shared ruin.",
    symbolism: "Desire without words, and grief that cannot answer for itself.",
    message: "Silence is not innocence.",
    initial: "P",
  },
  {
    id: "francesca",
    name: "Francesca da Rimini",
    epithet: "The Voice of the Storm",
    role: "A historical noblewoman of Ravenna, murdered with Paolo around 1285.",
    encounter: "The second circle. She speaks the most famous lines in the Inferno.",
    canto: "Inferno V",
    matters:
      "Her account is exquisite, courteous, and self-exculpating: a book made us do it. Dante faints from pity — and still she is in Hell.",
    symbolism: "The seduction of a beautiful story told about one's own worst choice.",
    message: "Beware the version of events that leaves you blameless.",
    initial: "F",
  },
  {
    id: "ulysses",
    name: "Ulysses",
    epithet: "The Last Voyage",
    role: "Greek hero of Troy, punished among the false counsellors in a tongue of flame.",
    encounter: "The eighth bolgia of the eighth circle, where he recounts sailing beyond the world's limit.",
    canto: "Inferno XXVI",
    matters:
      "His speech to his crew — that we were not made to live as brutes, but to pursue virtue and knowledge — is thrilling, and it drowns them all.",
    symbolism: "Intellect unmoored from love and limit; curiosity as a form of pride.",
    message: "A magnificent reason can still be the wrong reason.",
    initial: "U",
  },
  {
    id: "ugolino",
    name: "Count Ugolino",
    epithet: "The Frozen Mouth",
    role: "Pisan nobleman, walled into a tower with his sons and starved to death by Archbishop Ruggieri.",
    encounter: "The ice of the ninth circle, gnawing eternally at the skull of the man who betrayed him.",
    canto: "Inferno XXXII–XXXIII",
    matters:
      "Both victim and traitor. Dante gives him the most harrowing speech in the poem and refuses to let it absolve him.",
    symbolism: "Revenge that continues past death and consumes the avenger.",
    message: "Suffering does not automatically make you good.",
    initial: "U",
  },
  {
    id: "charon",
    name: "Charon",
    epithet: "Ferryman of Acheron",
    role: "The ancient boatman who rows the damned across the first river of Hell.",
    encounter: "The shore of Acheron, where he refuses to carry a living man.",
    canto: "Inferno III",
    matters: "The souls curse God, their parents, and their birth — and then crowd forward eagerly to board.",
    symbolism: "The moment choice hardens into consequence.",
    message: "Justice is often just the shape of what we already wanted.",
    initial: "C",
  },
  {
    id: "minos",
    name: "Minos",
    epithet: "The Judge",
    role: "Mythic king of Crete, now the infernal magistrate who assigns each soul its circle.",
    encounter: "At the entrance to the second circle, coiling his tail once for each level downward.",
    canto: "Inferno V",
    matters: "He does not decide anything. Each soul confesses freely before him; he only counts.",
    symbolism: "Conscience made external and mechanical.",
    message: "You already know where you belong.",
    initial: "M",
  },
  {
    id: "cerberus",
    name: "Cerberus",
    epithet: "The Three-Throated",
    role: "The monstrous dog who flays and deafens the gluttonous in the cold rain.",
    encounter: "The third circle; Virgil silences him by throwing fistfuls of mud into his throats.",
    canto: "Inferno VI",
    matters: "An appetite that can never be satisfied, quieted only by being fed filth.",
    symbolism: "Consumption as its own punishment.",
    message: "Hunger that cannot be filled will eat you instead.",
    initial: "C",
  },
  {
    id: "lucifer",
    name: "Lucifer",
    epithet: "The Emperor of the Sorrowful Kingdom",
    role: "The fallen angel, fixed waist-deep in ice at the exact centre of the earth.",
    encounter: "The ninth circle, three-faced, weeping, chewing Judas, Brutus and Cassius.",
    canto: "Inferno XXXIV",
    matters:
      "He is not a terrifying rebel. He is a mute, stupid, beating machine — his own wings freeze the lake that traps him.",
    symbolism: "Evil as absence and paralysis, the exact inversion of the Trinity.",
    message: "The worst thing in the universe is not powerful. It is stuck.",
    initial: "L",
  },
  {
    id: "farinata",
    name: "Farinata degli Uberti",
    epithet: "The Heretic of Florence",
    role: "Ghibelline leader who rises from a burning tomb, contemptuous even in fire.",
    encounter: "The sixth circle, among those who denied the soul's immortality.",
    canto: "Inferno X",
    matters: "He cares only about Florence and his family name — a man whose horizon ended at the city wall.",
    symbolism: "Political pride mistaken for transcendence.",
    message: "What you refuse to see beyond becomes the size of your world.",
    initial: "F",
  },
  {
    id: "brunetto",
    name: "Brunetto Latini",
    epithet: "The Teacher",
    role: "Dante's own mentor, found running beneath a rain of fire.",
    encounter: "The seventh circle, among the violent against nature.",
    canto: "Inferno XV",
    matters: "Dante treats him with enormous tenderness and still leaves him where he found him.",
    symbolism: "Love and honesty held in the same hand.",
    message: "You can honour someone completely and still not lie for them.",
    initial: "B",
  },
  {
    id: "cato",
    name: "Cato of Utica",
    epithet: "Warden of the Shore",
    role: "Roman republican who died rather than live under tyranny; guardian of Purgatory's base.",
    encounter: "The island shore at dawn, where he scolds the newly arrived for lingering over music.",
    canto: "Purgatorio I–II",
    matters: "A pagan suicide placed in the service of salvation — Dante's boldest theological gamble.",
    symbolism: "Freedom as the beginning of purification.",
    message: "Beauty can become another way of standing still.",
    initial: "C",
  },
  {
    id: "statius",
    name: "Statius",
    epithet: "The Secret Christian",
    role: "Roman poet who completes his purgation as Dante climbs, and joins the ascent.",
    encounter: "The fifth terrace, freed by an earthquake of joy.",
    canto: "Purgatorio XXI–XXXIII",
    matters: "He was converted by reading Virgil — who carried a light he could not see by.",
    symbolism: "Art that saves someone the artist will never meet.",
    message: "Your work may do good you are never told about.",
    initial: "S",
  },
  {
    id: "bernard",
    name: "St Bernard",
    epithet: "The Final Guide",
    role: "Contemplative who replaces Beatrice for the last ascent and prays to the Virgin on Dante's behalf.",
    encounter: "The Celestial Rose of the Empyrean.",
    canto: "Paradiso XXXI–XXXIII",
    matters: "At the end, even understanding must give way to contemplation and to prayer.",
    symbolism: "The point where seeking becomes stillness.",
    message: "Some things are not solved. They are only beheld.",
    initial: "B",
  },
];

export const charactersById = Object.fromEntries(characters.map((c) => [c.id, c])) as Record<
  CharacterId,
  Character
>;

export type CircleScene =
  | "ruins"
  | "storm"
  | "rain"
  | "weights"
  | "swamp"
  | "tombs"
  | "wood"
  | "bolgias"
  | "ice";

export interface Circle {
  n: number;
  roman: string;
  slug: string;
  name: string;
  sin: string;
  cantos: string;
  scene: CircleScene;
  guardian?: string;
  tagline: string;
  saw: string;
  punishment: string;
  meaning: string;
  message: string;
  question: string;
  characters: CharacterId[];
  zones?: { label: string; text: string }[];
}

export const circles: Circle[] = [
  {
    n: 1,
    roman: "I",
    slug: "limbo",
    name: "Limbo",
    sin: "The Virtuous Unbaptised",
    cantos: "Canto IV",
    scene: "ruins",
    tagline: "A green meadow inside eternal night.",
    saw: "Not screams but sighs. Dante finds a noble castle lit by a single fire, where Homer, Aristotle, Socrates and Saladin walk and speak quietly. Virgil lives here.",
    punishment:
      "There is no torment. The punishment is desire without hope — these souls want something they will never be given, and they know it.",
    meaning:
      "Dante inherits a doctrine he clearly finds painful and refuses to soften. The greatest minds of antiquity are honoured and excluded in the same gesture.",
    message:
      "The first circle is not about wickedness at all. It is about a longing that has nowhere to go — the quietest suffering Dante can imagine, and the one he places closest to the surface.",
    question: "What do you want that you have privately decided you will never have?",
    characters: ["virgil"],
  },
  {
    n: 2,
    roman: "II",
    slug: "lust",
    name: "Lust",
    sin: "The Lustful",
    cantos: "Canto V",
    scene: "storm",
    guardian: "Minos",
    tagline: "Nine circles begin with the sin that looks least like one.",
    saw: "A black wind that never rests, hurling souls like starlings. Out of it Francesca comes when Dante calls in the name of love, and tells him how she and Paolo read a romance together and read no further that day.",
    punishment:
      "In life they let passion carry them; in death the storm carries them. The contrapasso is exact: they surrendered control, so control is never returned.",
    meaning:
      "This is the least severe circle, which is the point. Dante ranks sins by how far they corrupt reason, not by how shocking they look. Lust is appetite overrunning judgment — the beginning of the descent, not its depth.",
    message:
      "Francesca is charming, cultured and entirely persuasive, and she blames a book. Dante faints from pity — and leaves her in the wind. He is teaching you to feel compassion and to keep your judgment at the same time.",
    question: "What happens when desire becomes more convincing than reason?",
    characters: ["francesca", "paolo", "minos"],
  },
  {
    n: 3,
    roman: "III",
    slug: "gluttony",
    name: "Gluttony",
    sin: "The Gluttonous",
    cantos: "Canto VI",
    scene: "rain",
    guardian: "Cerberus",
    tagline: "Cold, filthy, endless rain.",
    saw: "Souls lie face-down in freezing slush while Cerberus tears at them. Ciacco, a Florentine, rises to prophesy the ruin of their city, then sinks back into the mud without another word.",
    punishment:
      "They lived for delicacy and warmth; they lie in garbage and cold rain. Those who consumed without discrimination are now indistinguishable from what they lie in.",
    meaning:
      "Gluttony in Dante is not overeating — it is consumption as a substitute for attention. The glutton's world shrinks to the size of an appetite.",
    message:
      "Ciacco can see the future of Florence with total clarity and can do nothing with it. Insight without appetite for action is just another kind of lying in the mud.",
    question: "What are you consuming instead of deciding?",
    characters: ["cerberus"],
  },
  {
    n: 4,
    roman: "IV",
    slug: "greed",
    name: "Greed",
    sin: "The Hoarders and the Wasters",
    cantos: "Canto VII",
    scene: "weights",
    guardian: "Plutus",
    tagline: "Two mobs pushing the same weight in opposite directions.",
    saw: "Enormous boulders shoved chest-first around a broken circle. Two crowds collide, scream 'Why hoard?' and 'Why waste?', turn, and push back the way they came, forever. Their faces are unrecognisable.",
    punishment:
      "They defined themselves by objects, so they become the object's motion. Hoarders and spendthrifts share one punishment because they share one error, mirrored.",
    meaning:
      "Dante will not let you feel superior to either side. Excess and deprivation are the same misunderstanding of what things are for — Fortune, he explains here, moves goods between hands precisely so that no one mistakes them for their own.",
    message:
      "This is the first circle where the souls have no names. Obsession with possession is the point at which a person stops being a person and becomes a habit.",
    question: "What do you own that has begun to own the shape of your days?",
    characters: [],
  },
  {
    n: 5,
    roman: "V",
    slug: "wrath",
    name: "Wrath",
    sin: "The Wrathful and the Sullen",
    cantos: "Cantos VII–VIII",
    scene: "swamp",
    guardian: "Phlegyas",
    tagline: "The black marsh of the Styx.",
    saw: "On the surface, the wrathful tear at each other with teeth and hands. Beneath it, the sullen lie buried in mud, gurgling a hymn they cannot finish. Filippo Argenti lunges at Dante's boat and is pushed under.",
    punishment:
      "Open anger stays open and endless. Anger swallowed in life stays swallowed in death — the sullen choke on the words they never said.",
    meaning:
      "Dante splits rage into two: the kind that burns outward and the kind that rots inward. He considers them equally damning, and puts them in the same water.",
    message:
      "Dante himself is savage to Argenti here — and Virgil praises him for it. The poem is honest enough to show its own author enjoying the thing it condemns.",
    question: "Which is more truthful: the anger you show, or the anger you swallow?",
    characters: [],
  },
  {
    n: 6,
    roman: "VI",
    slug: "heresy",
    name: "Heresy",
    sin: "The Heretics",
    cantos: "Cantos IX–XI",
    scene: "tombs",
    tagline: "A city of iron, and a field of open graves.",
    saw: "Inside the burning walls of Dis, a plain of stone sepulchres stands open, each glowing with fire. Farinata rises from the waist, indifferent to the flames, and asks Dante only about Florentine politics.",
    punishment:
      "They denied that the soul outlives the body; they are sealed inside bodies of stone forever. On Judgment Day the lids will close.",
    meaning:
      "Heresy here is less about doctrine than about a closed mind — a refusal of anything beyond the material and the immediate.",
    message:
      "Farinata can see the distant future but not the present. Dante's grim joke: those who insisted there is nothing beyond this life are given the ability to see everything except now.",
    question: "What are you certain about because examining it would cost too much?",
    characters: ["farinata"],
  },
  {
    n: 7,
    roman: "VII",
    slug: "violence",
    name: "Violence",
    sin: "The Violent",
    cantos: "Cantos XII–XVII",
    scene: "wood",
    guardian: "The Minotaur",
    tagline: "Three rings: against others, against self, against God.",
    saw: "A river of boiling blood patrolled by centaurs. A grey wood of thorn trees that bleed and speak when broken. A desert of burning sand under a slow rain of fire, where Brunetto Latini runs beside Dante and cannot stop.",
    punishment:
      "Blood spilled becomes blood boiled. Those who threw away their bodies are denied bodies and become trees. Those who scorned the source of life lie under a sky that gives fire instead of water.",
    meaning:
      "Dante follows Aristotle: violence is destruction of what is owed — to a neighbour, to oneself, to nature and its maker. Each ring narrows the target and deepens the offence.",
    message:
      "In the wood of the suicides, Pier della Vigna's first concern is his reputation. Dante suggests that despair is often an argument we win against ourselves.",
    question: "What have you damaged because it was easier than being seen wanting help?",
    characters: ["brunetto"],
    zones: [
      {
        label: "Ring 1 · Against Others",
        text: "Murderers and tyrants immersed in Phlegethon, the river of boiling blood, at a depth set by the blood they shed. Centaurs shoot any soul that rises too far.",
      },
      {
        label: "Ring 2 · Against Self",
        text: "Suicides grown into gnarled trees, torn by Harpies; every wound is the only mouth through which they can speak. Squanderers are hunted through the wood by black hounds.",
      },
      {
        label: "Ring 3 · Against God & Nature",
        text: "A burning plain: blasphemers lie supine, usurers crouch with purses at their necks, and the violent against nature run in restless bands beneath falling flakes of fire.",
      },
    ],
  },
  {
    n: 8,
    roman: "VIII",
    slug: "fraud",
    name: "Fraud",
    sin: "The Fraudulent — Malebolge",
    cantos: "Cantos XVIII–XXX",
    scene: "bolgias",
    guardian: "Geryon",
    tagline: "Ten stone ditches, each with its own machinery of deceit.",
    saw: "A funnel of grey rock cut into ten concentric trenches crossed by bridges. Panderers whipped by demons. Flatterers in excrement. Simonists planted head-down in rock with burning feet. Diviners with heads twisted backwards. Barrators boiled in pitch. Hypocrites in gilded lead cloaks. Thieves fused with serpents. False counsellors sealed in flame — among them Ulysses. Sowers of discord split open. Falsifiers rotting with disease.",
    punishment:
      "Every bolgia inverts a specific technique of deception. Those who twisted the future have their faces turned to their own backs; those who wore false appearances wear gold that crushes them.",
    meaning:
      "Fraud is worse than violence because it requires reason — the very faculty that makes us human — to be used against another human. Violence is brute; fraud is intelligent.",
    message:
      "Ulysses' voyage speech is the most inspiring passage in the Inferno, and it is delivered from inside a flame. Dante is warning you that eloquence and truth are separate skills.",
    question: "When did you last use intelligence to avoid being honest?",
    characters: ["ulysses"],
  },
  {
    n: 9,
    roman: "IX",
    slug: "treachery",
    name: "Treachery",
    sin: "The Traitors — Cocytus",
    cantos: "Cantos XXXI–XXXIV",
    scene: "ice",
    guardian: "The Giants",
    tagline: "Hell's floor is not fire. It is ice.",
    saw: "A frozen lake in four zones, souls sealed at different depths, tears freezing into visors over their eyes. Ugolino gnaws Ruggieri's skull. At the centre, Lucifer beats six wings in silence, and the wind he makes is what keeps the lake frozen.",
    punishment:
      "Betrayal freezes the warmth between people, so the traitors are frozen. The lower the zone — kin, homeland, guests, benefactors — the deeper the ice.",
    meaning:
      "Treachery destroys the bond that trust makes possible, and trust is the ground of every community. It is furthest from God because God, for Dante, is relation itself.",
    message:
      "The deepest place in Hell is cold, silent, and completely still. Dante's final image of evil is not a rebel with a plan; it is something enormous, weeping, and unable to move.",
    question: "Who trusted you with something you have not honoured?",
    characters: ["ugolino", "lucifer"],
  },
];

export const circleBySlug = Object.fromEntries(circles.map((c) => [c.slug, c])) as Record<string, Circle>;

export interface Terrace {
  n: number;
  roman: string;
  name: string;
  cantos: string;
  penance: string;
  prayer: string;
  lesson: string;
}

export const terraces: Terrace[] = [
  {
    n: 1,
    roman: "I",
    name: "Pride",
    cantos: "X–XII",
    penance: "Souls walk bent double under stones, eyes forced down to carvings of humility and fallen pride.",
    prayer: "Our Father, sung by those who once thought they needed no one.",
    lesson: "Love distorted: self placed above every other good.",
  },
  {
    n: 2,
    roman: "II",
    name: "Envy",
    cantos: "XIII–XV",
    penance: "The envious sit against a cliff in grey cloaks, eyelids sewn shut with iron wire, leaning on one another.",
    prayer: "Litanies of the saints — the names of others, spoken kindly at last.",
    lesson: "Love distorted: grief at another's good.",
  },
  {
    n: 3,
    roman: "III",
    name: "Wrath",
    cantos: "XV–XVII",
    penance: "A blinding, acrid smoke through which nothing can be seen and patience must be practised.",
    prayer: "Agnus Dei, sung in unison by voices that cannot see each other.",
    lesson: "Love distorted: desire for justice curdled into desire for harm.",
  },
  {
    n: 4,
    roman: "IV",
    name: "Sloth",
    cantos: "XVII–XIX",
    penance: "Souls run without pause through the night, shouting examples of zeal, unable to stop and talk.",
    prayer: "Cries of urgency rather than song.",
    lesson: "Love deficient: the good recognised and not pursued.",
  },
  {
    n: 5,
    roman: "V",
    name: "Avarice",
    cantos: "XIX–XXII",
    penance: "The avaricious lie face-down on the stone, bound hand and foot, weeping into the ground they wanted.",
    prayer: "My soul cleaves to the dust.",
    lesson: "Love excessive: attachment to lesser goods.",
  },
  {
    n: 6,
    roman: "VI",
    name: "Gluttony",
    cantos: "XXII–XXIV",
    penance: "Emaciated souls pass fruit trees and clear water they cannot reach, and are made whole by the hunger.",
    prayer: "Labia mea Domine — the mouth reclaimed for praise.",
    lesson: "Love excessive: appetite outrunning purpose.",
  },
  {
    n: 7,
    roman: "VII",
    name: "Lust",
    cantos: "XXV–XXVII",
    penance: "A wall of flame across the whole terrace. Every soul — and finally Dante himself — must walk through it.",
    prayer: "Summae Deus clementiae, sung inside the fire.",
    lesson: "Love excessive: passion that must be burned clean rather than killed.",
  },
];

export interface Sphere {
  n: number;
  name: string;
  virtue: string;
  souls: string;
  cantos: string;
  insight: string;
}

export const spheres: Sphere[] = [
  {
    n: 1,
    name: "The Moon",
    virtue: "Inconstancy",
    souls: "Those whose vows were broken by force",
    cantos: "II–V",
    insight: "Piccarda: 'In His will is our peace.' No one in Heaven wants a higher place than they have.",
  },
  {
    n: 2,
    name: "Mercury",
    virtue: "Ambition",
    souls: "Those who did good for honour",
    cantos: "V–VII",
    insight: "Justinian recounts the whole arc of Roman law as a single providential sentence.",
  },
  {
    n: 3,
    name: "Venus",
    virtue: "Love",
    souls: "Lovers whose desire was finally turned upward",
    cantos: "VIII–IX",
    insight: "The same fire that burned Francesca, redirected rather than extinguished.",
  },
  {
    n: 4,
    name: "The Sun",
    virtue: "Wisdom",
    souls: "Theologians and philosophers",
    cantos: "X–XIV",
    insight: "Aquinas praises Francis; a Franciscan praises Dominic. Wisdom is generous about rivals.",
  },
  {
    n: 5,
    name: "Mars",
    virtue: "Courage",
    souls: "Warriors of the faith",
    cantos: "XIV–XVIII",
    insight: "Cacciaguida foretells Dante's exile: 'You shall learn how salt the bread of others tastes.'",
  },
  {
    n: 6,
    name: "Jupiter",
    virtue: "Justice",
    souls: "Just rulers",
    cantos: "XVIII–XX",
    insight: "Souls arrange themselves into letters, then into an eagle that speaks with one voice.",
  },
  {
    n: 7,
    name: "Saturn",
    virtue: "Temperance",
    souls: "Contemplatives",
    cantos: "XXI–XXII",
    insight: "A golden ladder rising out of sight. Here the singing stops — Dante could not survive it.",
  },
  {
    n: 8,
    name: "The Fixed Stars",
    virtue: "Faith, Hope, Love",
    souls: "The Church triumphant",
    cantos: "XXII–XXVII",
    insight: "Dante is examined on the three virtues by Peter, James and John, like a student defending a thesis.",
  },
  {
    n: 9,
    name: "The Primum Mobile",
    virtue: "Motion",
    souls: "The nine angelic orders",
    cantos: "XXVII–XXIX",
    insight: "The universe turns inside out: the point of light at the centre is God, and everything orbits it.",
  },
  {
    n: 10,
    name: "The Empyrean",
    virtue: "Light",
    souls: "All the blessed, in a rose of light",
    cantos: "XXX–XXXIII",
    insight: "Beyond space and time. The final vision lasts one instant and cannot be reported.",
  },
];

export interface Canto {
  realm: Realm;
  n: number;
  roman: string;
  title: string;
  location: string;
  summary: string;
}

const R = [
  "I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII",
  "XVIII","XIX","XX","XXI","XXII","XXIII","XXIV","XXV","XXVI","XXVII","XXVIII","XXIX","XXX",
  "XXXI","XXXII","XXXIII","XXXIV",
];

function build(realm: Realm, rows: [string, string, string][]): Canto[] {
  return rows.map(([title, location, summary], i) => ({
    realm,
    n: i + 1,
    roman: R[i] ?? String(i + 1),
    title,
    location,
    summary,
  }));
}

export const cantos: Canto[] = [
  ...build("inferno", [
    ["The Dark Wood", "Earth", "Lost at midlife, Dante is blocked by three beasts and rescued by Virgil."],
    ["The Call", "Earth", "Dante hesitates; Virgil reveals that Beatrice sent him from Heaven."],
    ["The Gate", "Vestibule", "'Abandon every hope.' The neutrals chase a blank banner; Charon ferries the damned."],
    ["Limbo", "Circle I", "Sighs, not screams. The noble castle of the virtuous pagans."],
    ["Francesca", "Circle II", "Minos judges; the black wind carries the lustful. Francesca speaks and Dante faints."],
    ["Ciacco", "Circle III", "Cold rain, Cerberus, and a prophecy about Florence."],
    ["Fortune", "Circles IV–V", "Hoarders and wasters collide; Virgil explains Fortune. The Styx begins."],
    ["The Styx", "Circle V", "Phlegyas ferries them; Filippo Argenti attacks the boat."],
    ["The Gates of Dis", "Circle VI", "Demons bar the way until a heavenly messenger opens the iron city."],
    ["Farinata", "Circle VI", "A heretic rises from a burning tomb and speaks only of Florence."],
    ["The Order of Hell", "Circle VI", "Virgil explains the moral architecture of the entire pit."],
    ["The Boiling Blood", "Circle VII·1", "The Minotaur, the centaurs, and Phlegethon."],
    ["The Wood of Suicides", "Circle VII·2", "Pier della Vigna speaks through a broken branch."],
    ["The Burning Sand", "Circle VII·3", "Capaneus blasphemes under the rain of fire; the old man of Crete."],
    ["Brunetto Latini", "Circle VII·3", "Dante's teacher runs beside him and cannot stop."],
    ["The Cord", "Circle VII·3", "Three Florentines; Virgil casts a cord into the abyss."],
    ["Geryon", "Circle VII–VIII", "The monster of fraud carries them down on its back."],
    ["Malebolge", "Circle VIII·1–2", "Panderers whipped; flatterers sunk in filth."],
    ["Simony", "Circle VIII·3", "Popes planted upside-down in stone, feet aflame."],
    ["The Diviners", "Circle VIII·4", "Heads twisted backwards; Dante weeps and is rebuked."],
    ["The Barrators", "Circle VIII·5", "Boiling pitch and a company of grotesque, unreliable demons."],
    ["The Demons' Brawl", "Circle VIII·5", "A trick, a chase, and two devils fall into the pitch."],
    ["The Hypocrites", "Circle VIII·6", "Gilded lead cloaks; Caiaphas crucified on the path."],
    ["The Thieves", "Circle VIII·7", "Serpents; a soul burns to ash and reassembles."],
    ["Metamorphosis", "Circle VIII·7", "Men and reptiles exchange forms in the poem's strangest passage."],
    ["Ulysses", "Circle VIII·8", "A tongue of flame recounts the last voyage beyond the world."],
    ["Guido da Montefeltro", "Circle VIII·8", "A false counsellor damned by a pope's fraudulent absolution."],
    ["The Sowers of Discord", "Circle VIII·9", "Mohammed, Bertran de Born, and bodies split open and healed to be split again."],
    ["The Falsifiers", "Circle VIII·10", "A pit of disease, scabs and stench."],
    ["Master Adam", "Circle VIII·10", "Counterfeiters and impersonators trade insults; Virgil shames Dante for watching."],
    ["The Giants", "Circle VIII–IX", "Nimrod, Ephialtes, and Antaeus, who lowers them to the ice."],
    ["Caina & Antenora", "Circle IX", "Traitors to kin and country locked in the frozen lake."],
    ["Ugolino", "Circle IX", "The tower, the sons, the hunger — the poem's most terrible story."],
    ["Lucifer", "Circle IX", "Three faces, six wings, and a climb down his body into the other hemisphere."],
  ]),
  ...build("purgatorio", [
    ["The Shore", "Ante-Purgatory", "Dawn on an island; Cato sends them to bind Dante with a reed of humility."],
    ["Casella", "Ante-Purgatory", "An angel's boat arrives; a song delays the souls until Cato scatters them."],
    ["Manfred", "Ante-Purgatory", "The excommunicate: no curse is final while a person can still hope."],
    ["The Late-Repentant", "Ante-Purgatory", "Belacqua's magnificent laziness, and the geometry of the mountain."],
    ["Buonconte", "Ante-Purgatory", "Those who died violently; one tear of repentance overturns a demon's claim."],
    ["Sordello", "Ante-Purgatory", "A poet's embrace triggers Dante's furious lament for a broken Italy."],
    ["The Valley of Princes", "Ante-Purgatory", "Rulers who neglected their souls sing at nightfall."],
    ["The Serpent", "Ante-Purgatory", "Angels drive off a nightly serpent; the ritual of vigilance."],
    ["The Gate", "Purgatory Gate", "An angel carves seven P's on Dante's forehead and opens the door with two keys."],
    ["Pride I", "Terrace I", "Carvings of humility so vivid they seem to speak."],
    ["Pride II", "Terrace I", "Oderisi on the vanity of fame: a breath of wind that changes name."],
    ["Pride III", "Terrace I", "Examples of fallen pride underfoot; the first P is erased."],
    ["Envy I", "Terrace II", "Grey cloaks and sewn eyelids; Sapìa's startling honesty."],
    ["Envy II", "Terrace II", "Guido del Duca laments the ruin of Romagna."],
    ["Wrath I", "Terrace III", "Visions of gentleness inside a blinding smoke."],
    ["Marco Lombardo", "Terrace III", "Free will defended: the fault is not in the stars but in you."],
    ["Wrath III", "Terrace III", "Virgil's central lecture: love is the seed of every virtue and every sin."],
    ["Sloth", "Terrace IV", "Souls run through the night; the anatomy of desire and choice."],
    ["Avarice I", "Terrace V", "The siren dream; Pope Adrian V face-down on the stone."],
    ["Avarice II", "Terrace V", "Hugh Capet on greed in kings; the mountain shakes."],
    ["Statius", "Terrace V", "A soul completes purgation and joins the climb."],
    ["Statius' Story", "Terrace VI", "He was converted by reading Virgil, who never knew."],
    ["Forese", "Terrace VI", "Starved souls; an old friend and a rebuke to Florentine vanity."],
    ["Bonagiunta", "Terrace VI", "The 'sweet new style' defined: writing what love dictates."],
    ["The Body & the Soul", "Terrace VII", "Statius explains how a shade can hunger; the wall of fire appears."],
    ["The Fire", "Terrace VII", "Poets in the flame; Arnaut Daniel speaks in Provençal."],
    ["Through the Flame", "Terrace VII", "Dante crosses the fire only when Beatrice's name is spoken."],
    ["Matelda", "Earthly Paradise", "A river, a forest, and a woman gathering flowers at the top of the world."],
    ["The Procession", "Earthly Paradise", "A pageant of scripture in symbol and colour."],
    ["Beatrice", "Earthly Paradise", "Virgil vanishes. Beatrice arrives and calls Dante by name — and accuses him."],
    ["Confession", "Earthly Paradise", "Dante admits his failure, faints, and is drawn through Lethe."],
    ["The Tree", "Earthly Paradise", "A visionary history of the Church's corruption."],
    ["Eunoe", "Earthly Paradise", "The second river restores the memory of good. Dante is ready to rise."],
  ]),
  ...build("paradiso", [
    ["The Ascent", "Sphere of Fire", "Dante gazes at Beatrice gazing at the sun, and rises without noticing."],
    ["The Moon", "Sphere I", "Warning to casual readers; the moon-spots and the unity of creation."],
    ["Piccarda", "Sphere I", "'In His will is our peace' — the key sentence of the whole Paradiso."],
    ["Absolute Will", "Sphere I", "Why the blessed appear in spheres, and how coerced vows are judged."],
    ["Mercury", "Sphere II", "On vows and free will; ascent to the second heaven."],
    ["Justinian", "Sphere II", "The eagle of Rome recounted as one long providential arc."],
    ["Redemption", "Sphere II", "Beatrice explains the incarnation and the justice of the cross."],
    ["Venus", "Sphere III", "Charles Martel on how nature and society misassign vocations."],
    ["Cunizza & Folco", "Sphere III", "Former lovers, luminous; a rebuke to a money-obsessed Church."],
    ["The Sun", "Sphere IV", "A crown of twelve lights encircles them, singing."],
    ["Francis", "Sphere IV", "Aquinas tells the life of St Francis and indicts his own order."],
    ["Dominic", "Sphere IV", "Bonaventure answers with Dominic's life and indicts the Franciscans."],
    ["Solomon", "Sphere IV", "On the limits of human judgment: do not be quick to condemn."],
    ["The Cross of Mars", "Spheres IV–V", "On the resurrected body; souls form a blazing cross."],
    ["Cacciaguida", "Sphere V", "Dante's ancestor greets him and describes an older, simpler Florence."],
    ["Nobility", "Sphere V", "The vanity of bloodlines and the decay of the city."],
    ["Exile Foretold", "Sphere V", "'You shall leave everything you love most.' And: tell the whole vision anyway."],
    ["Jupiter", "Sphere VI", "Souls spell out a call to justice and shape themselves into an eagle."],
    ["The Eagle", "Sphere VI", "The problem of the virtuous unbaptised, stated without easy resolution."],
    ["Just Rulers", "Sphere VI", "Surprising names inside the eagle's eye; divine judgment is not predictable."],
    ["Saturn", "Sphere VII", "A golden ladder; the singing ceases because Dante could not endure it."],
    ["Benedict", "Sphere VII", "Monastic decline lamented; ascent to the fixed stars."],
    ["The Triumph", "Sphere VIII", "Christ and Mary appear in overwhelming light."],
    ["Faith", "Sphere VIII", "St Peter examines Dante on faith."],
    ["Hope", "Sphere VIII", "St James examines him on hope; Dante hopes to be crowned poet in Florence."],
    ["Love", "Sphere VIII", "St John examines him on love; Adam answers questions about language."],
    ["Peter's Anger", "Sphere VIII", "A furious denunciation of corrupt popes; the heavens blush red."],
    ["The Point of Light", "Sphere IX", "The universe inverted: God as an infinitesimal point at the centre."],
    ["Angels", "Sphere IX", "Creation, angelic nature, and a sharp attack on lazy preachers."],
    ["The River of Light", "Empyrean", "Beyond the spheres: a river that becomes a rose."],
    ["The Rose", "Empyrean", "Beatrice takes her seat; St Bernard becomes the final guide."],
    ["The Order of the Blessed", "Empyrean", "The architecture of the celestial rose described petal by petal."],
    ["The Vision", "Empyrean", "The prayer to the Virgin, the three circles, and 'the love that moves the sun and the other stars.'"],
  ]),
];

export interface QuizQuestion {
  q: string;
  options: { label: string; sin: string }[];
}

export const quiz: QuizQuestion[] = [
  {
    q: "When nobody is watching, what quietly matters most to you?",
    options: [
      { label: "Being wanted", sin: "lust" },
      { label: "Being right", sin: "pride" },
      { label: "Being secure", sin: "greed" },
      { label: "Being ahead of someone", sin: "envy" },
    ],
  },
  {
    q: "Someone betrays your trust. A year later, what remains?",
    options: [
      { label: "A cold, permanent door closed", sin: "treachery" },
      { label: "A story I tell well, with heat", sin: "wrath" },
      { label: "A quiet ledger I intend to balance", sin: "fraud" },
      { label: "An ache I keep to myself", sin: "envy" },
    ],
  },
  {
    q: "What would you actually sacrifice for success?",
    options: [
      { label: "Sleep, health, presence", sin: "greed" },
      { label: "Other people's opportunities", sin: "envy" },
      { label: "A few precise omissions of truth", sin: "fraud" },
      { label: "Nothing — and I resent those who would", sin: "pride" },
    ],
  },
  {
    q: "A friend gets the thing you wanted. Your first honest thought?",
    options: [
      { label: "Why not me", sin: "envy" },
      { label: "They cut corners", sin: "fraud" },
      { label: "I should have pushed harder", sin: "pride" },
      { label: "Something in me goes flat", sin: "wrath" },
    ],
  },
  {
    q: "Truth or comfort?",
    options: [
      { label: "Truth, even when it costs others", sin: "wrath" },
      { label: "Comfort, and I'll dress it as kindness", sin: "fraud" },
      { label: "Whichever protects what I've built", sin: "greed" },
      { label: "Whichever keeps me admired", sin: "pride" },
    ],
  },
  {
    q: "How do you handle wanting someone you shouldn't?",
    options: [
      { label: "I follow it and call it fate", sin: "lust" },
      { label: "I feed it privately, forever", sin: "lust" },
      { label: "I convert it into resentment", sin: "wrath" },
      { label: "I cut it off and feel superior", sin: "pride" },
    ],
  },
  {
    q: "You are given power over people who once dismissed you.",
    options: [
      { label: "I make sure they feel it", sin: "wrath" },
      { label: "I quietly restructure things in my favour", sin: "fraud" },
      { label: "I keep them close and useless", sin: "treachery" },
      { label: "I want them to admire me now", sin: "pride" },
    ],
  },
  {
    q: "What is your relationship with what you own?",
    options: [
      { label: "I hold on tightly", sin: "greed" },
      { label: "I spend to feel alive", sin: "greed" },
      { label: "I measure it against others'", sin: "envy" },
      { label: "I barely notice it", sin: "lust" },
    ],
  },
  {
    q: "A promise becomes inconvenient.",
    options: [
      { label: "I renegotiate before I break it", sin: "fraud" },
      { label: "I let it quietly lapse", sin: "treachery" },
      { label: "I keep it and grow bitter", sin: "wrath" },
      { label: "I keep it — my word is my reputation", sin: "pride" },
    ],
  },
  {
    q: "What do you most fear being called?",
    options: [
      { label: "Ordinary", sin: "pride" },
      { label: "Poor", sin: "greed" },
      { label: "Unloved", sin: "lust" },
      { label: "Disloyal", sin: "treachery" },
    ],
  },
];

export interface QuizResult {
  sin: string;
  place: string;
  title: string;
  verdict: string;
  circleSlug?: string;
}

export const quizResults: Record<string, QuizResult> = {
  lust: {
    sin: "lust",
    place: "The Second Circle",
    title: "The Lustful",
    verdict:
      "You are governed by wanting. Dante would not despise you for it — this is the gentlest circle — but he would show you the storm and ask who is steering. Your danger is not desire. It is the beautiful story you tell about where desire took you.",
    circleSlug: "lust",
  },
  greed: {
    sin: "greed",
    place: "The Fourth Circle",
    title: "The Hoarders and the Wasters",
    verdict:
      "You measure life in what can be kept or spent. Dante removes the faces from this circle for a reason: obsession with holding makes people interchangeable. He would ask what you are actually protecting.",
    circleSlug: "greed",
  },
  wrath: {
    sin: "wrath",
    place: "The Fifth Circle",
    title: "The Wrathful and the Sullen",
    verdict:
      "Your justice runs hot, and when it cannot burn outward it sinks. Dante puts open rage and swallowed rage in the same black water — he thought the second was the more dangerous of the two.",
    circleSlug: "wrath",
  },
  envy: {
    sin: "envy",
    place: "The Second Terrace of Purgatory",
    title: "The Envious",
    verdict:
      "Dante does not put envy in Hell. He puts it on the mountain, eyes stitched shut, leaning on the shoulder of a stranger — because envy is a wound in how you see, and it can be healed by learning to look at people rather than past them.",
  },
  pride: {
    sin: "pride",
    place: "The First Terrace of Purgatory",
    title: "The Proud",
    verdict:
      "Dante placed himself here. He expected to spend a long time bent under a stone. Pride is the root sin in his system and also the most curable — the cure is simply looking down long enough to see what others have made.",
  },
  fraud: {
    sin: "fraud",
    place: "The Eighth Circle",
    title: "Fraud — Malebolge",
    verdict:
      "You are clever, and Dante considered cleverness the most dangerous instrument a person can carry. Fraud sits below violence because it takes the faculty that makes us human and turns it against another human. Read Ulysses. He is you at your most admirable.",
    circleSlug: "fraud",
  },
  treachery: {
    sin: "treachery",
    place: "The Ninth Circle",
    title: "Treachery — Cocytus",
    verdict:
      "You close doors permanently, and you do it quietly. At the bottom of Dante's universe there is no fire — only ice, silence, and something enormous that cannot move. Betrayal freezes the warmth that makes anything else possible.",
    circleSlug: "treachery",
  },
};

export const journeyStops = [
  {
    key: "forest",
    label: "The Dark Wood",
    cantos: "Inferno I–II",
    characters: "Dante, Virgil, three beasts",
    theme: "Being lost at the middle of life",
    to: "/",
  },
  {
    key: "inferno",
    label: "Inferno",
    cantos: "Inferno III–XXXIV",
    characters: "Francesca, Ulysses, Ugolino, Lucifer",
    theme: "Sin seen clearly, without excuse",
    to: "/inferno",
  },
  {
    key: "centre",
    label: "The Centre of the Earth",
    cantos: "Inferno XXXIV",
    characters: "Lucifer",
    theme: "The turning point: down becomes up",
    to: "/inferno/treachery",
  },
  {
    key: "purgatorio",
    label: "Purgatorio",
    cantos: "Purgatorio I–XXXIII",
    characters: "Cato, Statius, Matelda, Beatrice",
    theme: "Love re-ordered through effort",
    to: "/purgatorio",
  },
  {
    key: "paradiso",
    label: "Paradiso",
    cantos: "Paradiso I–XXIX",
    characters: "Piccarda, Justinian, Cacciaguida",
    theme: "Understanding as ascent",
    to: "/paradiso",
  },
  {
    key: "empyrean",
    label: "The Empyrean",
    cantos: "Paradiso XXX–XXXIII",
    characters: "St Bernard, the Virgin, the Rose",
    theme: "The love that moves the sun and the other stars",
    to: "/empyrean",
  },
];

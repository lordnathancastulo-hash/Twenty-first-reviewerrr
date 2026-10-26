/* =========================================================
   21st Century Literature Reviewer — script.js
   Lessons covered: L4 Elements of Poetry, L4 Identifying
   Representative Texts from the Regions, L5 Context and
   Text Meaning, L6 21st Century Literary Genres
   ========================================================= */

/* ---------- TOPICS ---------- */
const TOPICS = {
  poetry:  { label: "L4 · Elements of Poetry",           short: "Poetry" },
  region:  { label: "L4 · Texts from the Regions",       short: "Regions" },
  context: { label: "L5 · Context & Text Meaning",       short: "Context" },
  genres:  { label: "L6 · 21st Century Literary Genres", short: "Genres" }
};

/* ---------- QUESTION BANK (100) ----------
   Q(topic, question, correctAnswer, [wrong1, wrong2, wrong3], explanation)
   Choices are shuffled every time the quiz runs. */
function Q(topic, q, correct, wrong, exp) {
  return { topic, q, correct, wrong, exp };
}

const BANK = [
  /* ================= L4 · ELEMENTS OF POETRY (42) ================= */
  Q("poetry", "Who described poetry as “prose bewitched”?",
    "Mina Roy", ["Gwendolyn Brooks", "Joyce Kilmer", "Emily Dickinson"],
    "The lesson says poetry is often described as “prose bewitched” (Mina Roy) and as “life distilled” through words and language (Gwendolyn Brooks)."),

  Q("poetry", "Poetry is often described as “life distilled” through words and language. Who said this?",
    "Gwendolyn Brooks", ["Mina Roy", "William Wordsworth", "Robert Frost"],
    "“Life distilled” is by Gwendolyn Brooks. “Prose bewitched” is by Mina Roy. Both are highlighted descriptions of poetry in the lesson."),

  Q("poetry", "Poetry works mainly through which three qualities, rather than literal, straightforward communication?",
    "Suggestion, implication, and ambiguity", ["Plot, setting, and conflict", "Fact, evidence, and argument", "Rhyme, rhythm, and repetition"],
    "Poetry works via suggestion, implication, and ambiguity. Suggestion hints at meaning without stating it; implication suggests something beyond the obvious; ambiguity allows more than one possible meaning."),

  Q("poetry", "Which term describes a poem’s ability to allow for MORE THAN ONE possible meaning?",
    "Ambiguity", ["Suggestion", "Implication", "Enjambment"],
    "Ambiguity = more than one possible meaning. Suggestion = hints at a meaning without stating it directly. Implication = suggests something beyond the obvious."),

  Q("poetry", "According to the lesson, poems are primarily relished as ______, the building blocks of this art.",
    "words", ["images", "stanzas", "stories"],
    "Poems are primarily relished as WORDS — their meticulous selection, arrangement, and calculated interplay deliver ideas, feelings, perspectives, shades, flavors, and layers of meaning."),

  Q("poetry", "Which general type of poetry expresses the emotions and feelings of the poet and is usually short, simple, and easy to understand?",
    "Lyric poetry", ["Narrative poetry", "Dramatic poetry", "Epic poetry"],
    "Lyric poetry — focus: emotions and feelings. Narrative focuses on a sequence of events; dramatic focuses on an imaginary conversation."),

  Q("poetry", "Which type of poetry deals with a series of events?",
    "Narrative poetry", ["Lyric poetry", "Dramatic poetry", "Free verse"],
    "Narrative poetry tells a story, so its focus is a SEQUENCE OF EVENTS."),

  Q("poetry", "In dramatic poetry, the speaker is ______.",
    "an imaginary character addressing another imaginary character who remains silent",
    ["the poet speaking directly to the reader", "an unseen narrator telling a long story", "a chorus singing in unison"],
    "Dramatic poetry: the speaker is an imaginary character addressing another imaginary character who remains silent. Focus: an imaginary conversation."),

  Q("poetry", "A group of lines in a poem separated from other groups is called a ______.",
    "stanza", ["line break", "enjambment", "meter"],
    "A stanza is a group of lines. Common forms: couplet (2 lines), tercet (3 lines), quatrain (4 lines)."),

  Q("poetry", "How many lines does a quatrain have?",
    "Four", ["Two", "Three", "Five"],
    "Couplet = 2, tercet = 3, quatrain = 4 lines."),

  Q("poetry", "A sentence or thought that continues to the next line WITHOUT a strong punctuation stop is called ______.",
    "enjambment", ["line break", "stanza", "rhyme scheme"],
    "Enjambment = the thought continues onto the next line (e.g., “The river flows gently through the valley / and carries stories of yesterday”)."),

  Q("poetry", "The point where a poet ends a line — creating pause, emphasis, surprise, or a double meaning — is the ______.",
    "line break", ["enjambment", "couplet", "refrain"],
    "A line break can change how we read and feel the poem. Example: “I can’t go on, / but I must.” — Same words, different breaks, new meaning."),

  Q("poetry", "The repetition of similar sounds, often at the ends of lines, is called ______.",
    "rhyme", ["meter", "rhythm", "diction"],
    "Rhyme = repetition of similar sounds (e.g., light/night). Similar ending sounds create harmony and unity."),

  Q("poetry", "A poem’s lines follow the pattern A-A-B-B. What does this describe?",
    "Its rhyme scheme", ["Its meter", "Its tone", "Its dramatic situation"],
    "Rhyme scheme = the pattern of end rhymes. Common patterns: ABAB and AABB."),

  Q("poetry", "The regular pattern of stressed and unstressed syllables in a line is the ______.",
    "meter", ["rhythm", "rhyme", "stanza"],
    "Meter = regular pattern of stressed and unstressed syllables. Example: iambic pentameter (five feet per line)."),

  Q("poetry", "Iambic pentameter has how many feet per line?",
    "Five", ["Two", "Three", "Four"],
    "Penta- = five. Iambic pentameter = five feet per line in an unstressed–stressed pattern (e.g., “Shall I compare thee to a summer’s day”)."),

  Q("poetry", "The beat or flow of language in a poem is called ______.",
    "rhythm", ["rhyme", "meter", "alliteration"],
    "Rhythm = the beat or flow of language, giving a natural, speech-like flow. Rhyme, meter, and rhythm together create the music of a poem."),

  Q("poetry", "“Wild winds whistle” is an example of which sound device?",
    "Alliteration", ["Assonance", "Consonance", "Onomatopoeia"],
    "Alliteration = repetition of BEGINNING consonant sounds (w-w-w)."),

  Q("poetry", "“Slow road home” is an example of ______, the repetition of vowel sounds.",
    "assonance", ["alliteration", "consonance", "onomatopoeia"],
    "Assonance = repetition of VOWEL sounds (the long “o” in slow, road, home)."),

  Q("poetry", "Which sound device is the repetition of consonant sounds WITHIN or AT THE END of words (e.g., blank/think)?",
    "Consonance", ["Alliteration", "Assonance", "Onomatopoeia"],
    "Consonance = repetition of consonant sounds within or at the end of words (blank / think — the “nk” sound)."),

  Q("poetry", "Which sound device uses words that imitate sounds, such as buzz, splash, bang, and hiss?",
    "Onomatopoeia", ["Alliteration", "Assonance", "Consonance"],
    "Onomatopoeia = words that imitate sounds."),

  Q("poetry", "“Golden sunlight spilled across the field” appeals to which sense?",
    "Sight (visual imagery)", ["Hearing (auditory imagery)", "Smell (olfactory imagery)", "Touch (tactile imagery)"],
    "Visual imagery appeals to sight — colors, shapes, and scenes."),

  Q("poetry", "“Rain tapped softly on the roof” is an example of ______ imagery.",
    "auditory", ["visual", "gustatory", "tactile"],
    "Auditory imagery appeals to the sense of hearing (sound, voices, noises, music)."),

  Q("poetry", "“The warm bread filled the kitchen with its sweet aroma” is an example of ______ imagery.",
    "olfactory", ["gustatory", "tactile", "visual"],
    "Olfactory imagery appeals to the sense of SMELL (scents and aromas)."),

  Q("poetry", "“The mango was sweet and juicy” is an example of ______ imagery.",
    "gustatory", ["olfactory", "tactile", "auditory"],
    "Gustatory imagery appeals to the sense of TASTE (flavors and sweetness)."),

  Q("poetry", "“The cold wind brushed against my face” is an example of ______ imagery.",
    "tactile", ["olfactory", "visual", "gustatory"],
    "Tactile imagery appeals to TOUCH — texture, temperature, or breeze."),

  Q("poetry", "Words used creatively to create comparisons, emphasis, or deeper meaning are called ______.",
    "figurative language", ["literal language", "diction", "free verse"],
    "Figurative language = words used creatively to create comparisons, emphasis, or deeper meaning (simile, metaphor, personification, hyperbole, etc.)."),

  Q("poetry", "“I wandered lonely as a cloud” (Wordsworth) is a ______ because it compares using “like” or “as.”",
    "simile", ["metaphor", "personification", "apostrophe"],
    "A simile compares using LIKE or AS. A metaphor is a direct comparison."),

  Q("poetry", "“Hope is the thing with feathers” (Emily Dickinson) is an example of a ______.",
    "metaphor", ["simile", "hyperbole", "oxymoron"],
    "A metaphor is a DIRECT comparison — hope IS the thing with feathers (no “like” or “as”)."),

  Q("poetry", "“Because I could not stop for Death — He kindly stopped for me” gives Death human qualities. This is ______.",
    "personification", ["hyperbole", "metonymy", "paradox"],
    "Personification gives human qualities to nonhuman things (Emily Dickinson)."),

  Q("poetry", "“Had we but world enough, and time” (Andrew Marvell, To His Coy Mistress) is an example of ______.",
    "hyperbole", ["simile", "apostrophe", "irony"],
    "Hyperbole = extreme exaggeration for emphasis."),

  Q("poetry", "“The pen is mightier than the sword” uses objects to represent ideas closely associated with them. This is ______.",
    "metonymy", ["synecdoche", "oxymoron", "simile"],
    "Metonymy = one thing is referred to by the name of something closely associated with it. Pen = writing/peaceful ideas; sword = military force/violence."),

  Q("poetry", "In “All hands on deck!”, “hands” stands for the whole sailors/crew. This is ______.",
    "synecdoche", ["metonymy", "personification", "paradox"],
    "Synecdoche = a PART represents the WHOLE (or the whole represents a part)."),

  Q("poetry", "“O wild West Wind, thou breath of Autumn’s being” (Shelley) is an example of ______, where the speaker directly addresses an absent person, dead person, abstract idea, or non-human thing.",
    "apostrophe", ["personification", "metaphor", "irony"],
    "Apostrophe = a direct address to something that is not present or cannot respond (here, the West Wind)."),

  Q("poetry", "“Parting is such sweet sorrow” (Romeo and Juliet) is an example of a(n) ______.",
    "oxymoron", ["paradox", "simile", "hyperbole"],
    "An oxymoron places two contradictory or opposite words together (sweet + sorrow)."),

  Q("poetry", "“The child is father of the man” (Wordsworth, My Heart Leaps Up) is a statement that seems contradictory but holds a deeper truth. This is a ______.",
    "paradox", ["oxymoron", "metonymy", "apostrophe"],
    "A paradox is a statement that seems contradictory or impossible but contains a deeper truth. Both oxymoron and paradox use contradiction to create meaning."),

  Q("poetry", "Which statement correctly distinguishes TONE from MOOD?",
    "Tone is how the speaker feels; mood is how the reader feels.",
    ["Tone is how the reader feels; mood is how the speaker feels.", "Tone is the rhyme pattern; mood is the meter.", "Tone and mood mean exactly the same thing."],
    "Tone = the speaker’s/poet’s attitude toward the subject (joyful, serious, angry, sarcastic, nostalgic). Mood = the feeling or atmosphere created in the reader (peaceful, tense, mysterious, sad, cheerful)."),

  Q("poetry", "A poem’s topic is “friendship.” Which of the following is its THEME?",
    "True friendship can remain strong during difficult times.", ["Friendship", "Friends", "Friendship and love"],
    "Theme is the central idea, insight, or message — it is NOT simply the topic. A theme makes a statement about life or people."),

  Q("poetry", "The fictitious character whose voice we hear in a poem is the ______.",
    "speaker / persona", ["dramatic situation", "diction", "theme"],
    "Speaker/Persona = the fictitious character whose voice we hear. In “The Raven,” the speaker is a grieving narrator who has lost Lenore."),

  Q("poetry", "The moment (in lyric poetry) or series of events (in narrative poetry) in which the speaker speaks is called the ______.",
    "dramatic situation", ["persona", "tone", "enjambment"],
    "Dramatic situation. In “The Raven,” it is the speaker sitting alone late at night, grieving Lenore, when the raven appears."),

  Q("poetry", "The poem’s choice of words — suggestive in meaning, sound, and placement with other words — is called ______.",
    "diction", ["imagery", "rhythm", "stanza"],
    "Diction = word choice. The power of diction lies in MEANING, SOUND, and PLACEMENT."),

  Q("poetry", "Saying one thing but meaning another (e.g., a speaker who sounds sad but is actually joyful) is called ______.",
    "irony", ["paradox", "apostrophe", "assonance"],
    "Irony = saying one thing but meaning another; what is said isn’t what is felt."),

  /* ================= L4 · IDENTIFYING REPRESENTATIVE TEXTS FROM THE REGIONS (10) ================= */
  Q("region", "Imagery is a poetic element that ______.",
    "creates a picture or mental image in the reader’s mind using figurative language, appealing to the senses",
    ["divides a poem into groups of lines", "repeats the same vowel sounds", "describes the speaker’s attitude toward the subject"],
    "Imagery represents objects, places, ideas, or actions that appeal to the senses of the readers."),

  Q("region", "Which provinces make up the Ilocos Region (Region 1) according to the lesson?",
    "Ilocos Norte, Ilocos Sur, La Union, and Pangasinan", ["Ilocos Norte, Ilocos Sur, Abra, and Cagayan", "La Union, Pangasinan, Tarlac, and Zambales", "Ilocos Sur, Batanes, Isabela, and Benguet"],
    "Located in the northwest of Luzon, the Ilocos Region is comprised of four provinces: Ilocos Norte, Ilocos Sur, La Union, and Pangasinan."),

  Q("region", "Which body of water borders the Ilocos Region to the west?",
    "South China Sea", ["Philippine Sea", "Sulu Sea", "Celebes Sea"],
    "It is bordered to the west by the turbulent South China Sea, to the east by the Cordillera Administrative Region, the northeast and southeast by Cagayan Valley, and the south by Central Luzon."),

  Q("region", "Most inhabitants of the Ilocano homeland are concentrated along a ______.",
    "narrow coastal plain", ["wide central plateau", "mountain range", "river delta"],
    "Because of geographical boundaries, they often experience heavy rains and violent typhoons, especially during the rainy season."),

  Q("region", "Who wrote the poem “Gabu”?",
    "Carlos A. Angeles", ["Danton Remoto", "Joyce Kilmer", "Mars Ravelo"],
    "“Gabu” is by Carlos A. Angeles, a Palanca awardee in Poetry (1964)."),

  Q("region", "“Gabu” depicts ______.",
    "a coastline in Ilocos constantly battered by the restless, furious sea",
    ["a quiet mountain village in the Cordillera", "a city street at night", "a rice field during harvest"],
    "Gabu depicts a coastline in Ilocos experiencing the battering restlessness of the sea; its water seems furious and ruthless with its daylong bashing that “havocs” the wasteland."),

  Q("region", "Carlos A. Angeles was born on May 25, 1921 in ______.",
    "Tacloban City, Leyte", ["Laoag, Ilocos Norte", "Manila", "Vigan, Ilocos Sur"],
    "Born in Tacloban City, Leyte; graduated from Rizal High School in 1938; later lived in the USA with his family since 1978."),

  Q("region", "Carlos A. Angeles’ collection “A Stun of Jewels” (1963) contains how many poems and what did it win?",
    "17 poems; first prize in the Palanca Awards in 1964",
    ["12 poems; the National Book Award", "25 poems; the Nobel Prize in Literature", "17 poems; the CCP Gawad Alab ng Haraya"],
    "It consists of 17 poems. In 1964, when poetry was first considered in the Carlos Palanca Memorial Awards for Literature, it won first prize and also the Republic Cultural Heritage Award for Literature."),

  Q("region", "Which of these was part of Carlos A. Angeles’ career?",
    "Chief of the Philippine Bureau of International News Services (1950–1958)",
    ["Governor of Ilocos Norte", "President of the Philippines", "Director of the National Museum"],
    "He was also a Press Assistant (1958–1980), Public Relations manager of PanAm Airlines, and a member of the board of directors of International PEN."),

  Q("region", "Why do Philippine literary masterpieces resonate across the archipelago, according to the lesson?",
    "They speak of the collective experiences of Filipinos — difficulties, triumphs, struggles, armed conflicts, and bloodless revolutions",
    ["They were all written in a single language", "They only describe life in Manila", "They avoid talking about history"],
    "The country’s rich repertoire of literature is rooted in the diverse cultural heritage of the Filipino people, who speak of their collective experiences."),

  /* ================= L5 · CONTEXT AND TEXT MEANING (15) ================= */
  Q("context", "The word “context” originates from the notion of ______.",
    "weaving together", ["breaking apart", "writing down", "reading aloud"],
    "Context originates from the notion of weaving together."),

  Q("context", "Context is defined as ______.",
    "the circumstances that form the setting of events, statements, or ideas so it can be fully understood and assessed",
    ["the rhyme pattern of a poem", "the number of lines in a stanza", "a poem’s title and author only"],
    "Context = circumstances that form the setting of events, statements, or ideas, through which they can be fully understood and assessed."),

  Q("context", "Knowing about the writer’s life, values, assumptions, gender, race, sexual orientation, and the political and economic issues related to the author is the ______ context.",
    "reader’s/writer’s", ["text’s", "social", "socio-cultural"],
    "The lesson labels this under “Reader’s Context,” but defines it as the WRITER’S context — knowing about the writer’s life, values, assumptions, gender, race, sexual orientation, and political and economic issues."),

  Q("context", "The text’s context is about ______.",
    "its publishing story — the larger text (newspaper, history, events) it is part of",
    ["the society where the characters live", "the author’s gender and race", "the sounds of the words"],
    "Text context = the publishing story; the part of the larger text such as a newspaper, history, or events translated in it."),

  Q("context", "Which context features the society in which the characters live and in which the author’s text was produced?",
    "Social and socio-cultural context", ["Text context", "Writer’s context", "Dramatic situation"],
    "Social/socio-cultural context = the society of the characters and the society in which the author’s text was produced."),

  Q("context", "Imagery is ______.",
    "creating a picture in the reader’s mind using words that appeal to the senses", ["a pattern of end rhymes", "the repetition of vowels", "the main message of a poem"],
    "Imagery uses sensory details (what we see, hear, feel, smell, and taste) to bring a scene to life in the reader’s mind. (Menoy, 2016)"),

  Q("context", "Imagery that is produced by words appealing to the sense of SIGHT is called ______.",
    "visual imagery", ["auditory imagery", "kinesthetic imagery", "tactile imagery"],
    "Visual imagery → sight."),

  Q("context", "Imagery produced by words appealing to the sense of HEARING is ______.",
    "auditory imagery", ["visual imagery", "kinesthetic imagery", "olfactory imagery"],
    "Auditory imagery → hearing."),

  Q("context", "Imagery that appeals to ACTIONS and MOVEMENT is called ______.",
    "kinesthetic imagery", ["visual imagery", "auditory imagery", "gustatory imagery"],
    "Kinesthetic imagery → actions and movement (e.g., a cyclist racing, a dancer leaping)."),

  Q("context", "Imagery is an important aspect of context and meaning because it ______.",
    "builds context, creates emotion, and reveals meaning", ["removes all emotion from the text", "only decorates the cover", "replaces the need for words"],
    "Builds Context (setting, mood, situation), Creates Emotion (feelings; makes the message more powerful), Reveals Meaning (deeper layers beyond the literal words). “Without imagery, the words are just words.”"),

  Q("context", "Danton Relato Remoto, author of “Padre Faura Witnesses the Execution of Rizal,” was born on ______.",
    "March 25, 1963", ["May 25, 1921", "October 9, 1916", "June 19, 1861"],
    "Remoto was born March 25, 1963; he graduated from Ateneo de Manila University and the University of Stirling in Scotland."),

  Q("context", "Which of these is true of Danton Remoto?",
    "He won the Palanca Award for essay writing and is a three-time CCP awardee for poetry",
    ["He wrote Noli Me Tangere", "He created Darna", "He won the Palanca Award only for fiction"],
    "Remoto is a Filipino writer, essayist, reporter, editor, columnist, and professor; he won first prize at the ASEAN Letter-Writing Contest for young people, a Palanca for essay writing, and three CCP awards for poetry."),

  Q("context", "In “Padre Faura Witnesses the Execution of Rizal,” who is “Pepe”?",
    "José Rizal", ["Andrés Bonifacio", "Padre Faura", "Danton Remoto"],
    "“Pepe” is the nickname of José Rizal. The speaker (Padre Faura) recalls Pepe visiting him at the Ateneo observatory and asking about purgatory."),

  Q("context", "Who is the speaker in Remoto’s poem “Padre Faura Witnesses the Execution of Rizal”?",
    "Padre Faura, Rizal’s former teacher, standing on the roof of the Ateneo municipal",
    ["Rizal himself", "A Spanish soldier", "Danton Remoto speaking as a modern student"],
    "The speaker is Padre Faura, who watches the execution of his former student from the roof on a December morning, feeling grief (“Salt things my eyes”)."),

  Q("context", "In the poem’s ending (“the star itself is already dead”), the shimmering star most likely symbolizes ______.",
    "Rizal — whose light and influence still shine even after his death",
    ["a real star seen by astronomers only", "the Spanish soldiers", "the speaker’s hope of becoming rich"],
    "The distant star still shimmers though it is already dead — a symbol of Rizal, whose ideals continue to shine after his execution. (This is an interpretation based on the poem’s imagery.)")
  ,

  /* ================= L6 · 21ST CENTURY LITERARY GENRES (33) ================= */
  Q("genres", "21st Century Literature refers to ______.",
    "new literary work created within the last decade by contemporary authors, dealing with current themes/issues and reflecting a technological culture",
    ["literature written only before 1900", "oral literature of pre-colonial times", "religious texts of the Spanish era"],
    "21st Century Literature = new literary work created within the last decade; written by contemporary authors who deal with current themes/issues and reflect a technological culture."),

  Q("genres", "Literary adaptation is ______.",
    "adapting a literary source (novel, short story, poem) to another genre or medium such as a film, stage play, or video game",
    ["translating a poem to another language only", "memorizing a story", "writing a review of a novel"],
    "“Same story. New medium. Different experience.”"),

  Q("genres", "“The Witcher” by Andrzej Sapkowski is an example of adaptation from ______.",
    "novel to video game", ["novel to film", "play to stage", "poem to song"],
    "The Witcher novel (Andrzej Sapkowski) → video game (The Witcher: Wild Hunt by CD Projekt Red)."),

  Q("genres", "The word “genre” means ______, and it classifies a literary work by its form, content, and style.",
    "“artistic category or style”", ["“long story”", "“written history”", "“poetic sound”"],
    "A literary genre is a style of writing — the classification of a work by its form, content, and style."),

  Q("genres", "Which are the four popular literary genres shown in the lesson?",
    "Poetry, drama, fiction, and non-fiction", ["Poetry, essay, epic, and legend", "Fable, myth, legend, and riddle", "Comics, manga, blogs, and flash fiction"],
    "Poetry (emotions through rhythm, imagery, figurative language), Drama (live performance, dialogue, action), Fiction (imagined stories), Non-fiction (real events and facts)."),

  Q("genres", "In an ILLUSTRATED NOVEL, approximately how much of the narrative is presented WITHOUT words?",
    "50%", ["10%", "25%", "100%"],
    "Illustrated novel: a story told through text and illustrated images; 50% of the narrative is presented without words, so the reader must interpret the images to comprehend the story completely."),

  Q("genres", "“Trese: Book of Murders” is an illustrated novel written by ______ and illustrated by Kajo Baldisimo.",
    "Budjette Tan", ["Mars Ravelo", "Leo Miranda", "Leonardo Giron"],
    "Trese: Book of Murders — Budjette Tan (writer), Kajo Baldisimo (illustrator). Noli Me Tangere (illustrated) — D.G. Dumaraos & Leo Miranda, illustrated by Leonardo Giron."),

  Q("genres", "“Manga” is ______.",
    "the Japanese word for comics", ["the Korean word for comics", "the Chinese word for comics", "a type of Japanese poem"],
    "Manga is considered an artistic and storytelling style; in the English-speaking world it is used as a generic term for comic books and graphic novels originally published in Japan."),

  Q("genres", "Traditional Japanese manga pages (including panels and text) are read ______.",
    "from right to left", ["from left to right", "from top to bottom only", "in a circular order"],
    "Manga usually follows the traditional Japanese style: pages, panels, and text are read from right to left."),

  Q("genres", "Which manga category targets boys (e.g., Naruto, Bleach, One Piece), and which targets girls (e.g., Sailor Moon)?",
    "Shonen (boys); Shojo (girls)", ["Shojo (boys); Shonen (girls)", "Seinen (boys); Josei (girls)", "Kodomo (boys); Seinen (girls)"],
    "Shonen = boys’ manga; Shojo = girls’ manga; Seinen = men’s manga (Akira); Josei = women’s manga (Loveless, Paradise Kiss); Kodomo = children’s manga (Doraemon, Hello Kitty)."),

  Q("genres", "What is the general Korean term for comics and print cartoons?",
    "Manhwa", ["Manhua", "Anime", "Manga"],
    "Manhwa = Korean comics. Manhua = Chinese comics (China and Greater China region). Anime = a style of Japanese film and television animation, aimed at adults as well as children."),

  Q("genres", "“Ameri-Manga” refers to ______.",
    "comics created by American artists in a manga style", ["manga printed only in the USA", "Japanese comics about America", "Korean comics sold in America"],
    "“Ameri-Manga” is sometimes used for comics created by American artists in a manga style."),

  Q("genres", "Comics in the Philippines, influenced by Japanese anime and manga, developed a style called ______.",
    "“Pinoy Manga”", ["“Ameri-Manga”", "“Manhwa”", "“Text Tula”"],
    "“Comics in the Philippines have developed all kinds of influences, like Japanese anime and manga, which has led to ‘Pinoy Manga’ style.”"),

  Q("genres", "A GRAPHIC NOVEL is ______.",
    "a narrative in comic book format, where the story is conveyed to the reader using a comic form",
    ["a novel with no pictures", "a short poem in text-message form", "a blog written by many authors"],
    "Graphic novels are longer than comic books and cover a wide array of genres and subject matters. Comic books may too, but their subjects are often associated with superheroes or heightened realities."),

  Q("genres", "A comic book or comic magazine consists of comics art in the form of ______.",
    "sequential juxtaposed panels that represent individual scenes", ["long paragraphs of prose", "rhymed couplets", "single full-page photographs"],
    "A comic book is a publication of comics art in sequential juxtaposed panels representing individual scenes (e.g., Archie Comics, Darna)."),

  Q("genres", "TEXT TULA is ______.",
    "mobile phone poetry using short traditional formal verses like Tanaga (7-7-7-7 syllable count with aabb, abab, or abba rhyme schemes)",
    ["a long epic poem recited in public", "a novel told through emails only", "a poem written only on paper"],
    "Text Tula = mobile phone poetry. Tanaga has a 7-7-7-7 syllable count with aabb, abab, or abba rhyme schemes."),

  Q("genres", "TEXT-TALK NOVELS are ______.",
    "blog, email, and IM-format narratives told almost entirely in dialogue simulating social network exchanges",
    ["novels with no dialogue", "poems printed on posters", "stories told through drawings only"],
    "Text-talk novels: stories told almost entirely in dialogue, simulating social network exchanges."),

  Q("genres", "Marcial Custodio Ravelo (Mars Ravelo) is known as the ______.",
    "“King of Pinoy Komiks” and “Father of Filipino Superheroes”", ["“Father of Philippine Poetry”", "“Father of the Revolution”", "“King of Digi-Fiction”"],
    "Mars Ravelo (October 9, 1916 – September 12, 1988) was a Filipino comic book writer, artist, and graphic novelist."),

  Q("genres", "Which of the following is NOT a character created by Mars Ravelo?",
    "Trese", ["Darna", "Captain Barbell", "Dyesebel"],
    "Ravelo created Darna, Captain Barbell, Lastikman, and Dyesebel, plus Kapitan Boom, Varga, Tiny Tony, Dragonna, Flash Bomba, and Maruja (seen in ABS-CBN’s Komiks series, 2008–2009). Trese is by Budjette Tan and Kajo Baldisimo."),

  Q("genres", "SPECULATIVE FICTION is a genre that deals with imaginative concepts such as ______. It is also called the “literature of ______.”",
    "futuristic science and technology, space travel, time travel, parallel universe, and extraterrestrial life; ideas",
    ["historical facts and biographies; memories", "everyday family life; emotions", "religious teachings; faith"],
    "Speculative fiction = imaginative concepts like futuristic science and technology, space travel, time travel, faster-than-light travel, parallel universe, and extraterrestrial life. *Literature of Ideas."),

  Q("genres", "Which sub-genre tells of civilizations the authors deem PERFECT and ideal, such as in “The Giver” by Lois Lowry?",
    "Utopian fiction", ["Dystopian fiction", "Apocalyptic fiction", "Space opera"],
    "Utopian = ideal society (The Giver). Dystopian = problematic societies that satirize government rules, poverty, and oppression (1984 by George Orwell)."),

  Q("genres", "Stories about societies deemed problematic — often satirizing government rules, poverty, and oppression (e.g., “1984” by George Orwell) — belong to ______.",
    "Dystopian fiction", ["Utopian fiction", "Urban fantasy", "Alternate history"],
    "Dystopian fiction depicts a totalitarian government controlling people through fear and surveillance (1984)."),

  Q("genres", "What is the difference between APOCALYPTIC and POST-APOCALYPTIC fiction?",
    "Apocalyptic takes place before and during the disaster; post-apocalyptic takes place after it",
    ["Apocalyptic takes place after the disaster; post-apocalyptic takes place before it", "They are exactly the same", "Apocalyptic is for children; post-apocalyptic is for adults"],
    "Apocalyptic (The Walking Dead, I Am Legend, The Hunger Games) = before and during a huge disaster. Post-apocalyptic (The Road, Mad Max, A Quiet Place) = after, focusing on survivors."),

  Q("genres", "Which sub-genre is a play on the term “soap opera” — sci-fi stories set in outer space centering on conflict, romance, and adventure?",
    "Space opera fiction", ["Urban fantasy fiction", "Supernatural fiction", "Utopian fiction"],
    "Space opera examples: Star Wars (conflict), The Mazerunner (romance), Dune (adventure)."),

  Q("genres", "Fantasy stories set in an urban setting in the real world but operating under magical rules are called ______.",
    "urban fantasy fiction", ["supernatural fiction", "sci-fi fantasy fiction", "space opera fiction"],
    "Urban fantasy examples: The Dresden Files (Jim Butcher), Shadow and Bone (Leigh Bardugo), The Mortal Instruments (Cassandra Clare)."),

  Q("genres", "Stories that focus on true historical events but are written as if they unfolded with DIFFERENT outcomes are ______.",
    "alternate history fiction", ["utopian fiction", "post-apocalyptic fiction", "superhero fiction"],
    "Alternate history: The Man in the High Castle (Philip K. Dick), 11/22/63 (Stephen King), The Plot Against America (Philip Roth). Guiding idea: “What if history had taken a different turn?”"),

  Q("genres", "DIGI-FICTION is also called ______ because it combines three media.",
    "Triple Media Literature — book, movie/video, and internet website", ["Double Media Literature — book and poster", "Single Media Literature — website only", "Mixed Media Literature — paint and sculpture"],
    "Digi-fiction = Triple Media Literature (book + movie/video + internet website). Examples shown: Skeleton Creek, Level 26, Ghost in the Machine."),

  Q("genres", "HYPER POETRY is ______.",
    "digital poetry that uses links and hypertext markup, usually found online",
    ["poetry that is read aloud in a stadium", "poetry limited to six words", "poetry written only by hand"],
    "Hyper poetry can have set words/phrases/lines presented in variable order, or parts of the poem that move and transform. It is usually found online."),

  Q("genres", "Flash fiction is a style of fictional literature of ______. An example is Ernest Hemingway’s six-word story about baby shoes.",
    "extreme brevity", ["extreme length", "only rhymed verse", "pure non-fiction"],
    "Also called sudden fiction, micro-stories/micro fiction, postcard fiction, nano tales, and short-short stories. Example: “For sale: baby shoes, never worn.” — Ernest Hemingway."),

  Q("genres", "DOODLE FICTION is a literary presentation where the author incorporates ______ in place of the traditional font.",
    "doodle writing, drawings, and handwritten graphics", ["emoji only", "audio recordings", "videos and website links"],
    "Doodle fiction (e.g., Diary of a Wimpy Kid, Dork Diaries, Danny’s Doodles): the drawings enhance the story, often adding humorous elements that would be missing if the illustrations were omitted."),

  Q("genres", "A BLOG is ______.",
    "a weblog — a website containing short articles called posts that are changed regularly",
    ["a printed newspaper", "a single long poem", "a stage play"],
    "Some blogs are written by one person (own opinions, interests, experiences); others by different people."),

  Q("genres", "CHICK LIT (Chick Literature) is genre fiction that ______.",
    "addresses issues of modern womanhood, often humorously and lightheartedly", ["tells of space travel and aliens", "records true historical events", "teaches grammar rules"],
    "Examples shown: Meg Cabot, Sophie Kinsella, Liane Moriarty, Lauren Weisberger (The Devil Wears Prada)."),

  Q("genres", "CREATIVE NON-FICTION (also literary non-fiction or narrative non-fiction) presents true events, people, and experiences ______.",
    "using literary techniques such as vivid descriptions, strong character development, and engaging narrative style",
    ["invented entirely from the imagination", "only through statistics and tables", "in the form of a mobile phone poem"],
    "Contrasts with technical writing or journalism, which is rooted in accurate fact but not primarily written in service of craft. Examples: Educated, The Glass Castle, Into the Wild, I Am Malala, Wild.")
];

/* ---------- STUDY NOTES (self-made notes from the lessons) ---------- */
const NOTES = [
  {
    title: "L4 · Elements of Poetry",
    topic: "poetry",
    items: [
      "<b>Poetry</b> is often described as <mark>“prose bewitched”</mark> (Mina Roy) and <mark>“life distilled”</mark> through words and language (Gwendolyn Brooks).",
      "Poetry works via <mark>suggestion</mark> (hints at a meaning), <mark>implication</mark> (suggests something beyond the obvious), and <mark>ambiguity</mark> (more than one possible meaning) rather than literal communication.",
      "Poems are primarily relished as <mark>words</mark> — the building blocks: meticulous <b>selection</b>, <b>arrangement</b>, and calculated <b>interplay</b>.",
      "<b>General types:</b> <mark>Lyric</mark> (emotions/feelings of the poet; short, simple) · <mark>Narrative</mark> (series of events) · <mark>Dramatic</mark> (imaginary character addressing a silent imaginary character).",
      "<b>Form &amp; structure:</b> <mark>Line</mark> (single row of words) · <mark>Stanza</mark> (group of lines: couplet 2, tercet 3, quatrain 4) · <mark>Enjambment</mark> (thought continues to next line without strong punctuation) · <mark>Line break</mark> (where a line ends — pause, emphasis, surprise, double meaning).",
      "<b>Sound &amp; flow:</b> <mark>Rhyme</mark> (similar sounds, often at line ends) · <mark>Rhyme scheme</mark> (pattern of end rhymes: ABAB, AABB) · <mark>Meter</mark> (regular pattern of stressed/unstressed syllables; iambic pentameter = 5 feet per line) · <mark>Rhythm</mark> (beat/flow of language).",
      "<b>Sound devices:</b> <mark>Alliteration</mark> (beginning consonant sounds — <i>wild winds whistle</i>) · <mark>Assonance</mark> (vowel sounds — <i>slow road home</i>) · <mark>Consonance</mark> (consonant sounds within/at end — <i>blank/think</i>) · <mark>Onomatopoeia</mark> (words that imitate sounds — <i>buzz, splash, bang, hiss</i>).",
      "<b>Imagery &amp; sensory details:</b> Visual (sight) · Auditory (sound) · Olfactory (smell) · Gustatory (taste) · Tactile (touch). Imagery makes abstract ideas more <mark>vivid</mark>.",
      "<b>Figurative language</b> — <mark>Simile</mark> (like/as; “I wandered lonely as a cloud”) · <mark>Metaphor</mark> (direct comparison; “Hope is the thing with feathers”) · <mark>Personification</mark> (human qualities to nonhuman things) · <mark>Hyperbole</mark> (extreme exaggeration) · <mark>Metonymy</mark> (name of something closely associated; “the pen is mightier than the sword”) · <mark>Synecdoche</mark> (part represents whole; “All hands on deck!”) · <mark>Apostrophe</mark> (addressing an absent/dead/abstract/non-human thing; “O wild West Wind”) · <mark>Oxymoron</mark> (two contradictory words together; “sweet sorrow”) · <mark>Paradox</mark> (seems contradictory but holds a deeper truth; “The child is father of the man”).",
      "<b>Tone</b> = speaker’s attitude toward the subject (how the <u>speaker</u> feels). <b>Mood</b> = feeling/atmosphere created in the <u>reader</u>.",
      "<b>Theme</b> = central idea, insight, or message — <mark>NOT simply the topic</mark>. (Topic: friendship → Theme: true friendship can remain strong during difficult times.) Identify by repeated ideas/images, the speaker’s experience or conflict, and what the poem suggests about life/people.",
      "<b>Speaker/Persona</b> = fictitious character whose voice we hear. <b>Dramatic situation</b> = the moment (lyric) or series of events (narrative) in which the speaker speaks (e.g., “The Raven” by Edgar Allan Poe).",
      "<b>Diction</b> = choice of words — power lies in <mark>meaning, sound, placement</mark>. <b>Irony</b> = saying one thing but meaning another."
    ]
  },
  {
    title: "L4 · Identifying Representative Texts from the Regions",
    topic: "region",
    items: [
      "<b>Objectives:</b> write a close analysis and critical interpretation of literary texts; show a sense of adaptability of Philippine literature.",
      "<mark>Imagery</mark> = a poetic element that creates a picture/mental image in the reader’s mind using figurative language; represents objects, places, ideas, or actions that appeal to the senses.",
      "Philippine literary masterpieces are rooted in the <b>diverse cultural heritage</b> of Filipinos and speak of <b>collective experiences</b> (difficulties, triumphs, struggles, successes, armed conflicts, bloodless revolutions).",
      "<b>Ilocos Region (Region 1):</b> northwest Luzon; provinces — <mark>Ilocos Norte, Ilocos Sur, La Union, Pangasinan</mark>. Bordered west by the <mark>South China Sea</mark>, east by the Cordillera Administrative Region, northeast/southeast by Cagayan Valley, south by Central Luzon. Inhabitants concentrate along a <mark>narrow coastal plain</mark>; heavy rains and violent typhoons are common.",
      "<b>“Gabu”</b> by <mark>Carlos A. Angeles</mark> — a coastline in Ilocos battered by the restless, furious sea (“battering restlessness of the sea… tidal fury”).",
      "<b>Carlos A. Angeles:</b> born May 25, 1921, Tacloban City, Leyte · graduated Rizal High School 1938 · 1950–58 Chief of the Philippine Bureau of International News Services · 1958–80 Press Assistant · PR manager of PanAm Airlines · board of directors of International PEN · lived in the USA since 1978.",
      "<b>“A Stun of Jewels”</b> (1963) — 17 poems; <mark>first prize, Carlos Palanca Memorial Awards (1964)</mark>, the first year poetry was considered; also won the <mark>Republic Cultural Heritage Award for Literature</mark>."
    ]
  },
  {
    title: "L5 · Context and Text Meaning",
    topic: "context",
    items: [
      "<b>Objectives:</b> identify words, ideas, structure, and purpose of the text · explore social and socio-cultural contexts · appreciate the importance of literary context to one’s own life experiences.",
      "<mark>Context</mark> originates from the notion of <b>weaving together</b>; the circumstances that form the setting of events, statements, or ideas so they can be fully understood and assessed.",
      "<mark>Writer’s (Reader’s) context</mark> — the writer’s life, values, assumptions, gender, race, sexual orientation, and political and economic issues.",
      "<mark>Text context</mark> — its publishing story; part of a larger text such as a newspaper, history, or events.",
      "<mark>Social and socio-cultural context</mark> — the society in which the characters live and in which the author’s text was produced.",
      "<mark>Imagery</mark> — creating a picture in the reader’s mind with words that appeal to the senses (Menoy, 2016). It <b>builds context</b>, <b>creates emotion</b>, and <b>reveals meaning</b>. “Without imagery, the words are just words.”",
      "<b>Types:</b> <mark>Visual</mark> (sight) · <mark>Auditory</mark> (hearing) · <mark>Kinesthetic</mark> (actions and movement).",
      "<b>Danton Relato Remoto</b> — born March 25, 1963; Ateneo de Manila University &amp; University of Stirling (Scotland); writer, essayist, reporter, editor, columnist, professor; first prize ASEAN Letter-Writing Contest; Palanca for essay writing; three-time CCP awardee for poetry.",
      "<b>“Padre Faura Witnesses the Execution of Rizal”</b> — Padre Faura (speaker) recalls “Pepe” (Rizal) asking about purgatory; on a December morning he sees Pepe between the soldiers with raised Mausers; the star that still shimmers though already dead is a symbol of Rizal’s lasting light."
    ]
  },
  {
    title: "L6 · 21st Century Literary Genres",
    topic: "genres",
    items: [
      "<b>MELC:</b> compare and contrast 21st century genres with earlier genres/periods, citing elements, structures, and traditions.",
      "<mark>21st Century Literature</mark> — new literary work created within the last decade by contemporary authors; current themes/issues; reflects a technological culture.",
      "<mark>Literary adaptation</mark> — adapting a literary source (novel, short story, poem) to another genre/medium (film, stage play, video game). Examples: Hunger Games (2012), Love, Simon (2018), The Giver (2014), Romeo and Juliet (stage), The Witcher (video game).",
      "<mark>Literary genre</mark> — “artistic category or style”; classification by form, content, and style → poetry, drama, fiction, non-fiction.",
      "<mark>Illustrated novel</mark> — story through text and images; <b>50%</b> of the narrative is <b>without words</b>; the reader must <b>interpret</b> the images to <b>comprehend</b> the story. (Noli Me Tangere illustrated by Leonardo Giron; Trese: Book of Murders by Budjette Tan, illustrated by Kajo Baldisimo.)",
      "<mark>Manga</mark> — Japanese word for comics; read right to left. Shonen (boys) · Shojo (girls) · Seinen (men) · Josei (women) · Kodomo (children). <b>Manhwa</b> = Korean comics · <b>Manhua</b> = Chinese comics · <b>Anime</b> = Japanese animation · <b>Ameri-Manga</b> = American comics in manga style · <b>Pinoy Manga</b> = Philippine comics influenced by anime/manga.",
      "<mark>Graphic novel</mark> — narrative in comic book format; longer than comic books; wide array of genres. <mark>Comic book</mark> — sequential juxtaposed panels representing individual scenes; subjects often superheroes or heightened realities.",
      "<mark>Text Tula</mark> — mobile phone poetry using short formal verses like <b>Tanaga</b> (7-7-7-7; aabb, abab, abba). <mark>Text-talk novels</mark> — blog, email, IM-format narratives told in dialogue simulating social network exchanges.",
      "<b>Mars Ravelo</b> (Marcial Custodio Ravelo, 1916–1988) — “King of Pinoy Komiks,” “Father of Filipino Superheroes.” Created Darna, Captain Barbell, Lastikman, Dyesebel, Kapitan Boom, Varga, Tiny Tony, Dragonna, Flash Bomba, Maruja.",
      "<mark>Speculative fiction</mark> — imaginative concepts (futuristic science/tech, space travel, time travel, FTL travel, parallel universe, extraterrestrial life); the “literature of ideas.” Sub-genres: Science Fiction · Sci-fi Fantasy · Supernatural · Space Opera · Urban Fantasy · Utopian (The Giver) · Dystopian (1984) · Apocalyptic (before/during disaster) · Post-apocalyptic (after) · Alternate History · Superhero.",
      "<mark>Digi-fiction</mark> — Triple Media Literature: book + movie/video + internet website. <mark>Hyper poetry</mark> — digital poetry with links and hypertext markup; found online.",
      "<mark>Flash fiction</mark> — extreme brevity (sudden fiction, micro-stories, postcard fiction, nano tales, short-short stories); e.g., Hemingway’s “For sale: baby shoes, never worn.”",
      "<mark>Doodle fiction</mark> — doodle writing, drawings, handwritten graphics instead of traditional font; adds humor. <mark>Blog</mark> — weblog; short articles called posts, changed regularly. <mark>Chick lit</mark> — modern womanhood, humorous and lighthearted. <mark>Creative non-fiction</mark> — true events told with literary techniques."
    ]
  }
];

/* ---------- STATE ---------- */
let pool = [];          // active questions for this run
let idx = 0;            // current question index
let score = 0;
let answered = false;
let missed = [];        // questions answered wrong
let selectedTopics = new Set(Object.keys(TOPICS));

/* ---------- HELPERS ---------- */
const $ = (id) => document.getElementById(id);
const LETTERS = ["A", "B", "C", "D"];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function show(screenId) {
  ["screen-home", "screen-quiz", "screen-result", "screen-notes"].forEach((id) => {
    $(id).classList.toggle("hidden", id !== screenId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildItem(src) {
  const options = shuffle([src.correct, ...src.wrong]);
  return { ...src, options, answerIndex: options.indexOf(src.correct) };
}

/* ---------- HOME ---------- */
function renderTopicChips() {
  const wrap = $("topic-chips");
  wrap.innerHTML = "";
  Object.entries(TOPICS).forEach(([key, t]) => {
    const count = BANK.filter((q) => q.topic === key).length;
    const label = document.createElement("label");
    label.className = "chip" + (selectedTopics.has(key) ? " on" : "");
    label.innerHTML = `<input type="checkbox" ${selectedTopics.has(key) ? "checked" : ""} />
      <span>${t.label}</span><small>${count}</small>`;
    label.querySelector("input").addEventListener("change", (e) => {
      if (e.target.checked) selectedTopics.add(key); else selectedTopics.delete(key);
      label.classList.toggle("on", e.target.checked);
      updateStartInfo();
    });
    wrap.appendChild(label);
  });
  updateStartInfo();
}

function updateStartInfo() {
  const n = BANK.filter((q) => selectedTopics.has(q.topic)).length;
  $("start-info").textContent = n
    ? `${n} question${n > 1 ? "s" : ""} selected`
    : "Select at least one lesson";
  $("btn-start").disabled = n === 0;
}

/* ---------- QUIZ ---------- */
function startQuiz(questions) {
  pool = questions.map(buildItem);
  if ($("opt-shuffle").checked) pool = shuffle(pool);
  idx = 0; score = 0; missed = [];
  show("screen-quiz");
  renderQuestion();
}

function renderQuestion() {
  const item = pool[idx];
  answered = false;
  $("q-count").textContent = `Question ${idx + 1} of ${pool.length}`;
  $("q-score").textContent = `Score: ${score}`;
  $("progress-bar").style.width = `${(idx / pool.length) * 100}%`;
  $("q-topic").textContent = TOPICS[item.topic].label;
  $("q-text").textContent = item.q;

  const list = $("options");
  list.innerHTML = "";
  item.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="letter">${LETTERS[i]}</span><span class="otext"></span>`;
    btn.querySelector(".otext").textContent = opt;
    btn.addEventListener("click", () => choose(i));
    list.appendChild(btn);
  });

  $("feedback").classList.add("hidden");
  $("feedback").className = "feedback hidden";
  $("btn-next").classList.add("hidden");
}

function choose(i) {
  if (answered) return;
  answered = true;
  const item = pool[idx];
  const buttons = [...document.querySelectorAll(".option")];
  const right = i === item.answerIndex;

  buttons.forEach((b, k) => {
    b.disabled = true;
    if (k === item.answerIndex) b.classList.add("correct");
    else if (k === i) b.classList.add("wrong");
    else b.classList.add("dim");
  });

  if (right) score++; else missed.push(item);
  $("q-score").textContent = `Score: ${score}`;

  const fb = $("feedback");
  fb.className = "feedback " + (right ? "good" : "bad");
  fb.innerHTML = `
    <div class="fb-title">${right ? "✔ Correct!" : "✘ Not quite."}</div>
    ${right ? "" : `<div class="fb-answer"><b>Correct answer:</b> ${LETTERS[item.answerIndex]}. </div>`}
    <div class="fb-exp"><b>Why:</b> </div>`;
  if (!right) fb.querySelector(".fb-answer").appendChild(document.createTextNode(item.correct));
  fb.querySelector(".fb-exp").appendChild(document.createTextNode(item.exp));

  const next = $("btn-next");
  next.textContent = idx === pool.length - 1 ? "See Results →" : "Next Question →";
  next.classList.remove("hidden");
  fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextQuestion() {
  if (idx < pool.length - 1) { idx++; renderQuestion(); }
  else showResults();
}

/* ---------- RESULTS ---------- */
function showResults() {
  const total = pool.length;
  const pct = Math.round((score / total) * 100);
  $("progress-bar").style.width = "100%";
  $("r-score").textContent = `${score} / ${total}`;
  $("r-pct").textContent = `${pct}%`;
  let msg = "Keep reviewing — read the notes and try again!";
  if (pct >= 90) msg = "Outstanding! You’re exam-ready. 🌟";
  else if (pct >= 75) msg = "Great job! Just polish the missed items. 👍";
  else if (pct >= 50) msg = "Good start — review the notes on your weak topics.";
  $("r-msg").textContent = msg;

  const box = $("r-missed");
  box.innerHTML = "";
  if (missed.length === 0) {
    box.innerHTML = `<p class="perfect">Perfect run — nothing to review! 🎉</p>`;
    $("btn-retry-missed").classList.add("hidden");
  } else {
    $("btn-retry-missed").classList.remove("hidden");
    const h = document.createElement("h3");
    h.textContent = `Review your ${missed.length} missed question${missed.length > 1 ? "s" : ""}`;
    box.appendChild(h);
    missed.forEach((m, n) => {
      const d = document.createElement("div");
      d.className = "missed-card";
      d.innerHTML = `<div class="m-topic"></div><div class="m-q"></div>
        <div class="m-a"><b>Correct answer:</b> <span></span></div>
        <div class="m-e"><b>Why:</b> <span></span></div>`;
      d.querySelector(".m-topic").textContent = TOPICS[m.topic].label;
      d.querySelector(".m-q").textContent = `${n + 1}. ${m.q}`;
      d.querySelector(".m-a span").textContent = m.correct;
      d.querySelector(".m-e span").textContent = m.exp;
      box.appendChild(d);
    });
  }
  show("screen-result");
}

/* ---------- NOTES ---------- */
function renderNotes() {
  const wrap = $("notes-list");
  wrap.innerHTML = "";
  NOTES.forEach((sec, i) => {
    const det = document.createElement("details");
    det.className = "note-sec";
    if (i === 0) det.open = true;
    const sum = document.createElement("summary");
    sum.textContent = sec.title;
    det.appendChild(sum);
    const ul = document.createElement("ul");
    sec.items.forEach((html) => {
      const li = document.createElement("li");
      li.innerHTML = html; // trusted, self-authored content
      ul.appendChild(li);
    });
    det.appendChild(ul);
    wrap.appendChild(det);
  });
}

/* ---------- EVENTS ---------- */
function init() {
  renderTopicChips();
  renderNotes();
  $("total-count").textContent = BANK.length;

  $("btn-start").addEventListener("click", () => {
    startQuiz(BANK.filter((q) => selectedTopics.has(q.topic)));
  });
  $("btn-next").addEventListener("click", nextQuestion);
  $("btn-quit").addEventListener("click", () => {
    if (confirm("Quit this attempt and go back home?")) show("screen-home");
  });
  $("btn-restart").addEventListener("click", () => startQuiz(BANK.filter((q) => selectedTopics.has(q.topic))));
  $("btn-retry-missed").addEventListener("click", () => startQuiz(missed.slice()));
  $("btn-home").addEventListener("click", () => show("screen-home"));
  $("btn-notes").addEventListener("click", () => show("screen-notes"));
  $("btn-notes-back").addEventListener("click", () => show("screen-home"));
  $("btn-notes-quiz").addEventListener("click", () => show("screen-home"));

  document.addEventListener("keydown", (e) => {
    if ($("screen-quiz").classList.contains("hidden")) return;
    const k = e.key.toLowerCase();
    if (!answered && ["a", "b", "c", "d", "1", "2", "3", "4"].includes(k)) {
      const n = "abcd".includes(k) ? "abcd".indexOf(k) : Number(k) - 1;
      if (n < pool[idx].options.length) choose(n);
    } else if (answered && (e.key === "Enter" || e.key === " " || e.key === "ArrowRight")) {
      e.preventDefault();
      nextQuestion();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);

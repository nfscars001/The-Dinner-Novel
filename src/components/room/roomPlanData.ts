export interface Hotspot {
    id: string;
    title: string;
    teaser: string;
    cta: string;
    href: string;
    x?: number;
    y?: number;
}


export type RoomPlanKey = 'dining_room' | 'jasper' | 'annalie' | 'tibor';

export interface SceneCard {
    id: string;
    title: string;
    text: string;
    whisper?: string;
}

export interface RoomPlanData {
    id: RoomPlanKey;
    label: string;
    microSubtitle?: string;
    hotspots: Hotspot[];
    roomCtas?: {
        label: string;
        href: string;
        primary?: boolean;
    }[];
    sceneCards?: SceneCard[];
}

export const ROOM_PLAN_DATA: Record<RoomPlanKey, RoomPlanData> = {
    dining_room: {
        id: 'dining_room',
        label: 'The Dining Room',
        hotspots: [
            {
                id: 'gallery-wall',
                title: 'Jasper’s Gallery Wall',
                teaser: '“Where words ran out, paint kept speaking. Step into a private exhibit—each piece a chapter you can feel.”',
                cta: 'Enter Jasper’s Gallery',
                href: '/jasper-gallery',
                x: 15,
                y: 20
            },
            {
                id: 'back-hallway',
                title: 'The Back Hallway',
                teaser: '“Behind every beautiful dinner is a real room with real light. Walk the places that fed the fiction.”',
                cta: 'See Behind the Scenes',
                href: '/behind-the-scenes',
                x: 82,
                y: 23
            },
            {
                id: 'bar',
                title: 'The Bar',
                teaser: '“A line on the rocks. A quote with an aftertaste. Send a secret note from the story—like sliding a napkin across the table.”',
                cta: 'Create a Postcard',
                href: '/postcards',
                x: 50,
                y: 45
            },
            {
                id: 'host-stand',
                title: 'The Host Stand',
                teaser: '“Reserve a seat at the table. Get love letters from the story world—soft updates, exclusive fragments, and first looks behind the curtain.”',
                cta: 'Reserve a Seat',
                href: '/#newsletter',
                x: 50,
                y: 84
            }
        ],
        roomCtas: []
    },
    jasper: {
        id: 'jasper',
        label: 'Jasper’s Studio',
        microSubtitle: '“Where the night turns into color.”',
        hotspots: [
            {
                id: 'sketchbook',
                title: 'Sketchbook — Drafting Table',
                teaser: '“A clean page. A dull pencil. A first line that refuses to be perfect.”',
                cta: 'View Artifact',
                href: '#',
                x: 25,
                y: 60
            },
            {
                id: 'paint_cuff',
                title: 'Paint Cuff — Easel',
                teaser: '“Evidence of nights that ended in color.”',
                cta: 'View Artifact',
                href: '#',
                x: 56,
                y: 17
            },
            {
                id: 'pencil_stub',
                title: 'Family Picture — Drafting Table',
                teaser: '“People who love you the most, even they are far”',
                cta: 'View Artifact',
                href: '#',
                x: 20,
                y: 58
            },
            {
                id: 'gallery_invite',
                title: 'Gallery Invite — Supplies Wall',
                teaser: '“A small rectangle that quietly changed his future.”',
                cta: 'View Artifact',
                href: '#',
                x: 80,
                y: 25
            },
            {
                id: 'coffee_ring',
                title: "Annalie's Hair Tie — Supply Shelf",
                teaser: "A proof that she was in Jasper's life.",
                cta: 'View Artifact',
                href: '#',
                x: 82,
                y: 50
            },
            {
                id: 'boarding_pass',
                title: 'Boarding Pass — Canvases',
                teaser: '“A reminder that love once looked like departure.”',
                cta: 'View Artifact',
                href: '#',
                x: 12,
                y: 20
            },
            {
                id: 'starry_night',
                title: 'Starry Serenade — Upper Wall',
                teaser: '“Swirls of cobalt and the first spark of inspiration. The work that taught him how to see the dark.”',
                cta: 'View Artifact',
                href: '#',
                x: 25,
                y: 12
            },
            {
                id: 'sweet_dreams',
                title: 'Sweet Dreams — Upper Wall',
                teaser: '“The final deep exhale of a long series. A completed peace hanging where he can always reach it.”',
                cta: 'View Artifact',
                href: '#',
                x: 88,
                y: 12
            }

        ],
        roomCtas: [],

        sceneCards: [
            {
                id: 'desk-lamp',
                title: 'The Desk Lamp',
                text: '“The lamp keeps a small circle of warmth alive on Jasper’s desk. Outside that circle, the room is all midnight—quiet enough to hear his thoughts rearranging themselves. He opens the sketchbook like it’s a door he’s allowed to walk through. No speeches. No grand declarations. Just a line, then another—proof he can still begin. The city hums beyond the window, distant and indifferent, but the pencil isn’t. It stays loyal to his hand. Tonight, he doesn’t chase perfection. He only asks for honesty.”',
                whisper: 'A beginning doesn’t need applause. It needs a page.'
            },
            {
                id: 'canvas-wall',
                title: 'The Canvas Wall',
                text: '“Paintings lean against the wall like witnesses. Some are unfinished, some are quiet victories, some are storms caught mid-breath. Jasper stands in front of them the way you stand in front of your own past: careful, curious, a little afraid of what you’ll recognize. He doesn’t hang them to impress anyone. He keeps them close because they remind him of a simple fact—he survived the days that tried to erase him. Each brushstroke is a stitch. Each color is a refusal to disappear.”',
                whisper: 'Art isn’t decoration. It’s evidence.'
            },
            {
                id: 'unsent-line',
                title: 'The Unsent Line',
                text: '“There’s a sentence in him that keeps forming and stopping, like a train that never arrives at the platform. He writes it down, crosses it out, writes it again—changing only one word each time, as if the right word might soften the memory. The page collects small failures, and somehow that feels comforting. Not everything needs to be finished tonight. Not every truth needs to be delivered. He closes the notebook gently, the way you cover a sleeping thing, and lets the silence hold what he can’t.”',
                whisper: 'Some words are meant to wait.'
            }
        ]
    },
    annalie: {
        id: 'annalie',
        label: 'Annalie’s Apartment',
        microSubtitle: '“Warmth lives in the details.”',
        hotspots: [
            {
                id: 'playlist_note',
                title: 'Playlist Note — Bookshelf',
                teaser: '“A small list of songs that knows her better than most people do.”',
                cta: 'View Artifact',
                href: '#',
                x: 88,
                y: 18

            },
            {
                id: 'chipped_mug',
                title: 'Chipped Mug — Kitchenette',
                teaser: '“Her favorite one. Not perfect. Still chosen. Still warm.”',
                cta: 'View Artifact',
                href: '#',
                x: 14,
                y: 15

            },
            {
                id: 'scarf_by_door',
                title: 'Scarf by Door — Entryway',
                teaser: '“A soft thing waiting—like she always expects you to return.”',
                cta: 'View Artifact',
                href: '#',
                x: 85,
                y: 70
            },
            {
                id: 'tiny_paint_set',
                title: 'Tiny Paint Set — Window',
                teaser: '“Watercolors. Rarely used, but kept just in case.”',
                cta: 'View Artifact',
                href: '#',
                x: 50,
                y: 8
            },
            {
                id: 'movie_stub',
                title: 'Movie Stub — Sofa',
                teaser: '“Two hours of escape… and one line she quoted for days.”',
                cta: 'View Artifact',
                href: '#',
                x: 50,
                y: 65
            },
            {
                id: 'handwritten_todo',
                title: 'Todo List — Kitchenette',
                teaser: '“A list that tries to be responsible—then slips in a joke.”',
                cta: 'View Artifact',
                href: '#',
                x: 18,
                y: 22

            },
            {
                id: 'violin_case',
                title: 'Violin Case — Entryway',
                teaser: '“A silent song waiting to be played. It’s been months, but she still keeps the bow tightened.”',
                cta: 'View Artifact',
                href: '#',
                x: 8,
                y: 85
            },
            {
                id: 'dream_napkin',
                title: 'Studio Dream Napkin — Bookshelf',
                teaser: '“A floorplan sketched on a napkin, where the dream started.”',
                cta: 'View Artifact',
                href: '#',
                x: 90,
                y: 33

            },
            {
                id: 'ny_photo',
                title: 'New York Trip Photo — Bookshelf',
                teaser: '“Blury, laughing, and absolutely soaked from a sudden storm. The kind of memory that stays warm.”',
                cta: 'View Artifact',
                href: '#',
                x: 92,
                y: 48

            }
        ],
        roomCtas: [],

        sceneCards: [
            {
                id: 'welcome-light',
                title: 'The Welcome Light',
                text: '“Annalie’s apartment doesn’t shout. It glows. Warm light spills from a lamp in the corner like an invitation that expects nothing in return. A mug sits on the counter—imperfect, chipped, still chosen. She moves through the space with the calm confidence of someone who has learned to make peace on purpose. There’s humor here, too—small, bright, tucked into the ordinary. The room feels like a soft answer to a hard day. Not a rescue. A place to breathe.”',
                whisper: 'Warmth is a craft, not an accident.'
            },
            {
                id: 'melody-corner',
                title: 'The Melody Corner',
                text: '“In the quiet corner, she keeps a small ritual: music, a list of songs, a habit that steadies her hands. It’s not about performing. It’s about returning to herself. A note is scribbled on paper—half reminder, half secret—while the city outside taps its impatient rhythm on the window. Annalie smiles at something only she understands. The kind of smile that says: yes, life is heavy… but it’s also beautiful, if you know where to look.”',
                whisper: 'Some joy is private, and that’s why it lasts.'
            },
            {
                id: 'small-brave-things',
                title: 'The Small Brave Things',
                text: '“Kindness, for her, is not softness. It’s a decision she makes again and again. She folds a scarf by the door like she’s saving warmth for later. She writes a to-do list, tries to be responsible, then sneaks in a joke—because laughter is its own kind of courage. Annalie has learned that the world won’t always hold you gently, so she practices being gentle anyway. Not because she’s naïve. Because she’s strong.”',
                whisper: 'Tender isn’t weak. It’s chosen.'
            }
        ]
    },
    tibor: {
        id: 'tibor',
        label: 'Tibor’s Office',
        microSubtitle: '“A steady voice when the world gets loud.”',
        hotspots: [
            {
                id: 'worn_notebook',
                title: 'Worn Notebook — Oak Desk',
                teaser: '“Advice written in margins. Patience written in ink.”',
                cta: 'View Artifact',
                href: '#',
                x: 38,
                y: 18

            },
            {
                id: 'chewed_pen',
                title: 'Chewed Pen — Oak Desk',
                teaser: '“The kind of pen used when someone listens more than they speaks.”',
                cta: 'View Artifact',
                href: '#',
                x: 50,
                y: 15

            },
            {
                id: 'desk_clock',
                title: 'Desk Clock — Armchair Area',
                teaser: '“Time, measured gently—never rushed, never wasted.”',
                cta: 'View Artifact',
                href: '#',
                x: 80,
                y: 25
            },
            {
                id: 'framed_photo',
                title: 'Framed Photo — Filing Files',
                teaser: '“A quiet reminder that life exists outside the storm.”',
                cta: 'View Artifact',
                href: '#',
                x: 10,
                y: 15
            },
            {
                id: 'paperweight',
                title: 'Paperweight — Oak Desk',
                teaser: '“A small anchor for days that want to drift.”',
                cta: 'View Artifact',
                href: '#',
                x: 62,
                y: 25

            },
            {
                id: 'folded_note',
                title: 'Folded Note — Library Wall',
                teaser: '“Not a task. Not an appointment. A doorway to being okay.”',
                cta: 'View Artifact',
                href: '#',
                x: 50,
                y: 70
            }
        ],
        roomCtas: [],

        sceneCards: [
            {
                id: 'check-in',
                title: 'The Check-In',
                text: '“Tibor doesn’t ask how work is going first. He asks how Jasper is. The question lands softly, but it lands. The office is quiet in a way that feels safe—no rushing, no performance required. Tibor listens like it’s a skill he’s practiced for years: with patience, with presence, with eyes that don’t flinch at hard truths. He doesn’t try to fix everything in one sentence. He just makes room for the breath Jasper forgot he was holding.”',
                whisper: 'A real friend notices the silence.'
            },
            {
                id: 'grounding-truth',
                title: 'The Grounding Truth',
                text: '“On Tibor’s desk, there’s a worn notebook—pages full of reminders that progress is usually boring, and that’s okay. He speaks in steady truths, the kind you can carry: do the next right thing; eat; sleep; show up. No dramatic speeches. Just a calm map back to yourself. He makes rebuilding sound possible, not poetic—practical. And somehow, that practicality feels like hope. Jasper leaves each conversation a little less tangled.”',
                whisper: 'Hope can be quiet. It can still be real.'
            },
            {
                id: 'gentle-dare',
                title: 'The Gentle Dare',
                text: '“Before Jasper leaves, Tibor gives him a small dare, disguised as a suggestion. Call someone. Paint something. Go outside, even if it’s only for ten minutes. Not to become a new person overnight—just to prove the world is still reachable. Tibor smiles like he knows Jasper will resist, and like he knows Jasper will do it anyway. The kind of dare that isn’t pressure. It’s belief.”',
                whisper: 'Sometimes love looks like a push toward life.'
            }
        ]
    }
};

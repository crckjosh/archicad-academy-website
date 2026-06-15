export type Level = 'Beginner' | 'Intermediate' | 'Advanced'

export type Instructor = {
  id: string
  name: string
  title: string
  avatar: string
  bio: string
  students: number
  courses: number
  rating: number
}

export type Lesson = {
  id: string
  title: string
  duration: string
  preview?: boolean
}

export type Module = {
  id: string
  title: string
  lessons: Lesson[]
}

export type Course = {
  slug: string
  title: string
  subtitle: string
  thumbnail: string
  instructor: string
  level: Level
  rating: number
  reviews: number
  students: number
  duration: string
  lessons: number
  price: number
  category: string
  bestseller?: boolean
  objectives: string[]
  requirements: string[]
  curriculum: Module[]
}
export const instructors: Record<string, Instructor> = {
'kelvin-mwangi': {
id: 'kelvin-mwangi',
name: 'Kelvin Mwangi',
title: 'ArchiCAD Instructor & BIM Specialist',
avatar: '/kelvin.png',
bio: 'Kelvin Mwangi is a Construction Technologist and BIM Specialist passionate about teaching ArchiCAD, architectural design, construction documentation, rendering, and BIM workflows. Through ArchiCAD Academy, he helps students and professionals master industry-standard skills from beginner to advanced level.',
students: 12400,
courses: 24,
rating: 4.9,
},
  'kelvin-mwang': {
    id: 'kelvin-mwangi',
    name: 'Kelvin Mwangi',
    title: 'Architectural Visualizer',
    avatar: '/instructor-david.png',
    bio: 'Kelvin is an award-winning architectural visualizer who has rendered projects for studios in Nairobi, London, and Dubai using Twinmotion and ArchiCAD.',
    students: 9810,
    courses: 3,
    rating: 4.8,
  },
  'kelvin-mwangi ': {
    id: 'kelvin-mwangi',
    name: 'Kelvin Mwangi',
    title: 'Construction Technologist',
    avatar: '/instructor-amina.png',
    bio: 'Kelvin bridges design and construction, helping professionals produce buildable, code-compliant documentation directly from BIM models.',
    students: 6200,
    courses: 4,
    rating: 4.9,
  },
}

export const courses: Course[] = [
  {
    slug: 'archicad-fundamentals',
    title: 'ArchiCAD Fundamentals',
    subtitle:
      'Go from zero to confident ArchiCAD user with hands-on projects covering the entire interface and core tools.',
    thumbnail: '/course-fundamentals.png',
    instructor: 'jane-mwangi',
    level: 'Beginner',
    rating: 4.9,
    reviews: 2841,
    students: 14230,
    duration: '12h 40m',
    lessons: 86,
    price: 0,
    category: 'ArchiCAD',
    bestseller: true,
    objectives: [
      'Navigate the ArchiCAD interface with confidence',
      'Model walls, slabs, roofs, doors, and windows',
      'Set up stories, grids, and project structure',
      'Produce your first set of plans and sections',
    ],
    requirements: [
      'A computer capable of running ArchiCAD (trial is fine)',
      'No prior CAD or BIM experience required',
    ],
    curriculum: [
      {
        id: 'm1',
        title: 'Getting Started',
        lessons: [
          { id: 'l1', title: 'Welcome & course overview', duration: '4:12', preview: true },
          { id: 'l2', title: 'Installing ArchiCAD', duration: '8:30', preview: true },
          { id: 'l3', title: 'Touring the interface', duration: '14:05' },
          { id: 'l4', title: 'Navigation & view setup', duration: '11:20' },
        ],
      },
      {
        id: 'm2',
        title: 'Core Modeling Tools',
        lessons: [
          { id: 'l5', title: 'Walls & wall settings', duration: '18:44' },
          { id: 'l6', title: 'Slabs & floors', duration: '15:10' },
          { id: 'l7', title: 'Doors & windows', duration: '16:35' },
          { id: 'l8', title: 'Roofs & shells', duration: '20:12' },
        ],
      },
      {
        id: 'm3',
        title: 'Project Organization',
        lessons: [
          { id: 'l9', title: 'Stories & elevations', duration: '12:48' },
          { id: 'l10', title: 'Layers & attributes', duration: '13:55' },
          { id: 'l11', title: 'Your first plan set', duration: '22:30' },
        ],
      },
    ],
  },
  {
    slug: 'residential-design-workflow',
    title: 'Complete Residential Design Workflow',
    subtitle:
      'Design a full residential project from concept to documentation using a real-world ArchiCAD workflow.',
    thumbnail: '/course-residential.png',
    instructor: 'jane-mwangi',
    level: 'Intermediate',
    rating: 4.8,
    reviews: 1320,
    students: 7840,
    duration: '16h 05m',
    lessons: 104,
    price: 59,
    category: 'Design',
    bestseller: true,
    objectives: [
      'Take a residential project from brief to BIM model',
      'Create schedules, zones, and area calculations',
      'Coordinate a full construction document set',
      'Apply best-practice project templates',
    ],
    requirements: [
      'Basic ArchiCAD knowledge (or our Fundamentals course)',
      'ArchiCAD 26 or newer recommended',
    ],
    curriculum: [
      {
        id: 'm1',
        title: 'Concept & Site',
        lessons: [
          { id: 'l1', title: 'Reading the brief', duration: '9:10', preview: true },
          { id: 'l2', title: 'Site setup & survey import', duration: '17:22' },
          { id: 'l3', title: 'Massing studies', duration: '14:48' },
        ],
      },
      {
        id: 'm2',
        title: 'Developed Design',
        lessons: [
          { id: 'l4', title: 'Floor plan development', duration: '24:30' },
          { id: 'l5', title: 'Stairs & circulation', duration: '19:15' },
          { id: 'l6', title: 'Zones & schedules', duration: '16:40' },
        ],
      },
    ],
  },
  {
    slug: 'bim-for-construction',
    title: 'BIM for Construction Professionals',
    subtitle:
      'Master BIM coordination, clash detection, and data-rich models for real construction projects.',
    thumbnail: '/course-bim.png',
    instructor: 'kelvin-mwangi',
    level: 'Advanced',
    rating: 4.9,
    reviews: 980,
    students: 5210,
    duration: '14h 20m',
    lessons: 92,
    price: 79,
    category: 'BIM',
    objectives: [
      'Understand BIM levels and the ISO 19650 process',
      'Build data-rich, classified models',
      'Coordinate disciplines and detect clashes',
      'Export IFC and produce schedules of quantities',
    ],
    requirements: [
      'Comfortable modeling in ArchiCAD',
      'Some construction or engineering background helpful',
    ],
    curriculum: [
      {
        id: 'm1',
        title: 'BIM Foundations',
        lessons: [
          { id: 'l1', title: 'What BIM really means', duration: '11:05', preview: true },
          { id: 'l2', title: 'ISO 19650 in practice', duration: '18:30' },
          { id: 'l3', title: 'Classification systems', duration: '15:12' },
        ],
      },
      {
        id: 'm2',
        title: 'Coordination',
        lessons: [
          { id: 'l4', title: 'IFC import & export', duration: '21:40' },
          { id: 'l5', title: 'Clash detection workflows', duration: '23:18' },
        ],
      },
    ],
  },
  {
    slug: 'twinmotion-rendering',
    title: 'Twinmotion Rendering Masterclass',
    subtitle:
      'Create stunning, photorealistic architectural visualizations and walkthroughs with Twinmotion.',
    thumbnail: '/course-twinmotion.png',
    instructor: 'kelvin-mwangi',
    level: 'Intermediate',
    rating: 4.8,
    reviews: 1540,
    students: 8930,
    duration: '10h 15m',
    lessons: 68,
    price: 49,
    category: 'Rendering',
    bestseller: true,
    objectives: [
      'Sync ArchiCAD models with Twinmotion',
      'Master lighting, materials, and weather',
      'Populate scenes with vegetation and people',
      'Export images, panoramas, and video walkthroughs',
    ],
    requirements: [
      'A GPU capable of running Twinmotion',
      'An ArchiCAD model to visualize (provided)',
    ],
    curriculum: [
      {
        id: 'm1',
        title: 'Setup & Sync',
        lessons: [
          { id: 'l1', title: 'Twinmotion overview', duration: '7:50', preview: true },
          { id: 'l2', title: 'Direct link from ArchiCAD', duration: '13:22' },
        ],
      },
      {
        id: 'm2',
        title: 'Look Development',
        lessons: [
          { id: 'l3', title: 'Materials & PBR', duration: '20:10' },
          { id: 'l4', title: 'Lighting & sky', duration: '18:44' },
          { id: 'l5', title: 'Landscaping', duration: '16:05' },
        ],
      },
    ],
  },
  {
    slug: 'construction-documentation',
    title: 'Construction Documentation & Working Drawings',
    subtitle:
      'Produce professional, code-compliant construction documents directly from your BIM model.',
    thumbnail: '/course-documentation.png',
    instructor: 'kelvin-mwangi',
    level: 'Advanced',
    rating: 4.9,
    reviews: 760,
    students: 4120,
    duration: '13h 30m',
    lessons: 88,
    price: 69,
    category: 'Documentation',
    objectives: [
      'Set up sheet layouts and title blocks',
      'Detail walls, floors, and junctions',
      'Annotate and dimension to standard',
      'Manage revisions and issue sets',
    ],
    requirements: ['Intermediate ArchiCAD skills', 'Understanding of building construction'],
    curriculum: [
      {
        id: 'm1',
        title: 'Layouts & Sheets',
        lessons: [
          { id: 'l1', title: 'The layout book', duration: '12:15', preview: true },
          { id: 'l2', title: 'Title blocks & master layouts', duration: '17:30' },
        ],
      },
      {
        id: 'm2',
        title: 'Detailing',
        lessons: [
          { id: 'l3', title: 'Wall & floor details', duration: '22:48' },
          { id: 'l4', title: 'Dimensioning standards', duration: '15:20' },
        ],
      },
    ],
  },
  {
    slug: 'commercial-building-design',
    title: 'Commercial Building Design',
    subtitle:
      'Tackle large-scale commercial projects with advanced modeling, teamwork, and coordination strategies.',
    thumbnail: '/course-commercial.png',
    instructor: 'kelvin-mwangi',
    level: 'Advanced',
    rating: 4.7,
    reviews: 540,
    students: 3210,
    duration: '18h 50m',
    lessons: 110,
    price: 89,
    category: 'Design',
    objectives: [
      'Structure large multi-story models',
      'Use Teamwork for collaboration',
      'Model curtain walls and complex facades',
      'Coordinate core, structure, and MEP zones',
    ],
    requirements: ['Solid ArchiCAD foundation', 'Familiarity with commercial typologies'],
    curriculum: [
      {
        id: 'm1',
        title: 'Project Setup',
        lessons: [
          { id: 'l1', title: 'Structuring big models', duration: '14:10', preview: true },
          { id: 'l2', title: 'Teamwork & BIMcloud', duration: '19:30' },
        ],
      },
      {
        id: 'm2',
        title: 'Facades',
        lessons: [
          { id: 'l3', title: 'Curtain wall tool', duration: '25:12' },
          { id: 'l4', title: 'Complex profiles', duration: '17:45' },
        ],
      },
    ],
  },
]

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug)
}

export const categories = ['All', 'ArchiCAD', 'Design', 'BIM', 'Rendering', 'Documentation']
export const levels: Level[] = ['Beginner', 'Intermediate', 'Advanced']

export const stats = [
  { label: 'Active Students', value: '12,400+' },
  { label: 'Expert Courses', value: '24' },
  { label: 'Certificates Issued', value: '8,900+' },
  { label: 'Video Lessons', value: '1,200+' },
]

export const whyChooseUs = [
  {
    icon: 'GraduationCap',
    title: 'Expert Instructors',
    description: 'Learn from practicing architects and BIM specialists with real project experience.',
  },
  {
    icon: 'Hammer',
    title: 'Practical Projects',
    description: 'Build a portfolio with real-world residential and commercial project briefs.',
  },
  {
    icon: 'Download',
    title: 'Downloadable Resources',
    description: 'Templates, BIM libraries, and practice files included with every course.',
  },
  {
    icon: 'Award',
    title: 'Certificates',
    description: 'Earn verifiable certificates of completion to showcase your new skills.',
  },
  {
    icon: 'Infinity',
    title: 'Lifetime Access',
    description: 'Buy once and revisit your courses and updates whenever you need them.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Learning',
    description: 'Learn on any device with progress that syncs seamlessly across platforms.',
  },
]

export const testimonials = [
  {
    name: 'Brian Kamau',
    role: 'Architecture Student, JKUAT',
    avatar: '/student-1.png',
    quote:
      'ArchiCAD Academy took me from total beginner to confidently producing my studio projects in BIM. The practical projects made all the difference.',
  },
  {
    name: 'Faith Njeri',
    role: 'Junior Architect',
    avatar: '/student-2.png',
    quote:
      'The construction documentation course is gold. I now produce drawing sets at work far faster than my colleagues who use AutoCAD.',
  },
  {
    name: 'Samuel Mutua',
    role: 'Construction Manager',
    avatar: '/student-3.png',
    quote:
      'Finally a BIM course that speaks the language of the construction site. Clash detection alone saved us weeks on our last project.',
  },
  {
    name: 'Grace Wanjiru',
    role: 'Interior Designer',
    avatar: '/student-4.png',
    quote:
      'The Twinmotion masterclass let me present photorealistic visuals to clients. My proposal win rate has genuinely gone up.',
  },
]

export const blogPosts = [
  {
    slug: 'archicad-vs-revit-2026',
    title: 'ArchiCAD vs Revit in 2026: Which Should You Learn?',
    excerpt:
      'A practical, unbiased comparison for students and professionals deciding where to invest their BIM learning time.',
    category: 'BIM Workflows',
    date: 'May 28, 2026',
    readTime: '8 min read',
    cover: '/course-bim.png',
    author: 'jane-mwangi',
  },
  {
    slug: '10-rendering-tips-twinmotion',
    title: '10 Twinmotion Rendering Tips for Believable Results',
    excerpt:
      'Small lighting and material tweaks that take your architectural renders from flat to photoreal.',
    category: 'Rendering Tips',
    date: 'May 12, 2026',
    readTime: '6 min read',
    cover: '/course-twinmotion.png',
    author: 'david-otieno',
  },
  {
    slug: 'construction-documentation-checklist',
    title: 'The Construction Documentation Checklist Every Architect Needs',
    excerpt:
      'Make sure your drawing sets are complete, coordinated, and buildable with this field-tested checklist.',
    category: 'Construction Technology',
    date: 'Apr 30, 2026',
    readTime: '10 min read',
    cover: '/course-documentation.png',
    author: 'amina-hassan',
  },
]

export const resources = [
  {
    title: 'ArchiCAD Starter Template',
    type: 'Template',
    size: '4.2 MB',
    downloads: 8420,
    format: 'TPL',
  },
  {
    title: 'Residential BIM Library',
    type: 'Library',
    size: '128 MB',
    downloads: 5310,
    format: 'GSM',
  },
  {
    title: 'Construction Details Pack',
    type: 'Details',
    size: '18 MB',
    downloads: 6940,
    format: 'PDF',
  },
  {
    title: 'Sample Project — Coastal Villa',
    type: 'Project',
    size: '92 MB',
    downloads: 3120,
    format: 'PLN',
  },
  {
    title: 'Title Block Master Layouts',
    type: 'Template',
    size: '2.1 MB',
    downloads: 4870,
    format: 'TPL',
  },
  {
    title: 'Twinmotion Material Pack',
    type: 'Library',
    size: '64 MB',
    downloads: 4010,
    format: 'ZIP',
  },
]

export const forumThreads = [
  {
    id: 't1',
    title: 'Best way to model a curved curtain wall?',
    category: 'Modeling',
    author: 'Brian Kamau',
    avatar: '/student-1.png',
    replies: 14,
    likes: 32,
    time: '2h ago',
    excerpt:
      'I am working on a commercial lobby with a sweeping curved facade. Is the curtain wall tool the right approach or should I use a morph?',
  },
  {
    id: 't2',
    title: 'IFC export losing my zone data — help!',
    category: 'BIM',
    author: 'Faith Njeri',
    avatar: '/student-2.png',
    replies: 9,
    likes: 18,
    time: '5h ago',
    excerpt:
      'When I export to IFC for the structural engineer, my zone categories disappear. What translator settings should I use?',
  },
  {
    id: 't3',
    title: 'Share your best Twinmotion night render',
    category: 'Rendering',
    author: 'Grace Wanjiru',
    avatar: '/student-4.png',
    replies: 27,
    likes: 88,
    time: '1d ago',
    excerpt: 'Let us see those moody night scenes. Drop your renders and the settings you used!',
  },
  {
    id: 't4',
    title: 'Switching from AutoCAD — what surprised you most?',
    category: 'General',
    author: 'Samuel Mutua',
    avatar: '/student-3.png',
    replies: 41,
    likes: 65,
    time: '2d ago',
    excerpt:
      'Two weeks into ArchiCAD after a decade of AutoCAD. The model-first mindset is a big shift. What helped you adjust?',
  },
]

export const forumCategories = [
  { name: 'General', count: 312 },
  { name: 'Modeling', count: 248 },
  { name: 'BIM', count: 186 },
  { name: 'Rendering', count: 154 },
  { name: 'Documentation', count: 97 },
  { name: 'Careers', count: 73 },
]

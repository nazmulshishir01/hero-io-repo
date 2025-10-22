import type { AppItem, RatingBucket } from "../types";

function buckets(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): RatingBucket[] {
  const names: RatingBucket["name"][] = [
    "1 star",
    "2 star",
    "3 star",
    "4 star",
    "5 star",
  ];
  const counts = [a, b, c, d, e];
  return names.map((name, i) => ({ name, count: counts[i] }));
}

export const apps: AppItem[] = [
  {
    id: 1,
    title: "SnapNote",
    companyName: "Aurora Labs",
    image: "/apps/demo-app-1.webp",
    description: `SnapNote is an intelligent note-taking platform built for students, professionals, and creators who want clarity without clutter. It transforms handwritten content into editable digital text using advanced OCR recognition and automatically organizes everything by tags and subjects. 
You can sketch diagrams, attach images, and record short voice snippets right next to your written notes. All notes are synchronized across your devices, ensuring that your most recent ideas are always available even when you’re offline.

The interface is minimal and distraction-free, helping you focus entirely on capturing thoughts. With smart search, you can instantly retrieve specific words inside scanned images or PDFs. SnapNote also supports collaborative notebooks so study groups or teams can brainstorm together in real time. 
Security is handled through encrypted backups, so your academic or professional data remains private. SnapNote isn’t just another notebook—it’s a full productivity environment designed to think with you, learn from your behavior, and make studying or work sessions smoother every day.`,
    size: 38,
    reviews: 1892,
    ratingAvg: 4.5,
    downloads: 1250000,
    ratings: buckets(50, 120, 280, 520, 922),
  },
  {
    id: 2,
    title: "FitForge",
    companyName: "PulseWorks",
    image: "/apps/demo-app-2.webp",
    description: `FitForge is an adaptive fitness companion that uses artificial intelligence to design your personal training regimen. Rather than generic workouts, it studies your past sessions, recovery time, and performance trends to craft the perfect daily plan. The app combines cardio, strength, and flexibility routines into a balanced schedule that adjusts dynamically based on your feedback.

Its dashboard displays calories burned, heart-rate zones, and muscle engagement charts. Users can challenge friends, join local fitness communities, or follow certified trainers through live sessions. FitForge syncs with smartwatches and wearables to keep every heartbeat recorded for precise analytics. 
You can even enable “Recovery Mode,” where the system automatically shortens workouts after heavy activity days.

The built-in nutrition tracker suggests meals matching your macros and hydration goals. With motivational streaks, reminders, and progress milestones, FitForge transforms training into a lifestyle—making consistency feel rewarding rather than tiring. It’s the virtual coach that pushes you to perform smarter, stronger, and sustainably.`,
    size: 52,
    reviews: 2103,
    ratingAvg: 4.2,
    downloads: 980000,
    ratings: buckets(80, 160, 420, 760, 683),
  },
  {
    id: 3,
    title: "BudgetBee",
    companyName: "Clover Inc.",
    image: "/apps/demo-app-3.webp",
    description: `BudgetBee turns personal finance management into a simple, delightful habit. The app connects securely with your bank accounts and credit cards to track every transaction automatically. Each purchase is categorized and color-coded, giving you a visual overview of where your money goes.

A powerful analytics engine shows spending trends, saving ratios, and monthly summaries so you can plan ahead intelligently. You can set custom budgets for food, travel, or shopping, and BudgetBee will alert you when you’re close to overspending. 
It also provides goal-based saving jars—set aside money for that new laptop or a weekend getaway, and the app will guide you to reach it step by step.

BudgetBee’s friendly bee mascot offers quick tips and challenges like “No-Spend Fridays” to make saving fun. With bank-grade encryption and offline mode, your data remains private and accessible everywhere. BudgetBee isn’t just about managing finances—it’s about mastering the art of mindful spending.`,
    size: 29,
    reviews: 1476,
    ratingAvg: 4.7,
    downloads: 1540000,
    ratings: buckets(20, 70, 180, 490, 716),
  },
  {
    id: 4,
    title: "NovaMail",
    companyName: "SkyNetics",
    image: "/apps/demo-app-4.webp",
    description: `NovaMail reimagines the classic email client with AI assistance and a clutter-free interface. Its “Focus Inbox” automatically detects important messages and hides distractions like newsletters until you’re ready. The built-in assistant summarizes long email threads into quick bullet points so you can act faster.

Users can schedule sends, set smart follow-ups, and pin tasks directly from emails. A deep search powered by natural-language understanding lets you type queries like “invoices from March” or “meeting notes with Sarah” and find results instantly. 
With unified inbox support, NovaMail merges all your accounts—work, personal, and others—into one organized workspace.

Themes, swipe gestures, and voice dictation make handling mail effortless on any device. For privacy, NovaMail blocks trackers and encrypts attachments automatically. It’s modern email: faster, calmer, and designed for human attention.`,
    size: 61,
    reviews: 2635,
    ratingAvg: 4.1,
    downloads: 870000,
    ratings: buckets(140, 250, 690, 900, 655),
  },
  {
    id: 5,
    title: "TrailTrack",
    companyName: "Pine & Co.",
    image: "/apps/demo-app-5.webp",
    description: `TrailTrack is your outdoor adventure partner built for hikers, bikers, and explorers. Using detailed topographic maps, it records every step you take—even offline. The app shows real-time elevation, distance, and pace while marking waypoints automatically for easy return routes.

You can download trail packs curated by local guides or create your own routes with GPS precision. The SOS mode shares your live coordinates with emergency contacts if you ever go off-path. 
TrailTrack’s 3D terrain view brings landscapes to life, allowing you to preview hills before you climb them.

After every journey, get a visual log of your adventure complete with photos, notes, and statistics. Weather alerts, offline caching, and community-rated paths make TrailTrack the safest way to explore the unknown. Whether it’s a morning jog or a mountain expedition, the world truly fits in your pocket.`,
    size: 77,
    reviews: 954,
    ratingAvg: 4.6,
    downloads: 1120000,
    ratings: buckets(25, 80, 200, 420, 229),
  },
  {
    id: 6,
    title: "MealMuse",
    companyName: "ForkFly",
    image: "/apps/demo-app-6.webp",
    description: `MealMuse helps you fall in love with cooking again. It suggests personalized meal plans based on your taste preferences, allergies, and fitness goals. Every recipe includes nutritional breakdowns, step-by-step guides, and grocery lists you can check off while shopping.

The app intelligently balances your weekly menu for nutrients, calories, and cost. You can swap ingredients, save family recipes, and even generate a shopping cart ready for online delivery. 
Its AI “Flavor Match” recommends complementary dishes—pair your dinner entrée with perfect sides or desserts effortlessly.

MealMuse also integrates with smart kitchen devices to set cooking timers automatically. Whether you’re a beginner or a home chef, it brings creativity and organization to your kitchen, turning meals into moments of joy.`,
    size: 33,
    reviews: 1890,
    ratingAvg: 4.0,
    downloads: 640000,
    ratings: buckets(190, 300, 520, 530, 350),
  },
  {
    id: 7,
    title: "LingoLoop",
    companyName: "Polyglot IO",
    image: "/apps/demo-app-7.webp",
    description: `LingoLoop transforms the way you learn new languages with micro-lessons designed for busy lifestyles. Instead of long chapters, lessons take just five minutes and include interactive dialogues, pronunciation practice, and quick quizzes.

The app adapts dynamically—if you forget a word, it schedules it for revision using spaced repetition. You can chat with AI tutors who correct your grammar in real time, making practice feel natural. Daily streaks and achievement badges motivate consistent learning.

LingoLoop also offers cultural insights, idioms, and regional accents to make you sound authentic. With offline mode and 30+ supported languages, it’s the fastest route to fluency—one loop at a time.`,
    size: 41,
    reviews: 3201,
    ratingAvg: 4.8,
    downloads: 2200000,
    ratings: buckets(15, 42, 130, 590, 2424),
  },
  {
    id: 8,
    title: "PixelPlay",
    companyName: "BitGarden",
    image: "/apps/demo-app-8.webp",
    description: `PixelPlay revives classic retro gaming with a modern twist. Explore a vast collection of pixel-style titles optimized for today’s devices. Enjoy seamless cloud saves, online leaderboards, and multiplayer modes that capture nostalgia while keeping you connected with friends.

Each game runs smoothly with customizable on-screen controls and controller support. PixelPlay introduces “Retro Rewards,” where you earn coins to unlock themes, soundtracks, and avatars. 
Weekly tournaments keep the competition alive, while its offline mode ensures fun even without internet.

Designed for all ages, PixelPlay bridges generations of gamers with simple joy and creative storytelling—because great games never grow old.`,
    size: 85,
    reviews: 770,
    ratingAvg: 3.9,
    downloads: 430000,
    ratings: buckets(220, 210, 180, 100, 60),
  },
  {
    id: 9,
    title: "CalmCast",
    companyName: "Nimbus Labs",
    image: "/apps/demo-app-9.webp",
    description: `CalmCast creates an atmosphere of peace through ambient audio and guided meditation. It blends soundscapes like ocean tides, forest winds, or gentle rain with mindfulness sessions led by certified instructors.

You can build personalized playlists that match your mood—focus, relaxation, or sleep. The app automatically adjusts sound intensity according to time of day, ensuring the perfect background tone. 
A built-in sleep tracker monitors breathing and provides insights into rest quality.

With minimalist visuals and no ads, CalmCast keeps your mind free from distractions. Whether you meditate for 5 minutes or 50, it helps you find serenity within every session.`,
    size: 27,
    reviews: 1120,
    ratingAvg: 4.4,
    downloads: 720000,
    ratings: buckets(70, 120, 250, 360, 320),
  },
  {
    id: 10,
    title: "TaskNest",
    companyName: "Oak Systems",
    image: "/apps/demo-app-10.webp",
    description: `TaskNest turns chaos into clarity by merging project management with personal productivity. Visualize tasks in colorful Kanban boards, set priorities, and track progress through detailed analytics dashboards.

Collaborate with teammates in real time, attach files, and integrate calendars for seamless scheduling. TaskNest’s AI assistant predicts bottlenecks and suggests time estimates for new tasks. 
Focus Mode hides completed items to reduce clutter and keep attention on what’s next.

Custom themes, cross-device sync, and offline editing make it ideal for professionals, students, and remote teams alike. TaskNest isn’t just a to-do list—it’s your digital command center.`,
    size: 58,
    reviews: 2650,
    ratingAvg: 4.3,
    downloads: 1310000,
    ratings: buckets(110, 210, 640, 900, 790),
  },
  {
    id: 11,
    title: "ClipCloud",
    companyName: "ByteBridge",
    image: "/apps/demo-app-11.webp",
    description: `ClipCloud keeps your clipboard content synced seamlessly between all your devices. Copy text or files on one device and paste them instantly on another—no extra setup required. It works quietly in the background, automatically detecting copied content such as URLs, code snippets, or entire documents.

For power users, ClipCloud offers folders and tagging, letting you organize snippets by project or category. Developers can store reusable code blocks, marketers can save templates, and writers can quickly collect references. 
The search bar includes fuzzy matching and previews, so finding old clips takes seconds instead of minutes.

Security is the app’s top priority. Everything you copy is encrypted end-to-end and stored locally until you approve cloud sync. With customizable shortcuts, auto-clear timers, and cross-platform compatibility, ClipCloud transforms the humble clipboard into a smart productivity hub that saves time every single day.`,
    size: 19,
    reviews: 540,
    ratingAvg: 4.2,
    downloads: 350000,
    ratings: buckets(30, 80, 140, 160, 130),
  },
  {
    id: 12,
    title: "PhotoPulse",
    companyName: "LensCraft",
    image: "/apps/demo-app-12.webp",
    description: `PhotoPulse is an AI-powered photo enhancer that lets anyone create stunning, professional-looking pictures with zero effort. Advanced neural filters analyze lighting, contrast, and composition to bring your images to life in a single tap. 

Use portrait retouching to brighten eyes, smooth skin, and correct colors naturally without over-editing. Landscape lovers can restore lost details from foggy shots or low-light scenes. 
Batch mode allows photographers to edit hundreds of images simultaneously, saving hours of manual tweaking.

PhotoPulse also includes creative presets inspired by famous film stocks and modern social aesthetics. Whether you’re an influencer, designer, or hobbyist, PhotoPulse turns every capture into a masterpiece ready to share. Your creativity deserves technology that keeps up with it—and this app delivers precisely that.`,
    size: 72,
    reviews: 4120,
    ratingAvg: 4.6,
    downloads: 2650000,
    ratings: buckets(60, 120, 430, 1220, 2290),
  },
  {
    id: 13,
    title: "Readify",
    companyName: "Inkverse",
    image: "/apps/demo-app-1.webp",
    description: `Readify helps readers form consistent habits through elegant design and intelligent tracking. Add books from any source or simply scan a cover to import metadata automatically. The app times your reading sessions, estimates completion dates, and shows progress bars for each title.

Integrated summaries and note-taking make Readify more than a tracker—it becomes your digital bookshelf of ideas. You can highlight text, store quotes, and export notes directly to Markdown or PDF. 
For community lovers, the social feed allows you to share recommendations and see what friends are currently reading.

Minimalist visuals reduce eye strain, and customizable themes support day and night modes. Whether you read two pages or two hundred, Readify celebrates every step of your reading journey and motivates you to keep turning pages.`,
    size: 30,
    reviews: 880,
    ratingAvg: 4.5,
    downloads: 870000,
    ratings: buckets(40, 60, 150, 280, 350),
  },
  {
    id: 14,
    title: "SoundSphere",
    companyName: "EchoSoft",
    image: "/apps/demo-app-2.webp",
    description: `SoundSphere is an advanced audio enhancement suite built for true music lovers. It reshapes how you experience sound by using real-time equalization and spatial tuning driven by machine learning. The app analyzes your device’s hardware and tailors frequencies for perfect clarity.

Choose between studio, cinema, or gaming modes, or craft your own EQ curve. SoundSphere supports Hi-Res formats and wireless headphones, preserving quality without compression. 
Its minimalist player displays dynamic waveforms, lyrics, and album art with smooth animations.

For creators, SoundSphere includes an AI mastering tool that polishes recordings automatically. Whether you’re adjusting daily playlists or refining your next track, SoundSphere makes every note richer, deeper, and more alive.`,
    size: 45,
    reviews: 1250,
    ratingAvg: 4.2,
    downloads: 910000,
    ratings: buckets(60, 80, 210, 320, 580),
  },
  {
    id: 15,
    title: "FitFuel",
    companyName: "NutriTrack",
    image: "/apps/demo-app-3.webp",
    description: `FitFuel unites diet planning and nutrition tracking in one intelligent system. Instead of calorie counting alone, it focuses on balanced eating patterns tailored to your body type and goals. The built-in AI coach recommends meals, hydration schedules, and rest days to optimize energy levels.

Users can log ingredients simply by snapping food photos—the recognition engine calculates macros automatically. Weekly insights highlight nutrient deficiencies and suggest practical corrections. 
FitFuel integrates with wearable devices to monitor heart rate and step count, correlating fitness with diet results.

Recipe mode features over 5,000 chef-curated dishes filtered by cuisine, allergies, and difficulty. Whether you’re bulking, cutting, or maintaining, FitFuel ensures every bite fuels your progress responsibly.`,
    size: 32,
    reviews: 1030,
    ratingAvg: 4.3,
    downloads: 1120000,
    ratings: buckets(50, 70, 180, 300, 430),
  },
  {
    id: 16,
    title: "CodeCraftr",
    companyName: "DevForge",
    image: "/apps/demo-app-4.webp",
    description: `CodeCraftr makes learning to code interactive, social, and deeply practical. Each day brings micro-challenges in real programming languages, evaluated instantly in the built-in editor. The app explains mistakes with plain-English feedback, turning frustration into curiosity.

Gamification keeps momentum alive—earn points, climb leaderboards, and unlock advanced topics as you progress. Community discussions allow peer review and mentorship from seasoned developers. 
Offline exercises ensure you can practice anywhere, anytime.

The curriculum spans from HTML and Python basics to complex algorithms and frameworks. CodeCraftr doesn’t just teach syntax; it trains problem-solving thinking, preparing you for real-world projects and technical interviews alike.`,
    size: 55,
    reviews: 1680,
    ratingAvg: 4.7,
    downloads: 1650000,
    ratings: buckets(30, 60, 120, 340, 1130),
  },
  {
    id: 17,
    title: "SkyMap",
    companyName: "CosmoWare",
    image: "/apps/demo-app-5.webp",
    description: `SkyMap transforms your smartphone into a portable planetarium. Point your device at the sky to identify stars, constellations, and planets instantly through augmented reality overlays. Real-time motion tracking keeps the map aligned with your orientation for a seamless experience.

Astrophotography tools help you capture celestial events like meteor showers or lunar eclipses. Detailed object cards include mythology stories, scientific data, and discovery histories. 
SkyMap’s “Tonight’s Highlights” feature tells you which cosmic events are visible from your location.

Offline star catalogs, dark-mode visuals, and telescope alignment support make SkyMap equally useful for amateurs and professionals. Explore the universe from your backyard and rediscover the wonder above.`,
    size: 60,
    reviews: 2330,
    ratingAvg: 4.8,
    downloads: 2450000,
    ratings: buckets(10, 25, 100, 440, 1755),
  },
  {
    id: 18,
    title: "CookMate",
    companyName: "Kitchen IO",
    image: "/apps/demo-app-6.webp",
    description: `CookMate brings smart technology to your kitchen. It curates recipes from thousands of chefs and food bloggers, adapting them to match your pantry and dietary preferences. Simply input the ingredients you have, and CookMate suggests what you can cook right now.

Step-by-step voice guidance lets you cook hands-free, while automatic timers ensure perfect results every time. The app tracks calories and nutrition for each meal and can sync with FitForge or FitFuel for holistic health monitoring.

Users can store family recipes, share collections, and even create shopping lists grouped by grocery aisles. CookMate turns everyday cooking into a creative adventure that saves time and reduces food waste.`,
    size: 70,
    reviews: 3200,
    ratingAvg: 4.6,
    downloads: 1920000,
    ratings: buckets(20, 40, 200, 580, 2360),
  },
  {
    id: 19,
    title: "ZenTimer",
    companyName: "FocusX",
    image: "/apps/demo-app-7.webp",
    description: `ZenTimer refines the Pomodoro technique into a complete productivity ecosystem. Beyond simple countdowns, it creates an immersive environment for deep work through soothing visuals, focus sounds, and motivational insights.

You can customize work and break durations, monitor how many sessions you complete each day, and visualize trends through clean charts. Task integration links your to-dos directly to timers for structured scheduling. 
Analytics reveal where your time truly goes and help you optimize energy patterns across the week.

Achievement badges, streak counters, and mindful breathing prompts make consistency rewarding. By balancing productivity with wellness, ZenTimer becomes a personal trainer for your brain—keeping you disciplined, refreshed, and focused every single day.`,
    size: 26,
    reviews: 730,
    ratingAvg: 4.4,
    downloads: 860000,
    ratings: buckets(60, 90, 160, 210, 210),
  },
  {
    id: 20,
    title: "VidVault",
    companyName: "MotionCloud",
    image: "/apps/demo-app-8.webp",
    description: `VidVault is a secure, intelligent media organizer for creators and binge-watchers alike. It imports videos from your device, cloud drives, or direct URLs and arranges them into beautifully organized collections with automatic thumbnails and metadata.

Tag videos by genre, mood, or creator and retrieve them instantly with smart search. VidVault includes a private vault locked by biometrics for sensitive content. 
Its built-in player supports subtitles, playback speed control, and floating window mode for multitasking.

For professionals, VidVault integrates with editing software to export clips directly. With cross-device sync, offline downloads, and encrypted backups, it ensures your video library is both accessible and safe.`,
    size: 84,
    reviews: 1920,
    ratingAvg: 4.3,
    downloads: 1420000,
    ratings: buckets(120, 150, 330, 480, 840),
  },
  {
    id: 21,
    title: "TripTrek",
    companyName: "JourneyPro",
    image: "/apps/demo-app-9.webp",
    description: `TripTrek transforms travel planning into an effortless, visual experience. It brings together itinerary management, expense tracking, and social sharing in one elegant dashboard. Add flights, hotels, and attractions manually or import confirmations automatically from email.

Interactive maps display your entire route, color-coded by day, so you can see the journey unfold at a glance. Real-time weather updates, flight status notifications, and currency conversion ensure you’re always prepared. 
TripTrek’s collaboration tools let friends contribute suggestions or vote on destinations, making group trips easy to organize.

When offline, all data is cached locally, ensuring your guides and tickets remain accessible anywhere. After returning home, TripTrek compiles your media and notes into a digital journal complete with timelines and photos. From weekend getaways to world tours, it’s the ultimate companion for explorers who value both adventure and organization.`,
    size: 49,
    reviews: 1560,
    ratingAvg: 4.5,
    downloads: 1310000,
    ratings: buckets(40, 70, 230, 360, 860),
  },
  {
    id: 22,
    title: "MindWave",
    companyName: "NeuroSoft",
    image: "/apps/demo-app-10.webp",
    description: `MindWave merges neuroscience and mindfulness into one practical tool for mental wellness. Using gentle guided meditations, focus games, and breathing exercises, it helps you understand and regulate your emotional state throughout the day.

The app’s sensor integration (or camera pulse detection) measures calmness in real time, showing your stress curve through soft visual feedback. You can choose from focus, relaxation, or sleep modes, each tuned with distinct sound frequencies. 
Progress charts reveal how your attention span improves over weeks of practice.

MindWave’s library includes hundreds of sessions designed by psychologists and monks, covering everything from anxiety relief to creative flow enhancement. With streak rewards, ambient visuals, and offline sessions, it’s a pocket sanctuary that fits busy lifestyles perfectly.`,
    size: 36,
    reviews: 1240,
    ratingAvg: 4.6,
    downloads: 1250000,
    ratings: buckets(25, 40, 190, 310, 675),
  },
  {
    id: 23,
    title: "Taskly",
    companyName: "Orbit Systems",
    image: "/apps/demo-app-11.webp",
    description: `Taskly simplifies your to-do list into a visually pleasing and effective productivity app. Tasks are displayed as colorful cards grouped by priority or deadline. Swipe gestures allow quick completion, postponement, or conversion into recurring events.

Smart notifications remind you gently rather than nagging, encouraging focus without pressure. You can set goals for daily accomplishments and view summary analytics showing streaks, completion rates, and energy levels. 
Taskly supports natural-language input—type “Call Sam tomorrow at 4 PM,” and it schedules automatically.

Synchronization across devices is instantaneous, and dark mode helps late-night planners work comfortably. Lightweight yet powerful, Taskly bridges minimalism and motivation for people who want clarity in chaos.`,
    size: 22,
    reviews: 850,
    ratingAvg: 4.1,
    downloads: 790000,
    ratings: buckets(80, 110, 210, 270, 180),
  },
  {
    id: 24,
    title: "Artify",
    companyName: "CanvasWorks",
    image: "/apps/demo-app-12.webp",
    description: `Artify democratizes digital art creation through artificial intelligence. Upload a sketch or describe an idea in words, and Artify generates multiple artistic interpretations in seconds—oil painting, watercolor, anime, or hyper-realistic renderings.

The intuitive editor lets you refine AI results with brushes, layers, and texture controls. Community galleries showcase trending artworks, where users can like, remix, or collaborate on each other’s creations. 
Artify’s algorithm learns from your edits, improving stylistic accuracy over time.

Professional artists can export high-resolution files with transparent backgrounds, while beginners enjoy instant inspiration. With cloud storage, batch renders, and customizable prompts, Artify turns imagination into tangible beauty—making creativity accessible to everyone.`,
    size: 92,
    reviews: 3560,
    ratingAvg: 4.8,
    downloads: 3250000,
    ratings: buckets(15, 20, 180, 500, 2845),
  },
  {
    id: 25,
    title: "CryptoWatch",
    companyName: "BlockLabs",
    image: "/apps/demo-app-1.webp",
    description: `CryptoWatch keeps investors connected to global crypto markets in real time. Monitor prices, charts, and breaking news across hundreds of tokens from a single streamlined interface. Each asset includes historical performance graphs and on-chain analytics for informed decisions.

Users can create custom portfolios, set price alerts, and receive push notifications for volatility spikes. Advanced mode offers candlestick analysis, moving averages, and exchange comparison tools. 
CryptoWatch even supports simulated trading for beginners who want to practice without risk.

All data is encrypted, and no keys are stored on servers, ensuring safety first. With vibrant themes and widget support, it brings professional-grade crypto tracking to your pocket.`,
    size: 43,
    reviews: 1920,
    ratingAvg: 4.3,
    downloads: 970000,
    ratings: buckets(70, 100, 230, 360, 1160),
  },
  {
    id: 26,
    title: "PlantPal",
    companyName: "GreenLeaf",
    image: "/apps/demo-app-2.webp",
    description: `PlantPal ensures your plants thrive through smart reminders and AI diagnosis. Simply snap a photo, and it identifies species while analyzing leaf health, sunlight exposure, and watering needs.

A personalized schedule adapts automatically to local weather, humidity, and pot size. If something looks off, PlantPal explains potential issues—pests, overwatering, or nutrient deficiencies—and suggests solutions instantly. 
Users can log growth photos to create time-lapse diaries or share achievements within the gardening community.

Offline mode and multilingual support make it perfect for both beginners and expert botanists. PlantPal turns plant care into a joyful, educational ritual that keeps every leaf alive and glowing.`,
    size: 38,
    reviews: 1100,
    ratingAvg: 4.4,
    downloads: 1150000,
    ratings: buckets(40, 70, 160, 340, 490),
  },
  {
    id: 27,
    title: "Weatherly",
    companyName: "StormTech",
    image: "/apps/demo-app-3.webp",
    description: `Weatherly provides hyper-accurate forecasts with a clean, informative interface. Its adaptive radar visualizes storms, rainfall, and temperature changes minute by minute. The system fuses satellite imagery with AI prediction models to deliver unparalleled precision.

Users can set alerts for severe conditions like lightning or snow, ensuring timely safety measures. The Today view highlights temperature feels-like values, wind patterns, and air-quality indices. 
For travelers, Weatherly supports global location tracking with instant switching between cities.

Widgets, animations, and dark/light themes add beauty to reliability. Whether you’re planning a picnic or avoiding a hurricane, Weatherly makes checking the forecast an experience—not a chore.`,
    size: 44,
    reviews: 2150,
    ratingAvg: 4.5,
    downloads: 2350000,
    ratings: buckets(35, 60, 200, 420, 1435),
  },
  {
    id: 28,
    title: "SafeVault",
    companyName: "SecureX",
    image: "/apps/demo-app-4.webp",
    description: `SafeVault is a next-generation password manager focused on simplicity and absolute security. It stores all your credentials locally in encrypted form, unlocked only by biometrics or a master key known solely to you.

The clean dashboard lets you categorize logins, generate ultra-strong passwords, and autofill credentials across browsers and apps. Cloud synchronization uses zero-knowledge encryption—your data can’t be read even by servers. 
SafeVault also includes secure notes for storing sensitive documents, credit cards, or recovery phrases.

Audit reports highlight weak or reused passwords, and emergency access ensures loved ones can retrieve critical data if needed. With SafeVault, you get peace of mind knowing your digital identity is locked behind unbreakable walls.`,
    size: 40,
    reviews: 1320,
    ratingAvg: 4.7,
    downloads: 1680000,
    ratings: buckets(20, 30, 160, 330, 780),
  },
];

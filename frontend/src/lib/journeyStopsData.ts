import { JourneyStop } from './types';

export const KEDARNATH_JOURNEY_STOPS: JourneyStop[] = [
  {
    stop_number: 1,
    name: 'Haridwar & Rishikesh Gateway',
    hindi_name: 'हरिद्वार एवं ऋषिकेश',
    route_leg_name: 'Leg 1 • Foothills of the Himalayas',
    distance_from_start: 'KM 0 • Gateway Point',
    altitude: '340m',
    estimated_time: 'Dawn Departure (05:30 AM)',
    tagline: 'Where the sacred Ganga leaves the Shivalik hills to enter the plains',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'The traditional holy threshold of the Char Dham yatra. Before entering the mountain gorges, travelers gather here for morning cleansing by the riverbanks.',
    best_things_to_visit: [
      {
        title: 'Triveni Ghat Dawn Maha Aarti & Holy Dip',
        description:
          'Stand along the ancient stone steps as morning bells echo and Vedic pandits offer river worship with burning brass lamps.',
        timing_or_highlight: '05:30 AM - 06:30 AM',
        tag: 'Sacred Riverfront',
      },
      {
        title: 'Laxman Jhula & Historic Ram Jhula Suspension Bridges',
        description:
          'Walk across the historic iron suspension bridges with sweeping panoramic views of the turquoise Ganga flanked by ashrams.',
        timing_or_highlight: '07:00 AM',
        tag: 'Architectural Icon',
      },
      {
        title: 'Beatles Ashram (Chaurasi Kutia) & Meditation Caves',
        description:
          'Explore stone beehive meditation huts nestled in the shaded Rajaji forest edge where transcendental meditation was practiced.',
        timing_or_highlight: '08:30 AM',
        tag: 'Cultural Heritage',
      },
    ],
    local_shops: [
      {
        id: 'rsh-artisan-1',
        name: 'Rishikesh Ayurvedic Herb & Rudraksha Guild',
        artisan_or_owner: 'Pandit Ramdas Shastri (5th Generation Vedic Botanist)',
        exact_location: 'Shop 14, Triveni Ghat Heritage Market (Near Old Clock Tower)',
        craft_or_items: 'Certified Panchmukhi & Gauri-Shankar Rudraksha malas, wild Himalayan cedar oil, and holy river rosaries.',
        story:
          'Family has served pilgrims since 1884. Every Rudraksha is water-tested and hand-knotted on pure silk threads without synthetic varnish.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: City markets sell plastic and pressed wooden beads. Pandit Ramdas provides genuine wild-harvested Himalayan beads certified for genuine spiritual vibration.',
        special_treat_or_demo: 'Complimentary Rudraksha density immersion test and personalized birth constellation consultation.',
        badge: 'Verified Generational Vedic Master',
      },
      {
        id: 'rsh-artisan-2',
        name: 'Bhartiya Handloom & Organic Khadi Bhandar',
        artisan_or_owner: 'Master Weaver Smt. Vidya Devi',
        exact_location: 'Near Geeta Bhawan Gate No. 3, Swargashram Road',
        craft_or_items: 'Pure organic cotton meditation shawls, raw tussar wraps, and hand-beaten copper Ganga Jal carafes.',
        story:
          'Supports 40 rural women weavers from Tehri Garhwal villages who spin mountain cotton on wooden Amber Charkhas.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Buy your mountain prayer shawl directly from the weaver before ascending to cold heights.',
        special_treat_or_demo: 'Live drop-spindle spinning demonstration + complimentary cup of warm Tulsi herbal infusion.',
        badge: 'Certified Handloom Cooperative',
      },
    ],
  },
  {
    stop_number: 2,
    name: 'Byasi & Singtali River Gorge',
    hindi_name: 'ब्यासी एवं सिंगटाली',
    route_leg_name: 'Leg 2 • The Alaknanda Canyon Passage',
    distance_from_start: 'KM 32 from Rishikesh',
    altitude: '460m',
    estimated_time: 'Morning Transit (08:30 AM)',
    tagline: 'Deep mountain river canyons where mountain winds whistle through pine cliffs',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'As NH-58 snakes deeper into the sub-Himalayas, the gorge narrows dramatically. The air cools noticeably and natural cliff springs emerge beside the roadway.',
    best_things_to_visit: [
      {
        title: 'Singtali Suspension Bridge & Canyon Viewpoint',
        description:
          'Walk onto the narrow pedestrian suspension bridge swaying gently over roaring emerald rapids slicing through vertical rock walls.',
        timing_or_highlight: 'Best Light: 09:00 AM',
        tag: 'Geological Wonder',
      },
      {
        title: 'Cliffside Natural Rock Caves',
        description:
          'Ancient natural river-worn caves where wandering sadhus have meditated for centuries beside the sound of surging water.',
        timing_or_highlight: '09:30 AM',
        tag: 'Natural Shelter',
      },
    ],
    local_shops: [
      {
        id: 'byasi-shop-1',
        name: 'Singtali Wild Forest Honey & Pahadi Spice Hearth',
        artisan_or_owner: 'Kunwar Singh Chauhan & Family',
        exact_location: 'Milestone KM 32.5, Shaded River Curve Viewpoint',
        craft_or_items: 'Raw dark rock-cliff wild bee honey, unpolished mountain turmeric, and Pahadi mustard seeds.',
        story:
          'Chauhan family scales high granite cliffs in the upper river valleys to harvest wild multi-floral honey with traditional smoke ropes.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Commercial commercial honeys are cut with corn syrup. This raw wild cliff honey contains rare medicinal Himalayan enzymes that build stamina for the Kedarnath climb.',
        special_treat_or_demo: 'Taste raw comb honey served on freshly picked mountain banana leaves.',
        badge: 'Wild Cliff Harvester',
      },
    ],
  },
  {
    stop_number: 3,
    name: 'Devprayag Sangam',
    hindi_name: 'देवप्रयाग संगम',
    route_leg_name: 'Leg 3 • Birthplace of the Holy Ganga',
    distance_from_start: 'KM 71 from Rishikesh',
    altitude: '830m',
    estimated_time: 'Midday Arrival (11:00 AM)',
    tagline: 'The dramatic sacred confluence of the Alaknanda and Bhagirathi rivers',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'One of the holiest confluences on earth. The roaring, sediment-rich Alaknanda river meets the silent, crystal-turquoise Bhagirathi river to form the Ganga.',
    best_things_to_visit: [
      {
        title: 'The Sacred Sangam Confluence Tongue',
        description:
          'Stand right at the acute triangular rock point where the two contrasting colored river currents crash together and unite into the holy Ganga.',
        timing_or_highlight: '11:15 AM - 12:00 PM',
        tag: 'Holy Confluence',
      },
      {
        title: '1,250-Year-Old Raghunathji Stone Temple',
        description:
          'Ascend through ancient stone alleyways to visit one of the 108 Divya Desams, constructed from massive interlocking carved sandstone slabs.',
        timing_or_highlight: '12:30 PM',
        tag: 'Ancient Architecture',
      },
      {
        title: 'Ancient Stone Baori & Vedic Astronomical Observatory',
        description:
          'View ancient sundials and astrological calculation stone instruments carved directly into the bedrock by medieval Garhwali astronomers.',
        timing_or_highlight: '01:00 PM',
        tag: 'Astronomical Heritage',
      },
    ],
    local_shops: [
      {
        id: 'devprayag-artisan-1',
        name: 'Pandey Generational Copper & Brass Metal Guild',
        artisan_or_owner: 'Master Coppersmith Hariom Pandey (4th Generation)',
        exact_location: 'Right at the primary Sangam stone steps descent (KM 71.4)',
        craft_or_items: 'Hand-hammered heavy copper Ganga Jal Kamandals, engraved brass lotas, and traditional bells.',
        story:
          'Hariom Pandey hand-hammers each water urn from 99.8% pure copper sheets. Water stored in these hand-beaten vessels stays fresh for decades.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: You must collect Sangam water in an authentic hand-beaten copper vessel, not in cheap plastic bottles sold at roadside kiosks.',
        special_treat_or_demo: 'Custom live chiseling of traveler’s name and sacred Om symbol onto your copper Kamandal.',
        badge: 'Verified Generational Coppersmith',
      },
      {
        id: 'devprayag-artisan-2',
        name: 'Sangam Buransh & Hill Flower Herbal Guild',
        artisan_or_owner: 'Smt. Kamla Rawat & Women Cooperative',
        exact_location: 'Shop 6, Raghunathji Temple Gate Walkway',
        craft_or_items: 'Sun-dried wild scarlet Rhododendron (Buransh) flower petals, mountain mint, and pure walnut oil.',
        story:
          'Gathered by hill women from upper oak-rhododendron forests during early spring and dried naturally under mountain sun.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Wild Buransh tea reduces mountain blood pressure and helps your heart pump effortlessly in thin air.',
        special_treat_or_demo: 'Steaming sample cup of ruby-red wild Buransh tea brewed with mountain ginger and honey.',
        badge: 'Certified Mountain Women Guild',
      },
    ],
  },
  {
    stop_number: 4,
    name: 'Srinagar Garhwal',
    hindi_name: 'श्रीनगर गढ़वाल',
    route_leg_name: 'Leg 4 • Historic Kingdom Capital',
    distance_from_start: 'KM 105 from Rishikesh',
    altitude: '560m',
    estimated_time: 'Early Afternoon (01:30 PM)',
    tagline: 'The ancient royal seat of the Panwar Kings nestled in a broad river valley',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'The largest valley basin on the route before entering the high crags. Ancient seat of Garhwali high culture, classical musicians, and sacred Shiva shrines.',
    best_things_to_visit: [
      {
        title: 'Kamleshwar Mahadev Ancient Sanctum',
        description:
          'Sacred temple where Lord Rama prayed to Shiva with 1,008 lotus blossoms. Pilgrims come here for fertility blessings during Kartik Purnima.',
        timing_or_highlight: '02:00 PM',
        tag: 'Mythological Sanctum',
      },
      {
        title: 'Kilkileshwar Mahadev Riverside Temple',
        description:
          'Peaceful 8th-century stone temple established by Adi Shankaracharya right along the curve of the serene Alaknanda riverbed.',
        timing_or_highlight: '02:45 PM',
        tag: 'Spiritual Haven',
      },
    ],
    local_shops: [
      {
        id: 'srinagar-artisan-1',
        name: 'Garhwal Traditional Wool & Blanket Guild',
        artisan_or_owner: 'Loom Master Devraj Rawat',
        exact_location: 'Old Chowk Bazaar, Opposite Ancient Rajbari Gate',
        craft_or_items: 'Hand-loomed thick Thulma sheep wool blankets, lightweight Pankhi shawls, and felted wool caps.',
        story:
          'Devraj weaves on an 80-year-old wooden frame loom using wool sourced directly from high alpine shepherds of Chamoli.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Night temperatures in Kedarnath drop below freezing (-5°C). Machine fleece traps sweat, but pure mountain wool breaths while locking in body heat.',
        special_treat_or_demo: 'Inspect raw hand-carded sheep fleece and feel the difference of natural lanolin oil fibers.',
        badge: 'Master Weaver Heritage Guild',
      },
      {
        id: 'srinagar-sweet-1',
        name: 'Chauhan Singori & Heritage Sweets',
        artisan_or_owner: 'Chauhan Family (Since 1928)',
        exact_location: 'Gola Bazaar Main Crossing',
        craft_or_items: 'Authentic Garhwali Singori (khoya dessert wrapped in fresh green Malu leaves) and Bal Mithai coated in sugar pearls.',
        story:
          'Prepared fresh every morning using rich mountain cow milk slow-reduced over oak wood fires.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: The Malu leaf wrapper imparts a distinct cooling herbal aroma found nowhere else in India.',
        special_treat_or_demo: 'Taste a warm, freshly wrapped Singori straight from the copper cooling tray.',
        badge: 'Culinary Heritage Landmark',
      },
    ],
  },
  {
    stop_number: 5,
    name: 'Rudraprayag Sangam',
    hindi_name: 'रुद्रप्रयाग संगम',
    route_leg_name: 'Leg 5 • Confluence of the Mandakini',
    distance_from_start: 'KM 140 from Rishikesh',
    altitude: '895m',
    estimated_time: 'Afternoon (03:30 PM)',
    tagline: 'Where the fierce Alaknanda absorbs the holy Mandakini river arriving from Kedarnath',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'Crucial highway divergence. Here we leave the Alaknanda highway and turn directly north into the Mandakini river canyon heading toward Kedarnath.',
    best_things_to_visit: [
      {
        title: 'The Great Alaknanda-Mandakini Confluence Point',
        description:
          'Gaze down at the fierce churning vortex where the crystal blue Mandakini river merges at a perpendicular angle into the grey Alaknanda.',
        timing_or_highlight: '03:45 PM',
        tag: 'Sacred Confluence',
      },
      {
        title: 'Rudranath Temple Cave Overhang',
        description:
          'Ancient rock-cut temple tucked directly beneath a massive natural granite rock overhang right above the roaring confluence.',
        timing_or_highlight: '04:15 PM',
        tag: 'Rock-Cut Sanctum',
      },
      {
        title: 'Narad Shila (The Sage’s Stone)',
        description:
          'The sacred flat boulder on the riverbank where Sage Narada meditated for centuries to master the Veena from Lord Shiva.',
        timing_or_highlight: '04:45 PM',
        tag: 'Vedic Relic',
      },
    ],
    local_shops: [
      {
        id: 'rudraprayag-artisan-1',
        name: 'Mandakini Valley Apothecary & Pahadi Herb Guild',
        artisan_or_owner: 'Vaidya Kailash Bhatt (Ayurvedic Practitioner)',
        exact_location: 'Confluence Ghat Market, Shop 8 (Near Mandakini Bridge)',
        craft_or_items: 'Certified Himalayan Shilajit resin, pure cedarwood extract, and wild mountain rock salt.',
        story:
          'Bhatt family holds registered wild-collection licenses for high Himalayan cliffs. Purified using classical Surya-Tapi (sun drying) methods.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Real Shilajit melts smoothly in warm water with a gold-amber tint and earthy smoky aroma. Avoid city fake powders.',
        special_treat_or_demo: 'Live flame-purity test demonstrating real Shilajit bubbling without black soot.',
        badge: 'Certified Ayurvedic Heritage Apothecary',
      },
    ],
  },
  {
    stop_number: 6,
    name: 'Agastyamuni Valley',
    hindi_name: 'अगस्त्यमुनि',
    route_leg_name: 'Leg 6 • Riverbed Meadows & Walnut Groves',
    distance_from_start: 'KM 160 from Rishikesh',
    altitude: '1,000m',
    estimated_time: 'Late Afternoon (05:00 PM)',
    tagline: 'Wide pebble riverbanks where Sage Agastya meditated in deep solitude',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'A peaceful valley where the Mandakini river gently widens. Famous for historic sage shrines, walnut orchards, and helicopter shuttle bases.',
    best_things_to_visit: [
      {
        title: 'Ancient Agastya Muni Temple Complex',
        description:
          'Intricately carved stone sanctum honoring the great sage who swallowed the ocean and composed Vedic hymns.',
        timing_or_highlight: '05:15 PM',
        tag: 'Historic Temple',
      },
      {
        title: 'Pebbled Riverbed Sunset Walk',
        description:
          'Walk along flat white river stones as evening alpine mist starts rolling down from the high Kedarnath peaks in the distance.',
        timing_or_highlight: '05:45 PM',
        tag: 'Nature Walk',
      },
    ],
    local_shops: [
      {
        id: 'agastya-orchard-1',
        name: 'Agastyamuni Organic Walnut & Hill Apple Collective',
        artisan_or_owner: 'Harish Chandra Rawat',
        exact_location: 'Valley Highway Crossing, Beside Old River Suspension Gate',
        craft_or_items: 'Kagzi soft-shell walnuts (cracked easily by hand), sun-dried persimmon slices, and pure cold-pressed apricot kernel oil.',
        story:
          'Grown without synthetic pesticides on terraced hill orchards nourished by glacier runoff.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Apricot kernel oil (Gooti Tel) is the holy grail for mountain hikers — it prevents skin cracking in sub-zero wind.',
        special_treat_or_demo: 'Hand-crack a fresh paper-thin Kagzi walnut and taste its sweet, creamy oil-rich kernel.',
        badge: 'Certified Farmer Cooperative',
      },
    ],
  },
  {
    stop_number: 7,
    name: 'Guptkashi',
    hindi_name: 'गुप्तकाशी',
    route_leg_name: 'Leg 7 • The Hidden Kashi',
    distance_from_start: 'KM 182 from Rishikesh',
    altitude: '1,319m',
    estimated_time: 'Evening Arrival / Night Halt Base (06:30 PM)',
    tagline: 'The mystical mountain sanctuary mirroring Varanasi in spiritual power',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'According to lore, Lord Shiva hid here in the form of a bull when the Pandavas were searching for him. Essential night halt to acclimatize before the trek.',
    best_things_to_visit: [
      {
        title: 'Ancient Vishwanath Temple & Ardhanarishwar Sanctum',
        description:
          'Marvel at the ancient stone temple whose sanctum houses a rare black stone sculpture depicting Lord Shiva and Goddess Parvati as one unified form.',
        timing_or_highlight: '07:00 PM Evening Aarti',
        tag: 'Spiritual Center',
      },
      {
        title: 'Sacred Manikarnika Kund (Gomukh Fountains)',
        description:
          'Two natural crystal mountain streams (symbolizing the sacred Ganga and Yamuna) continuously pour through hand-carved stone cow mouths into a stepped stone pond.',
        timing_or_highlight: '07:45 PM',
        tag: 'Sacred Spring',
      },
    ],
    local_shops: [
      {
        id: 'guptkashi-artisan-1',
        name: 'Guptkashi Master Woodcarvers Guild',
        artisan_or_owner: 'Master Artisan Jagmohan Singh Negi',
        exact_location: 'Vishwanath Temple Stone Pathway, Shop 4',
        craft_or_items: 'Hand-carved Deodar cedarwood miniature temple shrines, carved pilgrim staffs, and aromatic cedar pendants.',
        story:
          'Jagmohan works with naturally fallen Himalayan Deodar (Tree of the Gods) wood, seasoned over 3 winter cycles for termite immunity.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: The sacred scent of seasoned Deodar wood wards off fatigue and remains fragrant for over 50 years in your home.',
        special_treat_or_demo: 'Live wood-chisel demonstration creating custom sacred Om motifs on Deodar keepsake blocks.',
        badge: 'Master Artisan Woodcraft Guild',
      },
      {
        id: 'guptkashi-shop-2',
        name: 'Kashi Mountain Dhoop & Guggul Hearth',
        artisan_or_owner: 'Smt. Sarojini Bhatt',
        exact_location: 'Main Bazaar Road, Near Post Office',
        craft_or_items: 'Wild-harvested Himalayan Guggul resin, dry Juniper incense sticks, and mountain camphor.',
        story:
          'Hand-rolled without artificial chemical binding agents. Used by temple priests for sanctum purification.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Burning authentic Guggul purifies room air and increases lung oxygen absorption in mountain cold.',
        badge: 'Traditional Sacred Aromatics Maker',
      },
    ],
  },
  {
    stop_number: 8,
    name: 'Sonprayag Transit Junction',
    hindi_name: 'सोनप्रयाग',
    route_leg_name: 'Leg 8 • Gateway to the Holy Trail',
    distance_from_start: 'KM 212 from Rishikesh',
    altitude: '1,829m',
    estimated_time: 'Early Morning Transit (05:00 AM)',
    tagline: 'Confluence of the Mandakini and Songanga rivers and official vehicle terminus',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'All private vehicles terminate here. Pilgrims undergo biometric verification before boarding official government shuttle jeeps to Gaurikund.',
    best_things_to_visit: [
      {
        title: 'Songanga-Mandakini Holy Confluence',
        description:
          'The icy turquoise Mandakini meets the crystalline Songanga rushing down from the Vasuki Tal high glacial lake.',
        timing_or_highlight: '05:15 AM',
        tag: 'Sacred Confluence',
      },
      {
        title: 'Triyuginarayan Wedding Temple Gateway',
        description:
          'Trailhead leading up to the legendary village where the divine wedding of Lord Shiva and Goddess Parvati took place in front of the Akhand Dhuni (eternal fire).',
        timing_or_highlight: '05:45 AM',
        tag: 'Vedic Gateway',
      },
    ],
    local_shops: [
      {
        id: 'sonprayag-artisan-1',
        name: 'Sonprayag Trekker & Mountain Staff Guild',
        artisan_or_owner: 'Master Craftsman Devendra Rawat',
        exact_location: 'Shuttle Jeep Stand Entrance, Booth 2',
        craft_or_items: 'Hand-seasoned bamboo walking staffs (Brahma Danda), custom rubber base ferrules, and waterproof mountain poncho capes.',
        story:
          'Rawat seasons local mountain bamboo in natural mud and salt brine so it will never snap under heavy body weight during steep mountain descents.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Bypassing a walking stick is the #1 mistake first-time pilgrims make. A properly balanced Brahma Danda relieves 30% of knee strain over 16 km of climbing.',
        special_treat_or_demo: 'Free custom sizing to your exact height + personalized sacred Red Mauli thread tied onto the handle.',
        badge: 'Certified Mountain Safety Guild',
      },
    ],
  },
  {
    stop_number: 9,
    name: 'Gaurikund Basecamp & Thermal Springs',
    hindi_name: 'गौरीकुंड',
    route_leg_name: 'Leg 9 • Trek Trailhead (KM 0 of the Hike)',
    distance_from_start: 'KM 217 from Rishikesh • Trek Base',
    altitude: '1,982m',
    estimated_time: 'Morning Hike Start (06:00 AM)',
    tagline: 'Where Goddess Parvati performed penance and the sacred walking trail begins',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'The sacred trailhead where wheels stop and stone walking paths begin. Steaming volcanic thermal sulphur springs provide a purifying bath before the ascent.',
    best_things_to_visit: [
      {
        title: 'Natural Volcanic Hot Sulphur Springs (Gauri Kund)',
        description:
          'Dip hands and feet in boiling natural mineral springs emerging from mountain bedrock to warm your joints before the 16 km uphill trek.',
        timing_or_highlight: '06:15 AM',
        tag: 'Geothermal Spring',
      },
      {
        title: 'Ancient Gauri Mata Temple',
        description:
          'Offer prayers at the shrine where Goddess Gauri (Parvati) meditated to win Lord Shiva as her husband.',
        timing_or_highlight: '06:45 AM',
        tag: 'Sacred Shrine',
      },
      {
        title: 'The Great Stone Trek Gate',
        description:
          'Step onto the wide, paved mountain stone path beside the thunderous Mandakini river canyon with walking staff in hand.',
        timing_or_highlight: '07:00 AM',
        tag: 'Trailhead',
      },
    ],
    local_shops: [
      {
        id: 'gaurikund-artisan-1',
        name: 'Gaurikund Himalayan Wool & Herbal Energy Hearth',
        artisan_or_owner: 'Smt. Bindeshwari Devi',
        exact_location: 'Trek Starting Gate, Stone Step 18',
        craft_or_items: 'Pure sheep wool hand-knitted trekking socks, fingerless grips, and natural ginger-jaggery mountain candies.',
        story:
          'Hill mothers knit these thick woolen socks using raw unbleached fleece that repels water and prevents shoe blisters on wet stones.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Wet cotton socks cause debilitating blisters on steep ascents. Pure sheep wool stays warm and cushioned even when soaked.',
        special_treat_or_demo: 'Freshly crushed ginger and jaggery energy bite provided to every pilgrim commencing the trek.',
        badge: 'Trailhead Pilgrim Welfare Guild',
      },
    ],
  },
  {
    stop_number: 10,
    name: 'Jungle Chatti & Bheembali',
    hindi_name: 'जंगल चट्टी एवं भीमबली',
    route_leg_name: 'Leg 10 • The Midway Mountain Waterfall Passage',
    distance_from_start: 'Trek KM 6.5 from Gaurikund',
    altitude: '2,740m',
    estimated_time: 'Midday Rest Halt (11:00 AM)',
    tagline: 'Roaring alpine waterfall cascades tumbling over vertical granite gorge cliffs',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'The midpoint of the trek. Here the tree canopy transitions from dense rhododendron forests into open high-altitude birch and alpine meadows.',
    best_things_to_visit: [
      {
        title: 'Bheembali Suspension Bridge over Rushing Gorge',
        description:
          'Walk over the swaying steel pedestrian bridge crossing the white frothing Mandakini river canyon flanked by vertical granite cliffs.',
        timing_or_highlight: '11:15 AM',
        tag: 'Gorge Crossing',
      },
      {
        title: 'Twin Glacial Waterfall Cascades',
        description:
          'Massive natural mountain waterfalls tumbling hundreds of feet down sheer rock faces, creating shimmering rainbows in the midday sun.',
        timing_or_highlight: '11:45 AM',
        tag: 'Glacial Waterfall',
      },
    ],
    local_shops: [
      {
        id: 'bheembali-artisan-1',
        name: 'Bheembali Mountain Shepherd Wool & Herbal Post',
        artisan_or_owner: 'Master Craftsman Devendra Rawat',
        exact_location: 'Right beside the Jungle Chatti Mountain Rest Amphitheater (Trek KM 6.2)',
        craft_or_items: 'Hand-carved pilgrim staffs with sacred motifs, wild Rhododendron flower tea, and thick sheep-wool wrist warmers.',
        story:
          'Devendra’s family has guided pilgrims on this trail for 4 generations. They gather fallen oak wood and hand-carve each staff.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: This is the critical midway recovery point. Hot wild Buransh tea here relaxes tight quadriceps and prevents altitude nausea.',
        special_treat_or_demo: 'Complimentary hot wild Buransh flower tea brewed over juniper wood fires + custom initial carving on your wooden staff.',
        badge: 'Verified Mountain Artisan Guild',
      },
    ],
  },
  {
    stop_number: 11,
    name: 'Lincholi High Alpine Ridge',
    hindi_name: 'लिनचोली',
    route_leg_name: 'Leg 11 • The High Glacial Amphitheater',
    distance_from_start: 'Trek KM 11 from Gaurikund',
    altitude: '3,150m',
    estimated_time: 'Afternoon (02:00 PM)',
    tagline: 'Where the tree line ends and the vast snowy Himalayan peaks dominate the sky',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'High-altitude alpine ridge built after 2013. Trees completely vanish here, replaced by bare granite scree, sub-zero winds, and panoramic snowy summits.',
    best_things_to_visit: [
      {
        title: 'The Great Himalayan Panorama Viewpoint',
        description:
          'Stop at the sweeping edge of the ridge to view snow-capped summits of the Chaukhamba and Kedardome towering over the valley.',
        timing_or_highlight: '02:15 PM',
        tag: 'Himalayan Panorama',
      },
      {
        title: 'Free SDRF Mountain Rescue Acclimatization Post',
        description:
          'Get your blood oxygen and heart rate checked for free by mountain rescue doctors to verify safe acclimatization before the final push.',
        timing_or_highlight: '02:45 PM',
        tag: 'Health Checkpoint',
      },
    ],
    local_shops: [
      {
        id: 'lincholi-nomad-1',
        name: 'Lincholi Nomadic Yak Wool & Herbal Balm Stalls',
        artisan_or_owner: 'Nomadic Herders Dorje & Phunchok',
        exact_location: 'Lincholi Ridge Rest Area, Shelter Stall 3',
        craft_or_items: 'Pure woven Yak wool mufflers, natural camphor and eucalyptus calf balms, and roasted Tibetan barley sampa.',
        story:
          'Nomadic herders who graze yak herds in the high bugyals during summer months. They spin coarse, ultra-warm yak underwool.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Yak underwool is 3x warmer than sheep wool and completely wind-impenetrable against sub-zero ridge gales.',
        special_treat_or_demo: 'Application of warm wild camphor balm to relieve calf and tendon fatigue.',
        badge: 'High Altitude Nomadic Guild',
      },
    ],
  },
  {
    stop_number: 12,
    name: 'Kedarnath Dham Sanctum',
    hindi_name: 'केदारनाथ धाम',
    route_leg_name: 'Leg 12 • The Holy Destination (3,583m)',
    distance_from_start: 'Trek KM 16 • Final Sanctum',
    altitude: '3,583m',
    estimated_time: 'Late Afternoon Arrival (04:30 PM)',
    tagline: 'The eternal Jyotirlinga standing majestic beneath the snowy Kedardome (6,831m)',
    hero_image: '/images/destinations/kedarnath.jpg',
    quick_summary:
      'The sacred climax of the journey. A 1,200-year-old grey stone temple constructed by Adi Shankaracharya, backdropped by colossal glaciers and snowy peaks.',
    best_things_to_visit: [
      {
        title: 'The 1,200-Year-Old Kedarnath Temple Sanctum',
        description:
          'Enter through ancient sandstone doorways to touch the sacred triangular black stone Shiva lingam representing the divine hump of Shiva.',
        timing_or_highlight: 'Morning 05:00 AM & Evening 06:30 PM',
        tag: 'Sacred Jyotirlinga',
      },
      {
        title: 'The Miraculous Bheem Shila Boulder',
        description:
          'Bow before the colossal natural boulder positioned directly behind the temple that miraculously diverted devastating 2013 flash floods.',
        timing_or_highlight: '05:00 PM',
        tag: 'Miraculous Relic',
      },
      {
        title: 'Bhairavnath Temple Ridge Hike',
        description:
          'Take a gentle 20-minute walk up the hill behind the temple for a 360-degree panoramic view of the entire illuminated Kedarnath township and glaciers.',
        timing_or_highlight: 'Next Morning: 07:00 AM',
        tag: 'Summit Viewpoint',
      },
      {
        title: 'Evening Sandhya Maha Aarti Under The Stars',
        description:
          'Stand in the open courtyard in front of the illuminated stone temple as blazing brass lamps swing and hundreds of conches roar into the night air.',
        timing_or_highlight: '06:30 PM - 07:30 PM',
        tag: 'Grand Maha Aarti',
      },
    ],
    local_shops: [
      {
        id: 'kdr-artisan-1',
        name: 'Kedarnath Temple Purohit & Bhojpatra Sacred Guild',
        artisan_or_owner: 'Shri Ramachandra Bhatt & Rawal Heritage Clan',
        exact_location: 'Directly on the Temple Entrance Stone Courtyard (Shop 2)',
        craft_or_items: 'Sacred Bhojpatra (Himalayan birch bark) scrolls inscribed with Vedic Shiva mantras in saffron ink, and blessed pancha-dhatu bells.',
        story:
          'Generations of South Indian Rawal priests have conducted prayers here. Authentic Bhojpatra bark is harvested from ancient high birch groves.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Bhojpatra preserves holy mantras for centuries without decaying. Taking an authentic saffron-inscribed Bhojpatra from the sanctum courtyard anchors the blessing of Kedarnath in your home forever.',
        special_treat_or_demo: 'Free personalized Sanskrit name blessing inscribed onto sacred Bhojpatra keepsake for every pilgrim.',
        badge: 'Sanctum Heritage Purohit Guild',
      },
      {
        id: 'kdr-artisan-2',
        name: 'Mandakini Valley Himalayan Shila & Bell Workshop',
        artisan_or_owner: 'Master Craftsman Devendra Rawat',
        exact_location: 'Right beside Temple Courtyard Exit Arch',
        craft_or_items: 'Hand-carved Shiva idols from natural Himalayan stones, pure Guggul incense, and hand-cast singing bells.',
        story:
          'Handcrafted by Garhwali temple artisans using traditional casting sand molds to produce the famous long-lasting 432Hz sacred ringing frequency.',
        why_must_visit:
          '🛑 MANDATORY CULTURAL ANCHOR: Authentic Himalayan bell bronze produces a continuous resonance that clears stale energy from home spaces.',
        special_treat_or_demo: 'Demonstration of resonance frequency using water vibration inside the singing bowl.',
        badge: 'Certified Temple Craftsman Guild',
      },
    ],
  },
];

// Helper to provide 10-12 journey stops for other destinations as well
export function getJourneyStopsForDestination(destId: string): JourneyStop[] {
  const normalized = (destId || 'kedarnath').toLowerCase();
  if (normalized === 'kedarnath') {
    return KEDARNATH_JOURNEY_STOPS;
  }

  if (normalized === 'varanasi') {
    return [
      {
        stop_number: 1,
        name: 'Babatpur Gateway & Varuna River Crossing',
        hindi_name: 'बाबतपुर एवं वरुणा नदी',
        route_leg_name: 'Leg 1 • Arrival into Kashi Kshetra',
        distance_from_start: 'KM 0 • Airport / Railway Gateway',
        altitude: '82m',
        estimated_time: 'Dawn Arrival (06:00 AM)',
        tagline: 'Crossing into the sacred geographical triangle bounded by the Varuna and Assi rivers',
        hero_image: '/images/destinations/varanasi.jpg',
        quick_summary:
          'The historical north threshold where pilgrims wash road dust before entering the eternal city of Shiva.',
        best_things_to_visit: [
          {
            title: 'Ancient Rameshwar Shiva Temple on Varuna Riverbank',
            description: 'Visit the peaceful stone river temple where the Panchkroshi Parikrama pilgrimage route crosses.',
            timing_or_highlight: '06:30 AM',
            tag: 'Panchkroshi Pilgrimage Stop',
          },
        ],
        local_shops: [
          {
            id: 'vns-1-shop',
            name: 'Varuna Rural Terracotta & Clay Potter Guild',
            artisan_or_owner: 'Master Potter Ram Lakhan Prajapati',
            exact_location: 'Varuna Bridge Crossing, Workshop 3',
            craft_or_items: 'Traditional porous Kulhads (clay cups) and unglazed terracotta water matkas.',
            story: 'Handcrafted from fine river silt baked over mustard husk fires for natural mineral flavor.',
            why_must_visit:
              '🛑 MANDATORY CULTURAL ANCHOR: Drinking water from genuine untreated Varanasi river clay neutralizes acidity and hydrates deep tissues.',
            badge: 'Generational Clay Master',
          },
        ],
      },
      {
        stop_number: 2,
        name: 'Sarnath Deer Park & Dhamek Stupa',
        hindi_name: 'सारनाथ धमेख स्तूप',
        route_leg_name: 'Leg 2 • The Wheel of Dharma Gateway',
        distance_from_start: 'KM 10 North of City Center',
        altitude: '80m',
        estimated_time: 'Morning (08:30 AM)',
        tagline: 'Where Buddha delivered his first sermon 2,500 years ago setting the wheel of truth in motion',
        hero_image: '/images/destinations/varanasi.jpg',
        quick_summary:
          'A serene deer park enveloped in shaded trees, holding the giant stone Dhamek Stupa and Ashoka Pillar relics.',
        best_things_to_visit: [
          {
            title: 'The Great Dhamek Stupa',
            description: 'Circumambulate the colossal 43-meter stone and brick cylindrical stupa with delicate Gupta stone carvings.',
            timing_or_highlight: '09:00 AM',
            tag: 'Archaeological Icon',
          },
          {
            title: 'Sarnath Archaeological Museum',
            description: 'View the original 3rd-century BCE polished sandstone Lion Capital of Ashoka, the national emblem of India.',
            timing_or_highlight: '10:00 AM',
            tag: 'National Heritage',
          },
        ],
        local_shops: [
          {
            id: 'sarnath-artisan-1',
            name: 'Sarnath Buddhist Stone & Sandstone Guild',
            artisan_or_owner: 'Master Sculptor Ananda Maurya',
            exact_location: 'Deer Park West Gate, Artisan Row',
            craft_or_items: 'Hand-carved Chunar sandstone Buddha statues and engraved lotus meditation discs.',
            story: 'Chunar sandstone carvers whose ancestors carved Ashokan pillars 2,200 years ago.',
            why_must_visit:
              '🛑 MANDATORY CULTURAL ANCHOR: Chunar pink sandstone has microscopic silica crystals that create a distinct golden sheen under sunlight.',
            badge: 'Ancient Sandstone Guild',
          },
        ],
      },
      {
        stop_number: 3,
        name: 'Chowk & Thatheri Bazaar (The Brass Guild Alleys)',
        hindi_name: 'चौक एवं ठठेरी बाजार',
        route_leg_name: 'Leg 3 • Heritage Metal & Sacred Aromatics',
        distance_from_start: 'KM 18 • Historic Inner Ring',
        altitude: '80m',
        estimated_time: 'Midday (11:30 AM)',
        tagline: 'Echoing labyrinth of hammer strokes where master coppersmiths shape sacred ritual ware',
        hero_image: '/images/destinations/varanasi.jpg',
        quick_summary:
          'Narrow cobbled lanes where generational metalsmiths hammer bell-metal gongs, brass lotas, and copper vessels.',
        best_things_to_visit: [
          {
            title: 'Thatheri Gali Living Metal Workshops',
            description: 'Observe master smiths heating and hand-shaping blazing red copper disks into ceremonial temple vessels.',
            timing_or_highlight: '11:45 AM',
            tag: 'Living Artisan Guild',
          },
        ],
        local_shops: [
          {
            id: 'chowk-artisan-1',
            name: 'Varanasi Thatheri Heritage Brass & Kansa Guild',
            artisan_or_owner: 'Ustaad Brijmohan Verma',
            exact_location: 'Gali Thatheriyan, House 42/18',
            craft_or_items: 'Certified pure Kansa (bronze) dining plates, hand-engraved puja lotas, and acoustic singing bells.',
            story: 'Ancient metal formula with 78% copper and 22% tin. Hand-beaten over anvil stones without machine stamping.',
            why_must_visit:
              '🛑 MANDATORY CULTURAL ANCHOR: Ayurveda dictates that eating off pure hand-beaten Kansa alkaline-balances your meals.',
            badge: 'Master Bell-Metal Smith',
          },
        ],
      },
      {
        stop_number: 4,
        name: 'Godowlia Chowk & Sandstone Arch',
        hindi_name: 'गोदौलिया चौक',
        route_leg_name: 'Leg 4 • The Vibrant Crossroads of Kashi',
        distance_from_start: 'KM 20 • Heart of the Old City',
        altitude: '80m',
        estimated_time: 'Afternoon (01:00 PM)',
        tagline: 'The bustling cultural nerve-center connecting silk alleys to the river ghats',
        hero_image: '/images/destinations/varanasi.jpg',
        quick_summary:
          'From this lively sandstone crossroads, cycle rickshaws, flower sellers carrying orange marigolds, and sadhus converge toward the river.',
        best_things_to_visit: [
          {
            title: 'Historic Marigold & Rose Flower Bazaar',
            description: 'Wander through mountain mounds of fresh fragrant orange marigolds and Kannauj rose garlands destined for temples.',
            timing_or_highlight: '01:30 PM',
            tag: 'Sensory Experience',
          },
        ],
        local_shops: [
          {
            id: 'godowlia-sweet-1',
            name: 'Ram Bhandar Heritage Halwai & Kachori Hearth',
            artisan_or_owner: 'Gupta Family (Since 1887)',
            exact_location: 'Thatheri Bazaar Crossing, Godowlia Corner',
            craft_or_items: 'Desi ghee Urad Dal kachoris served with spicy hing potato sabzi and sweet jalebis.',
            story: 'Frying in pure cow ghee over slow smoldering charcoal since the 19th century.',
            why_must_visit:
              '🛑 MANDATORY CULTURAL ANCHOR: The authentic breakfast of Banaras. Bypassing this kachori means missing the real soul of the old city.',
            badge: 'Centennial Culinary Landmark',
          },
        ],
      },
      {
        stop_number: 5,
        name: 'Madanpura Silk Weaving Guild',
        hindi_name: 'मदनपुरा सिल्क बुनकर गली',
        route_leg_name: 'Leg 5 • Master Weaver Heritage Quarter',
        distance_from_start: 'KM 22 • The Loom Alleys',
        altitude: '80m',
        estimated_time: 'Afternoon (02:30 PM)',
        tagline: 'Where the gentle clatter of wooden pit-looms produces legendary Banarasi silk',
        hero_image: '/images/destinations/varanasi.jpg',
        quick_summary:
          'Shaded medieval gullies where 4th-generation master weavers hand-weave pure mulberry silk with genuine silver zari threads.',
        best_things_to_visit: [
          {
            title: 'Madanpura Handloom Pit-Loom Guilds',
            description: 'Step into traditional brick courtyard weaver homes where wooden flying shuttles weave intricate floral patterns.',
            timing_or_highlight: '02:45 PM',
            tag: 'Handloom Heritage',
          },
        ],
        local_shops: [
          {
            id: 'vns-artisan-1',
            name: 'Madanpura Pure Kadhwa Silk Heritage Guild',
            artisan_or_owner: 'Master Weaver Haji Mohammad Naseem',
            exact_location: 'Gali Lohiyan, Madanpura Silk Lane',
            craft_or_items: 'Authentic Hand-Woven Banarasi Kadhwa Silk Sarees, Stoles, and Tanchoi fabrics.',
            story: '4th generation weaver family. Every single motif is individually guided by hand on pit-looms taking up to 30 days per saree.',
            why_must_visit:
              '🛑 MANDATORY CULTURAL ANCHOR: 90% of sarees in commercial markets are cheap power-loom polyester imitations from outside states. Haji Naseem certifies pure handloom silk with government Silk Mark authority.',
            special_treat_or_demo: 'Complimentary warm Banarasi saffron chai + 15-minute live pit-loom jacquard card weaving demonstration.',
            badge: 'National Award-Winning Master Weaver',
          },
        ],
      },
      {
        stop_number: 6,
        name: 'Kashi Vishwanath Corridor & Golden Sanctum',
        hindi_name: 'काशी विश्वनाथ कॉरिडोर',
        route_leg_name: 'Leg 6 • The Divine Epicenter',
        distance_from_start: 'KM 24 • Spiritual Heart',
        altitude: '80m',
        estimated_time: 'Late Afternoon (04:00 PM)',
        tagline: 'The eternal Jyotirlinga of Lord Shiva adorned with towering golden spires',
        hero_image: '/images/destinations/varanasi.jpg',
        quick_summary:
          'The majestic sandstone corridor connecting the sacred river Ganga directly to the golden sanctum of Lord Vishwanath.',
        best_things_to_visit: [
          {
            title: 'Golden Sanctum of Lord Vishwanath',
            description: 'Step through polished brass portals to view the sacred Jyotirlinga topped with 800 kg of pure gold donated by Maharaja Ranjit Singh.',
            timing_or_highlight: '04:30 PM',
            tag: 'Supreme Jyotirlinga',
          },
          {
            title: 'Sandstone Riverfront Gateway Promenade',
            description: 'Walk out onto the grand stone steps opening directly onto the broad river Ganga.',
            timing_or_highlight: '05:15 PM',
            tag: 'Monumental Architecture',
          },
        ],
        local_shops: [
          {
            id: 'vns-attar-1',
            name: 'Gai Ghat Kannauj Natural Attar & Sandalwood Guild',
            artisan_or_owner: 'Hakim Mohammad Rafiq',
            exact_location: 'Corridor Exit Gate 4, Gali Mirghat',
            craft_or_items: 'Pure Mitti Attar (distilled scent of baked river earth after monsoon rain), Shamama, and pure sandalwood oil.',
            story: 'Distilled using ancient copper deg-bhapka water-steam methods without synthetic alcohol or chemical fixes.',
            why_must_visit:
              '🛑 MANDATORY CULTURAL ANCHOR: Mitti Attar captures the exact primordial scent of the holy Ganga riverbank after rain.',
            badge: 'Certified Master Perfumer',
          },
        ],
      },
      {
        stop_number: 7,
        name: 'Manikarnika & Scindia Ghats',
        hindi_name: 'मणिकर्णिका एवं सिंधिया घाट',
        route_leg_name: 'Leg 7 • The Gateway of Moksha',
        distance_from_start: 'KM 25 • Ancient Riverfront',
        altitude: '80m',
        estimated_time: 'Twilight (05:45 PM)',
        tagline: 'Where the sacred eternal fire has burned continuously for thousands of years',
        hero_image: '/images/destinations/varanasi.jpg',
        quick_summary:
          'The supreme cremation ghat of Hinduism where sacred pyres burn 24/7, teaching travelers the impermanence of mortal life.',
        best_things_to_visit: [
          {
            title: 'Sacred Manikarnika Kund & Leaning Shiva Temple',
            description: 'View the ancient stepped stone tank dug by Lord Vishnu, and the atmospheric partially submerged stone Shiva temple at Scindia Ghat.',
            timing_or_highlight: '06:00 PM',
            tag: 'Sacred Antiquity',
          },
        ],
        local_shops: [
          {
            id: 'manikarnika-wood-1',
            name: 'Panchganga Pure Sandalwood & Sacred Wood Guild',
            artisan_or_owner: 'Shri Ram Narayan Tiwari',
            exact_location: 'Scindia Ghat Upper Stone Pavilion',
            craft_or_items: 'Certified red and white sandalwood paste logs, pure camphor tablets, and sacred Ganga clay tilak stones.',
            story: 'Supplies sandalwood logs for sanctum rituals. Certified natural oil content with sweet woody scent.',
            why_must_visit:
              '🛑 MANDATORY CULTURAL ANCHOR: Rubbing real sandalwood on your forehead cools the nervous system and creates meditative stillness.',
            badge: 'Sacred Sandalwood Guild',
          },
        ],
      },
      {
        stop_number: 8,
        name: 'Dashashwamedh Ghat & Grand Maha Aarti',
        hindi_name: 'दशाश्वमेध घाट एवं महा आरती',
        route_leg_name: 'Leg 8 • The Riverfront Spectacle',
        distance_from_start: 'KM 26 • Central Riverfront',
        altitude: '80m',
        estimated_time: 'Evening (06:45 PM)',
        tagline: 'Where young saffron-clad priests lift blazing multi-tiered brass lamps in adoration of the Ganga',
        hero_image: '/images/destinations/varanasi_evening.jpg',
        quick_summary:
          'The most famous ghat in Banaras, legendary for Lord Brahma’s sacrifice of ten horses. The evening Maha Aarti is an unforgettable spiritual symphony.',
        best_things_to_visit: [
          {
            title: 'Grand Dashashwamedh Maha Aarti Ceremony',
            description: 'Watch young priests in gold-trimmed saffron robes sound giant conch shells, wave peacock-feather fans, and swirl 21-lamp brass towers.',
            timing_or_highlight: '07:00 PM - 07:45 PM',
            tag: 'Grand River Aarti',
          },
        ],
        local_shops: [
          {
            id: 'dash-boat-1',
            name: 'Manjhi Wooden Boat Heritage Cooperative',
            artisan_or_owner: 'Master Boatman Kashi Naresh Sahni',
            exact_location: 'Dashashwamedh Ghat Riverbank Steps, Boat Station 3',
            craft_or_items: 'Traditional hand-rowed wooden timber boats (Bajra and Shikhara rides).',
            story: 'Generational boatmen community who have rowed pilgrims for over 500 years without motorized fumes.',
            why_must_visit:
              '🛑 MANDATORY CULTURAL ANCHOR: Viewing the blazing Maha Aarti from a wooden boat floating on the dark water is the most iconic visual in India.',
            badge: 'Traditional River Navigator',
          },
        ],
      },
      {
        stop_number: 9,
        name: 'Tulsi Ghat & Mud Wrestling Akhada',
        hindi_name: 'तुलसी घाट एवं अखाड़ा',
        route_leg_name: 'Leg 9 • Living Literature & Ancient Strength',
        distance_from_start: 'KM 29 • Southern Riverfront',
        altitude: '80m',
        estimated_time: 'Next Morning (06:00 AM)',
        tagline: 'Where saint-poet Goswami Tulsidas wrote the Ramcharitmanas and wrestlers train in holy mud',
        hero_image: '/images/destinations/varanasi.jpg',
        quick_summary:
          'A quiet, deeply spiritual ghat where medieval wooden manuscripts are preserved and traditional Pehlwans train in ochre earth.',
        best_things_to_visit: [
          {
            title: 'Tulsidas Residence & Sacred Relic Room',
            description: 'View the wooden clogs and original handwritten Ramcharitmanas manuscripts of Goswami Tulsidas.',
            timing_or_highlight: '06:30 AM',
            tag: 'Literary Monument',
          },
          {
            title: 'Traditional Swaminath Mud Wrestling Akhada',
            description: 'Watch disciplined wrestlers train in soft ochre clay mixed with mustard oil, rose water, and buttermilk under giant peepal trees.',
            timing_or_highlight: '07:00 AM',
            tag: 'Ancient Martial Tradition',
          },
        ],
        local_shops: [
          {
            id: 'tulsi-chai-1',
            name: 'Pappu Chai & Classical Flute Hearth',
            artisan_or_owner: 'Pappu & Sons',
            exact_location: 'Assi-Tulsi Ghat Crossing, Lane 2',
            craft_or_items: 'Slow-simmered saffron lemon tea and Banarasi masala chai in terracotta Kulhads.',
            story: 'The legendary gathering hub of Banaras university scholars, poets, and classical sitar maestros.',
            why_must_visit:
              '🛑 MANDATORY CULTURAL ANCHOR: Experience true "Banarasiya Masti" — relaxed philosophical banter over steaming spiced tea.',
            badge: 'Cultural Intellectual Landmark',
          },
        ],
      },
      {
        stop_number: 10,
        name: 'Assi Ghat & Subah-e-Banaras',
        hindi_name: 'अस्सी घाट एवं सुबह-ए-बनारस',
        route_leg_name: 'Leg 10 • Dawn Classical Awakening',
        distance_from_start: 'KM 30 • Southernmost Sacred Terminal',
        altitude: '80m',
        estimated_time: 'Dawn (05:00 AM)',
        tagline: 'Where morning Vedic hymns, sunrise Surya Namaskar, and classical morning sitar greet the dawn',
        hero_image: '/images/destinations/varanasi.jpg',
        quick_summary:
          'The southernmost sacred ghat where the Assi river meets the Ganga. Host to the world-renowned "Subah-e-Banaras" dawn musical program.',
        best_things_to_visit: [
          {
            title: 'Subah-e-Banaras Dawn Classical Concert',
            description: 'Sit cross-legged on the stone steps as the golden morning sun rises over the river while master sitarists play morning Raagas.',
            timing_or_highlight: '05:30 AM - 06:45 AM',
            tag: 'Dawn Raaga Concert',
          },
          {
            title: 'Sunrise Row-Boat to Ramnagar Fort Across the River',
            description: 'Row across calm morning waters to the 18th-century carved cream sandstone palace of the Maharaja of Kashi.',
            timing_or_highlight: '07:30 AM',
            tag: 'Royal Fortress',
          },
        ],
        local_shops: [
          {
            id: 'assi-pan-1',
            name: 'Keshav Tambool Bhandar (Authentic Banarasi Paan Guild)',
            artisan_or_owner: 'Master Paan Maker Keshav Chaurasia',
            exact_location: 'Assi Ghat Main Square, Shop 1',
            craft_or_items: 'Pure Magahi Paan leaves folded with fragrant Gulkand rose preserve, kathha, choona, and edible silver vark.',
            story: 'Magahi betel leaves grown in dark earthen rooms that literally melt in your mouth without fiber.',
            why_must_visit:
              '🛑 MANDATORY CULTURAL ANCHOR: The authentic Banarasi Paan is not just a refreshment — it is a 1,000-year-old culinary ceremony of hospitality.',
            badge: 'Generational Paan Master',
          },
        ],
      },
    ];
  }

  // Fallback to Kedarnath 12 stops
  return KEDARNATH_JOURNEY_STOPS;
}

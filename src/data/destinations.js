// data/destinations.js
export const destinations = [
  {
    id: 'kasol',
    name: 'Kasol, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1331&auto=format&fit=crop',
    description: 'The mini Israel of India, nestled in Parvati Valley with stunning mountain views and hippie culture.',
    price: 14999,
    duration: '5D/4N',
    season: 'Mar-Jun',
    highlights: [
      'Parvati River',
      'Chalal Trek',
      'Israeli Cuisine',
      'Hot Springs',
      'Malana Village'
    ],
    bestTime: 'March to June, September to November',
    difficulty: 'Easy',
    rating: 4.8,
    reviews: 234,
    includes: ['Accommodation', 'Local Guide', 'Meals', 'Transport'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi & Travel to Kasol',
        description: 'Arrive at Delhi airport, travel to Kasol by overnight bus/volvo'
      },
      {
        day: 2,
        title: 'Kasol Exploration',
        description: 'Explore Kasol market, riverside cafes, and Parvati River'
      },
      {
        day: 3,
        title: 'Chalal Trek',
        description: 'Trek to Chalal village through pine forests'
      },
      {
        day: 4,
        title: 'Visit Malana Village',
        description: 'Explore the ancient Malana village and learn about local culture'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Return journey to Delhi'
      }
    ]
  },
  {
    id: 'manali',
    name: 'Manali, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=1074&auto=format&fit=crop',
    description: 'Queen of Hills with snow-capped mountains, apple orchards, and adventure sports.',
    price: 18999,
    duration: '6D/5N',
    season: 'Oct-Jun',
    highlights: [
      'Rohtang Pass',
      'Solang Valley',
      'Hidimba Temple',
      'Old Manali',
      'Beas River'
    ],
    bestTime: 'October to June',
    difficulty: 'Easy',
    rating: 4.7,
    reviews: 312,
    includes: ['Accommodation', 'Local Guide', 'Breakfast', 'Transport']
  },
  {
    id: 'ladakh',
    name: 'Leh-Ladakh',
    image: 'https://plus.unsplash.com/premium_photo-1697730119074-1bebeb4811c9?q=80&w=1170&auto=format&fit=crop',
    description: 'Land of high passes with breathtaking landscapes, ancient monasteries, and adventure.',
    price: 34999,
    duration: '8D/7N',
    season: 'Jun-Sep',
    highlights: [
      'Pangong Lake',
      'Nubra Valley',
      'Magnetic Hill',
      'Monasteries',
      'Khardung La'
    ],
    bestTime: 'June to September',
    difficulty: 'Moderate',
    rating: 4.9,
    reviews: 189,
    includes: ['Accommodation', 'Local Guide', 'All Meals', 'Transport', 'Inner Line Permits']
  },
  {
    id: 'kedarkantha',
    name: 'Kedarkantha Trek',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1600&auto=format&fit=crop',
    description: 'Winter wonderland trek perfect for beginners with panoramic Himalayan views.',
    price: 12999,
    duration: '6D/5N',
    season: 'Dec-Apr',
    highlights: [
      'Snow Trekking',
      'Summit View',
      'Campsite',
      'Forest Trails',
      'Sunrise Views'
    ],
    bestTime: 'December to April',
    difficulty: 'Easy-Moderate',
    rating: 4.6,
    reviews: 156,
    includes: ['Camping Gear', 'Guide', 'All Meals', 'Transport', 'Trek Permits']
  },
  {
    id: 'goa',
    name: 'Goa Beaches',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop',
    description: 'Tropical paradise with golden beaches, Portuguese heritage, and vibrant nightlife.',
    price: 16999,
    duration: '5D/4N',
    season: 'Oct-Mar',
    highlights: [
      'Beach Hopping',
      'Portuguese Architecture',
      'Water Sports',
      'Night Markets',
      'Seafood'
    ],
    bestTime: 'October to March',
    difficulty: 'Easy',
    rating: 4.5,
    reviews: 278,
    includes: ['Beach Resort', 'Breakfast', 'Transport', 'Guide']
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1600&auto=format&fit=crop',
    description: "God's Own Country with serene backwaters, lush greenery, and Ayurvedic wellness.",
    price: 21999,
    duration: '7D/6N',
    season: 'Sep-Mar',
    highlights: [
      'Houseboat Stay',
      'Alleppey Backwaters',
      'Tea Plantations',
      'Ayurvedic Spa',
      'Kathakali Dance'
    ],
    bestTime: 'September to March',
    difficulty: 'Easy',
    rating: 4.7,
    reviews: 201,
    includes: ['Houseboat Stay', 'All Meals', 'Guide', 'Transport', 'Spa Session']
  },
  {
    id: 'varanasi',
    name: 'Varanasi, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1717323821798-8cee2f6826ff?q=80&w=1074&auto=format&fit=crop',
    description: 'Spiritual capital of India with ancient temples, Ganga Aarti, and rich cultural heritage.',
    price: 12999,
    duration: '4D/3N',
    season: 'Oct-Mar',
    highlights: [
      'Ganga Aarti',
      'Morning Boat Ride',
      'Ancient Temples',
      'Street Food',
      'Sarnath'
    ],
    bestTime: 'October to March',
    difficulty: 'Easy',
    rating: 4.4,
    reviews: 189,
    includes: ['Hotel Stay', 'Guide', 'Breakfast', 'Transport']
  },
  {
    id: 'udaipur',
    name: 'Udaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1074&auto=format&fit=crop',
    description: 'City of Lakes with royal palaces, romantic boat rides, and stunning architecture.',
    price: 19999,
    duration: '5D/4N',
    season: 'Sep-Mar',
    highlights: [
      'Lake Pichola',
      'City Palace',
      'Boat Ride',
      'Jag Mandir',
      'Cultural Shows'
    ],
    bestTime: 'September to March',
    difficulty: 'Easy',
    rating: 4.6,
    reviews: 167,
    includes: ['Heritage Hotel', 'Guide', 'Breakfast', 'Transport', 'Boat Ride']
  },
  {
    id: 'dubai',
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1170&auto=format&fit=crop',
    description: 'Luxurious metropolis blending modern marvels with Arabian heritage in the desert.',
    price: 54999,
    duration: '7D/6N',
    season: 'Nov-Mar',
    highlights: [
      'Burj Khalifa',
      'Desert Safari',
      'Dubai Mall',
      'Palm Jumeirah',
      'Global Village'
    ],
    bestTime: 'November to March',
    difficulty: 'Easy',
    rating: 4.9,
    reviews: 345,
    includes: ['5-Star Hotel', 'Private Transfers', 'Sightseeing Tours', 'Entry Tickets']
  },
  {
    id: 'jaipur',
    name: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1170&auto=format&fit=crop',
    description: 'The Pink City known for its majestic forts, palaces, and vibrant bazaars.',
    price: 17999,
    duration: '4D/3N',
    season: 'Oct-Mar',
    highlights: [
      'Amber Fort',
      'City Palace',
      'Hawa Mahal',
      'Jantar Mantar',
      'Local Markets'
    ],
    bestTime: 'October to March',
    difficulty: 'Easy',
    rating: 4.5,
    reviews: 198,
    includes: ['Heritage Stay', 'Guide', 'Breakfast', 'Transport', 'Entry Fees']
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh, Uttarakhand',
    image: 'https://images.unsplash.com/photo-1595599512947-92c571860ca8?q=80&w=1170&auto=format&fit=crop',
    description: 'Yoga capital of the world with spiritual vibes, adventure sports, and Ganges views.',
    price: 11999,
    duration: '4D/3N',
    season: 'Sep-Jun',
    highlights: [
      'Ganga Aarti',
      'River Rafting',
      'Yoga Retreats',
      'Lakshman Jhula',
      'Beatles Ashram'
    ],
    bestTime: 'September to June',
    difficulty: 'Easy',
    rating: 4.6,
    reviews: 167,
    includes: ['Riverside Stay', 'Yoga Sessions', 'Adventure Sports', 'Transport']
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    image: 'https://images.unsplash.com/photo-1552465011-b4e30bf7349d?q=80&w=1169&auto=format&fit=crop',
    description: 'Tropical archipelago with pristine beaches, crystal clear waters, and marine life.',
    price: 28999,
    duration: '7D/6N',
    season: 'Oct-May',
    highlights: [
      'Radhanagar Beach',
      'Scuba Diving',
      'Cellular Jail',
      'Havelock Island',
      'Sea Walk'
    ],
    bestTime: 'October to May',
    difficulty: 'Easy',
    rating: 4.8,
    reviews: 234,
    includes: ['Beach Resort', 'Water Sports', 'All Meals', 'Transport', 'Guide']
  }
];
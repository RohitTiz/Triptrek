export const destinations = [
  {
    id: 'kasol',
    name: 'Kasol, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'The mini Israel of India, nestled in Parvati Valley with stunning mountain views and hippie culture.',
    price: 14999,
    duration: '5 Days',
    season: 'March to June',
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
    image: 'https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Queen of Hills with snow-capped mountains, apple orchards, and adventure sports.',
    price: 18999,
    duration: '6 Days',
    season: 'October to June',
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
    image: 'https://plus.unsplash.com/premium_photo-1697730119074-1bebeb4811c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Land of high passes with breathtaking landscapes, ancient monasteries, and adventure.',
    price: 34999,
    duration: '8 Days',
    season: 'June to September',
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
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    description: 'Winter wonderland trek perfect for beginners with panoramic Himalayan views.',
    price: 12999,
    duration: '6 Days',
    season: 'December to April',
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
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    description: 'Tropical paradise with golden beaches, Portuguese heritage, and vibrant nightlife.',
    price: 16999,
    duration: '5 Days',
    season: 'October to March',
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
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    description: "God's Own Country with serene backwaters, lush greenery, and Ayurvedic wellness.",
    price: 21999,
    duration: '7 Days',
    season: 'September to March',
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
    image: 'https://images.unsplash.com/photo-1717323821798-8cee2f6826ff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Spiritual capital of India with ancient temples, Ganga Aarti, and rich cultural heritage.',
    price: 12999,
    duration: '4 Days',
    season: 'October to March',
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
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'City of Lakes with royal palaces, romantic boat rides, and stunning architecture.',
    price: 19999,
    duration: '5 Days',
    season: 'September to March',
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
  }
]
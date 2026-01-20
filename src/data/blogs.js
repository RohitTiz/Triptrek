const blogs = [
  {
    id: 1,
    title: "Top 10 Must-Visit Places in Rajasthan",
    excerpt: "Discover the royal heritage, majestic forts, and vibrant culture of Rajasthan, India's land of kings.",
    content: `Rajasthan, the land of kings, is a treasure trove of architectural marvels, vibrant culture, and rich history. From the golden sands of the Thar Desert to the majestic palaces of Jaipur, Rajasthan offers an unforgettable experience for every traveler.

    ## Key Attractions:
    1. **Jaipur - The Pink City**: Visit the iconic Hawa Mahal, Amer Fort, and City Palace
    2. **Udaipur - City of Lakes**: Enjoy boat rides on Lake Pichola and visit the magnificent City Palace
    3. **Jodhpur - The Blue City**: Explore Mehrangarh Fort and the blue-painted houses
    4. **Jaisalmer - The Golden City**: Experience desert camping and visit the golden fort
    5. **Pushkar**: Witness the famous camel fair and the sacred Pushkar Lake

    ## Travel Tips:
    - Best time to visit: October to March
    - Try local cuisine: Dal Baati Churma, Laal Maas, Ghewar
    - Don't miss: Traditional folk dances and puppet shows`,
    author: "Rahul Sharma",
    date: "2024-02-15",
    readTime: "8 min read",
    category: "Destinations",
    tags: ["Rajasthan", "Heritage", "Culture", "Travel Guide"],
    image: "https://images.unsplash.com/photo-1524307875964-4c93f5b4a1c5?auto=format&fit=crop&w=800",
    featured: true,
    slug: "top-10-must-visit-places-in-rajasthan"
  },
  {
    id: 2,
    title: "Complete Guide to Indian Visa for Tourists",
    excerpt: "Everything you need to know about getting an Indian visa, requirements, and the application process.",
    content: `Planning a trip to India? Our comprehensive guide covers all aspects of obtaining an Indian tourist visa.

    ## Visa Types:
    1. **e-Tourist Visa (eTV)**: For tourists from eligible countries
    2. **Tourist Visa**: Regular tourist visa from Indian missions
    3. **Business Visa**: For business-related travel
    4. **Medical Visa**: For medical treatment in India

    ## Requirements:
    - Valid passport with 6 months validity
    - Recent passport-size photographs
    - Proof of accommodation
    - Return flight tickets
    - Financial proof

    ## Application Process:
    1. Complete online application
    2. Upload required documents
    3. Pay visa fee
    4. Receive e-visa via email`,
    author: "Priya Patel",
    date: "2024-02-10",
    readTime: "6 min read",
    category: "Travel Tips",
    tags: ["Visa", "Documentation", "Travel Tips", "India"],
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800",
    featured: true,
    slug: "complete-guide-to-indian-visa-for-tourists"
  },
  {
    id: 3,
    title: "Best Time to Visit the Himalayas",
    excerpt: "Discover the perfect seasons for trekking, sightseeing, and adventure in the majestic Himalayas.",
    content: `The Himalayas offer different experiences throughout the year. Here's a seasonal guide:

    ## Spring (March-May):
    - Pleasant weather
    - Blooming rhododendrons
    - Ideal for trekking

    ## Summer (June-August):
    - Monsoon season
    - Lush green landscapes
    - Lower tourist crowds

    ## Autumn (September-November):
    - Best time for trekking
    - Clear mountain views
    - Festival season

    ## Winter (December-February):
    - Snow-covered peaks
    - Skiing opportunities
    - Cold but beautiful`,
    author: "Anil Kumar",
    date: "2024-02-05",
    readTime: "5 min read",
    category: "Adventure",
    tags: ["Himalayas", "Trekking", "Mountains", "Adventure"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800",
    featured: false,
    slug: "best-time-to-visit-the-himalayas"
  },
  {
    id: 4,
    title: "Indian Street Food You Must Try",
    excerpt: "From spicy chaat to sweet jalebi, explore the delicious world of Indian street food.",
    content: `Indian street food is a culinary adventure. Here are must-try dishes:

    ## North Indian Delights:
    - **Chaat**: Tangy and spicy snacks
    - **Golgappe/Pani Puri**: Crisp puris with flavored water
    - **Chole Bhature**: Spicy chickpeas with fried bread

    ## South Indian Specials:
    - **Masala Dosa**: Crispy rice crepe with potato filling
    - **Idli Sambar**: Steamed rice cakes with lentil stew
    - **Vada**: Savory lentil donuts

    ## Sweets:
    - **Jalebi**: Deep-fried sweet pretzels
    - **Rasgulla**: Soft cottage cheese balls in syrup
    - **Gulab Jamun**: Deep-fried milk solids in sugar syrup`,
    author: "Sneha Verma",
    date: "2024-01-28",
    readTime: "7 min read",
    category: "Food",
    tags: ["Street Food", "Indian Cuisine", "Food Tour", "Culture"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800",
    featured: true,
    slug: "indian-street-food-you-must-try"
  },
  {
    id: 5,
    title: "Yoga Retreats in Rishikesh: A Spiritual Journey",
    excerpt: "Experience the birthplace of yoga through authentic retreats in the spiritual capital of India.",
    content: `Rishikesh, nestled in the foothills of the Himalayas, is the yoga capital of the world.

    ## Best Yoga Retreats:
    1. **Parmarth Niketan**: Daily yoga and meditation sessions
    2. **Sivananda Ashram**: Traditional yoga teachings
    3. **Ananda in the Himalayas**: Luxury wellness retreat

    ## What to Expect:
    - Morning and evening yoga sessions
    - Meditation and breathing exercises
    - Vegetarian meals
    - Spiritual discourses
    - Ganga Aarti experience

    ## Duration Options:
    - Weekend retreats (2-3 days)
    - Week-long programs (7 days)
    - Month-long intensive courses`,
    author: "Dr. Arjun Mehta",
    date: "2024-01-20",
    readTime: "6 min read",
    category: "Wellness",
    tags: ["Yoga", "Meditation", "Spiritual", "Rishikesh", "Wellness"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800",
    featured: false,
    slug: "yoga-retreats-in-rishikesh-spiritual-journey"
  },
  {
    id: 6,
    title: "Wildlife Safari in Indian National Parks",
    excerpt: "Spot tigers, elephants, and exotic birds in India's best wildlife sanctuaries and national parks.",
    content: `India boasts incredible biodiversity with numerous national parks and wildlife sanctuaries.

    ## Top National Parks:
    1. **Ranthambore National Park**: Famous for tiger sightings
    2. **Jim Corbett National Park**: Oldest national park in India
    3. **Kanha National Park**: Inspiration for The Jungle Book
    4. **Kaziranga National Park**: Home to one-horned rhinos
    5. **Periyar National Park**: Elephant paradise in Kerala

    ## Safari Tips:
    - Book safaris in advance
    - Early morning safaris are best for wildlife spotting
    - Follow park rules and regulations
    - Hire experienced guides
    - Carry binoculars and cameras

    ## Best Time to Visit:
    - Winter months (November to February)
    - Early mornings and late afternoons for animal activity`,
    author: "Rajesh Wildlife",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Wildlife",
    tags: ["Wildlife", "Safari", "National Parks", "Tiger", "Nature"],
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800",
    featured: true,
    slug: "wildlife-safari-in-indian-national-parks"
  }
];

export default blogs;
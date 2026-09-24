/**
 * Chillz Tour - Tour Packages & Destinations Dataset (Domestic India)
 * Developed by: Hemamalini S (CODETHRIVE INFOTECH)
 */

const tourPackages = [
  {
    id: "kerala-backwaters",
    title: "Enchanting Kerala Backwaters & Hills",
    category: "domestic",
    subCategory: "nature",
    tag: "Bestseller",
    location: "Kerala, India",
    duration: "5 Days / 4 Nights",
    price: 18999,
    originalPrice: 22999,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    overview: "Experience the magic of Kerala with serene backwater houseboats in Alleppey, lush tea plantations in Munnar, and pristine nature trails in Cochin.",
    inclusions: [
      "3-Star Hotel Stay & Deluxe Houseboat",
      "Daily Breakfast & Houseboat All Meals",
      "Private AC Sedan Car for Transfers & Sightseeing",
      "Kalaripayattu & Cultural Show Tickets",
      "GST & All Driver Allowances included"
    ],
    exclusions: [
      "Airfare / Train tickets",
      "Personal expenses & tipping",
      "Entry fees to spice gardens & national parks",
      "Travel Insurance"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Cochin & Transfer to Munnar", details: "Pickup from Cochin Airport/Railway station. Scenic drive past Cheeyappara & Valara waterfalls to Munnar. Overnight stay in Munnar." },
      { day: 2, title: "Munnar Tea Gardens & Mattupetty Sightseeing", details: "Visit Eravikulam National Park (Nilgiri Tahr), Tea Museum, Mattupetty Dam, Echo Point, and Kundala Lake." },
      { day: 3, title: "Munnar to Thekkady Spice Plantations", details: "Drive to Thekkady. Enjoy Periyar Lake boat safari, spice plantation tour, and elephant interaction." },
      { day: 4, title: "Thekkady to Alleppey Houseboat Cruise", details: "Board your private luxury houseboat in Alleppey. Cruise through canals, rivers, and paddy fields. All meals served on board." },
      { day: 5, title: "Alleppey to Cochin Airport Drop", details: "Morning breakfast on houseboat. Transfer to Cochin for shopping and departure." }
    ]
  },
  {
    id: "kashmir-paradise",
    title: "Magical Kashmir Valley & Snow Heights",
    category: "domestic",
    subCategory: "adventure",
    tag: "Popular",
    location: "Kashmir, India",
    duration: "6 Days / 5 Nights",
    price: 24500,
    originalPrice: 28999,
    rating: 4.95,
    reviewsCount: 189,
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    overview: "Immerse yourself in heavenly scenery with Shikara rides on Dal Lake, snow adventures in Gulmarg, and scenic valleys of Pahalgam.",
    inclusions: [
      "1 Night Luxury Houseboat & 4 Nights Premium Hotel",
      "Breakfast & Dinner Daily",
      "1 Hour Complimentary Shikara Ride on Dal Lake",
      "Non-AC Cab for transfers & sightseeing",
      "All toll taxes & driver charges"
    ],
    exclusions: [
      "Gondola cable car tickets in Gulmarg",
      "Pony rides & local taxi in Pahalgam (Aru/Betaab valley)",
      "Flight tickets to Srinagar",
      "Personal shopping & laundry"
    ],
    itinerary: [
      { day: 1, title: "Srinagar Arrival & Houseboat Check-in", details: "Warm welcome at Srinagar Airport. Check in to Dal Lake houseboat. Enjoy evening Shikara ride." },
      { day: 2, title: "Srinagar to Gulmarg Snow Paradise", details: "Excursion to Gulmarg. Ride the world's second-highest Gondola cable car and enjoy snow sports." },
      { day: 3, title: "Gulmarg to Pahalgam Valley of Shepherds", details: "Drive to Pahalgam via saffron fields & Avantipur ruins. Visit Lidder River bank." },
      { day: 4, title: "Pahalgam Local Exploration (Aru & Betaab Valley)", details: "Explore scenic Aru Valley, Betaab Valley, and Chandanwari. Return to Srinagar hotel." },
      { day: 5, title: "Srinagar Mughal Gardens Tour", details: "Visit Shalimar Bagh, Nishat Bagh, Chashme Shahi, and Shankaracharya Temple." },
      { day: 6, title: "Departure from Srinagar", details: "Shopping at local bazaar and drop at Srinagar Airport with sweet memories." }
    ]
  },
  {
    id: "goa-beach-bliss",
    title: "Vibrant Goa Beach & Party Getaway",
    category: "domestic",
    subCategory: "beach",
    tag: "Trending",
    location: "Goa, India",
    duration: "4 Days / 3 Nights",
    price: 14999,
    originalPrice: 17999,
    rating: 4.8,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    overview: "Relax on golden sands, experience thrilling water sports, explore Portuguese heritage churches, and enjoy Sunset cruise on the Mandovi River.",
    inclusions: [
      "Beach Resort stay with Swimming Pool",
      "Daily Buffet Breakfast",
      "Mandovi River Sunset Cruise Ticket",
      "North & South Goa Sightseeing Tour",
      "Airport / Madgaon Station Pickup & Drop"
    ],
    exclusions: [
      "Water sports charges (Parasailing, Jet ski, Banana ride)",
      "Meals other than breakfast",
      "Nightclub entry charges",
      "Personal expenses"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Goa & Resort Relaxation", details: "Transfer from Airport/Station to Resort. Evening free to chill at Calangute/Baga Beach." },
      { day: 2, title: "North Goa Beaches & Fort Aguada", details: "Visit Fort Aguada, Anjuna Beach, Vagator Beach, Baga Beach, and water sports center." },
      { day: 3, title: "South Goa Heritage & River Cruise", details: "Explore Old Goa Churches (Basilica of Bom Jesus), Mangueshi Temple, Dona Paula, and Sunset River Cruise." },
      { day: 4, title: "Departure", details: "Breakfast at resort, checkout, and drop at Goa Airport or Railway Station." }
    ]
  },
  {
    id: "himachal-adventure",
    title: "Shimla & Manali Mountain Thrill",
    category: "domestic",
    subCategory: "adventure",
    tag: "Top Rated",
    location: "Himachal Pradesh, India",
    duration: "7 Days / 6 Nights",
    price: 21999,
    originalPrice: 25999,
    rating: 4.9,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    overview: "Conquer mountain passes, roam the famous Mall Road in Shimla, visit Solang Valley snow point, and explore Kasol & Manikaran.",
    inclusions: [
      "Deluxe Hotel Accommodation with Mountain View",
      "Breakfast & Dinner included daily",
      "Private vehicle for full Himachal circuit",
      "Solang Valley sightseeing",
      "All driver fees, parking & permits"
    ],
    exclusions: [
      "Rohtang Pass permit & local taxi",
      "Adventure activities (Paragliding, River rafting, Skiing)",
      "Train/Flight tickets to Delhi/Chandigarh",
      "Laundry & extra food"
    ],
    itinerary: [
      { day: 1, title: "Delhi/Chandigarh to Shimla Drive", details: "Pickup and scenic mountain drive to Shimla. Evening stroll on Mall Road & Ridge." },
      { day: 2, title: "Shimla & Kufri Exploration", details: "Visit Kufri snow park, Himalayan Nature Park, Jakhoo Temple, and Christ Church." },
      { day: 3, title: "Shimla to Manali via Kullu Valley", details: "Drive along Beas river. Stop at Kullu Shawl Factory and River Rafting point." },
      { day: 4, title: "Manali Local Sightseeing", details: "Visit Hadimba Temple, Vashisht Hot Springs, Tibetan Monastery, and Club House." },
      { day: 5, title: "Solang Valley Snow Adventure", details: "Full day excursion to Solang Valley for paragliding, ropeway, and snow activities." },
      { day: 6, title: "Excursion to Kasol & Manikaran Sahib", details: "Drive to Parvati Valley, visit Kasol cafe culture and hot natural springs in Manikaran." },
      { day: 7, title: "Departure to Delhi/Chandigarh", details: "Drive back with scenic views and drop off at Delhi/Chandigarh." }
    ]
  },
  {
    id: "rajasthan-royal",
    title: "Royal Rajasthan Heritage & Forts",
    category: "domestic",
    subCategory: "culture",
    tag: "Heritage",
    location: "Rajasthan, India",
    duration: "6 Days / 5 Nights",
    price: 26500,
    originalPrice: 31009,
    rating: 4.85,
    reviewsCount: 118,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    overview: "Step back into the era of Kings with majestic palaces, desert camel safaris, and lake city views across Jaipur, Jodhpur, and Udaipur.",
    inclusions: [
      "Heritage Hotel stays in Jaipur, Jodhpur & Udaipur",
      "Daily Breakfast & Traditional Rajasthani Welcome Dinner",
      "AC Private Car with English speaking driver",
      "Cultural Folk Dance Show ticket",
      "Toll, parking, and driver allowances"
    ],
    exclusions: [
      "Fort & Palace entry tickets",
      "Camera fees",
      "Guide charges at monuments",
      "Personal expenses"
    ],
    itinerary: [
      { day: 1, title: "Jaipur Pink City Arrival & Sightseeing", details: "Arrival in Jaipur. Visit City Palace, Hawa Mahal, and Jantar Mantar observatory." },
      { day: 2, title: "Amer Fort & Jal Mahal Tour", details: "Elephant ride/Jeep ride at Amer Fort, Nahargarh Fort sunset view, and local bazaar shopping." },
      { day: 3, title: "Jaipur to Jodhpur Blue City Drive", details: "Drive to Jodhpur. Visit Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace." },
      { day: 4, title: "Jodhpur to Udaipur City of Lakes", details: "Enroute visit Ranakpur Jain Temples with intricate marble carvings. Arrive in Udaipur." },
      { day: 5, title: "Udaipur Lake Pichola & Palaces", details: "Visit City Palace Udaipur, Saheliyon Ki Bari, and enjoy evening Boat ride on Lake Pichola." },
      { day: 6, title: "Departure from Udaipur", details: "Breakfast and drop at Udaipur Airport or Railway Station." }
    ]
  },
  {
    id: "andaman-escape",
    title: "Andaman Tropical Islands & Coral Reefs",
    category: "domestic",
    subCategory: "beach",
    tag: "Island Special",
    location: "Andaman Islands, India",
    duration: "5 Days / 4 Nights",
    price: 32000,
    originalPrice: 38000,
    rating: 4.92,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    overview: "Explore turquoise waters, white sand beaches, light & sound show at Cellular Jail, and Havelock Island's world-famous Radhanagar Beach.",
    inclusions: [
      "Island Resort stay with Breakfast",
      "Private Ferry / Makruzz tickets between Port Blair & Havelock",
      "Cellular Jail Light & Sound Show ticket",
      "AC Vehicle for all island transfers",
      "All port entry permits"
    ],
    exclusions: [
      "Scuba Diving, Sea Walk & Snorkeling gear fees",
      "Airfare to Port Blair",
      "Lunch & Dinner",
      "Personal expenses"
    ],
    itinerary: [
      { day: 1, title: "Port Blair Arrival & Cellular Jail", details: "Arrive at Port Blair. Check in, visit Corbyn's Cove Beach and Cellular Jail. Attend Light & Sound Show." },
      { day: 2, title: "Port Blair to Havelock Island Ferry", details: "Cruise to Havelock Island. Visit Asia's best Radhanagar Beach for spectacular sunset." },
      { day: 3, title: "Elephant Beach Water Sports & Coral Reefs", details: "Speedboat ride to Elephant Beach for water activities, snorkeling, and coral viewing." },
      { day: 4, title: "Havelock to Port Blair & Chidiyatapu Sunset", details: "Return ferry to Port Blair. Visit Chidiyatapu (Bird Island) for tranquil sunset views." },
      { day: 5, title: "Departure", details: "Drop at Port Blair Airport with unforgettable island memories." }
    ]
  },
  {
    id: "golden-triangle",
    title: "Golden Triangle Tour: Delhi, Agra & Jaipur",
    category: "domestic",
    subCategory: "culture",
    tag: "Heritage",
    location: "North India",
    duration: "5 Days / 4 Nights",
    price: 19500,
    originalPrice: 23000,
    rating: 4.89,
    reviewsCount: 130,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    overview: "Experience India's rich history visiting the iconic Taj Mahal in Agra, Red Fort & Qutub Minar in Delhi, and Amer Fort in Jaipur.",
    inclusions: [
      "4-Star Luxury Hotels in Agra & Jaipur",
      "Daily Buffet Breakfast",
      "Private AC Car for complete Delhi-Agra-Jaipur circuit",
      "Toll taxes, parking & driver allowances",
      "Batter-operated bus ride at Taj Mahal"
    ],
    exclusions: [
      "Monument entry tickets & camera fees",
      "Lunch & Dinner",
      "Personal shopping & tipping"
    ],
    itinerary: [
      { day: 1, title: "Delhi Sightseeing & Drive to Agra", details: "Pickup in Delhi. Visit India Gate, Qutub Minar, and Lotus Temple. Drive to Agra via Taj Expressway." },
      { day: 2, title: "Taj Mahal Sunrise & Agra Fort", details: "Early morning sunrise visit to Taj Mahal. Visit Agra Fort and local marble handicraft market." },
      { day: 3, title: "Agra to Jaipur via Fatehpur Sikri", details: "Enroute visit abandoned Mughal city of Fatehpur Sikri and Chand Baori stepwell. Arrive in Jaipur." },
      { day: 4, title: "Jaipur Pink City Palaces & Forts", details: "Visit Amer Fort, City Palace, Hawa Mahal photo stop, and Jantar Mantar." },
      { day: 5, title: "Jaipur to Delhi Departure", details: "Breakfast at hotel, optional local handicraft shopping, drive back to Delhi for departure." }
    ]
  },
  {
    id: "coorg-ooty-hill",
    title: "Coorg & Ooty South India Hills Special",
    category: "domestic",
    subCategory: "nature",
    tag: "Hills & Nature",
    location: "Karnataka & Tamil Nadu",
    duration: "6 Days / 5 Nights",
    price: 20999,
    originalPrice: 24999,
    rating: 4.87,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    overview: "Escape to the coffee plantations of Coorg, mist-covered valleys of Ooty, and enjoy the Nilgiri Mountain Heritage Toy Train ride.",
    inclusions: [
      "3-Star Hill Resort Stays in Coorg & Ooty",
      "Daily Breakfast & Dinner",
      "Private AC Car from Bangalore / Mysore",
      "Nilgiri Toy Train Ticket (Ooty to Coonoor)",
      "Coffee plantation walk"
    ],
    exclusions: [
      "Boating charges at Ooty Lake",
      "Entry fees to Botanical Gardens & Abbey Falls",
      "Airfare/Train tickets to Bangalore"
    ],
    itinerary: [
      { day: 1, title: "Bangalore/Mysore to Coorg Drive", details: "Pickup from Bangalore/Mysore. Visit Namdroling Monastery (Golden Temple) and check in to Coorg resort." },
      { day: 2, title: "Coorg Plantation & Abbey Falls", details: "Visit Abbey Falls, Raja's Seat, Dubare Elephant Camp, and coffee plantation tour." },
      { day: 3, title: "Coorg to Ooty Queen of Hill Stations", details: "Scenic drive through Bandipur National Park tiger reserve. Arrive in Ooty." },
      { day: 4, title: "Ooty Lake & Botanical Gardens", details: "Visit Ooty Botanical Garden, Doddabetta Peak, Ooty Lake boating, and Rose Garden." },
      { day: 5, title: "Coonoor Heritage Toy Train Excursion", details: "Heritage toy train ride to Coonoor. Visit Sim's Park, Dolphin's Nose, and Tea Gardens." },
      { day: 6, title: "Departure to Bangalore/Mysore", details: "Breakfast and drive back to Bangalore/Mysore for return journey." }
    ]
  }
];

const galleryImages = [
  { id: 1, title: "Serene Alleppey Houseboat", category: "domestic", location: "Kerala", url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Taj Mahal Sunrise View", category: "domestic", location: "Agra", url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Dal Lake Shikara Ride", category: "domestic", location: "Srinagar", url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Goa Sunny Coast", category: "domestic", location: "Goa", url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Solang Valley Snow Peaks", category: "domestic", location: "Manali", url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "Hawa Mahal Jaipur", category: "domestic", location: "Rajasthan", url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80" },
  { id: 7, title: "Andaman Radhanagar Beach", category: "domestic", location: "Havelock", url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" },
  { id: 8, title: "Munnar Tea Plantations", category: "domestic", location: "Kerala", url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80" }
];

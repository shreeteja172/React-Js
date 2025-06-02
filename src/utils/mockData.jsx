const restaurantsData = [
  {
    id: 1,
    title: "Vaishali Restaurant",
    photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    deliveryTime: "30-45 mins",
    category: "Non-Veg",
    menu: [
      { id: 101, name: "Paneer Biryani", price: 700, rating: 4.2, category: "Veg", offer: "10% off with Swiggy" },
      { id: 102, name: "Chicken Biryani", price: 800, rating: 4.5, category: "Non-Veg", offer: "Free drink on orders above ₹1000" }
    ]
  },
  {
    id: 2,
    title: "Shabree Restaurant",
    photo: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    deliveryTime: "20-30 mins",
    category: "Veg",
    menu: [
      { id: 201, name: "Vegan Burger", price: 300, rating: 4.5, category: "Veg", offer: "5% cashback" },
      { id: 202, name: "Healthy Bowl", price: 350, rating: 4.0, category: "Veg", offer: "Free salad with every bowl" }
    ]
  },
  {
    id: 3,
    title: "Kayani Bakery",
    photo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    deliveryTime: "40-60 mins",
    category: "Veg",
    menu: [
      { id: 301, name: "Mutton Biryani", price: 1500, rating: 4.0, category: "Non-Veg", offer: "15% off on weekends" },
      { id: 302, name: "Vegan Delights", price: 1200, rating: 4.3, category: "Veg", offer: "Buy 1 Get 1 Free" }
    ]
  },
  {
    id: 4,
    title: "Goodluck Cafe",
    photo: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    deliveryTime: "25-35 mins",
    category: "Veg",
    menu: [
      { id: 401, name: "Vegetarian Fusion Bowl", price: 700, rating: 3.8, category: "Veg", offer: "10% off on orders above ₹500" },
      { id: 402, name: "Seasonal Veg Curry", price: 650, rating: 4.1, category: "Veg", offer: "Free dessert with meal" }
    ]
  },
  {
    id: 5,
    title: "Vohuman Cafe",
    photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    deliveryTime: "35-50 mins",
    category: "Veg",
    menu: [
      { id: 501, name: "Vegan Gluten-Free Bowl", price: 1500, rating: 4.3, category: "Veg", offer: "15% off with Swiggy" },
      { id: 502, name: "Pav Bhaji", price: 400, rating: 4.0, category: "Veg", offer: "Combo meal discounts" }
    ]
  },
  {
    id: 6,
    title: "Chitale Bandhu Mithaiwale",
    photo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    deliveryTime: "30-45 mins",
    category: "Veg",
    menu: [
      { id: 601, name: "Family Veg Feast", price: 700, rating: 3.9, category: "Veg", offer: "Free sweets with order above ₹1000" },
      { id: 602, name: "Mithai Platter", price: 500, rating: 4.5, category: "Veg", offer: "Buy 2 get 1 free" }
    ]
  },
  {
    id: 7,
    title: "Fergusson College Canteen",
    photo: "https://images.unsplash.com/photo-1559329007-40df8a9345d8",
    deliveryTime: "20-30 mins",
    category: "Non-Veg",
    menu: [
      { id: 701, name: "Grilled Burger", price: 300, rating: 4.1, category: "Non-Veg", offer: "Combo with fries offer" },
      { id: 702, name: "Spicy Chicken Wings", price: 350, rating: 4.3, category: "Non-Veg", offer: "Free drink with combo" }
    ]
  },
  {
    id: 8,
    title: "Green Leaf Cafe",
    photo: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    deliveryTime: "25-40 mins",
    category: "Veg",
    menu: [
      { id: 801, name: "Vegan Fusion Grill", price: 700, rating: 4.4, category: "Veg", offer: "10% off on first order" },
      { id: 802, name: "Quinoa Salad", price: 500, rating: 4.1, category: "Veg", offer: "Free smoothie with salad" }
    ]
  },
  {
    id: 9,
    title: "Durvankur Restaurant",
    photo: "https://images.unsplash.com/photo-1543332164-6e82f355badc",
    deliveryTime: "30-50 mins",
    category: "Veg",
    menu: [
      { id: 901, name: "Fresh Veg Stews", price: 700, rating: 3.7, category: "Veg", offer: "10% off on weekday lunches" },
      { id: 902, name: "Farm Fresh Salad", price: 600, rating: 3.9, category: "Veg", offer: "Combo with fresh juices" }
    ]
  },
  {
    id: 10,
    title: "Kayani Restaurant",
    photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    deliveryTime: "35-45 mins",
    category: "Non-Veg",
    menu: [
      { id: 1001, name: "Tikka Biryani", price: 1500, rating: 4.6, category: "Non-Veg", offer: "20% off on dinner orders" },
      { id: 1002, name: "Butter Chicken", price: 1400, rating: 4.7, category: "Non-Veg", offer: "Free naan with every order" }
    ]
  },
  {
    id: 11,
    title: "Sujata Mastani",
    photo: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deliveryTime: "20-25 mins",
    category: "Non-Veg",
    menu: [
      { id: 1101, name: "Egg Biryani", price: 300, rating: 4.0, category: "Non-Veg", offer: "Free drink with orders above ₹500" },
      { id: 1102, name: "Mastani Shake", price: 250, rating: 4.8, category: "Veg", offer: "Buy 1 get 1 half price" }
    ]
  },
  {
    id: 12,
    title: "Herbal Veg Kitchen",
    photo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    deliveryTime: "40-50 mins",
    category: "Veg",
    menu: [
      { id: 1201, name: "Herb-Infused Vegetarian Delicacies", price: 1500, rating: 4.3, category: "Veg", offer: "15% off on combos" },
      { id: 1202, name: "Seasonal Veg Soup", price: 650, rating: 4.1, category: "Veg", offer: "Free bread basket with soup" }
    ]
  }
];

export default restaurantsData;

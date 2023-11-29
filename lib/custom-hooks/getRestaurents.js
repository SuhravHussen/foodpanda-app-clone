// @ts-nocheck
const sultanDineCover = require("../../assets/images/restaurants/sultans_dine_cover.jpg");
const panshiRestaurantCover = require("../../assets/images/restaurants/panshi_restaurent_cover.jpg");
const handiRestaurantCover = require("../../assets/images/restaurants/handi_cover.jpg");
const bhaibhai = require("../../assets/images/restaurants/bhai_bhai_chap_gar_cover.jpg");
const testyTrest = require("../../assets/images/restaurants/testy_treat_cover.jpg");
const pizzuburg = require("../../assets/images/restaurants/pizzaburg_cover.jpg");
const restaurants = [
  {
    name: `Sultan's Dine`,
    cover: sultanDineCover,
    discount: "10%",
    coupon: {
      off: 80,
      at: 399,
      code: "BKASHWC",
    },
    deliveryTimeInMinutes: 15,
    tags: ["Kacci", "Pulao", "Mutton", "Chicken", "beef"],
    deliveryFee: 5,
    awayFromUserLocation: "200m",
  },
  {
    name: `Panshi Restaurant`,
    cover: panshiRestaurantCover,
    discount: "6%",
    coupon: {
      off: 100,
      at: 499,
      code: "NEWPANSHI",
    },
    deliveryTimeInMinutes: 15,
    tags: ["Dal", "Rice", "Beef", "Bhorta", "Shatkora"],
    deliveryFee: 20,
    awayFromUserLocation: "2km",
  },
  {
    name: `Handi Restaurant`,
    cover: handiRestaurantCover,
    discount: "15%",
    coupon: {
      off: 30,
      at: 299,
      code: "HANDINEW",
    },
    deliveryTimeInMinutes: 15,
    tags: ["Chinese", "Deshi", "Fish", "chicken", "beef"],
    deliveryFee: 30,
    awayFromUserLocation: "2m",
  },
  {
    name: `Bhai Bhai Chap Ghar`,
    cover: bhaibhai,
    discount: "4%",
    coupon: {
      off: 50,
      at: 299,
      code: "QASHWC",
    },
    deliveryTimeInMinutes: 25,
    tags: ["Chicken", "Chap", "Nun", "Grill", "beef"],
    deliveryFee: 50,
    awayFromUserLocation: "1.5Km",
  },
  {
    name: `Testy Treat`,
    cover: testyTrest,
    discount: "10%",
    coupon: {
      off: 80,
      at: 399,
      code: "BKASHWC",
    },
    deliveryTimeInMinutes: 15,
    tags: ["Cake", "Momos", "Sweet", "Fastfood", "beef"],
    deliveryFee: 5,
    awayFromUserLocation: "100m",
  },
  {
    name: `Pizza burg`,
    cover: pizzuburg,
    discount: "7%",
    coupon: {
      off: 50,
      at: 299,
      code: "NEWOAD",
    },
    deliveryTimeInMinutes: 10,
    tags: ["Pizza", "Chicken", "Siclian", "Pepperonu", "beef"],
    deliveryFee: 5,
    awayFromUserLocation: "200m",
  },
];

export default getRestaurantsData = () => {
  return restaurants;
};

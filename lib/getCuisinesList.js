// @ts-nocheck
const biriyanImage = require("../assets/images/cuisines/biriyani.jpg");
const kebabImage = require("../assets/images/cuisines/kebab.jpg");
const meatImage = require("../assets/images/cuisines/meat.jpg");
const indianImage = require("../assets/images/cuisines/indian.jpg");
const fastFoodImage = require("../assets/images/cuisines/fast_food.jpg");
const beverageImage = require("../assets/images/cuisines/beverage.jpg");
const curryImage = require("../assets/images/cuisines/curry.jpg");
const middleEastern = require("../assets/images/cuisines/middle_eastern.jpg");
const dessertImage = require("../assets/images/cuisines/dessert.jpg");
const asianImage = require("../assets/images/cuisines/asian.jpg");
const snackImage = require("../assets/images/cuisines/snacks.jpg");
const bangladeshiImage = require("../assets/images/cuisines/bangladeshi.jpg");
const cakesImage = require("../assets/images/cuisines/cakes.jpg");
const turkishImage = require("../assets/images/cuisines/turkish.png");
const riceDishesImage = require("../assets/images/cuisines/rice_dishes.png");

const cuisines = [
  { title: "Biriyani", Image: biriyanImage, id: 1 },
  { title: "Kebab", Image: kebabImage, id: 2 },
  { title: "Meat", Image: meatImage, id: 3 },
  { title: "Indian", Image: indianImage, id: 4 },
  { title: "Fast Food", Image: fastFoodImage, id: 5 },
  { title: "Beverage", Image: beverageImage, id: 6 },
  { title: "Curry", Image: curryImage, id: 15 },
  { title: "Middle Eastern", Image: middleEastern, id: 7 },
  { title: "Dessert", Image: dessertImage, id: 8 },
  { title: "Asian", Image: asianImage, id: 9 },
  { title: "Snacks", Image: snackImage, id: 10 },
  { title: "Bangladeshi", Image: bangladeshiImage, id: 11 },
  { title: "Cakes", Image: cakesImage, id: 12 },
  { title: "Turkish", Image: turkishImage, id: 13 },
  { title: "Rice Dishes", Image: riceDishesImage, id: 14 },
];

const getCuisinesList = () => cuisines;

export default getCuisinesList;

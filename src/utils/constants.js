import {
  trackToastClick,
  trackDoordashClick,
  trackUberEatsClick,
  trackGrubhubClick,
} from "@/lib/gtmEvents";

export const deliveryServices = [
  {
    name: "Toast",
    href: "https://order.toasttab.com/online/migas-steakhouse-16311-miramar-pkwy",
    img: "/assets/toast-logo.jpg",
    alt: "Toast",
    tracker: trackToastClick,
  },
  {
    name: "DoorDash",
    href: "https://www.doordash.com/store/miga's-bread-deli-meat-&-wine-miramar-105895/?event_type=autocomplete&pickup=false",
    img: "/assets/doordash.jpg",
    alt: "DoorDash",
    tracker: trackDoordashClick,
  },
  {
    name: "Uber Eats",
    href: "https://www.ubereats.com/store/migas/rMaZBuaLRfG7_Oq0-yUklg/c7cd2aeb-d461-4693-b7c1-be48838b547e?diningMode=DELIVERY",
    img: "/assets/ubereats.jpg",
    alt: "Uber Eats",
    tracker: trackUberEatsClick,
  },
  {
    name: "Postmates",
    href: "https://postmates.com/store/migas/rMaZBuaLRfG7_Oq0-yUklg?diningMode=DELIVERY",
    img: "/assets/postmates-logo.jpg",
    alt: "Postmates",
    tracker: trackGrubhubClick,
  },
];

export const menuImgsSectionsArray = [
  { id: "appetizers", name: "Appetizers", file: ["ap1", "ap2", "ap3"] },
  {
    id: "grilled",
    name: "Grilled",
    file: ["grill3", "grill4", "grill5", "grill6", "grill7"],
  },
  {
    id: "chefSpecials",
    name: "Chef's Specials",
    file: ["grill2", "grill1", "grill8"],
  },
  {
    id: "breakfastsbrunch",
    name: "Breakfasts/Brunch",
    file: ["bf1", "bf2", "bf3", "brunch"],
  },

  {
    id: "breads",
    name: "Breads",
    file: ["bread1", "bread2", "bread3"],
  },
  {
    id: "pastas",
    name: "Pastas",
    file: ["pastas"],
  },
  {
    id: "kids",
    name: "Kids",
    file: ["kids"],
  },
  { id: "veganFish", name: "Vegan & Fish", file: ["vegan", "fish"] },

  { id: "desserts", name: "Desserts", file: ["desserts"] },
  { id: "drinks", name: "Drinks", file: ["drinks", "drinks1"] },
];

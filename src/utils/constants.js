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

import { getProjectImages } from "./getProjectImages";

export interface TemplateItem {
  id: string;
  name: string;
  url: string;
  brand: string;
  screenshots?: string[];
}

export interface Category {
  name: string;
  items: TemplateItem[];
}

export const CATEGORIES: Category[] = [
  {
    name: "E-commerce",
    items: [
      {
        id: "multi_vendor_ecommerce_platform",
        name: "Multi-vendor Ecommerce Platform",
        brand: "6Valley",
        url: "https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597",
      },
      {
        id: "laravel_ecommerce_platform",
        name: "Laravel Ecommerce Platform",
        brand: "FleetCart",
        url: "https://codecanyon.net/item/fleetcart-laravel-ecommerce-system/23014826",
      },
      {
        id: "multi_vendor_marketplace",
        name: "Multi-vendor Marketplace System",
        brand: "eShop",
        url: "https://codecanyon.net/item/eshop-web-multi-vendor-ecommerce-marketplace-cms/34380052",
      },
      {
        id: "pwa_ecommerce_pos",
        name: "PWA Ecommerce System with POS",
        brand: "Shopperzz",
        url: "https://codecanyon.net/item/shopperzz-pwa-ecommerce-cms-with-pos-whatsapp-ordering-inventory-management/53541820",
      },
      {
        id: "grocery_marketplace_platform",
        name: "Online Grocery Marketplace",
        brand: "Nest",
        url: "https://codecanyon.net/item/nest-multivendor-organic-grocery-laravel-ecommerce/35109578",
      },
      {
        id: "react_ecommerce_frontend",
        name: "React Ecommerce Frontend",
        brand: "6amMart",
        url: "https://codecanyon.net/item/6ammart-react-user-website/45370351",
      },
      {
        id: "minimal_ecommerce_store",
        name: "Minimal Ecommerce Store",
        brand: "Ninico",
        url: "https://codecanyon.net/item/ninico-minimal-laravel-ecommerce-shop/47620972",
      },
      {
        id: "ecommerce_cms_platform",
        name: "Ecommerce CMS Platform",
        brand: "AmazCart",
        url: "https://codecanyon.net/item/amazcart-laravel-ecommerce-system-cms/34962179",
      },
      {
        id: "multipurpose_ecommerce_platform",
        name: "Multi-purpose Ecommerce Platform",
        brand: "Martfury",
        url: "https://codecanyon.net/item/martfury-multipurpose-laravel-ecommerce-system/29925223",
      },
    ],
  },

  {
    name: "Restaurant",
    items: [
      {
        id: "single_restaurant_ordering",
        name: "Single Restaurant Ordering System",
        brand: "Single Restaurant",
        url: "https://codecanyon.net/item/single-restaurant-food-ordering-website-and-delivery-boy-app-with-admin-panel/28563040",
      },
      {
        id: "qr_menu_system",
        name: "QR Code Menu System",
        brand: "Restaurant QR",
        url: "https://codecanyon.net/item/restaurant-website-management-with-qr-code-menu-food-order/28396210",
      },
      {
        id: "restaurant_management_saas",
        name: "Restaurant Management SaaS",
        brand: "TableTrack",
        url: "https://codecanyon.net/item/tabletrack-the-complete-saas-restaurant-management-solution/55116396",
      },
      {
        id: "qr_menu_pos_system",
        name: "QR Menu & POS System",
        brand: "FoodScan",
        url: "https://codecanyon.net/item/foodscan-qr-code-restaurant-menu-maker-and-contactless-table-ordering-system-with-restaurant-pos/50038622",
      },
      {
        id: "online_food_ordering_platform",
        name: "Online Food Ordering Platform",
        brand: "Foodigo",
        url: "https://codecanyon.net/item/foodigo-online-restaurant-and-food-ordering-platfrom/58983788",
      },
      {
        id: "restaurant_management_software",
        name: "Restaurant Management Software",
        brand: "Bhojon",
        url: "https://codecanyon.net/item/bhojon-best-restaurant-management-software-with-restaurant-website/23525997",
      },
    ],
  },

  {
    name: "Booking",
    items: [
      {
        id: "car_rental_booking_system",
        name: "Car Rental Booking System",
        brand: "Carento",
        url: "https://codecanyon.net/item/carento-car-dealer-rental-booking-laravel-system/55782539",
      },
      {
        id: "salon_booking_platform",
        name: "Salon & Parlour Booking Platform",
        brand: "eSalon",
        url: "https://codecanyon.net/item/esalon-parlour-and-salon-booking-full-solution/49278605",
      },
      {
        id: "event_ticket_booking_platform",
        name: "Event Ticket Booking Platform",
        brand: "Evento",
        url: "https://codecanyon.net/item/evento-multivendor-event-ticket-booking-website/45659949",
      },
      {
        id: "car_listing_rental_platform",
        name: "Car Listing & Rental Platform",
        brand: "Carbaz",
        url: "https://codecanyon.net/item/carbaz-car-listing-car-rental-directory-laravel-script/51992871",
      },
      {
        id: "car_rental_module",
        name: "Car Rental Module",
        brand: "6amMart",
        url: "https://codecanyon.net/item/6ammart-car-rental-module-addon/56881320",
      },
      {
        id: "vacation_rental_marketplace",
        name: "Vacation Rental Marketplace",
        brand: "VRent",
        url: "https://codecanyon.net/item/vrent-vacation-rental-marketplace/19418596",
      },
    ],
  },

  {
    name: "Learning",
    items: [
      {
        id: "learning_management_system",
        name: "Learning Management System",
        brand: "Mentor LMS",
        url: "https://codecanyon.net/item/mentor-lms-learning-management-system/59092700",
      },
      {
        id: "online_course_platform",
        name: "Online Course Platform",
        brand: "SkillGro",
        url: "https://codecanyon.net/item/skillgro-course-learning-management-system-laravel-script-lms/53608520",
      },
    ],
  },

  {
    name: "POS / Business / ERP / Others",
    items: [
      {
        id: "multi_store_pos_system",
        name: "Multi-store POS System",
        brand: "Smart POS",
        url: "https://codecanyon.net/item/smart-pos-saas-for-multistore-retailers-built-on-laravel/57441492",
      },
      {
        id: "invoicing_inventory_system",
        name: "Invoicing & Inventory System",
        brand: "Delta",
        url: "https://codecanyon.net/item/delta-invoicing-pos-billing-inventory-management-system-with-gst-crm/51635135",
      },
      {
        id: "business_erp_platform",
        name: "All-in-One Business ERP",
        brand: "ERPGo",
        url: "https://codecanyon.net/item/erpgo-saas-all-in-one-business-erp-with-project-account-hrm-crm/33263426",
      },
      {
        id: "online_payment_gateway",
        name: "Online Payment Gateway",
        brand: "PayMoney",
        url: "https://codecanyon.net/item/paymoney-secure-online-payment-gateway/22341650",
      },
      {
        id: "medical_practice_management",
        name: "Medical Practice Management System",
        brand: "Dentic",
        url: "https://codecanyon.net/item/dentic-dental-care-office-management-system/41775739",
      },
    ],
  },

  {
    name: "Real Estate / Travel / E-Book / HRM / Jobs",
    items: [
      {
        id: "real_estate_agency_platform",
        name: "Real Estate Agency Platform",
        brand: "Homzen",
        url: "https://codecanyon.net/item/homzen-laravel-real-estate-agency-portal-multilingual/52829651",
      },
      {
        id: "real_estate_listing_system",
        name: "Real Estate Listing System",
        brand: "Flex Home",
        url: "https://codecanyon.net/item/flex-home-laravel-real-estate-multilingual-system/25197385",
      },
      {
        id: "vacation_rental_platform",
        name: "Vacation Rental Platform",
        brand: "RentalSpace",
        url: "https://codecanyon.net/item/rentalspace-vacation-rental-script/60691370",
      },
      {
        id: "ebook_management_system",
        name: "E-book Management System",
        brand: "eBook",
        url: "https://codecanyon.net/item/ebook-laravel-cms-script/25794201",
      },
      {
        id: "hr_payroll_management_system",
        name: "HR & Payroll Management System",
        brand: "HRMifly",
        url: "https://codecanyon.net/item/hrmifly-saas-complete-payroll-and-hr-management-system-hrm/58648534",
      },
      {
        id: "jobs_professional_platform",
        name: "Jobs & Professionals Platform",
        brand: "ProForum",
        url: "https://codecanyon.net/item/proforum-professionals-forum-and-jobs/48755957",
      },
    ],
  },
];

// Helper function to find template by ID
export function findTemplateById(id: string): TemplateItem | null {
  for (const category of CATEGORIES) {
    const template = category.items.find((item) => item.id === id);
    if (template) return template;
  }
  return null;
}

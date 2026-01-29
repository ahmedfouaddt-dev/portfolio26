import Link from "next/link";
import { getProjectImages } from "@/lib/getProjectImages";
import ClientTemplateGrid from "./ClientTemplateGrid";
import Layout from "@/components/layout/Layout";

interface TemplateItem {
  id: string;
  name: string;
  url: string;
  brand: string;
  screenshots: string[];
}

const CATEGORIES: { name: string; items: TemplateItem[] }[] = [
  {
    name: "E-commerce",
    items: [
      {
        id: "multi_vendor_ecommerce_platform",
        name: "Multi-vendor Ecommerce Platform",
        brand: "6Valley",
        url: "https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597",
        screenshots: getProjectImages("multi_vendor_ecommerce_platform"),
      },
      {
        id: "laravel_ecommerce_platform",
        name: "Laravel Ecommerce Platform",
        brand: "FleetCart",
        url: "https://codecanyon.net/item/fleetcart-laravel-ecommerce-system/23014826",
        screenshots: getProjectImages("laravel_ecommerce_platform"),
      },
      {
        id: "multi_vendor_marketplace",
        name: "Multi-vendor Marketplace System",
        brand: "eShop",
        url: "https://codecanyon.net/item/eshop-web-multi-vendor-ecommerce-marketplace-cms/34380052",
        screenshots: getProjectImages("multi_vendor_marketplace"),
      },
      {
        id: "pwa_ecommerce_pos",
        name: "PWA Ecommerce System with POS",
        brand: "Shopperzz",
        url: "https://codecanyon.net/item/shopperzz-pwa-ecommerce-cms-with-pos-whatsapp-ordering-inventory-management/53541820",
        screenshots: getProjectImages("pwa_ecommerce_pos"),
      },
      {
        id: "grocery_marketplace_platform",
        name: "Online Grocery Marketplace",
        brand: "Nest",
        url: "https://codecanyon.net/item/nest-multivendor-organic-grocery-laravel-ecommerce/35109578",
        screenshots: getProjectImages("grocery_marketplace_platform"),
      },
      {
        id: "react_ecommerce_frontend",
        name: "React Ecommerce Frontend",
        brand: "6amMart",
        url: "https://codecanyon.net/item/6ammart-react-user-website/45370351",
        screenshots: getProjectImages("react_ecommerce_frontend"),
      },
      {
        id: "minimal_ecommerce_store",
        name: "Minimal Ecommerce Store",
        brand: "Ninico",
        url: "https://codecanyon.net/item/ninico-minimal-laravel-ecommerce-shop/47620972",
        screenshots: getProjectImages("minimal_ecommerce_store"),
      },
      {
        id: "ecommerce_cms_platform",
        name: "Ecommerce CMS Platform",
        brand: "AmazCart",
        url: "https://codecanyon.net/item/amazcart-laravel-ecommerce-system-cms/34962179",
        screenshots: getProjectImages("ecommerce_cms_platform"),
      },
      // {
      //   id: "laravel_vue_marketplace",
      //   name: "Laravel & Vue Marketplace System",
      //   brand: "iShop",
      //   url: "https://codecanyon.net/item/ishop-multivendor-laravel-vue-ecommerce-cms/43235652",
      //   screenshots: getProjectImages("laravel_vue_marketplace"),
      // },
      {
        id: "multipurpose_ecommerce_platform",
        name: "Multi-purpose Ecommerce Platform",
        brand: "Martfury",
        url: "https://codecanyon.net/item/martfury-multipurpose-laravel-ecommerce-system/29925223",
        screenshots: getProjectImages("multipurpose_ecommerce_platform"),
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
        screenshots: getProjectImages("single_restaurant_ordering"),
      },
      {
        id: "qr_menu_system",
        name: "QR Code Menu System",
        brand: "Restaurant QR",
        url: "https://codecanyon.net/item/restaurant-website-management-with-qr-code-menu-food-order/28396210",
        screenshots: getProjectImages("qr_menu_system"),
      },
      // {
      //   id: "saas_website_builder",
      //   name: "SaaS Website Builder",
      //   brand: "Businesso",
      //   url: "https://codecanyon.net/item/businesso-business-website-builder-saas-multitenancy/34880110",
      //   screenshots: getProjectImages("saas_website_builder"),
      // },
      {
        id: "restaurant_management_saas",
        name: "Restaurant Management SaaS",
        brand: "TableTrack",
        url: "https://codecanyon.net/item/tabletrack-the-complete-saas-restaurant-management-solution/55116396",
        screenshots: getProjectImages("restaurant_management_saas"),
      },
      {
        id: "qr_menu_pos_system",
        name: "QR Menu & POS System",
        brand: "FoodScan",
        url: "https://codecanyon.net/item/foodscan-qr-code-restaurant-menu-maker-and-contactless-table-ordering-system-with-restaurant-pos/50038622",
        screenshots: getProjectImages("qr_menu_pos_system"),
      },
      {
        id: "online_food_ordering_platform",
        name: "Online Food Ordering Platform",
        brand: "Foodigo",
        url: "https://codecanyon.net/item/foodigo-online-restaurant-and-food-ordering-platfrom/58983788",
        screenshots: getProjectImages("online_food_ordering_platform"),
      },
      {
        id: "restaurant_management_software",
        name: "Restaurant Management Software",
        brand: "Bhojon",
        url: "https://codecanyon.net/item/bhojon-best-restaurant-management-software-with-restaurant-website/23525997",
        screenshots: getProjectImages("restaurant_management_software"),
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
        screenshots: getProjectImages("car_rental_booking_system"),
      },
      {
        id: "salon_booking_platform",
        name: "Salon & Parlour Booking Platform",
        brand: "eSalon",
        url: "https://codecanyon.net/item/esalon-parlour-and-salon-booking-full-solution/49278605",
        screenshots: getProjectImages("salon_booking_platform"),
      },
      {
        id: "event_ticket_booking_platform",
        name: "Event Ticket Booking Platform",
        brand: "Evento",
        url: "https://codecanyon.net/item/evento-multivendor-event-ticket-booking-website/45659949",
        screenshots: getProjectImages("event_ticket_booking_platform"),
      },
      {
        id: "car_listing_rental_platform",
        name: "Car Listing & Rental Platform",
        brand: "Carbaz",
        url: "https://codecanyon.net/item/carbaz-car-listing-car-rental-directory-laravel-script/51992871",
        screenshots: getProjectImages("car_listing_rental_platform"),
      },
      {
        id: "car_rental_module",
        name: "Car Rental Module",
        brand: "6amMart",
        url: "https://codecanyon.net/item/6ammart-car-rental-module-addon/56881320",
        screenshots: getProjectImages("car_rental_module"),
      },
      {
        id: "vacation_rental_marketplace",
        name: "Vacation Rental Marketplace",
        brand: "VRent",
        url: "https://codecanyon.net/item/vrent-vacation-rental-marketplace/19418596",
        screenshots: getProjectImages("vacation_rental_marketplace"),
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
        screenshots: getProjectImages("learning_management_system"),
      },
      {
        id: "online_course_platform",
        name: "Online Course Platform",
        brand: "SkillGro",
        url: "https://codecanyon.net/item/skillgro-course-learning-management-system-laravel-script-lms/53608520",
        screenshots: getProjectImages("online_course_platform"),
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
        screenshots: getProjectImages("multi_store_pos_system"),
      },
      {
        id: "invoicing_inventory_system",
        name: "Invoicing & Inventory System",
        brand: "Delta",
        url: "https://codecanyon.net/item/delta-invoicing-pos-billing-inventory-management-system-with-gst-crm/51635135",
        screenshots: getProjectImages("invoicing_inventory_system"),
      },
      {
        id: "business_erp_platform",
        name: "All-in-One Business ERP",
        brand: "ERPGo",
        url: "https://codecanyon.net/item/erpgo-saas-all-in-one-business-erp-with-project-account-hrm-crm/33263426",
        screenshots: getProjectImages("business_erp_platform"),
      },
      {
        id: "online_payment_gateway",
        name: "Online Payment Gateway",
        brand: "PayMoney",
        url: "https://codecanyon.net/item/paymoney-secure-online-payment-gateway/22341650",
        screenshots: getProjectImages("online_payment_gateway"),
      },
      {
        id: "medical_practice_management",
        name: "Medical Practice Management System",
        brand: "Dentic",
        url: "https://codecanyon.net/item/dentic-dental-care-office-management-system/41775739",
        screenshots: getProjectImages("medical_practice_management"),
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
        screenshots: getProjectImages("real_estate_agency_platform"),
      },
      {
        id: "real_estate_listing_system",
        name: "Real Estate Listing System",
        brand: "Flex Home",
        url: "https://codecanyon.net/item/flex-home-laravel-real-estate-multilingual-system/25197385",
        screenshots: getProjectImages("real_estate_listing_system"),
      },
      {
        id: "vacation_rental_platform",
        name: "Vacation Rental Platform",
        brand: "RentalSpace",
        url: "https://codecanyon.net/item/rentalspace-vacation-rental-script/60691370",
        screenshots: getProjectImages("vacation_rental_platform"),
      },
      {
        id: "ebook_management_system",
        name: "E-book Management System",
        brand: "eBook",
        url: "https://codecanyon.net/item/ebook-laravel-cms-script/25794201",
        screenshots: getProjectImages("ebook_management_system"),
      },
      {
        id: "hr_payroll_management_system",
        name: "HR & Payroll Management System",
        brand: "HRMifly",
        url: "https://codecanyon.net/item/hrmifly-saas-complete-payroll-and-hr-management-system-hrm/58648534",
        screenshots: getProjectImages("hr_payroll_management_system"),
      },
      {
        id: "jobs_professional_platform",
        name: "Jobs & Professionals Platform",
        brand: "ProForum",
        url: "https://codecanyon.net/item/proforum-professionals-forum-and-jobs/48755957",
        screenshots: getProjectImages("jobs_professional_platform"),
      },
    ],
  },
];
// We intentionally do NOT expose product names or URLs in the UI.
// Show a neutral media placeholder (image/video) and generic CTAs.

export default function SellPage() {
  return (
    <Layout headerStyle={2} footerStyle={2}>
      <main className="main">
        <section className="py-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div style={{ marginTop: 100 }}>
                <h1 className="fs-32 mb-2">
                  Ready-made Projects — Purchase & Setup
                </h1>
                <p className="text-muted mb-0">
                  I can setup, customize and deploy any of these full products
                  as a service. Click Preview to see screenshots, or Hire me to
                  get a tailored quote.
                </p>
              </div>
              <div>
                <Link href="/pricing" className="btn btn-primary">
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Client Template Grid with Modal */}
            <ClientTemplateGrid categories={CATEGORIES} />
          </div>
        </section>
      </main>
    </Layout>
  );
}

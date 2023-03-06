import { blue, gray, yellow } from "./classes";

// Sidebar Top Links
export const dashboardTopLink = [
  {
    key: "Home",
    label: "Home",
    path: "/",
  },
  {
    key: "Blog",
    label: "Blog",
    path: "/blog",
  },
  {
    key: "Products",
    label: "Products",
    path: "/add-products",
  },
  {
    key: "imageSlider",
    label: "Image Slider",
    path: "/imageSlider",
  },
  {
    key: "YoutubeVideos",
    label: "Youtube Videos",
    path: "/youtubevideos",
  },
  {
    key: "ClientLogos",
    label: "Client Logos",
    path: "/clientlogos",
  },
  {
    key: "Review",
    label: "Review",
    path: "/review",
  },
  {
    key: "ReachUSFrom",
    label: "Reach US From",
    path: "/reachusfrom",
  },
  {
    key: "Contact Details",
    label: "Contact Details",
    path: "/contactdetails",
  },
];

// Dashboard Total Data
export const dashTotalData = [
  {
    key: "Active Viewers",
    title: "Active Viewers",
    title_span: "₹5000",
    img: require("../../images/sales.png"),
    class: blue,
  },
];

// Dashboard Recent Data
export const dashRecentData = [
  {
    key: "Cameron Williamson",
    title: "Cameron Williamson",
    title_span: "2 Minutes Ago",
    transaction: "+₹5000",
    img: require("../../images/cameron.png"),
    class: blue,
    bg: "bg-[#F4F4FA]",
  },
  {
    key: "Wade Warren",
    title: "Wade Warren",
    title_span: "2 Minutes Ago",
    transaction: "+₹5000",
    img: require("../../images/wade.png"),
    class: yellow,
    border: "border-2",
    border_color: "border-[#1861aa80]",
  },
  {
    key: "Kristin Western",
    title: "Kristin Western",
    title_span: "2 Minutes Ago",
    transaction: "+₹5000",
    img: require("../../images/kristin.png"),
    class: yellow,
    border: "border-2",
    border_color: "border-[#1861aa80]",
  },
  {
    key: "Kathryn Murphy",
    title: "Kathryn Murphy",
    title_span: "2 Minutes Ago",
    transaction: "+₹5000",
    img: require("../../images/kathryn.png"),
    class: yellow,
    border: "border-2",
    border_color: "border-[#1861aa80]",
  },
  {
    key: "Cody Fisher",
    title: "Cody Fisher",
    title_span: "2 Minutes Ago",
    transaction: "+₹5000",
    img: require("../../images/cody.png"),
    class: yellow,
    border: "border-2",
    border_color: "border-[#1861aa80]",
  },
];

// Dashboard History Table Title
export const dashHistoryTableTitle = [
  {
    key: "Tracking ID",
    title: "Tracking ID",
  },
  {
    key: "Recipient",
    title: "Recipient",
  },
  {
    key: "Status",
    title: "Status",
  },
  {
    key: "Payment Method",
    title: "Payment Method",
  },
];

// Dashboard History Table Data
export const dashHistoryTableData = [
  {
    key: "Ipad Air 1",
    tracking_id: "#12323645",
    title: "Ipad Air",
    img: require("../../images/ipad.png"),
    status: "Pending",
    payment: "Visa card 0236",
  },
  {
    key: "Ipad Air 2",
    tracking_id: "#85614858",
    title: "Ipad Air",
    img: require("../../images/ipad.png"),
    status: "Completed",
    payment: "Paypal 0263",
  },
  {
    key: "Ipad Air 3",
    tracking_id: "#98751531",
    title: "Ipad Air",
    img: require("../../images/ipad.png"),
    status: "Pending",
    payment: "Visa card 0254",
  },
  {
    key: "Ipad Air 4",
    tracking_id: "#15469716",
    title: "Ipad Air",
    img: require("../../images/ipad.png"),
    status: "Completed",
    payment: "Paypal 5452",
  },
];

// Dashboard Graph
export const weekSummary = [
  {
    key: "Income",
    title: "Income",
    title_span: "30%",
    img: require("../../images/green.png"),
    gap: "gap-x-6",
    class_left: "ml-4",
  },
  {
    key: "Expense",
    title: "Expense",
    title_span: "46%",
    img: require("../../images/blue.png"),
    gap: "gap-x-6",
    class: "mt-6",
    class_left: "ml-2",
  },
  {
    key: "Unknown",
    title: "Unknown",
    title_span: "10%",
    img: require("../../images/yellow.png"),
    gap: "gap-x-6",
    class: "mt-6",
    class_left: "ml-2",
  },
];

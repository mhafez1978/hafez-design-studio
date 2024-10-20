export const AppPages = [
  { pageTitle: "Home", pageURL: "/", description: "This is the homepage" },
  {
    pageTitle: "Residential",
    subPages: [
      {
        pageTitle: "Services",
        href: "/residential/services",
        description: "Residential Services",
      },
      {
        pageTitle: "Projects",
        href: "/residential/projects",
        description: "Residential Projects",
      },
    ],
  },
  {
    pageTitle: "Commercial",
    subPages: [
      {
        pageTitle: "Services",
        href: "/commercial/services",
        description: "Commercial Services",
      },
      {
        pageTitle: "Projects",
        href: "/commercial/projects",
        description: "Commercial Projects",
      },
    ],
  },
  {
    pageTitle: "About",
    pageURL: "#about",
    description: "About Us",
  },
];

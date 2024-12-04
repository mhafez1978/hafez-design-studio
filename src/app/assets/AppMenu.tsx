export const AppPages = [
  { pageTitle: "Home", pageURL: "/", description: "This is the homepage" },
  {
    pageTitle: "About",
    pageURL: "/about",
    description: "About Us",
  },
  {
    pageTitle: "Portfolio",
    pageURL: "/portfolio",
    description: "This is the homepage",
  },
  {
    pageTitle: "Services",
    subPages: [
      {
        pageTitle: "Residentials ",
        href: "/residential/services",
        description: "Residentials Services",
      },
      {
        pageTitle: "Designers",
        href: "/designers/services",
        description: "Designers Services",
      },
    ],
  },
  {
    pageTitle: "Blog",
    pageURL: "/blog",
    description: "Blog",
  },
];

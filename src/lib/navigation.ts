export const getNavigation = () => {
  return [
    {
      title: "Home",
      path: "/",
      visible: true,
    },
    {
      title: "About Me",
      path: "/about",
      visible: true,
    },
    {
      title: "Projects",
      path: "/projects",
      visible: true,
    },
    // {
    //   title: "Wishlist",
    //   path: "/wishlist",
    // },
    {
      title: "Blogs",
      path: "/blogs",
      visible: true,
    },
    {
      title: "Ask me anything",
      path: "/ask_me",
      visible: true,
    },
    {
      title: "Riang-riang Raya",
      path: "/raya",
      visible: new Date().getDate() === 9 || new Date().getDate() === 10,
    },
    // {
    //   title: "Courses",
    //   path: "/courses",
    //   tag: ["Upcoming"],
    // },
    {
      title: "My Three.js Journey",
      path: "/threejs",
      visible: true,
    },
    {
      title: "Venture into Forest",
      path: "/venture-into-forest",
      visible: true,
    },
  ];
};

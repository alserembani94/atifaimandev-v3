// export const getNavigation = async (): Promise<Navigation> => {
//   const response = await fetch(
//     `https://dev.to/api/articles?username=alserembani`,
//   );
//   const { articles } = await response.json();
//   const navigation: Navigation = articles.map((article) => ({
//     title: article.title,
//     path: `/articles/${article.slug}`,
//   }));
//   return navigation;
// }

export const getNavigation = () => {
  return [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Me",
      path: "/about",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Wishlist",
      path: "/wishlist",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Venture into Forest",
      path: "/venture-into-forest",
    },
  ];
};

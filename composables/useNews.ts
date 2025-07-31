// composables/useMusicList.ts
export const useNews = () => {
  // News
  const News = [
    {
      img: "/imgs/news1.avif",
      title: "Article",
      description: "What’s On This Week",
    },
    {
      img: "/imgs/news2.avif",
      title: "Interview",
      description: "James Hype The Road to Now",
    },
    {
      img: "/imgs/news3.avif",
      title: "Article",
      description: "The Roots of Patrick Topping",
    },
    {
      img: "/imgs/news4.avif",
      title: "Article",
      description: "Hï Ibiza Guide To July",
    },
    {
      img: "/imgs/news5.avif",
      title: "Article",
      description: "Hï Ibiza Announces New Residents for 2025",
    },

    {
      img: "/imgs/news6.avif",
      title: "Article",
      description: "Explore The #1 Club In The World",
    },
    {
      img: "/imgs/news4.avif",
      title: "Article",
      description: "Hï Ibiza Guide To July",
    },
    {
      img: "/imgs/news5.avif",
      title: "Article",
      description: "Hï Ibiza Announces New Residents for 2025",
    },

    {
      img: "/imgs/news6.avif",
      title: "Article",
      description: "Explore The #1 Club In The World",
    },
    {
      img: "/imgs/news4.avif",
      title: "Article",
      description: "Hï Ibiza Guide To July",
    },
    {
      img: "/imgs/news5.avif",
      title: "Article",
      description: "Hï Ibiza Announces New Residents for 2025",
    },

    {
      img: "/imgs/news6.avif",
      title: "Article",
      description: "Explore The #1 Club In The World",
    },
    {
      img: "/imgs/news6.avif",
      title: "Article",
      description: "Explore The #1 Club In The World",
    },
  ].map((item) => ({
    ...item,
    slug:
      "/news/" +
      item.description
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "") // loại bỏ ký tự đặc biệt
        .replace(/\s+/g, "-"), // chuyển khoảng trắng thành dấu -
  }));

  return News;
};

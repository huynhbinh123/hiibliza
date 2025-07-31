// composables/useMusicList.ts
export const useMusicList = () => {
  const musicList = [
    {
      img: "/imgs/offplaylsit.avif",
      title: "Playlist",
      description: "Hï Ibiza Official Playlist",
    },
    {
      img: "/imgs/jonathankaspar.avif",
      title: "Audio",
      description: "Jonathan Kaspar Live At Hï Ibiza 2024",
    },
    {
      img: "/imgs/laylabenitez.avif",
      title: "Playlist",
      description: "Layla Benitez Live At Hï Ibiza 2024",
    },
    {
      img: "/imgs/b2bdan.avif",
      title: "Audio",
      description: "Eats Everything B2B Dan Shake Live At Hï Ibiza",
    },
    {
      img: "/imgs/djminx.avif",
      title: "Audio",
      description: "DJ Minx Live At Hï Ibiza 2024",
    },
    {
      img: "/imgs/ameme.avif",
      title: "Audio",
      description: "AMÉMÉ Live At Hï Ibiza 2024",
    },
    {
      img: "/imgs/offplaylsit.avif",
      title: "Playlist",
      description: "Hï Ibiza Official Playlist",
    },
    {
      img: "/imgs/offplaylsit.avif",
      title: "Playlist",
      description: "Hï Ibiza Official Playlist",
    },
    {
      img: "/imgs/jonathankaspar.avif",
      title: "Audio",
      description: "Jonathan Kaspar Live At Hï Ibiza 2024",
    },
    {
      img: "/imgs/laylabenitez.avif",
      title: "Playlist",
      description: "Layla Benitez Live At Hï Ibiza 2024",
    },
    {
      img: "/imgs/b2bdan.avif",
      title: "Audio",
      description: "Eats Everything B2B Dan Shake Live At Hï Ibiza",
    },
    {
      img: "/imgs/djminx.avif",
      title: "Audio",
      description: "DJ Minx Live At Hï Ibiza 2024",
    },
    {
      img: "/imgs/ameme.avif",
      title: "Audio",
      description: "AMÉMÉ Live At Hï Ibiza 2024",
    },
    {
      img: "/imgs/offplaylsit.avif",
      title: "Video",
      description: "Hï Ibiza Official Playlist",
    },
  ].map((item) => ({
    ...item,
    slug:
      "/music/" +
      item.description
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-"),
  }));

  return musicList;
};

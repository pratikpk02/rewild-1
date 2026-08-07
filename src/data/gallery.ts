export type GalleryImage = {
  image: string;
  title: string;
  subtitle: string;
  featured?: boolean;
};

export const gallery: GalleryImage[] = [
  {
    image: "/images/gallery/1.jpg",
    title: "Reconnect",
    subtitle: "Slow mornings surrounded by nature.",
    featured: true,
  },
  {
    image: "/images/gallery/2.jpg",
    title: "Movement",
    subtitle: "Rediscover how your body loves to move.",
  },
  {
    image: "/images/gallery/3.jpg",
    title: "Community",
    subtitle: "Meaningful conversations around shared experiences.",
  },
  {
    image: "/images/gallery/4.jpg",
    title: "Strength",
    subtitle: "Train with purpose, not pressure.",
    featured: true,
  },
  {
    image: "/images/gallery/5.jpg",
    title: "Stillness",
    subtitle: "Moments of calm between adventures.",
  },
  {
    image: "/images/gallery/6.jpg",
    title: "Adventure",
    subtitle: "Explore forests, trails and hidden spaces.",
  },
  {
    image: "/images/gallery/7.jpg",
    title: "Presence",
    subtitle: "Disconnect to reconnect.",
  },
  {
    image: "/images/gallery/8.jpg",
    title: "Nature",
    subtitle: "Every corner invites you to slow down.",
  },
  {
    image: "/images/gallery/9.jpg",
    title: "Belonging",
    subtitle: "Leave with memories that stay.",
    featured: true,
  },
];
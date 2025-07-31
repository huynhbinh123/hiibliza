export interface EventCard {
  date: string;
  time: string;
  location: string;
  title: string;
  slug: string;

  stages?: {
    name: string;
    artists: string[];
  }[];
}

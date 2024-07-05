export interface Project {
  title: string;
  image: string;
  date: string;
  categories: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: 'Autocone',
    image: 'assets/images/projects/rocketdab.web.png',
    date: 'June 2024',
    categories: 'web blog',
    description: 'A simple web page to sell NFT rockets.',
    url: 'https://github.com/kdmist/Autocone.git'
  },
  {
    title: 'food_delivery',
    image: 'assets/images/projects/food-delivery.web.png',
    date: 'May 2024',
    categories: 'web page',
    description: 'An food delivery landing page',
    url: 'https://github.com/kdmist/food_delivery.git'
  },
  {
    title: 'NesterAdmin-master',
    image: 'assets/images/projects/nester.webp.png',
    date: 'October 2023',
    categories: 'App',
    description: 'An employee management system ~',
    url: 'https://github.com/kdmist/NesterAdmin-master.git'
  },
];
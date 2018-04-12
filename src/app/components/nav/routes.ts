export interface Route {
  path: string;
  name: string;
}

export const routes = [
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/technical',
    name: 'Technical'
  },
  {
    path: '/projects',
    name: 'Projects'
  },
  {
    path: '/contact',
    name: 'Contact'
  },
  {
    path: '/blog',
    name: 'Blog'
  },
];

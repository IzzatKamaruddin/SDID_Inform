export type Author = {
    name: string;
    image: string;
    bio?: string;
    _id?: number | string;
    _ref?: number | string;
  };
  
  export type Menus = {
    _id: number;
    title: string;
    path: string;
    slug?: any;
    metadata?: string;
    body?: string;
    mainImage?: any;
    author?: Author;
    tags?: string[];        
    publishedAt?: string;
  };
  
  export type Menu = {
    _id: number;
    title: string;
    link: string;
    slug?: any;
    metadata?: string;
    body?: string;
    mainImage?: any;
    author?: Author;
    tags?: string[];
    publishedAt?: string;
  };
  
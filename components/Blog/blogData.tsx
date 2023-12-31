import { Blog } from "@/types/blog";

const BlogData: Blog[] = [
  { 
    _id: 1,
    mainImage: "/images/blog/blog-01.png",
    title: "Communications and Multimedia",
    link: "/blog/blog-details-c&m",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
  { 
    _id: 2,
    mainImage: "/images/blog/blog-01.png",
    title: "Postal and Courier",
    link: "/blog/blog-p&c",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
  { 
    _id: 3,
    mainImage: "/images/blog/blog-02.png",
    title: "Rangkaian Pakej",
    link: `/blog/blog-pa`,
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
  {
    _id: 4,
    mainImage: "/images/blog/blog-03.png",
    title: "State Dossier.",
    link:`/blog/blog-sd`,
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
  { 
    _id: 5,
    mainImage: "/images/blog/blog-03.png",
    title: "Parcel Analytics",
    link:`/blog/blog-c&m`,
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
  
];

export default BlogData;

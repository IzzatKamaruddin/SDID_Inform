import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import Link from "next/link";

const SingleBlogPage = async () => {
  return (
    <>
      <title>{`Dashboard Details`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              

            <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mb-7.5">
                  Categories
                </h4>

                <ul>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="/">Home</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="/blog/commdash">Dashboard</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="/#features">Portfolio</a>
                  </li>
                  
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/blog-02.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                </div>

                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mt-11 mb-5">
                  Postal and Courier
                </h2>

                <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Siti Farhanah, Wan Nurwajihah 
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: July 30, 2023
                    </span>{" "}
                  </li>
                
                </ul>

                <div className="blog-details">
                  <p>
                  A one-stop platform that makes it easier for users to discover insights into the Postal & Courier industry
                  </p>

                  <p>
                  The concept of a one-stop platform dedicated to the Postal & Courier industry represents a game-changing solution for both industry professionals and 
                  the general public. Such a platform would serve as a centralized hub where users can seamlessly access a wealth of valuable insights and information about 
                  this vital sector. It would offer comprehensive data on the latest trends, market analyses, regulations, and innovations within the postal and courier domain. 
                  Users, ranging from logistics companies, postal services, e-commerce businesses, to individuals sending packages, would benefit from a unified source of knowledge. 
                  Whether it's tracking shipment routes, staying informed about emerging technologies, understanding environmental sustainability practices, or simply finding the best 
                  courier service for their needs, this platform would empower users to make informed decisions, foster collaboration, and drive the industry forward. In an ever-evolving 
                  landscape like the postal and courier sector, such a platform would promote efficiency, transparency, and informed decision-making.
                  </p>

                  <Link href={`/blog/p&c-dash`}>
                  {<h5 className="font-semibold text-2xl text-black dark:text-white mb-7.5">
                  Click here to browse the data
                </h5>}
                  {/* {post.title.slice(0, 40)}... */}
                </Link>



                </div>

                

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;

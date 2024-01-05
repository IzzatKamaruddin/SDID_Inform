import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";

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
                    <a href="/#features">Portfolio Menu</a>
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
                  Parcel Analytics
                </h2>

                <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Siti Farhanah, Wan Nurwajihah 
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: September 10, 2023
                    </span>{" "}
                  </li>
                  
                </ul>

                <div className="blog-details">
                  <p>
                  A one-stop platform that makes it easier for users to discover insights into the Communications & Multimedia
                  as well as Postal & Courier industry
                  </p>

                  <p>
                  The envisioned one-stop platform serves as a comprehensive hub facilitating streamlined access to in-depth insights and data for both the Communications & Multimedia
                   and Postal & Courier industries. Offering a user-friendly interface, the platform combines comprehensive industry data, analytics tools, expert analysis, and regulatory 
                   updates to cater to diverse user segments including businesses, investors, and researchers. Users can customize their experience, access up-to-date information, and network 
                   with industry peers while staying informed about the evolving landscape of these sectors, making it a valuable resource for industry professionals and those interested in these fields.
                  </p>

                  {/* <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div> */}

                  <h3 className="pt-8">Contacts</h3>

                  <p>
        For further clarification, you may email <a href="mailto:statistics@mcmc.gov.my">statistics@mcmc.gov.my</a>, or contact the following designated officers:
    </p>
    <ul>
        <li>Broadband</li>
        <ul>
            <li>En Hafiz Yazid at <a href="tel:03-8688-7961">03-8688 7961</a> (<a href="mailto:hafiz.yazid@mcmc.gov.my">hafiz.yazid@mcmc.gov.my</a>)</li>
            <li>En. Izzat Kamaruddin at <a href="tel:03-8688-7441">03-8688 7441</a> (<a href="mailto:izzat.kamaruddin@mcmc.gov.my">izzat.kamaruddin@mcmc.gov.my</a>)</li>
        </ul>
        <li>Mobile-cellular, Fixed-telephone, and Pay TV</li>
        <ul>
            <li>Cik Azilawati Masri at <a href="tel:03-8688-8235">03-8688 8235</a> (<a href="mailto:azilawati@mcmc.gov.my">azilawati@mcmc.gov.my</a>)</li>
            <li>Pn. Putri Nur Syarfa Maizan at <a href="tel:03-8688-7443">03-8688 7443</a> (<a href="mailto:nursyarfa.maizan@mcmc.gov.my">nursyarfa.maizan@mcmc.gov.my</a>)</li>
        </ul>
    </ul>
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

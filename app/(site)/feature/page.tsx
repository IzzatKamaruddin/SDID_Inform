"use client"


import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import featuresData from "@/components/Features/featuresData";
import SingleFeature from "@/components/Features/SingleFeature";
import SectionHeader from "@/components/Common/SectionHeader";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Data Catalog",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return (

    
    <>
    <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
    <SectionHeader
            headerInfo={{
              title: "DASHBOARD PORTFOLIO",
              subtitle: "SDID Dashboards",
              description: `INFORM also provides data analytics tools to users allowing them to create visualizations such as graphs, maps, calendars, dashboards and reports based on the information.`,
            }}
    />

      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </div>
    </section>
    
    
    </>
  );
};

export default BlogPage;

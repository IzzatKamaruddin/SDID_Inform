import React from "react";
import SectionHeader from "../Common/SectionHeader";
import MenuItem from "./MenuItem";
import DataMenu from "./MenuData";

const Menu = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `INFORM Menu`,
              subtitle: `Menu`,
              description: `
              INFORM By Izzat is a comprehensive data management platform encompassing intuitive dashboards, a centralized Data Hub for seamless integration, a structured Data Catalog for efficient data organization, and robust Data Query capabilities for extracting insights.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
          {DataMenu.slice(0, 5).map((blog, key) => (
            <MenuItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

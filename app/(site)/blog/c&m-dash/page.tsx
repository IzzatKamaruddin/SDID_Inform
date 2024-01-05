import React, { useEffect, useState } from 'react';
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import Link from "next/link";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fetchDatafbb() {
  try {
    const fbbsubsData = await prisma.fbbsubs.findMany();
    return fbbsubsData;
  } catch (error) {
    console.error('Error fetching fbbsubs data:', error);
    return null; // Return null in case of an error
  }
}

async function fetchDatambb() {
  try {
    const mbbsubsData = await prisma.mbbsubs.findMany({take : 17,});
    return mbbsubsData;
  } catch (error) {
    console.error('Error fetching mbbsubs data:', error);
    return null; // Return null in case of an error
  }
}

export default async function Data() {
  const fbbsubsData = await fetchDatafbb();
  const mbbsubsData = await fetchDatambb();

  return (
<>
<title>{`Communications and Multimedia`}</title>
<section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
  <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
    <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            
    <div className="md:w-1/3 lg:w-[49%]">
  <div className="lg:w-3/3">
    <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
      <div className="mb-10 w-full overflow-hidden">
        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
          <div className="text-center mt-20">
            <h1 className="text-5xl font-bold">FBB Subs Data</h1>
            <li>
            <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
            {fbbsubsData ? (
              <table className="mx-auto"> {/* Add mx-auto to center horizontally */}
                <thead>
                  <tr>
                    <th>State</th>
                    <th>Quarter</th>
                    <th>Year</th>
                    <th>Subs</th>
                  </tr>
                </thead>
                <tbody>
                  {fbbsubsData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.state}</td>
                      <td>{item.declaration_quarter}</td>
                      <td>{item.declaration_year}</td>
                      <td>{item.total_subs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data available</p>
            )}</ul></li>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
   




{/* =============================================================================================== */}



 
<div className="md:w-1/2 lg:w-[49%]">
  <div className="lg:w-3/3">
    <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
      <div className="mb-10 w-full overflow-hidden">
        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
          <div className="text-center mt-20">
            <h1 className="text-5xl font-bold">MBB Subs Data</h1>
            <li>
            <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
            {mbbsubsData ? (
              <table className="mx-auto"> 
                <thead>
                  <tr>
                    <th>State</th>
                    <th>Quarter</th>
                    <th>Indicator</th>
                    <th>Subscriptions</th>
                  </tr>
                </thead>
                <tbody>
                  {mbbsubsData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.State}</td>
                      <td>{item.Quarter}</td>
                      <td>{item.Indicator}</td>
                      <td>{item.Subscriptions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data available</p>
            )}
            </ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button                    
  aria-label="to dashboard" className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5">
Dashboard </button>
</div>




    </div>    
    </div>
  </section>
  </>
  );
}

 




// import React, { useEffect, useState } from 'react';
// import Image from "next/image";
// import SharePost from "@/components/Blog/SharePost";
// import RelatedPost from "@/components/Blog/RelatedPost";
// import Link from "next/link";
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function fetchDatafbb() {
//   try {
//     const fbbsubsData = await prisma.fbbsubs.findMany();
//     return fbbsubsData;
//   } catch (error) {
//     console.error('Error fetching fbbsubs data:', error);
//     return null; // Return null in case of an error
//   }
// }

// async function fetchDatambb() {
//   try {
//     const mbbsubsData = await prisma.mbbsubs.findMany();
//     return mbbsubsData;
//   } catch (error) {
//     console.error('Error fetching mbbsubs data:', error);
//     return null; // Return null in case of an error
//   }
// }

// export default function Data() {
//   const [fbbsubsData, setFbbsubsData] = useState([]);
//   const [mbbsubsData, setMbbsubsData] = useState([]);

//   // Function to create the Highcharts chart
//   const createHighchartsChart = () => {
//     Highcharts.chart('container', {
//       chart: {
//         type: 'column'
//       },
//       title: {
//         text: 'Corn vs wheat estimated production for 2020',
//         align: 'left'
//       },
//       subtitle: {
//         text:
//           'Source: <a target="_blank" ' +
//           'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
//         align: 'left'
//       },
//       xAxis: {
//         categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
//         crosshair: true,
//         accessibility: {
//           description: 'Countries'
//         }
//       },
//       yAxis: {
//         min: 0,
//         title: {
//           text: '1000 metric tons (MT)'
//         }
//       },
//       tooltip: {
//         valueSuffix: ' (1000 MT)'
//       },
//       plotOptions: {
//         column: {
//           pointPadding: 0.2,
//           borderWidth: 0
//         }
//       },
//       series: [
//         {
//           name: 'Corn',
//           data: [406292, 260000, 107000, 68300, 27500, 14500]
//         },
//         {
//           name: 'Wheat',
//           data: [51086, 136000, 5500, 141000, 107180, 77000]
//         }
//       ]
//     });
//   };

//   // Fetch data and create the Highcharts chart when the component mounts
//   useEffect(() => {
//     async function fetchData() {
//       const fbbsubsData = await fetchDatafbb();
//       const mbbsubsData = await fetchDatambb();

//       setFbbsubsData(fbbsubsData);
//       setMbbsubsData(mbbsubsData);

//       // Create the Highcharts chart after data is fetched
//       createHighchartsChart();
//     }

//     fetchData();
//   }, []);

//   return (
//     <>
//       <title>{`Fixed Broadband Subscriptions `}</title>
//       <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
//         <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//           <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
//             <div className="md:w-1/3 lg:w-[49%]">
//               <div className="lg:w-3/3">
//                 <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
//                   <div className="mb-10 w-full overflow-hidden">
//                     <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
//                       <div className="text-center mt-20">
//                         <h1 className="text-5xl font-bold">FBB Subs Data</h1>
//                         {/* Highcharts code starts here */}
//                         <div id="container" style={{ height: "400px" }}>
//                           {/* Render the chart */}
//                         </div>
//                         {/* Highcharts code ends here */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

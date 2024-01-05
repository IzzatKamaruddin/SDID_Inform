import React, { useEffect, useState } from 'react';
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import Link from "next/link";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fetchData_postal() {
  try {
    const postalData = await prisma.postoffice.findMany();
    return postalData;
  } catch (error) {
    console.error('Error fetching postal data:', error);
    return null; // Return null in case of an error
  }
}

async function fetchData_courier() {
  try {
    const courierData = await prisma.courier_infra.findMany();
    return courierData;
  } catch (error) {
    console.error('Error fetching courier data:', error);
    return null; // Return null in case of an error
  }
}

export default async function Data() {
  const postalData = await fetchData_postal();
  const courierData = await fetchData_courier();

  return (
<>
<title>{`Postal Courier Data `}</title>
<section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
  <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
    <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            
    <div className="md:w-1/3 lg:w-[49%]">
  <div className="lg:w-3/3">
    <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
      <div className="mb-10 w-full overflow-hidden">
        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
          <div className="text-center mt-20">
            <h1 className="text-5xl font-bold">Postal Data</h1>
            <li>
            <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
            {postalData ? (
              <table className="mx-auto"> {/* Add mx-auto to center horizontally */}
                <thead>
                  <tr>
                    <th>State</th>
                    <th>Quarter</th>
                    <th>Year</th>
                    <th>Urban</th>
                    <th>Rural</th>
                  </tr>
                </thead>
                <tbody>
                  {postalData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.state}</td>
                      <td>{item.declaration_quarter}</td>
                      <td>{item.declaration_year}</td>
                      <td>{item.urban}</td>
                      <td>{item.rural}</td>
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
            <h1 className="text-5xl font-bold">Courier Data</h1>
            <li>
            <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
            {courierData ? (
              <table className="mx-auto"> {/* Add mx-auto to center horizontally */}
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>&emsp;Total</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {courierData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.type}</td>
                      <td>{item.total}</td>
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
</div>

    </div>    
    </div>
  </section>
  </>
  );
}





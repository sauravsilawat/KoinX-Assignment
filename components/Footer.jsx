'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

function Footer() {
  const [data, setData] = useState(null);

  const url = 'https://api.coingecko.com/api/v3/search/trending';
  const options = {
    method: 'GET',
    headers: {
      'x_cg_pro_api_key': process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from:', url);
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData.coins);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='w-full py-14 bg-white flex flex-col gap-6 items-center justify-center'>
      <h1 className='w-[85%] text-2xl font-semibold '>You May Also Like</h1>
      <div className='w-[85%] flex overflow-scroll no-scrollbar gap-4 '>
        {data ?
          (data.map((item) => (
            <div key={item.item.id} className='border border-gray-300 rounded-md px-6 py-5'>
              <div className='flex gap-2 mr-24 items-center'>

                <Image src={item.item.small} width={25} height={25}></Image>
                <h1 className='font-medium'>{item.item.symbol}</h1>
                <h1 className={`${item.item.data.price_change_percentage_24h.inr.toFixed(2).toLocaleString()[0] !== '-' ? 'text-green-500 bg-green-50' : ' text-red-500 bg-red-50'} text-xs `}>{item.item.data.price_change_percentage_24h.inr.toFixed(2).toLocaleString()}%</h1>
              </div>
              <h1 className='mt-3 mb-1 font-semibold text-xl'>{item.item.data.total_volume.toLocaleString()}</h1>
              <Image src={item.item.data.sparkline} className='mx-12' width={100} height={100}></Image>
            </div>
          ))) :
          (<div>Loading...</div>)}
      </div>
      <h1 className='w-[85%] text-2xl font-semibold '>Trending Coins</h1>
      <div className='w-[85%] flex overflow-scroll no-scrollbar gap-4 '>
        {data ?
          (data.map((item) => (
            <div key={item.item.id} className='border border-gray-300 rounded-md px-6 py-5'>
              <div className='flex gap-2 mr-24 items-center'>

                <Image src={item.item.small} width={25} height={25}></Image>
                <h1 className='font-medium'>{item.item.symbol}</h1>
                <h1 className={`${item.item.data.price_change_percentage_24h.inr.toFixed(2).toLocaleString()[0] !== '-' ? 'text-green-500 bg-green-50' : ' text-red-500 bg-red-50'} text-xs `}>{item.item.data.price_change_percentage_24h.inr.toFixed(2).toLocaleString()}%</h1>
              </div>
              <h1 className='mt-3 mb-1 font-semibold text-xl'>{item.item.data.total_volume.toLocaleString()}</h1>
              <Image src={item.item.data.sparkline} className='mx-12' width={100} height={100}></Image>
            </div>
          ))) :
          (<div>Loading...</div>)}
      </div>
    </div>
  )
}

export default Footer
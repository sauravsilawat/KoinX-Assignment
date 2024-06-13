'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import triagle from "../public/images/triangle.svg"

function TrendingCoins() {
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
                console.log(jsonData.coins);
                setData(jsonData.coins);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='bg-white w-full p-10 text-left rounded-lg'>
            <h1 className=" leading-5 mb-6 text-xl font-bold">
                Trending Coins (24h)
            </h1>
            {data ? (
                data.slice(0, 3).map((item) => (
                    <div key={item.item.key} className='flex flex-col font-medium gap-10'>
                        <div className='flex py-2 justify-between'>
                            <div className='w-[50%] flex items-center gap-2'>
                                <Image src={item.item.small} width={20} height={20}></Image>
                                <h2 className=' text-base whitespace-normal'>{item.item.name} ({item.item.symbol})</h2>
                            </div>
                            <div className={`bg-[#EBF9F4] h-8 rounded-sm flex items-center justify-center w-[25%] px-2 text-[#14B079] text-base gap-2 ${item.item.data.price_change_percentage_24h.inr.toFixed(2).toLocaleString()[0] === '-' ? 'bg-red-50 text-red-400' : ''}`}>
                                <Image src={triagle} className={`${item.item.data.price_change_percentage_24h.inr.toFixed(2).toLocaleString()[0] === '-' ? ' rotate-180' : ''}`}></Image>
                                <p className=' text-base'>{item.item.data.price_change_percentage_24h.inr.toFixed(2).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>loading...</div>
            )}
        </div>

    )
}

export default TrendingCoins
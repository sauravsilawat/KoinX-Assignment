'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import triagle from "../public/images/triangle.svg"

function TrendingCoins() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/search/trending}`
                );
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='bg-white w-full p-10 text-left rounded-lg'>
            <h1 className=" leading-10 mb-6 text-2xl font-bold">
                Trending Coins (24h)
            </h1>
            <div className='flex flex-col text-lg font-medium gap-4'>
                <div className='flex justify-between'>
                    <h2>Ethereum(ETH)</h2>
                    <div className='bg-[#EBF9F4] h-8 rounded-sm flex items-center px-2 text-[#14B079] text-base gap-2'>
                        <Image src={triagle}></Image>
                        <p>12%</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <h2>Ethereum(ETH)</h2>
                    <div className='bg-[#EBF9F4] h-8 rounded-sm flex items-center px-2 text-[#14B079] text-base gap-2'>
                        <Image src={triagle}></Image>
                        <p>12%</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <h2>Ethereum(ETH)</h2>
                    <div className='bg-[#EBF9F4] h-8 rounded-sm flex items-center px-2 text-[#14B079] text-base gap-2'>
                        <Image src={triagle}></Image>
                        <p>12%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingCoins
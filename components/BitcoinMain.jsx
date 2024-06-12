'use client'
import React, { useState, useEffect, memo } from 'react';

import TradingViewWidget from './TradingViewWidget';

import Image from 'next/image';
import bitcoinIcon from "../public/images/bitcoinIcon.svg"
import triagle from "../public/images/triangle.svg"

function BitcoinMain() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ids = 'bitcoin';
                const vs_currencies = 'inr,usd';
                const include_24hr_change = true;
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currencies}&include_24hr_change=${include_24hr_change}`, {
                    headers: {
                        'x_cg_api_key': process.env.REACT_APP_API_KEY,
                    }
                });
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='bg-white px-8 pt-10 pb-4 rounded-lg'>
            {data ? (
                <div className='flex flex-col gap-[30px]'>
                    <div className='flex gap-3 items-center'>
                        <Image src={bitcoinIcon}></Image>
                        <h1 className=" text-left text-2xl font-semibold flex items-center  gap-2">Bitcoin<span className='text-[#5D667B] text-sm'>BTC</span></h1>
                        <div className='bg-[#768396] flex justify-center items-center rounded-md ml-6 text-white text-lg px-2 py-5 h-8'>Rank #1</div>
                    </div>
                    <div className='flex'>
                        <h1 className='text-3xl font-semibold'>
                            ${data.bitcoin.usd.toLocaleString()} <p className='text-base '>₹{data.bitcoin.inr.toLocaleString()}</p>
                        </h1>
                        <div className='bg-[#EBF9F4] ml-12 mr-4 h-8 rounded-sm flex items-center px-2 text-[#14B079] text-base gap-2'>
                            <Image src={triagle}></Image>
                            <p>{data.bitcoin.inr_24h_change.toFixed(2)}%</p>
                        </div>
                        <p className='text-base mt-1 text-[#768396]'>(24H)</p>
                    </div>
                    <div className='w-full'>
                        <TradingViewWidget />
                    </div>
                </div>

            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BitcoinMain;
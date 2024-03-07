'use client'
import React, { useState, useEffect } from 'react';

function BitcoinMain() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ids = 'bitcoin';
                const vs_currencies = 'inr,usd';
                const include_24hr_change = true;
                const response = await fetch(`${process.env.URL}/simple/price?ids=${ids}&vs_currencies=${vs_currencies}&include_24hr_change=${include_24hr_change}`, {
                    headers: {
                        'Authorization': `Bearer ${process.env.API_KEY}`,
                    }
                });
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        console.log(data);
        fetchData();
    }, []);

    return (
        <div className='bg-white px-8 py-4 rounded-lg'>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BitcoinMain;
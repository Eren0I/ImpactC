import React, {useEffect, useState, useRef,useLayoutEffect} from 'react'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import requests from '../axios/Requests';
import axios from '../axios/axios';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Feat = () => {
var size= 6
    const [coins, setCoins] = useState([])
    const cardref = useRef(null)


    useEffect(() => {
        async function fetchData(){
            const request =  await axios.get(requests.fetchMarket)
            setCoins(request.data);
         return request;
        }
        fetchData()
    }, [])

    useEffect(() => {
        const element = cardref.current;
        gsap.fromTo(element,{x:-400,opacity:0,repeats:-1}, {x:0,opacity:1,repeats:-1,repeatRefresh: true,scrollTrigger:{
            trigger: element,
            start: "center center",
        }})
    }, [])





  return (
    <div className= 'gradient-bg-feat w-full'>
    <div className="flex mf:flex-row flex-col items-start  text-center justify-between md:p-20 py-12 px-2">

         <div className="bg-clip-text items-center  text-center justify-center flex flex-col text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
             <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
             <p>See all available assets: Cryptocurrencies and NFT's</p>
             <button className='flex flex-row justify-center text-white items-center my-5 bg-[#61225e] p-3 rounded-full cursor-pointer hover:bg-[#68456e]'>See More Coins</button>
        </div>

         <div className='flex-row my-0 mx-auto grid gap-4'>
         <div ref={cardref} className='w-full flex-row my-0 mx-auto grid  grid-cols-3 md:grid-cols-3 gap-4' >

{coins.slice(0,size).map((coin)=>{
    return(
    <><div  className='bg-white rounded-lg items-center p-5 cursor-pointer relative border-stone-600'><div className='flex flex-col mb-5 items-center'>
        <img className='mw-full h-12' src={coin.image} alt="" />
        <h2>{coin.name}</h2>
    </div><div className='flex flex-col items-center h-full'>
            <p>Current Price: ${coin.current_price}</p>
            {coin.price_change_percentage_24h<0?(
                <span className='text-red-700 flex'><FiArrowDownRight/> {coin.price_change_percentage_24h}%</span>
            ):(
                <span className='text-green-600 flex'><FiArrowUpRight/> {coin.price_change_percentage_24h}%</span>
            )}

        </div></div></>
)}
)}


</div>
</div>
</div>
</div>
  )
}

export default Feat
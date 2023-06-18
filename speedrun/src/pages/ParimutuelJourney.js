import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import timelineData from '../database/timeline'
import Modal from '../components/Modals/ModalP1T1';
import ModalNFT from '../components/Modals/ModalNFT';
import { useWallet } from '@solana/wallet-adapter-react';
import data from 'leadData'
import Link from 'next/link';
import { AiFillLock } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../../lib/helper';
import ModalP1T1 from '../components/Modals/ModalP1T1';
import ModalP1T2 from '@/components/Modals/ModalP1T2';
import ModalP1T3 from '@/components/Modals/ModalP1T3';
import ModalP1T4 from '@/components/Modals/ModalP1T4';
import ModalP1T5 from '@/components/Modals/ModalP1T5';
import ModalP1T6 from '@/components/Modals/ModalP1T6';

// const fs = require('fs');

export default function ParimutuelJourney() {
  
  const { connected, publicKey } = useWallet();
  const { isLoading, isError, data, error } = useQuery('users', getUsers)
  if(isLoading) return <div>Data is Loading...</div>;
  if(isError) return <div>Got Error {error}</div>

  let p1t1Data = null;
  let p1t2Data = null;
  let p1t3Data = null;
  let p1t4Data = null;
  let p1t5Data = null;
  let p1t6Data = null;
  let p1t7Data = null;
  let p1NFTData = null;
  let formId = null;
  const pkey = connected ? publicKey.toString() : '';

for (let i = 0; i < data.length; i++) {
  if (data[i].pubKey === pkey) {
    p1t1Data = data[i].P1T1;
    p1t2Data = data[i].P1T2;
    p1t3Data = data[i].P1T3;
    p1t4Data = data[i].P1T4;
    p1t5Data = data[i].P1T5;
    p1t6Data = data[i].P1T6;
    p1t7Data = data[i].P1T7;
    p1NFTData = data[i].P1NFT;
    formId = data[i]._id;
    break;
  }
}
  
    

    const LockedOne = () => (
      <div className="timeline-item">
          <div className="timeline-item-content ">
              <div className='flex justify-center '>
              <div className='flex items-center mr-20 font-bold'>
              <p>Welcome to the HxroNation<br/>Let's Begin by Creating a Profile<br/> from Top-Right Corner!</p>
              </div>
              <button className='bg-emerald-300 rounded-full py-2 px-2'>
              <AiFillLock size={85}/>
              </button>
              </div>
              <span className="circle" />
          </div>
      </div>
  );

    const Locked = () => (
        <div className="timeline-item">
            <div className="timeline-item-content ">
                <div className='flex justify-center '>
                <div className='flex items-center mr-20 font-bold'>
                <p>Please Submit Previous Task<br/> To Unlock</p>
                </div>
                <button className='bg-emerald-300 rounded-full py-2 px-2'>
                <AiFillLock size={60}/>
                </button>
                </div>
                <span className="circle" />
            </div>
        </div>
    );


    const scrollOne = () => {
        scroll.scrollTo(800, {
          duration: 700, // Adjust the duration as needed
          smooth: 'easeInOutQuart', // Adjust the easing function as needed
        });
      };
      const scrollTwo = () => {
        scroll.scrollTo(1650, {
          duration: 1000, // Adjust the duration as needed
          smooth: 'easeInOutQuart', // Adjust the easing function as needed
        });
      };
      const scrollThree = () => {
        scroll.scrollTo(2660, {
          duration: 1500, // Adjust the duration as needed
          smooth: 'easeInOutQuart', // Adjust the easing function as needed
        });
      };
      const scrollFour = () => {
        scroll.scrollTo(3670, {
          duration: 1500, // Adjust the duration as needed
          smooth: 'easeInOutQuart', // Adjust the easing function as needed
        });
      };
      const scrollFive = () => {
        scroll.scrollTo(5350, {
          duration: 1500, // Adjust the duration as needed
          smooth: 'easeInOutQuart', // Adjust the easing function as needed
        });
      };
      const scrollSix = () => {
        scroll.scrollTo(5950, {
          duration: 1000, // Adjust the duration as needed
          smooth: 'easeInOutQuart', // Adjust the easing function as needed
        });
      };



    const TimelineItem1 = () => (
        <div className="timeline-item ">
            <div className="timeline-item-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(16 185 129)" }}>
                    {"+10 Points"}
                </span>
                <time className='text-3xl'>{"Import Dependencies & Connect to the Parimutuel Protocol"}</time>
                
                <code className='bg-emerald-200 rounded-md mt-3 font-bold pl-2 py-2'> 
                   import * as web3 from "@solana/web3.js";<br/>
                    import * as sdk from "@hxronetwork/parimutuelsdk"; <br/><br/>
                    const config = sdk.MAINNET_CONFIG<br/>
                    const rpc = web3.clusterApiUrl('mainnet-beta')<br/>
                    const connection = new web3.Connection(rpc, 'confirmed')<br/><br/>
                    
                    const parimutuelWeb3 = new sdk.ParimutuelWeb3(config, connection)<br/>
                    
                </code>
                {
                //    <button onClick={scrollOne} className="btn-modal bg-emerald-300 rounded-full font-bold">
                    
                //    Submit
                //  </button>
                p1t2Data?'':<ModalP1T1 formId={formId}/>
                
                }
                <span className="circle" />
            </div>
        </div>
    );

    const TimelineItem2 = () => (
        <div className="timeline-item" id="timeline-item-2">
            <div className="timeline-item-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(16 185 129)" }}>
                    {"+20 Points"}
                </span>
                <time className='text-3xl'>{"Info Zap: Retrieving Data from the Network"}</time>
                <p>
                Now that you have connected to the network, let's look at how to retrieve data from it.
                <br/><br/>
                <b>Understanding Markets and Contests:</b><br/><br/>
                Before we start, there are some key terms you should be familiar with:<br/><br/>
                <ul>
                <li className='list-disc ml-6'><b>Markets</b> are the different parimutuel markets for a specific underlying asset pair.<br/>  For example,on the <b>Paris</b>(short for Parimutuels) protocol, there are currently three main markets that can be accessed through MarketPairEnum:
                <li className='list-disc ml-6'>MarketPairEnum.BTCUSD</li>
                <li className='list-disc ml-6'>MarketPairEnum.ETHUSD</li>
                <li className='list-disc ml-6'>MarketPairEnum.SOLUSD</li>
                At the time of writing, liquidity is being solely allocated to the BTCUSD market pair.
                </li>
                <br/>
                <li className='list-disc ml-6'>
                <b>Contests</b> represent the individual trading events in a paris market. For example:<br/>
                <b>Contest #1:</b><br/>
                <b className=' ml-2'>-Market:</b> BTCUSD<br/>
                <b className='ml-2'>-Time</b> 5 minutes<br/>
                <b className='ml-2'>-Slot ID:</b> 123<br/>
                <b className='ml-2'>-Long Pool:</b> $100.00<br/>
                <b className='ml-2'>-Short Pool:</b> $200.00<br/>
                <b className='ml-2'>-etc.</b>
                </li>
                </ul>
                </p>
                {
                  //   <button onClick={scrollTwo} className="btn-modal bg-emerald-300 rounded-full font-bold">
                  //   Submit 
                  // </button>
                  p1t3Data?'':<ModalP1T2 formId={formId}/>
                }
                <span className="circle" />
            </div>
        </div>
    );

    const TimelineItem3 = () => (
        <div className="timeline-item" id="timeline-item-2">
            <div className="timeline-item-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(16 185 129)" }}>
                    {"+10 Points"}
                </span>
                <time className='text-3xl'>{"Retrieving Contests for a Market"}</time>
                <p>
                
                1. To retrieve all of the Contests for the BTCUSD market pair.<br/><br/>
                To filter for the market pair that we want, use the <b>getMarketPubkeys(config, marketPair)</b> function, and pass in the <b>config</b> object for <b>config</b> and <b>MarketPairEnum.BTCUSD</b> for <b>marketPair</b>.<br/> This will return an array with all the markets for each expiry and their contests for each expiry in the BTCUSD pair.
                </p>
                <code className='bg-emerald-200 rounded-md mt-3 font-bold pl-2 py-2 pr-24'> 
                const market = sdk.MarketPairEnum.BTCUSD<br/>
                const markets = sdk.getMarketPubkeys(config, market);
                </code>
                <p>
                2. To filter for the expiry interval, use the <b>.filter()</b> method on the <b>markets</b> array, and pass in a callback function that checks if the <b>duration</b> property of each element is equal to the desired expiry time in seconds.<br/> For example, to filter for a 1-minute expiry interval:
                </p>
                <code className='bg-emerald-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'> 
                const marketTerm = 60 // The expires are in seconds, so this would be the 1 min
                <br/><br/>
                const marketsByTime = markets.filter(
                      (market) ={'>'} market.duration === marketTerm
                    );
                </code>

                <p>
                3. To retrieve all of the paris contests for the BTCUSD market, use the getParimutuels(*markets, number*) function and pass in the marketsByTime array for *markets*, and the number of contests you want to retrieve for *number*. This function should be called from an asynchronous function:
                </p>
                <code className='bg-emerald-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'> 
                {'const Paris = async () => {'}<br/>

                {'const parimutuels = await parimutuelWeb3.getParimutuels(marketsByTime, 5);'}<br/>
                {'}'}
                </code>

                {
                  p1t4Data?'':<ModalP1T3 formId={formId}/>
                  //   <button onClick={scrollThree} className="btn-modal bg-emerald-300 rounded-full font-bold">
                  //   Submit 
                  // </button>
                }
                <span className="circle" />
            </div>
        </div>
    );
    const TimelineItem4 = () => (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(16 185 129)" }}>
                    {"+10 Points"}
                </span>
                <time className='text-3xl'>{"Info Zap: Understanding Required Parameters"}</time>
                <p>

                The "parimutuels" variable will give us an array of objects, with each object representing a <b>Contest</b> for the <b>BTCUSD</b> pair in the <b>1 min</b> expiration interval. <br/><br/>

                To better understand what a <b>Contest</b> object looks like, we can retrieve the first element in the array using <b>parimutuels[0]</b> and convert it to a string using <b>JSON.stringify()</b>. Then, we can print the string to the console by calling the <b>Paris()</b> function.
                </p>
                <code className='bg-emerald-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                {'const Paris = async () => {'}<br/><br/>

                    const parimutuels = await parimutuelWeb3.getParimutuels(marketsByTime, 5);<br/><br/>
                    
                    console.log(JSON.stringify(parimutuels[0]))<br/>
                   {' };'}<br/><br/>
                    
                    Paris()
                </code>
                <p>
                After calling the <b>Paris()</b> function, you should have printed out a whole lot of data in your console,
                but we won't be using all of this data yet.<br/><br/> First, we will focus on the info of each Contest
                <br/><br/>
                To start, we want to display the following information for each contest:<br/><br/>
                <b className=' ml-2'>strike:</b> the mark price in USDC at which the contest will exercise<br/>
                <b className=' ml-2'>slot:</b> the unique identifier number of the contest<br/>
                <b className=' ml-2'>activeLongPositions:</b> the amount of USDC in the "Long" side of the pool<br/>
                <b className=' ml-2'>activeShortPositions:</b> the amount of USDC in the "Short" side of the pool<br/>
                <b className=' ml-2'>expired:</b> a boolean value indicating whether the contest has expired or not<br/><br/>
                <b className=' ml-2'>Note:</b> values in USDC should be divided by 1,000,000, as this is the number of decimals the USDC SPL token has on Solana.
                </p>
                {
                    p1t5Data?'':<ModalP1T4 formId={formId}/>
                  //   <button onClick={scrollFour} className="btn-modal bg-emerald-300 rounded-full font-bold">
                  //   Submit 
                  // </button>
                }
                <span className="circle" />
            </div>
        </div>
    );
    const TimelineItem5 = () => (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(16 185 129)" }}>
                    {"+20 Points"}
                </span>
                <time className='text-3xl'>{"Displaying Required Parameters"}</time>
                <p>

                To display this information, we can use a <b>forEach</b> loop to iterate through the <b>parimutuels</b> array. <br/>We will assign the variable <b>cont for each object in the array</b> and access the relevant data within the <b>info.parimutuel</b> section of the object.<br/> Then, we will print the information to the console for each contest. Here's how we can do this:
                </p>
                <code className='bg-emerald-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                {'const Paris = async () => {'}<br/><br/>
                   
                   const parimutuels = await parimutuelWeb3.getParimutuels(marketsByTime, 5);<br/><br/>
                   
                     console.log(`\\nMarket Pair: BTCUSD\\nMarket Expiry Interval: 1 min\\n`)<br/><br/>
                   
                     const usdcDec = 1_000_000<br/><br/>
                   
                   {'parimutuels.forEach((cont) => {'}<br/>
                       const strike = cont.info.parimutuel.strike.toNumber() / usdcDec;<br/><br/>
                             const slotId = cont.info.parimutuel.slot.toNumber();<br/><br/>
                             const longSide = cont.info.parimutuel.activeLongPositions.toNumber() / usdcDec;<br/><br/>
                             const shortSide = cont.info.parimutuel.activeShortPositions.toNumber() / usdcDec;<br/><br/>
                             const expired = cont.info.parimutuel.expired<br/><br/>
                   
                             console.log(`\\nStrike: $ {'${strike}'}<br/>\\nSlot:{' ${slotId}'}<br/>\\nLongs: $ {'${longSide}'}<br/>\\nShorts: $ {'${shortSide}'}<br/>\\nExprired?: {'${expired?'} 'true' : 'false'{'}'}`)<br/>
                   {'})'}<br/>
                   {'};'}<br/><br/>
                   
                   Paris()<br/><br/>
                </code>
                <p>
                You should be getting something like this in your console now:
                </p>
                <code className='bg-blue-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                Market Pair: BTCUSD<br/>
                Market Expiry Interval: 1 min<br/><br/>
                
                Strike: $ 1680400.999999<br/>
                Slot: 1671990780<br/>
                Longs: $ 249.841564<br/>
                Shorts: $ 252.0767<br/>
                Exprired?: true<br/><br/>

                Strike: $ 1680495.75<br/>
                Slot: 1671990840<br/>
                Longs: $ 248.210444<br/>
                Shorts: $ 251.789555<br/>
                Exprired?: true<br/>
                </code>
                 
                

                {
                    p1t6Data?'':<ModalP1T5 formId={formId}/>
                  //   <button onClick={scrollFive} className="btn-modal bg-emerald-300 rounded-full font-bold">
                  //   Submit 
                  // </button>
                }
                <span className="circle" />
            </div>
        </div>
    );

    const TimelineItem6 = () => (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(16 185 129)" }}>
                    {"+30 Points"}
                </span>
                <time className='text-3xl'>{"Get Odds for each contest"}</time>
                <p>

                We can use the function <b>calculateOdd: (side, total)</b> from the SDK by passing in the <b>side</b> that we want to get the Odds for <b>side</b> and the sum of both <b>longSide</b> and <b>shortSide</b> for <b>totalVolume</b> .
                </p>
                <code className='bg-emerald-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                const totalVolume = longSide + shortSide <br/><br/>


                const longOdds = sdk.calculateNetOdd(longSide, totalVolume, 0.03)<br/>

                const shortOdds = sdk.calculateNetOdd(shortSide, totalVolume, 0.03)<br/>

                
                // Pass in 0.03 to take into account the 3% Hxro Network standard fee 
                // (50% of it goes to stakers)
                </code>
                <p>
                We've now successfully used the Paris Network to retrieve contest and market data.
                </p>

                {
                    p1t7Data?'':<ModalP1T6 formId={formId}/>
                  //   <button onClick={scrollSix} className="btn-modal bg-emerald-300 rounded-full font-bold">
                  //   Submit 
                  // </button>
                }
                <span className="circle" />
            </div>
        </div>
    );

    // const Timeline = () =>
    //     timelineData.length > 0 && (
    //         <div className="timeline-container">
    //             {timelineData.map((data, idx) => (
    //                 <TimelineItem data={data} key={idx} />
    //             ))}
    //         </div>
    //     );
    const ClaimNFT = () => (
        <div className="timeline-item">
            <div className="timeline-item-content ">
                <div >
                <div className='mr-20 '>
                <h1 className='text-center text-xl font-bold ml-20 pb-3'>Congratulations!<br/>Claim your Journey Completion NFT 🎉</h1>
                </div>
                <img  className='rounded-xl py-5' src='/nft.png' width={600}/>
                {
                    // p1NFTData?'':<ModalNFT/>
                    <button className="btn-modal bg-emerald-300 rounded-full font-bold">
                    Claim
                  </button>
                }
                
                </div>
                <span className="circle" />
            </div>
        </div>
    );

    
  return (
   <>
   {/* <Timeline/> */}
   <div className='bg-emerald-300 h-56 rounded-xl my-5 mx-5 flex items-center grid grid-cols-2'>
    <div>
    <h1 className='ml-10 text-6xl font-bold mb-3 '>Parimutuel SDK</h1> 
    
    <p className='ml-10'>Learn to build a data-retrieval script from dual-outcome <br/>parimutuel markets using Typescript  for custom time frames.</p>
    
    </div>
    <div className='bg-black rounded-md mr-3.5'>
    <h1 className='ml-10 text-4xl font-bold mb-3 text-white my-2'>Quick Setup</h1> 
    
    <p className='ml-10 text-white my-4'>
        1. Install <Link className='text-emerald-200 underline' href={'https://nodejs.org/en/download'}>node.js</Link> and <Link className='text-emerald-200 underline'  href={'https://docs.npmjs.com/downloading-and-installing-node-js-and-npm'}>npm</Link>  <br/>
        2. Create a Typescript project. If you don’t know how, <Link className='text-emerald-200 underline' href={'https://www.digitalocean.com/community/tutorials/typescript-new-project'}>here</Link> is an example  <br/>
        3. Install Solana Web3.js in your project by running <a className='text-emerald-200'>npm i @solana/web3.js</a> <br/>
        4. Install the Parimutuel SDK in your project by running <br/> 
        <p className='ml-4'><a className='text-emerald-200'>npm i @hxronetwork/parimutuelsdk</a></p>
         
         </p>
    
    </div>
   </div>
   {connected ? (
   <div className="timeline-container">
    {/* (if(Progress.P1T1==true)?<TimelineItem1/>:<Locked/>) */}
   {p1t1Data ? <TimelineItem1/> : <LockedOne/>}
   {p1t2Data ? <TimelineItem2/> : <Locked/>}
   {p1t3Data ? <TimelineItem3/> : <Locked/>}
   {p1t4Data ? <TimelineItem4/> : <Locked/>}
   {p1t5Data ? <TimelineItem5/> : <Locked/>}
   {p1t6Data ? <TimelineItem6/> : <Locked/>}
   {p1t7Data ? <ClaimNFT/> : <Locked/>}
   
   {/* {foundObj && foundObj.step2 ?<TimelineItem2/> : <Locked/>
   } */}
   </div>
   )
   :
   (
    
    <div  className='text-center text-6xl font-bold text-white mt-20'>Hello Friend 🤗, <br/><br/>Please Connect Wallet to Continue 🤝</div>
   )
   }
   </>
  )
}
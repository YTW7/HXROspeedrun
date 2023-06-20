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
import Gist from "react-gist";
import Frame from 'react-frame-component';
// const fs = require('fs');

export default function ParimutuelReact() {
  
  const { connected, publicKey } = useWallet();


  // let foundObj ={
  //     "rank":6,
    //     "username":"newuser",
    //     "publicKey":"8Jeo1JwWhU2K7ivCaVrcd9e8q9bxLfBFXZb82pa21w9y",
    //     "points":0,
    //     "step2":false
    // }
    
    // if(connected)
    // {// if(!exists)
    // //   {
    // //     modal popup for entering username
    // //   }
    // foundObj = data.find(obj => obj.publicKey === publicKey);
    // console.log(foundObj.publicKey);
    // }
    


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
        <div className="timeline-item-dex ">
            <div className="timeline-item-dex-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
                    {"+10 Points"}
                </span>
                <time className='text-3xl'>{"Create Required Components"}</time>
                <p>1. Begin by changing the branch from main to doc-template.<br/>
                2. Our next stop is src/views/home/index.tsx, which will be the homepage view.<br/>
                3. Navigate to the components folder under src<br/>
                4. Here, you'll create four new files with the .tsx extension:<br/>
                <p className='ml-10'>1. Config.tsx - This is where we are going to set our global config variable for the ParimutuelWeb3 connection</p>
                <p className='ml-5'>2. PariBox.tsx - This component will be used for each parimutuel market we want to add</p>
                <p className='ml-5'>3. PlacePositionBox.tsx - This component will handle the amount a user wants to set for a trade and make the call to the PlacePosition component to place the trade</p>
                <p className='ml-5'>4. PlacePosition.tsx - This component will handle the placement of the position and send a transaction request to the user's wallet</p>
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 py-2'> 
                
                    
                </code>
                {
                   <button onClick={scrollOne} className="btn-modal bg-pink-300 rounded-full font-bold">
                    
                   Submit
                 </button>
                // <Modal/>
                }
                <span className="circle" />
            </div>
        </div>
    );

    const TimelineItem2 = () => (
        <div className="timeline-item-dex" id="timeline-item-2">
            <div className="timeline-item-dex-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
                    {"+10 Points"}
                </span>
                <time className='text-3xl'>{"Set up Config.js"}</time>
                <p>
                Import the DEV_CONFIG to interact with the devnet parimutuel protocol. For mainnet, import MAINNET_CONFIG and export PariConfig to use it throughout the project.
                <br/>
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 py-2 pr-24'> 
                {'import { DEV_CONFIG, MAINNET_CONFIG } from "@hxronetwork/parimutuelsdk";'}<br/><br/>

                  export const PariConfig = {'{'} <br/>
                  config: DEV_CONFIG <br/>
                  {'}'}
                
                </code>
              
                {
                    <button onClick={scrollTwo} className="btn-modal bg-pink-300 rounded-full font-bold">
                    Submit 
                  </button>
                }
                <span className="circle" />
            </div>
        </div>
    );

    const TimelineItem3 = () => (
        <div className="timeline-item-dex" id="timeline-item-2">
            <div className="timeline-item-dex-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
                    {"+20 Points"}
                </span>
                <time className='text-3xl'>{"Build PariBox Component, PT. 1: Import Dependencies"}</time>
                <p>
                
                Importing Dependencies
                We will start by importing the necessary dependencies needed for our PariBox component.
                The dependencies that will be utilized are as follows:
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 py-2 pr-24'> 
                {'import { useConnection } from "@solana/wallet-adapter-react";'}
                {'import { FC, useState } from "react";'}
                {'import {'}
                ParimutuelWeb3,
                MarketPairEnum,
                getMarketPubkeys,
                calculateNetOdd,
                {'} from "@hxronetwork/parimutuelsdk";'}
                {'import { useEffect } from "react";'}
                {'import { PariConfig } from "./Config";'}
                </code>
                <p>
                With these dependencies in place, we are now ready to start building our PariBox component.
       Before diving in, let's first prepare a few essential elements under our imports that will be utilized later on:
        1. Create a PariObj interface to store the contest information, including the Long and Short Pools' amounts, odds, and pubkey.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 py-2 pr-24'> 
                {'interface PariObj {'}
    longPool: any; // This is how much money is in the Long Pool of the contest
    shortPool: any; // This is how much money is in the Short Pool of the contest
    longOdds: string; // This is the weighted odds of the Long Pool
    shortOdds: string; // This is the weighted odds of the Short Pool
    pubkey: string; // This is the contest pubkey
{'}'}//Next, create a constant named TimeInterval to store various time intervals for ease of use.
                </code>
                <p>
                2. Create a constant named TimeInterval to store various time intervals for ease of use.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 py-2 pr-24'> 
                const TimeInterval = [
    {'{'}
        interval: '1M',
        seconds: 60,
        title: "1 MINUTE",
    {'},'}

    {'{'}
        interval: '5M',
        seconds: 300,
        title: "5 MINUTE",
  {'  },'}

   {' {'}
        interval: '15M',
        seconds: 900,
        title: "15 MINUTE",
   {' },'}

 {'   {'}
        interval: '1H',
        seconds: 3600,
        title: "1 HOUR",
{'    },'}
    {'{'}
        interval: '1D',
        seconds: 86400,
        title: "1 DAY",
   {' },'}
];
                </code>

                {
                    // <Modal/>
                    <button onClick={scrollThree} className="btn-modal bg-pink-300 rounded-full font-bold">
                    Submit 
                  </button>
                }
                <span className="circle" />
            </div>
        </div>
    );
    const TimelineItem4 = () => (
        <div className="timeline-item-dex">
            <div className="timeline-item-dex-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
                    {"+20 Points"}
                </span>
                <time className='text-3xl'>{"Build PariBox Component, PT. 2: Building Main Component"}</time>
                <p>
                1. Start by creating a functional component called PariBox. It will take in a prop called time.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                export const PariBox: {'FC<{ time: string }>'} = (props) ={'> {'}<br/>
                  {'const { time } = props;'}
                </code>

                <p>
                2. Next, filter the TimeInterval array to find the object that matches the time prop passed in.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                const selectedTime = TimeInterval.filter((data) ={'>'} data.interval === time);
                </code>
                <p>3. Extract the seconds and title properties from the selected object.</p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                const timeSeconds = selectedTime[0].seconds
                const timeTitle = selectedTime[0].title
                </code>
                <p>
                4. Define a state variable to store the PariObj data. The useState hook is used to manage this state in the function component.
                </p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                const [pariObj, setPariObj] = useState{'<PariObj>'}();
                </code>
                <p>
                  5. Define a state variable to store the countDownTime data. The useState hook is used to manage this state in the function component.
                </p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                const [countDownTime, setCountDownTime] = useState{'<string>'}("");
                </code>
                <p>
                6. Create a constant config that holds the configuration values imported from the Config.tsx file
                </p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                const { config } = PariConfig;
                </code>
                <p>
                7. Create constant **connection** , which handles the connection to Solana depending on the user's wallet, and instantiate a new ParimutuelWeb3 object with config and connection as parameters.
                </p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                const { connection } = useConnection();<br/>
                   const parimutuelWeb3 = new ParimutuelWeb3(config, connection);
                </code>
                <p>
                8. Define the marketPair with **MarketPairEnum** to select the market that we want to get the contests from. For markets , use the **getMarketPubkeys** method to retrieve all of the Pubkeys of the specified market/s, and create a marketsByTime variable that filters the markets based on whether the duration is the same as timeSeconds value so that we get only the contests from the desired time interval.
                </p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                // To get only the BTC-USD Market Contests
                const marketPair = MarketPairEnum.BTCUSD; 
                
                const markets = getMarketPubkeys(config, marketPair);
                const marketsByTime = markets.filter(
                    (market) ={'>'} market.duration === timeSeconds
                );
                </code>


                {
                    // <Modal/>
                    <button onClick={scrollFour} className="btn-modal bg-pink-300 rounded-full font-bold">
                    Submit 
                  </button>
                }
                <span className="circle" />
            </div>
        </div>
    );
    const TimelineItem5 = () => (
        <div className="timeline-item-dex">
            <div className="timeline-item-dex-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
                    {"+30 Points"}
                </span>
                <time className='text-3xl'>{"Build PariBox Component, PT. 3: Getting contest data"}</time>
                
                <p>
                1. Use the useEffect hook to run a specific effect when the component is rendered. In this case, the effect will fetch data about the contest and set it in the pariObj state.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                {'useEffect(() ={'>'} {'}
    {'const getPariData = async () => {'}

        // make sure that we don't exceed the localStorage 10MB capacity when 
        // calling our data
        {'localStorage.clear(); '}

        // Fetch contest data and set it in the pariObj state
   {' };'}
  {'  fetchData();'}
{'}, []);'}
                </code>

                <p>
                Retrieving contests<br/>
                2. Use the parimutuelWeb3.getParimutuels method to retrieve the parimutuel data from the parimutuels array marketsByTerm , and retrieve the duration of the selected parimutuel market.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                const parimutuels = await parimutuelWeb3.getParimutuels(marketsByTime);
                  const duration = marketsByTime[0].duration;
                </code>
                <p>3. Use the parimutuelWeb3.getMarkets method to retrieve the market data.</p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                const getMarkets = await parimutuelWeb3.getMarkets(market)
                </code>
                <p>
                4. To retrieve only the next-in-line contests, filter the parimutuels array to find the parimutuel accounts that match the conditions.
                </p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                const pari_markets = parimutuels.filter(
                     (account) ={'>'}
                         account.info.parimutuel.timeWindowStart.toNumber() {'>'} Date.now() &&
                         account.info.parimutuel.timeWindowStart.toNumber() {"<"}
                         Date.now() + duration * 1000
                 );
                </code>
                <p>
                Extracting data from contests<br/>
                 Assigning data to variables:
                </p>
                <Gist style={{width:"100%"}} id="622c67db2840d931560dbeaab05e090f"></Gist>
                <p>
                Formatting countdown timer to display:
                </p>
                <Gist style={{width:"100%"}} id="52973c2c366c06459b9e2fe9b0ebeb4a"></Gist>
                <p>
                Here, we can close our getPariStats() function.<br/><br/>
                Calling our data<br/><br/>
                To start a recurring function call, use the setInterval() function. The setInterval() function takes two parameters: the first parameter is the function that you want to call repeatedly, and the second parameter is the interval in milliseconds.<br/><br/>
                Here, we want to call the getPariData() function every second, so the interval is set to 1000 milliseconds or 1 second.<br/>
                </p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                const intervalId = setInterval(() ={'>'} getPariData(), 1000);
                </code>
                <p>
                To avoid memory leaks, it's important to clean up any recurring functions when the component that started it unmounts. To do this, return a function that calls clearInterval() and pass in the intervalId.
                </p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                {'return () => clearInterval(intervalId);'}<br/><br/>

                 {' }, []);'}
                </code>
                <p>Now, we have a function that updates our data every second until the component unmounts and the interval is cleared.</p>


                {
                    // <Modal/>
                    <button onClick={scrollFive} className="btn-modal bg-pink-300 rounded-full font-bold">
                    Submit 
                  </button>
                }
                <span className="circle" />
            </div>
        </div>
    );

    const TimelineItem6 = () => (
        <div className="timeline-item-dex">
            <div className="timeline-item-dex-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
                    {"+30 Points"}
                </span>
                <time className='text-3xl'>{"Build PariBox Component, PT. 4: Rendering Our Data"}</time>
                <p>
                Let's build the UI of our Pari Box component.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                {'return ('}
                          // Render contents here
                    {'  );'}
                </code>

                <p>
                To make it easier, here is the code you can copy and paste inside of return:
                </p>
                <Gist style={{width:"100%"}} id="61432a3e7c9dedc06160f702c173093c"></Gist>
                

                {
                    // <ModalNFT/>
                    <button onClick={scrollSix} className="btn-modal bg-pink-300 rounded-full font-bold">
                    Submit 
                  </button>
                }
                <span className="circle" />
            </div>
        </div>
    );

    const TimelineItem7 = () => (
      <div className="timeline-item-dex">
          <div className="timeline-item-dex-content">
              <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
                  {"+20 Points"}
              </span>
              <time className='text-3xl'>{"Build PariBox Component, PT. 5: Testing"}</time>
              <p>
              Now, let's test it!
              1. Go to src/view/home.tsx and import PariBox.tsx
              2. Import the PariBox component
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                //Pari Box
                import { PariBox } from '../../components/PariBox';
                </code>

                <p>
                3. Use the PariBox component inside of the HomeView return and pass in ‘1M’ as the time prop to get the 1-minute market contests for BTC-USD.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                
                <div className="mx-5 my-5 mb-5 md:mb-0"><PariBox time={'1M'} /></div>
                
                </code>
                <Gist style={{width:"100%"}} id="61432a3e7c9dedc06160f702c173093c"></Gist>
              
              {
                  // <ModalNFT/>
                  <button onClick={scrollSix} className="btn-modal bg-pink-300 rounded-full font-bold">
                  Submit 
                </button>
              }
              <span className="circle" />
          </div>
      </div>
  );

  const TimelineItem8 = () => (
    <div className="timeline-item-dex">
        <div className="timeline-item-dex-content">
            <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
                {"+30 Points"}
            </span>
            <time className='text-3xl'>{"View Account Information and Open Orders"}</time>
            <p>

            This section will show you how to view your account and TRGs open orders more extensively.

            Create a new file called <b>accountTrg.ts</b> where you will build your own function to view TRG account information and open orders.<br/><br/>
            You can copy and paste the code below into your new file:
            </p>
            <Gist style={{width:"100%"}} id="5cc2a516a73042c9cd6cd170ef30529f"></Gist>
            <p>
            Create a function that handles updates on the TRG account and logs them to the console.
            </p>
            <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
            const streamAccount = async () ={'> {}'}
            </code>
            <p>
            Within the streamAccount() function, call the getOpenOrders() method of your trader instance and pass in your PRODUCT_NAME array. This returns all the Open Limit Orders of your TRG account.
            </p>
            <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
            const streamAccount = async () ={'> {'}
                       // get all the open orders from our TRG trader instance, filtered by products.<br/>
                       const orders = Promise.all(trader.getOpenOrders(PRODUCT_NAME));
                   {'}'}
            </code>
            <p>
            Now that you have your orders array, create a function called <b>prettierOrders().</b> This function formats the open orders inside your orders array to make them more readable and prints them to the console.
            </p>
            <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
            const prettierOrders = async () ={'> {'}<br/><br/>
               
               // if there are no open orders, return<br/>
               {'if ((await orders).length === 0) {'}<br/>
               console.log('No Open Orders');<br/>
               {'return;'}<br/>
               {'}'}<br/><br/>
               
               {'(await orders).forEach((order, index) => {'}<br/>
               console.log(<br/>
                {' `Index: ${index} | Product: ${order.productName} | Price: $${'}<br/>
                   order.price.m<br/>
                {' } | Qty: ${order.qty.m.toNumber() / 10 ** 6} | Type: ${'}<br/>
                   order.isBid ? 'Bid':'Ask'<br/>
                {' } | Id: ${order.id.toString()}`'}<br/>
               );<br/>
               {'});'}<br/>
               {'};'}<br/>
            </code>

            <p>
            <ul>
            <b>index:</b> Index of the order in the orders array.<br/><br/>
            <b>order.productName:</b> Name of the product for which the order was set (e.g. BTCUSD-PERP).<br/><br/>
            <b>order.price.m:</b> Price at which the limit order was placed.<br/><br/>
            <b>order.qty.m:</b> Size quantity for the order.<br/><br/>
            <b>order.isBid:</b> Boolean value indicating if the order was a "bid" or not. If not, it was an "ask."<br/><br/>
            <b>order.id:</b> Number ID of the order. This can be used to obtain more information about the order from Dexterity or even to cancel the order itself.
            </ul>
            <br/>

            Call pretierorders() to print out TRGs open orders. Then, print out TRG account information.<br/>
            </p>
            <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
            
                   (await prettierOrders()).then(() ={'>'} console.log(
                     '\\nOpen Orders:',
                     (await orders).length,
                     '\\nPortfolio Value:',
                     trader.getPortfolioValue().toString(),
                     'Position Value:',
                     trader.getPositionValue().toString(),
                     'Net Cash:',
                     trader.getNetCash().toString(),
                     'PnL:',
                     trader.getPnL().toString()
                   ));
              {' }'} // Close streamAccount() function
            </code>
            <p>
            Next, call the streamAccount() function within the trader.connect() method.
            </p>

            <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
            const account = async () ={'> {'}
                  await trader.connect(NaN, streamAccount);
              {'  };'}
              
              await account()
            </code>

            <p>
            Here is an example of what the output should look like if there are open orders in the target account:
            </p>
            <code className='bg-blue-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
            Index: 0 | Product: BTCUSD-PERP | Price: $21978 | Qty: 3 | Type: Bid | Id: 1741276555738520058374982645737685<br/><br/>
            Index: 1 | Product: BTCUSD-PERP | Price: $21978 | Qty: 3 | Type: Bid | Id: 1741276555738520058374982645737686<br/><br/>
            Index: 2 | Product: BTCUSD-PERP | Price: $21978 | Qty: 3 | Type: Bid | Id: 1741276555738520058374982645737693<br/><br/>
            undefined <br/>
            Open Orders: 3 <br/>
            Portfolio Value: 77328.2304096<br/> Position Value: -4842.411644<br/> Net Cash: 82170.6420536<br/> PnL: -171.7695904<br/>
            </code>
            
            {
                // <ModalNFT/>
                <button onClick={scrollSix} className="btn-modal bg-pink-300 rounded-full font-bold">
                Submit 
              </button>
            }
            <span className="circle" />
        </div>
    </div>
);
const TimelineItem9 = () => (
  <div className="timeline-item-dex">
      <div className="timeline-item-dex-content">
          <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
              {"+20 Points"}
          </span>
          <time className='text-3xl'>{"Cancel All Open Orders"}</time>
          <p>
          Here you can see how to easily cancel all open limit orders when called
          </p>
          <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                             
                     const cancelOrder = async () ={'> {'}<br/><br/>
                   
                   const orders = Promise.all(trader.getOpenOrders(PRODUCT_NAME));<br/><br/>
                   
                   if ((await orders).length === 0) {'{'}<br/>
                       console.log('CancelAllOrders Failed: Sorry there are no open orders on this account')<br/>
                       {'return'}<br/>
                   {'}'}<br/><br/>
                   
                   trader.cancelAllOrders(PRODUCT_NAME, true);<br/><br/>
                   
                   console.log(`Canceled all orders`);<br/>
                   {'};'}<br/><br/>
                   
                   cancelOrder()
          </code>
        
          
          {
              // <ModalNFT/>
              <button onClick={scrollSix} className="btn-modal bg-pink-300 rounded-full font-bold">
              Submit 
            </button>
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
        <div className="timeline-item-dex">
            <div className="timeline-item-dex-content ">
                <div >
                <div className='mr-20 '>
                <h1 className='text-center text-xl font-bold ml-20 pb-3'>Congrats!<br/>Claim your Journey Completion NFT 🎉</h1>
                </div>
                <img  className='rounded-xl' src='/dexterity_nft.png' width={600}/>
                <button className="btn-modal bg-pink-300 rounded-full font-bold">
                    Claim
                  </button>
                
                </div>
                <span className="circle" />
            </div>
        </div>
    );
  return (
   <>
   {/* <Timeline/> */}
   <div className='bg-blue-300 rounded-xl my-5 mx-5 flex items-center grid grid-cols-2' style={{height:"280px"}}>
    <div>
    <h1 className='ml-10 text-6xl font-bold mb-3 '>Parimutuel TS + React Project</h1> 
    
    <p className='ml-10'>Learn how to connect and use Hxro’s Dexterity Protocol <br/>  </p>
    
    </div>
    <div className='bg-black rounded-md mr-4 overflow-auto'>
    <h1 className='ml-10 text-4xl font-bold mb-3 text-white my-2'>Quick Setup</h1> 
    
    <p className='ml-10 text-white my-4'>
    1. Complete the <Link className='text-blue-300 underline' href={'/'}>Parimutuel TS Script </Link> which helps with extracting the<br/> <p className='ml-5'>necessary information needed to showcase users.</p>
    2. Clone the Parimutuel TS Project repo.<br/>
                3. Open the Project in code editor:<br/>
                <p className='ml-5'>{'->'} Run <a className='text-blue-300'>yarn install</a> to install all project dependencies</p>
                <p className='ml-5'>{'->'} Run <a className='text-blue-300'>yarn dev</a> to run the application</p><br/>
         
         </p>
    
    </div>
   </div>
   {connected ? (
   <div className="timeline-container-dex">
    {/* (if(Progress.P1T1==true)?<TimelineItem1/>:<Locked/>) */}
   <TimelineItem1/>
   <TimelineItem2/> 
   <TimelineItem3/> 
   <TimelineItem4/> 
   <TimelineItem5/> 
   <TimelineItem6/>
   <TimelineItem7/>
   <TimelineItem8/>
   <TimelineItem9/>
   <ClaimNFT/>
   
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
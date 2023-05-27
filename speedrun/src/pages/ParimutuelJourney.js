import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import timelineData from '../database/timeline'
import Modal from '../components/Modals/ModalOne';
import { useWallet } from '@solana/wallet-adapter-react';
import data from 'leadData'
import Link from 'next/link';
import { AiFillLock } from 'react-icons/ai';

export default function ParimutuelJourney() {
    
    let foundObj ={
        "rank":6,
        "username":"newuser",
        "publicKey":"8Jeo1JwWhU2K7ivCaVrcd9e8q9bxLfBFXZb82pa21w9y",
        "points":0,
        "step2":false
    }
    const { connected, publicKey } = useWallet()
    if(connected){
    foundObj = data.find(obj => obj.publicKey === publicKey);
    }
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
    const TimelineItem1 = () => (
        <div className="timeline-item">
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
                    <Modal/>
                }
                <span className="circle" />
            </div>
        </div>
    );
    const TimelineItem2 = () => (
        <div className="timeline-item">
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
                    <Modal/>
                }
                <span className="circle" />
            </div>
        </div>
    );
    const TimelineItem3 = () => (
        <div className="timeline-item">
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
                    <Modal/>
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

                The "parimutuels" variable will give us an array of objects, with each object representing a Contest for the BTCUSD pair in the 1 min expiration interval. 

                To better understand what a Contest object looks like, we can retrieve the first element in the array using parimutuels[0] and convert it to a string using JSON.stringify(). Then, we can print the string to the console by calling the **Paris()**function.
                </p>
                <code>
                {'const Paris = async () => {'}

                    const parimutuels = await parimutuelWeb3.getParimutuels(marketsByTime, 5);
                    
                    console.log(JSON.stringify(parimutuels[0]))
                   {' };'}
                    
                    Paris()
                </code>
                <p>
                After calling the Paris() function, you should have printed out a whole lot of data in your console,
                but we won't be using all of this data yet. First, we will focus on the info of each Contest

                To start, we want to display the following information for each contest:
                    strike: the mark price in USDC at which the contest will exercise
                    slot: the unique identifier number of the contest
                    activeLongPositions: the amount of USDC in the "Long" side of the pool
                    activeShortPositions: the amount of USDC in the "Short" side of the pool
                    expired: a boolean value indicating whether the contest has expired or not
                    Note: values in USDC should be divided by 1,000,000, as this is the number of decimals the USDC SPL token has on Solana.
                </p>
                
                 
                

                {
                    <Modal/>
                }
                <span className="circle" />
            </div>
        </div>
    );
    const TimelineItem5 = () => (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(16 185 129)" }}>
                    {"+10 Points"}
                </span>
                <time className='text-3xl'>{"Displaying Required Parameters"}</time>
                <p>

                To display this information, we can use a forEach loop to iterate through the parimutuels array. We will assign the variable cont for each object in the array and access the relevant data within the info.parimutuel section of the object. Then, we will print the information to the console for each contest. Here's how we can do this:
                </p>
                <code>
                {'const Paris = async () => {'}
                   
                   const parimutuels = await parimutuelWeb3.getParimutuels(marketsByTime, 5);
                   
                     console.log(`\\nMarket Pair: BTCUSD\\nMarket Expiry Interval: 1 min\\n`)
                   
                     const usdcDec = 1_000_000
                   
                   {'parimutuels.forEach((cont) => {'}
                       const strike = cont.info.parimutuel.strike.toNumber() / usdcDec
                             const slotId = cont.info.parimutuel.slot.toNumber()
                             const longSide = cont.info.parimutuel.activeLongPositions.toNumber() / usdcDec
                             const shortSide = cont.info.parimutuel.activeShortPositions.toNumber() / usdcDec
                             const expired = cont.info.parimutuel.expired
                   
                             console.log(`\\nStrike: $ {'${strike}'}\\nSlot:{' ${slotId}'}\\nLongs: $ {'${longSide}'}\\nShorts: $ {'${shortSide}'}\\nExprired?: {'${expired?'} 'true' : 'false'{'}'}`)
                   {'})'}
                   {'};'}
                   
                   Paris()
                </code>
                <p>
                You should be getting something like this in your console now:
                </p>
                <code>
                Market Pair: BTCUSD
                Market Expiry Interval: 1 min
                
                Strike: $ 1680400.999999
                Slot: 1671990780
                Longs: $ 249.841564
                Shorts: $ 252.0767
                Exprired?: true

                Strike: $ 1680495.75
                Slot: 1671990840
                Longs: $ 248.210444
                Shorts: $ 251.789555
                Exprired?: true
                </code>
                 
                

                {
                    <Modal/>
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

  return (
   <>
   {/* <Timeline/> */}
   <div className='bg-emerald-300 h-56 rounded-xl my-5 mx-5 flex items-center grid grid-cols-2'>
    <div>
    <h1 className='ml-10 text-6xl font-bold mb-3 '>Parimutuel SDK</h1> 
    
    <p className='ml-10'>Learn to build a dual-outcome parimutuel script using TypeScript<br/> for a custom time frame.</p>
    
    </div>
    <div className='bg-black rounded-md mr-4'>
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
   <TimelineItem1/>
   <TimelineItem2/> 
   <TimelineItem3/> 
   <TimelineItem4/> 
   <TimelineItem5/> 
   {foundObj && foundObj.step2 ?<TimelineItem2/> : <Locked/>
   }
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
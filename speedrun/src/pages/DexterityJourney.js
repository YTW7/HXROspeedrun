import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import timelineData from '../database/timeline'
import Modal from '../components/Modals/ModalOne';
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

export default function ParimutuelJourney() {
  
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
                <time className='text-3xl'>{"Import Dependencies & Setting up an RPC"}</time>
                
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 py-2'> 
                    import {'{ clusterApiUrl, Keypair, PublicKey }'} from "@solana/web3.js";<br/>
                    import {'{ Wallet }'} from "@project-serum/anchor";<br/>
                    import dexterityTs from "@hxronetwork/dexterity-ts";<br/>
                    const dexterity = dexterityTs;<br/>
                    import bs58 from 'bs58'<br/><br/>
                    //Setting up the RPC<br/>
                    const CLUSTER_NAME = "testnet";<br/>
                    const rpc = clusterApiUrl(CLUSTER_NAME);<br/>
                    
                </code>
                {
                //    <button onClick={scrollOne} className="btn-modal bg-emerald-300 rounded-full font-bold">
                    
                //    Submit
                //  </button>
                <Modal/>
                }
                <span className="circle" />
            </div>
        </div>
    );

    const TimelineItem2 = () => (
        <div className="timeline-item-dex" id="timeline-item-2">
            <div className="timeline-item-dex-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
                    {"+20 Points"}
                </span>
                <time className='text-3xl'>{"Setting up a Test Wallet"}</time>
                <p>
                To sign transactions and create the TRG account, set up your wallet with your private key. Replace the priv_key variable with your own private key.
                <br/>
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 py-2 pr-24'> 
                const priv_key = "YOUR-PRIVATE-KEY"<br/>
                const keypair = Keypair.fromSecretKey{'('}<br/>
                    bs58.decode(priv_key)<br/>
                {')'};<br/>
                const wallet = new Wallet(keypair);<br/>
                </code><br/>
                <p>
                It is highly recommended that you create a new wallet to be used exclusively for testing purposes. This can be done via Phantom or any other Solana wallet, subsequently allowing you to retrieve the private key, and use it in your project. Once you have set up your wallet,<br/> you can then airdrop <b>Testnet SOL</b> to it from <a className="underline" href='https://solfaucet.com/'>here</a>.
                </p>
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
                    {"+10 Points"}
                </span>
                <time className='text-3xl'>{"Getting the Manifest"}</time>
                <p>
                
                Create an asynchronous function called <b>CreateTRG()</b> in order to connect to Dexterity and obtain the <b>manifest</b>.<br/> This is achieved by using the <b>getManifest(rpc, useCache, wallet)</b> method, passing in 'your rpc' for <b>rpc</b>, a boolean for <b>useCache</b> (for this tutorial,  false is used), and your wallet for <b>wallet</b>.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 py-2 pr-24'> 
                const CreateTRG = async() ={'> {'}<br/><br/>
                // get the latest manifest<br/>
                {'const manifest = await dexterity.getManifest(rpc, false, wallet);'}<br/><br/>
              {'}'}<br/>
              CreateTRG()<br/>
                </code>
                <p>
                If the file is ran, you should now see your Manifest object printed out in the console.
                </p>

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
                    {"+10 Points"}
                </span>
                <time className='text-3xl'>{"Selecting our MPG"}</time>
                <p>
                This tutorial will focus solely on utilizing the BTC-USD MPG.<br/>
                In the <b>DexExample()</b> function, it is recommended to establish a constant for the BTC-USD MPG publickey.<br/>
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                // BTC-USD Market-Product-Group PubKey<br/>
                const MPG = "DDxNzq3A4qKJxnK2PFYeXE1SgGXCR5baaDBhpfLn3LRS"<br/>
                const mpgPubkey = new PublicKey(MPG);<br/>
                </code>

                <p>
                <b>Creating your TRG</b><br/><br/>
                To create a TRG for the BTC-USD MPG, use the createTrg(marketProductGroup) from *manifest* and pass in mpgPubkey for <b>marketProductGroup</b>, then you can console.log your result.<br/>
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                //Create our TRG for the BTC-USD MPG <br/>
                const trgPubkey = await manifest.createTrg(mpgPubkey);<br/>
                console.log("success! trg pubkey:", trgPubkey.toBase58());<br/>
                </code>
                <p>When the file is ran, you should see the following:</p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                success! trg pubkey: CUNNMSSRVFu82wXSjkrdhZFPKwKmAf7uLoxLHDRgVCnN<br/>
                </code>
                <p>
                Nicely done! You just created your first TRG for the BTC-USD MPG. The following section provides an overview of how to use the TRG trader account to deposit capital into the account, trade products inside of the MPG, cancel positions, and more.
                </p>
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
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(16 185 129)" }}>
                    {"+20 Points"}
                </span>
                <time className='text-3xl'>{"Using TRGs: Depositing into TRGs"}</time>
                <p>

                Create a new file called <b>fundingTrg.ts</b> where you will build your own function to deposit and withdraw from a TRG.<br/>
                Copy and paste the code below into your new file:
                </p>
                {/* <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-18 py-2'> */}
                {/* {'import { clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";'}<br/>
                {'import { Wallet } from "@project-serum/anchor";'}<br/>
                import dexterityTs from "@hxronetwork/dexterity-ts";<br/>
                const dexterity = dexterityTs;<br/>
                import bs58 from 'bs58'<br/><br/>
                
                // Solana Testnet RPC for connection, which can be used later to get your manifest<br/>
                const CLUSTER_NAME = "testnet";<br/>
                const rpc = clusterApiUrl(CLUSTER_NAME);<br/>
                // or your own RPC URL // const rpc = "https://your-own-rpc.com"<br/><br/>
                
                // Setting up our wallet with our Private Key so that we can sign transactions and create our trg account from it<br/>
                const priv_key = bs58.decode("YOUR-PRIVATE_KEY")<br/>
                const keypair = Keypair.fromSecretKey(<br/>
                    priv_key<br/>
                );<br/><br/>
                
                // From the keypair we can pass it to the Wallet() method<br/> to then be able to pass it in getManifest
                const wallet = new Wallet(keypair);<br/><br/>
                
                const fundingTRG = async () ={'> {'}<br/><br/>
                
                    // Get the latest manifest<br/>
                    const manifest = await dexterity.getManifest(rpc, false, wallet);<br/><br/>
                
                    // BTC-USD Market-Product-Group PubKey<br/>
                    const MPG = new PublicKey("DDxNzq3A4qKJxnK2PFYeXE1SgGXCR5baaDBhpfLn3LRS")<br/>
                    // Our TRG for the BTC-USD MPG <br/>
                    const trgPubkey = new PublicKey("YOUR-TRG");<br/><br/>
                
                    console.log(<br/>
                        {'`Wallet: ${wallet.publicKey.toBase58()} TRG: ${trgPubkey.toBase58()}`'}<br/>
                    );<br/>
                {'}'}<br/><br/>
                
                fundingTRG()<br/> */}
                {/* </code> */}
                <Gist style={{width:"100%"}} id="414258ad39f35e479b69659deece0370"></Gist>
                <p>
                To interact with dexterity and the products inside your MPG using TRG, a trader instance is needed. To create one, use the trader method from dexterity and pass in your trgPubkey and manifest.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-18 py-2'>
                const trader = new dexterity.Trader(manifest, trgPubkey);
                </code>
                <p>
                Next, create a viewAccount() function that allows you to view the cash balance of your TRG account. This will help you to know how much is in the account and enable you to withdraw and deposit funds as needed. This is achieved by using the getNetCash() method from your trader instance:
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-18 py-2'>
                // View Cash amount in TRG account<br/>
                 const viewAccount = async() ={'> {'}<br/>
                     console.log(<br/>
                       "Net Cash:",<br/>
                       trader.getNetCash().toString(),<br/>
                     );<br/>
                 {'};'}<br/>
                </code>
                

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
                    // <ModalNFT/>
                    <button onClick={scrollSix} className="btn-modal bg-emerald-300 rounded-full font-bold">
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
                <h1 className='text-center text-xl font-bold ml-20 pb-3'>Claim your Journey Completion NFT 🎉</h1>
                </div>
                <img  className='rounded-xl' src='/nft.png' width={600}/>
                <button className="btn-modal bg-emerald-300 rounded-full font-bold">
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
   <div className='bg-pink-300 rounded-xl my-5 mx-5 flex items-center grid grid-cols-2' style={{height:"350px"}}>
    <div>
    <h1 className='ml-10 text-6xl font-bold mb-3 '>Dexterity SDK</h1> 
    
    <p className='ml-10'>Learn how to connect and use Hxro’s Dexterity Protocol <br/>  </p>
    
    </div>
    <div className='bg-black rounded-md mr-4 overflow-auto'>
    <h1 className='ml-10 text-4xl font-bold mb-3 text-white my-2'>Quick Setup</h1> 
    
    <p className='ml-10 text-white my-4'>
        1. Previous experience with <Link className='text-pink-200 underline' href={'https://www.youtube.com/watch?v=gp5H0Vw39yw'}>TS </Link><br/>
        2. Install <Link className='text-pink-200 underline' href={'https://nodejs.org/en/download'}>node.js</Link> and <Link className='text-pink-200 underline'  href={'https://docs.npmjs.com/downloading-and-installing-node-js-and-npm'}>npm</Link>  <br/>
        3. Create a Typescript project. If you don’t know how, <Link className='text-pink-200 underline' href={'https://www.digitalocean.com/community/tutorials/typescript-new-project'}>here</Link> is an example  <br/>
        4. Install Solana Web3.js in your project by running <a className='text-pink-200'>npm i @solana/web3.js</a> <br/>
        5. Install the Dexterity SDK in your project by running <br/> 
        <p className='ml-4'><a className='text-pink-200'>npm i @hxronetwork/dexterity-ts</a></p>
        6. Install the Anchor Library in your project by running <br/> 
        <p className='ml-4'><a className='text-pink-200'>npm i @project-serum/anchor</a></p>
        7. Install the  base58 encoding library in your project by running <br/> 
        <p className='ml-4'><a className='text-pink-200'>npm i bs58</a></p>
         
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
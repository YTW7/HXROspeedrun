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
                    {"+20 Points"}
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
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
                    {"+30 Points"}
                </span>
                <time className='text-3xl'>{"Using TRGs: Depositing & Withdrawing from TRGs"}</time>
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
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                const trader = new dexterity.Trader(manifest, trgPubkey);
                </code>
                <p>
                Next, create a viewAccount() function that allows you to view the cash balance of your TRG account. This will help you to know how much is in the account and enable you to withdraw and deposit funds as needed. This is achieved by using the getNetCash() method from your trader instance:
                </p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                // View Cash amount in TRG account<br/>
                 const viewAccount = async() ={'> {'}<br/>
                     console.log(
                      "NetCash:",
                       trader.getNetCash().toString(),<br/>
                     );<br/>
                 {'};'}<br/>
                </code>
                <p>
                Next, to obtain updated account information, connect to your trader account. To do this, use the connect method from your trader instance. The connect method allows you to pass in a function as the first argument to get a perpetual update stream, meaning that it will call your function perpetually. Alternatively, you can pass in a function as the second argument to get an account update only once. In this case, you are going to pass in your viewAccount() function to only output your cash balance once when you call the account() function.
                </p>
                <code className='bg-pink-200 rounded-md font-bold pl-2 pr-24 py-2'>
                // Connect to the trader & get updated account cash balance<br/>
                const account = async() ={'>'} await trader.connect(NaN, viewAccount)<br/><br/>

                await account()<br/>
                </code>
                <p>
                To proceed, you will need Testnet Hxro, UXDC
                💡 UXDC is an SPL token issued by Hxro Network that is used to test Dexterity Contracts on the Solana Testnet & Devnet<br/><br/>
                UXDC Faucet: https://uxdc-faucet-api-1srh.vercel.app/<br/><br/>
                
                After obtaining UXDC (remember to also have Testnet SOL for transaction fees), create a function to deposit and withdraw UXDC from your TRG<br/><br/>

                To use the deposit and withdraw methods from the trader instance, pass in a Fractional type from your dexterity instance. To create a Fractional, use <b>dexterity.Fractional.New(amount: number, exponent: number)</b><br/><br/>

                The Fractional method from the dexterity instance creates a new fractional value with a specified numerator and denominator. It is used to represent numbers with fractional values, such as decimals or percentages, and allows for precise calculations with those values.
              </p>
              <Gist style={{width:"100%"}} id="85e0420d3e7738858604e9e04da5998e"></Gist>
              <p>
              You can now run the code and observe that it deposited 5,000 UXDC from your wallet account to your TRG account. After that, you can comment out the deposit function and uncomment the withdraw function. Running the code again will withdraw the UXDC from your TRG account and transfer it back to your test wallet account.
              </p>
              

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
                <time className='text-3xl'>{"Placing Limit Orders{Setup}"}</time>
                <p>

                Create a new file called <b>limitOrder.ts</b> which will be used to build your own function to create and place limit orders<br/><br/>
You can copy and paste the code below into your new file:<br/>
                </p>
                <Gist style={{width:"100%"}} id="9170779690c08fd18ddf1129accdd047"></Gist>
                <p>
                Moving forward, for simplification purposes, you will only use the 'BTCUSD-PERP' perpetual product within your BTCUSD Market Product Group.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                const PRODUCT_NAME = 'BTCUSD-PERP';
                </code>
                <p>
                Create a trader instance that can be used to interact and trade on Dexterity.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                const trader = new dexterity.Trader(manifest, trgPubkey);
                </code>
                <p>
                Create a function that handles updates on the TRG account and logs out the TRGs account cash balance (in USDC) to the console.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                const streamAccount = () ={'> {'}<br/>
                        console.log(<br/>
                          'Portfolio Value:',<br/>
                          trader.getPortfolioValue().toString(),<br/>
                          'Position Value:',<br/>
                          trader.getPositionValue().toString(),<br/>
                          'Net Cash:',<br/>
                          trader.getNetCash().toString(),<br/>
                          'PnL:',<br/>
                          trader.getPnL().toString()<br/>
                        );<br/>
                     {' };'}<br/>
                </code>
                <p>
                Call the connect() method from trader so updates are streamed.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                const account = async () ={'> {'}
                       await trader.connect(NaN, streamAccount);
                       {'};'}
                       
                       await account()
                </code>
                <p>
                You are currently iterating over a list of products obtained using the getProducts() method from the trader instance. The objective is to find the index of a particular product you are interested in. In this case, that is the BTCUSD-PERP product.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                let perpIndex: any;<br/>
                     {'for (const [name, {index, product}] of trader.getProducts()) {'}<br/>
                       console.log('saw', name, ' ', index);<br/>
                       {'if (name !== PRODUCT_NAME) {'}<br/>
                         continue;<br/>
                       {'}'}<br/>
                       perpIndex = index;<br/>
                       break;<br/>
                     {'}'}<br/>
                </code>
                <p>
                Now, set up a QUOTE_SIZE constant that is needed to establish the order amount:
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                // 1.0000 contracts<br/>
                const QUOTE_SIZE = dexterity.Fractional.New(1, 0);<br/>
                </code>
                <p>
                QUOTE_SIZE: This constant represents the size of a contract. In this case, it is set to a value of 1.0000 contracts. Therefore, when a user enters a size of 1, they will receive one contract.<br/><br/>

                Then, set a constant for the price of BTCUSD that will be used to set limit orders:
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                const price = 22_000
                </code>
                <p>
                Note: As of the creation of this walkthrough, to place an order using Dexterity, the limit order price must be within 15% of the mark price, up or down.
                Now, use the dexterity.Fractional.New method to convert the price into a fractional value with zero decimal places.
                </p>
                <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
                const dollars = dexterity.Fractional.New(price, 0);
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

    const TimelineItem7 = () => (
      <div className="timeline-item-dex">
          <div className="timeline-item-dex-content">
              <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(255, 73, 246)" }}>
                  {"+20 Points"}
              </span>
              <time className='text-3xl'>{"Placing Limit Orders{Core Functions}"}</time>
              <p>

              Now, you can finally place an order! Using the newOrder() method from the trader instance, pass in the following arguments:
                    productIndex: number ⇒ the index of the product for which we want to place an order
                    isBid: boolean ⇒ determines whether the order is a bid or an offer
                    Bid = Buy
                    Ask = Sell
                    limitPrice: Fractional ⇒ the value at which the order will be filled
                    maxBaseQty: Fractional ⇒ the size of the order

                    Here is an example of a Long:
              </p>
              <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
              trader.newOrder(perpIndex, true, dollars, QUOTE_SIZE).then(async () ={'> {'}
                             {'console.log(`Placed Buy Limit Order at $${dollars}`);'}
                             await account(NaN, streamAccount);
                       {'})'}
              </code>
              <p>
              Here is an example of a Short:
              </p>
              <code className='bg-pink-200 rounded-md mt-3 font-bold pl-2 pr-24 py-2'>
              trader.newOrder(perpIndex, false, dollars, QUOTE_SIZE).then(async () ={'> {'}
                          {' console.log(`Placed Sell Limit Order at $${dollars}`);'}
                           await account(NaN, streamAccount); 
                     {'});'}
              </code>
              <p>
              Congratulations! You have just placed your first orders on Dexterity. 
              </p>
              
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
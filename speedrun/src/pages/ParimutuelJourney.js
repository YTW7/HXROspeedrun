import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import timelineData from '../database/timeline'
import Modal from '../components/Modal';
import { useWallet } from '@solana/wallet-adapter-react';

export default function ParimutuelJourney() {

    const { connected, publicKey } = useWallet()
    const TimelineItem1 = () => (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: "rgb(16 185 129)" }}>
                    {"+10 Points"}
                </span>
                <time className='text-3xl'>{"Import Dependencies & Connect to the Parimutuel Protocol"}</time>
                <code className='bg-emerald-200 rounded-md mt-3 font-bold'> 
                   import * as web3 from "@solana/web3.js";<br/>
                    import * as sdk from "@hxronetwork/parimutuelsdk"; <br/><br/>
                    const config = sdk.MAINNET_CONFIG<br/>
                    const rpc = web3.clusterApiUrl('mainnet-beta')<br/>
                    const connection = new web3.Connection(rpc, 'confirmed')<br/>
                    
                    const parimutuelWeb3 = new sdk.ParimutuelWeb3(config, connection)
                     
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
                    {"+10 Points"}
                </span>
                <time className='text-3xl'>{"Import Dependencies & Connect to the Parimutuel Protocol"}</time>
                <code className='bg-emerald-200 rounded-md mt-3 font-bold'> 
                   import * as web3 from "@solana/web3.js";<br/>
                    import * as sdk from "@hxronetwork/parimutuelsdk"; <br/><br/>
                    const config = sdk.MAINNET_CONFIG<br/>
                    const rpc = web3.clusterApiUrl('mainnet-beta')<br/>
                    const connection = new web3.Connection(rpc, 'confirmed')<br/>
                    
                    const parimutuelWeb3 = new sdk.ParimutuelWeb3(config, connection)
                     
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
   {connected ? (
   <div className="timeline-container">
   <TimelineItem1/>
   <TimelineItem2/>
   </div>
   )
   :
   (
    
    <div  className='text-center text-6xl font-bold text-white mt-20'>Hello Friend 🤗, <br/><br/>Please Connect Wallet to Continue 🤙</div>
   )
   }
   </>
  )
}
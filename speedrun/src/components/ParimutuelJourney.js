import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import timelineData from '../database/timeline'
import Modal from './Modal/Modal';

export default function ParimutuelJourney() {

    const TimelineItem = ({ data }) => (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag rounded-xl mt-3 mr-3" style={{ background: data.category.color }}>
                    {data.category.points}
                </span>
                <time className='text-3xl'>{data.head}</time>
                <code className='bg-emerald-200 rounded-md mt-3 font-bold'> 
                   import * as web3 from "@solana/web3.js";<br/>
                    import * as sdk from "@hxronetwork/parimutuelsdk"; <br/><br/>
                    const config = sdk.MAINNET_CONFIG<br/>
                    const rpc = web3.clusterApiUrl('mainnet-beta')<br/>
                    const connection = new web3.Connection(rpc, 'confirmed')<br/>
                    
                    const parimutuelWeb3 = new sdk.ParimutuelWeb3(config, connection)
                     
                </code>
                {data.link && (
                    // <button
                    //     href={data.link.url}
                    //     target="_blank"
                    //     rel="noopener noreferrer"
                    //     className='bg-emerald-500 px-3 py-3 rounded-full mt-2 font-bold'
                    // >
                    //     {data.link.text}
                    // </button>
                    <Modal/>
                )}
                <span className="circle" />
            </div>
        </div>
    );

    const Timeline = () =>
        timelineData.length > 0 && (
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        );

  return (
   <>
   <Timeline/>
   </>
  )
}
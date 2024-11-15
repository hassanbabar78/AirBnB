
import './List.css'
import { Categorybox } from './Category'
import { Topcities } from './Topcities_data';
import { Casltes } from './Castles_data';
import { Topofworld } from './Topofworld_data';
import { Design } from './Design_data';
import { Trending } from './Trending_data';
import { Arctic } from './Arctica-data';
// import { CategoryContext } from './context';

export function List() {
    // Define the Images function
    // const { selectCategory } = useContext(CategoryContext);

    const topcities = Arctic();
    return(
        // <div className="lcontainer ">
        //     <div className='boldtext lspace'>Adventures List</div>
        //     <div className='mianbox'>
        //         <div className='lbox1'>
        //             <Categorybox images={topcities[0].pics} />  
        //             <div className='ldescription'>Private Island Retreats</div>
        //             <div>Escape to your own private island.</div>
        //             <div className="text">
        //                <img className='liconsize' src="/island.png" alt="" />
        //                <span className='lspace'> Starting from</span>
        //                <span className='coloredtext'>$1500/night</span>
        //             </div>                  
        //             <div className='ltopspace'>Availability: 2/10 islands left for the season.</div>
        //         </div>
        //         <div className='lbox2'>
        //             <Categorybox images={topcities[1].pics} />  
        //             <div className="ldescription">Luxury Treehouses</div>
        //             <div>Live in elevated luxury among nature.</div>
        //             <div className="text">
        //                <img className='liconsize' src="/treehouse.png" alt="" />
        //                <span className='lspace'> Starting from</span>
        //                <span className='coloredtext'>$600/night</span>
        //             </div>       
        //             <div className='ltopspace'>Fully booked for Fall season.</div>            
        //         </div>
        //         <div className='lbox3'>
        //             <Categorybox images={topcities[2].pics} />  
        //             <div className="ldescription">Historical Castles</div>
        //             <div>Stay in a medieval fortress.</div>
        //             <div className="text">
        //                 <img className='liconsize' src="/castle.png" alt="" />
        //                 <span className='lspace'> Starting from</span>
        //                 <span className='coloredtext'>$1200/night</span>
        //             </div>                   
        //             <div className='ltopspace'>Exclusive offer: 1/15 castles available.</div>
        //         </div>
        //         <div className='lbox4'>
        //             <Categorybox images={topcities[3].pics} />  
        //             <div className="ldescription">Stargazing Domes</div>
        //             <div>Experience panoramic views of the night sky.</div>
        //             <div className="text">
        //                 <img className='liconsize' src="/dome.png" alt="" />
        //                 <span className='lspace'> Starting from</span>
        //                 <span className='coloredtext'>$350/night</span>
        //             </div >
        //             <div className='ltopspace'>Last 5 bookings for meteor shower season.</div>
        //         </div>
        //         <div className='lbox5'>
        //             <Categorybox images={topcities[4].pics} />  
        //             <div className="ldescription">Underwater Suites</div>
        //             <div>Sleep under the waves with marine life views.</div>
        //             <div className="text">
        //                 <img className='liconsize' src="/underwater.png" alt="" />
        //                 <span className='lspace'> Starting from</span>
        //                 <span className='coloredtext'>$350/night</span>
        //             </div>              
        //             <div className='ltopspace'>Sold Out for the month, available next season.</div>
        //         </div>
        //         <div className='lbox6'>
        //             <Categorybox images={topcities[5].pics} />  
        //             <div className="ldescription">OMG!</div>
        //             <div>Futuristic accommodations for sci-fi lovers.</div>
        //             <div className="text">
        //                 <img className='liconsize' src="/omg.png" alt="" />
        //                 <span className='lspace'> Starting from</span>
        //                 <span className='coloredtext'>$1200/night</span>
        //             </div>                  
        //             <div className='ltopspace'>VIP Pass for space travel simulation included.</div>
        //         </div>
        //         <div className='lbox7'>
        //             <Categorybox images={topcities[6].pics} />  
        //             <div className="ldescription">Fantasy Cabins</div>
        //             <div>Magical hobbit holes or fairy-tale cabins.</div>
        //             <div className="text">
        //                 <img className='liconsize' src="/cabin.png" alt="" />
        //                 <span className='lspace'> Starting from</span>
        //                 <span className='coloredtext'>$400/night</span>
        //             </div>
        //             <div className='ltopspace'>Last 3 cabins available for summer.</div>
        //         </div>
        //         <div className='lbox8'>
        //             <Categorybox images={topcities[7].pics} />  
        //             <div className="ldescription">Desert Glamping</div>
        //             <div>Luxury tents under vast desert skies.</div>
        //             <div className="text">
        //                 <img className='liconsize' src="/camel.png" alt="" />
        //                 <span className='lspace'> Starting from</span>
        //                 <span className='coloredtext'>$250/night</span>
        //             </div>                
        //             <div className='ltopspace'>Only 2 spots left for the Desert Safari package.</div>
        //         </div>
        //         <div className='lbox9'>
        //             <Categorybox images={topcities[8].pics} />  
        //             <div className="ldescription">Mountain Ski Chalets</div>
        //             <div>Warm up in luxury after a day of skiing.</div>
        //             <div className="text">
        //                 <img className='liconsize' src="/mountain.png" alt="" />
        //                 <span className='lspace'> Starting from</span>
        //                 <span className='coloredtext'>$1000/night</span>
        //             </div>
        //             <div className='ltopspace'>Special winter deal: Ski pass included.</div>
        //         </div>
        //         <div className='lbox10'>
        //             <Categorybox images={topcities[9].pics} />  
        //             <div className="ldescription">A-frames</div>
        //             <div>Sustainable bamboo villas in tropical locations.</div>
        //             <div className="text">
        //                 <img className='liconsize' src="/frame.png" alt="" />
        //                 <span className='lspace'> Starting from</span>
        //                 <span className='coloredtext'>$550/night</span>
        //             </div>                 
        //             <div className='ltopspace'>Green Discount: $50 off for eco-travelers.</div>
        //         </div>
        //         <div className='lbox11'>
        //            <Categorybox images={topcities[10].pics} />  
        //             <div className="ldescription">Cave Dwellings</div>
        //             <div>Ancient rock homes with modern amenities.</div>
        //             <div className="text">
        //                 <img className='liconsize' src="/cave.png" alt="" />
        //                 <span className='lspace'> Starting from</span>
        //                 <span className='coloredtext'>$300/night</span>
        //             </div>             
        //             <div className='ltopspace'>Next opening in 3 weeks.</div>
        //         </div>
        //         <div className='lbox12'>
        //            <Categorybox images={topcities[11].pics} />  
        //             <div className="ldescription">Floating Houseboats</div>
        //             <div>Relax on waters in fully furnished houseboat.</div>
        //             <div className="text">
        //                 <img className='liconsize' src="/float.png" alt="" />
        //                 <span className='lspace'> Starting from</span>
        //                 <span className='coloredtext'>$450/night</span>
        //             </div>                
        //             <div className='ltopspace'>Only 2 boats available for the summer season.</div>
        //         </div>
        //     </div>
        // </div>

        <div className="lcontainer ">
            <div className='boldtext lspace'>Adventures List</div>
            <div className='mianbox'>
                <div className='lbox1'>
                    <Categorybox images={topcities[0].pics} />  
                    <div className='ldescription'>Private Island Retreats</div>
                    <div>Escape to your own private island.</div>
                    <div className="text">
                       <img className='liconsize' src="/island.png" alt="" />
                       <span className='lspace'> Starting from</span>
                       <span className='coloredtext'>$1500/night</span>
                    </div>                  
                    <div className='ltopspace'>Availability: 2/10 islands left for the season.</div>
                </div>
                <div className='lbox2'>
                    <Categorybox images={topcities[1].pics} />  
                    <div className="ldescription">Luxury Treehouses</div>
                    <div>Live in elevated luxury among nature.</div>
                    <div className="text">
                       <img className='liconsize' src="/treehouse.png" alt="" />
                       <span className='lspace'> Starting from</span>
                       <span className='coloredtext'>$600/night</span>
                    </div>       
                    <div className='ltopspace'>Fully booked for Fall season.</div>            
                </div>
                <div className='lbox3'>
                    <Categorybox images={topcities[2].pics} />  
                    <div className="ldescription">Historical Castles</div>
                    <div>Stay in a medieval fortress.</div>
                    <div className="text">
                        <img className='liconsize' src="/castle.png" alt="" />
                        <span className='lspace'> Starting from</span>
                        <span className='coloredtext'>$1200/night</span>
                    </div>                   
                    <div className='ltopspace'>Exclusive offer: 1/15 castles available.</div>
                </div>
                <div className='lbox4'>
                    <Categorybox images={topcities[3].pics} />  
                    <div className="ldescription">Stargazing Domes</div>
                    <div>Experience panoramic views of the night sky.</div>
                    <div className="text">
                        <img className='liconsize' src="/dome.png" alt="" />
                        <span className='lspace'> Starting from</span>
                        <span className='coloredtext'>$350/night</span>
                    </div >
                    <div className='ltopspace'>Last 5 bookings for meteor shower season.</div>
                </div>
                <div className='lbox5'>
                    <Categorybox images={topcities[4].pics} />  
                    <div className="ldescription">Underwater Suites</div>
                    <div>Sleep under the waves with marine life views.</div>
                    <div className="text">
                        <img className='liconsize' src="/underwater.png" alt="" />
                        <span className='lspace'> Starting from</span>
                        <span className='coloredtext'>$350/night</span>
                    </div>              
                    <div className='ltopspace'>Sold Out for the month, available next season.</div>
                </div>
                <div className='lbox6'>
                    <Categorybox images={topcities[5].pics} />  
                    <div className="ldescription">OMG!</div>
                    <div>Futuristic accommodations for sci-fi lovers.</div>
                    <div className="text">
                        <img className='liconsize' src="/omg.png" alt="" />
                        <span className='lspace'> Starting from</span>
                        <span className='coloredtext'>$1200/night</span>
                    </div>                  
                    <div className='ltopspace'>VIP Pass for space travel simulation included.</div>
                </div>
                <div className='lbox7'>
                    <Categorybox images={topcities[6].pics} />  
                    <div className="ldescription">Fantasy Cabins</div>
                    <div>Magical hobbit holes or fairy-tale cabins.</div>
                    <div className="text">
                        <img className='liconsize' src="/cabin.png" alt="" />
                        <span className='lspace'> Starting from</span>
                        <span className='coloredtext'>$400/night</span>
                    </div>
                    <div className='ltopspace'>Last 3 cabins available for summer.</div>
                </div>
                <div className='lbox8'>
                    <Categorybox images={topcities[7].pics} />  
                    <div className="ldescription">Desert Glamping</div>
                    <div>Luxury tents under vast desert skies.</div>
                    <div className="text">
                        <img className='liconsize' src="/camel.png" alt="" />
                        <span className='lspace'> Starting from</span>
                        <span className='coloredtext'>$250/night</span>
                    </div>                
                    <div className='ltopspace'>Only 2 spots left for the Desert Safari package.</div>
                </div>
                <div className='lbox9'>
                    <Categorybox images={topcities[8].pics} />  
                    <div className="ldescription">Mountain Ski Chalets</div>
                    <div>Warm up in luxury after a day of skiing.</div>
                    <div className="text">
                        <img className='liconsize' src="/mountain.png" alt="" />
                        <span className='lspace'> Starting from</span>
                        <span className='coloredtext'>$1000/night</span>
                    </div>
                    <div className='ltopspace'>Special winter deal: Ski pass included.</div>
                </div>
                <div className='lbox10'>
                    <Categorybox images={topcities[9].pics} />  
                    <div className="ldescription">A-frames</div>
                    <div>Sustainable bamboo villas in tropical locations.</div>
                    <div className="text">
                        <img className='liconsize' src="/frame.png" alt="" />
                        <span className='lspace'> Starting from</span>
                        <span className='coloredtext'>$550/night</span>
                    </div>                 
                    <div className='ltopspace'>Green Discount: $50 off for eco-travelers.</div>
                </div>
                <div className='lbox11'>
                   <Categorybox images={topcities[10].pics} />  
                    <div className="ldescription">Cave Dwellings</div>
                    <div>Ancient rock homes with modern amenities.</div>
                    <div className="text">
                        <img className='liconsize' src="/cave.png" alt="" />
                        <span className='lspace'> Starting from</span>
                        <span className='coloredtext'>$300/night</span>
                    </div>             
                    <div className='ltopspace'>Next opening in 3 weeks.</div>
                </div>
                <div className='lbox12'>
                   <Categorybox images={topcities[11].pics} />  
                    <div className="ldescription">Floating Houseboats</div>
                    <div>Relax on waters in fully furnished houseboat.</div>
                    <div className="text">
                        <img className='liconsize' src="/float.png" alt="" />
                        <span className='lspace'> Starting from</span>
                        <span className='coloredtext'>$450/night</span>
                    </div>                
                    <div className='ltopspace'>Only 2 boats available for the summer season.</div>
                </div>
            </div>
        </div>
    )
}
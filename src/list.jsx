
import './List.css'
import { Categorybox } from './Category'
export function List(){
    return(
        <div className="lcontainer ">
            <div className='boldtext lspace'>Adventures List</div>
            <div className='mianbox'>
                
                <div className='lbox1'>
                    <Categorybox/>
                    <div className='ldescription'>Private Island Retreats</div>
                    <div>Escape to your own private island.</div>
                    {/* <div>🌟 Starting from $1500/night</div> */}
                    <span>🌟 Starting from</span> <span className='coloredtext'>$1500/night</span>
                    <div>Availability: 2/10 islands left for the season.</div>
                </div>
                <div className='lbox2'>
                    <Categorybox/>
                    <div className="ldescription">Luxury Treehouses</div>
                    <div>Live in elevated luxury among nature.</div>
                    {/* <div>🍃 Starting from $600/night</div> */}
                    <span>🍃 Starting from</span> <span className='coloredtext'>$600/night</span>
                    <div>Fully booked for Fall season.</div>  
                </div>
                <div className='lbox3'>
                    <Categorybox/>
                    <div className="ldescription">Historical Castles</div>
                    <div>Stay in a medieval fortress.</div>
                    <span>🏰 Starting from </span> <span className='coloredtext'>$1200/night</span>
                    <div>Exclusive offer: 1/15 castles available.</div>
                </div>
                <div className='lbox4'>
                    <Categorybox/>
                    <div className="ldescription">Stargazing Domes</div>
                    <div>Experience panoramic views of the night sky.</div>
                    <span>🌠 Starting from </span> <span className='coloredtext'>$350/night</span>
                    {/* <div>🌠 Starting from $350/night</div> */}
                    <div>Last 5 bookings for meteor shower season.</div>
                </div>
                <div className='lbox5'>
                    <Categorybox/>
                    <div className="ldescription">Underwater Suites</div>
                    <div>Sleep under the waves with marine life views.</div>
                    <span>🌠 Starting from </span> <span className='coloredtext'>$350/night</span>
                    {/* <div>🌊 Starting from $1800/night</div> */}
                    <div>Sold Out for the month, available next season.</div>
                </div>
                <div className='lbox6'>
                    <Categorybox/>
                    <div className="ldescription">Spaceship-Themed Stays</div>
                    <div>Futuristic accommodations for sci-fi lovers.</div>
                    {/* <div>🚀 Starting from $700/night</div> */}
                    <span>🚀 Starting from </span> <span className='coloredtext'>$700/night</span>
                    <div>VIP Pass for space travel simulation included.</div>
                </div>
                <div className='lbox7'>
                    <Categorybox/>
                    <div className="ldescription">Fantasy Cabins</div>
                    <div>Magical hobbit holes or fairy-tale cabins.</div>
                    {/* <div>🧚 Starting from $400/night</div> */}
                    <span>🧚 Starting from </span> <span className='coloredtext'>$400/night</span>
                    <div>Last 3 cabins available for summer.</div>
                </div>
                <div className='lbox8'>
                    <Categorybox/>
                    <div className="ldescription">Desert Glamping</div>
                    <div>Luxury tents under vast desert skies.</div>
                    {/* <div>🌵 Starting from $250/night</div> */}
                    <span>🌵 Starting from </span> <span className='coloredtext'>$250/night</span>
                    <div>Only 2 spots left for the Desert Safari package.</div>
                </div>
                <div className='lbox9'>
                    <Categorybox/>
                    <div className="ldescription">Mountain Ski Chalets</div>
                    <div>Warm up in luxury after a day of skiing.</div>
                    {/* <div>🏔️ Starting from $1000/night</div> */}
                    <span>🏔️ Starting from </span> <span className='coloredtext'>$1000/night</span>
                    <div>Special winter deal: Ski pass included.</div>
                </div>
                <div className='lbox10'>
                    <Categorybox/>
                    <div className="ldescription">Eco-Friendly Bamboo Villas</div>
                    <div>Sustainable bamboo villas in tropical locations.</div>
                    {/* <div>🌿 Starting from $550/night</div> */}
                    <span>🌿 Starting from </span> <span className='coloredtext'>$550/night</span>
                    <div>Green Discount: $50 off for eco-travelers.</div>
                </div>
                <div className='lbox11'>
                    <Categorybox/>
                    <div className="ldescription">Cave Dwellings</div>
                    <div>Ancient rock homes with modern amenities.</div>
                    {/* <div>🏞️ Starting from $300/night</div> */}
                    <span>🏞️ Starting from </span> <span className='coloredtext'>$300/night</span>
                    <div>Next opening in 3 weeks.</div>
                </div>
                <div className='lbox12'>
                    <Categorybox/>
                    <div className="ldescription">Floating Houseboats</div>
                    <div>Relax on waters in fully furnished houseboat.</div>
                    {/* <div>🛥️ Starting from $450/night</div> */}
                    <span>🛥️ Starting from </span> <span className='coloredtext'>$450/night</span>
                    <div>Only 2 boats available for the summer season.</div>
                </div>
            </div>
        </div>
    )
}